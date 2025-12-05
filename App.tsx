import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import { User, Paystub, BudgetRequest, ClientCompany, Employee } from './types';
import { supabase } from './utils/supabaseClient';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // App State "Database" - Synced with Supabase
  const [companies, setCompanies] = useState<ClientCompany[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [paystubs, setPaystubs] = useState<Paystub[]>([]);
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([]);

  // Initial Data Fetch
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const { data: companiesData } = await supabase.from('companies').select('*');
          const { data: employeesData } = await supabase.from('employees').select('*');
          const { data: paystubsData } = await supabase.from('paystubs').select('*');
          const { data: requestsData } = await supabase.from('budget_requests').select('*');

          if (companiesData) setCompanies(companiesData.map((c: any) => ({
              id: c.id, name: c.name, cnpj: c.cnpj, contractStatus: c.contract_status
          })));
          
          if (employeesData) setEmployees(employeesData.map((e: any) => ({
              id: e.id, companyId: e.company_id, name: e.name, username: e.username, password: e.password, role: e.role
          })));

          if (paystubsData) setPaystubs(paystubsData.map((p: any) => ({
              id: p.id, employeeId: p.employee_id, title: p.title, month: p.month, year: p.year, value: p.value, paymentDate: p.payment_date, pdfUrl: p.pdf_url
          })));

          if (requestsData) setBudgetRequests(requestsData);

      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  const handleLoginAttempt = async (username: string, password: string): Promise<User | null> => {
      const { data, error } = await supabase
        .from('employees')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();
      
      if (data && !error) {
           const userRole: 'employee' | 'admin' | 'master_admin' = (data.role as 'employee' | 'admin' | 'master_admin') || 'employee';

           return {
              id: data.id,
              name: data.name,
              role: userRole,
              companyId: data.company_id,
              avatar: ''
          };
      }
      return null;
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    if (user.role === 'admin' || user.role === 'master_admin') {
        navigate('/admin');
    } else {
        navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const handleUpdatePassword = async (newPassword: string) => {
      if (!currentUser || !newPassword) return;

      try {
          const { error } = await supabase.from('employees').update({ password: newPassword }).eq('id', currentUser.id);
          if (error) throw error;
          
          setEmployees(prev => prev.map(e => e.id === currentUser.id ? { ...e, password: newPassword } : e));
          alert('Senha alterada com sucesso!');
      } catch (e) {
          console.error(e);
          alert('Erro ao alterar senha.');
      }
  };

  const handleAddCompany = async (company: ClientCompany) => {
      try {
          const { data, error } = await supabase.from('companies').insert([{
              name: company.name,
              cnpj: company.cnpj,
              contract_status: company.contractStatus
          }]).select();

          if (data && !error) {
              const newCompany = { ...company, id: data[0].id };
              setCompanies(prev => [...prev, newCompany]);
          }
      } catch (e) { console.error(e); }
  };

  const handleEditCompany = async (updatedCompany: ClientCompany) => {
      try {
          const { error } = await supabase.from('companies').update({
              name: updatedCompany.name,
              cnpj: updatedCompany.cnpj
          }).eq('id', updatedCompany.id);

          if (!error) {
              setCompanies(prev => prev.map(c => c.id === updatedCompany.id ? updatedCompany : c));
          }
      } catch (e) { console.error(e); }
  };

  const handleDeleteCompany = async (companyId: string) => {
      try {
          const { error } = await supabase.from('companies').delete().eq('id', companyId);
          if (!error) {
             setCompanies(prev => prev.filter(c => c.id !== companyId));
             const companyEmployees = employees.filter(e => e.companyId === companyId);
             const employeeIds = companyEmployees.map(e => e.id);
             setEmployees(prev => prev.filter(e => e.companyId !== companyId));
             setPaystubs(prev => prev.filter(p => !employeeIds.includes(p.employeeId)));
             await fetchData();
          }
      } catch (e) { console.error(e); }
  };

  const handleAddEmployee = async (employee: Employee) => {
      try {
          // Optimistic update
          const tempId = 'temp-' + Date.now();
          setEmployees(prev => [...prev, { ...employee, id: tempId }]);

          const { data, error } = await supabase.from('employees').insert([{
              company_id: employee.companyId,
              name: employee.name,
              username: employee.username,
              password: employee.password,
              role: employee.role || 'employee'
          }]).select();

          if (data && !error) {
              await fetchData();
          }
      } catch (e) { console.error(e); }
  };

  const handleEditEmployee = async (updatedEmployee: Employee) => {
      try {
          // Optimistic update
          setEmployees(prev => prev.map(e => e.id === updatedEmployee.id ? updatedEmployee : e));

          const { error } = await supabase.from('employees').update({
              name: updatedEmployee.name,
              username: updatedEmployee.username,
              password: updatedEmployee.password,
              role: updatedEmployee.role
          }).eq('id', updatedEmployee.id);
          
          if (!error) {
              await fetchData();
          }
      } catch (e) { console.error(e); }
  };

  const handleDeleteEmployee = async (employeeId: string) => {
      try {
          // Optimistic update
          setEmployees(prev => prev.filter(e => e.id !== employeeId));
          setPaystubs(prev => prev.filter(p => p.employeeId !== employeeId));

          const { error } = await supabase.from('employees').delete().eq('id', employeeId);
          if (!error) {
              await fetchData();
          }
      } catch (e) { console.error(e); }
  };

  const handleDeleteAdmin = async (adminId: string) => {
      await handleDeleteEmployee(adminId);
  };

  const handleAddPaystub = async (newPaystub: Paystub, file: File | null) => {
      let publicUrl = '';

      if (file) {
          const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_'); 
          const fileName = `${newPaystub.employeeId}_${Date.now()}_${sanitizedFileName}`;
          
          const { data, error } = await supabase.storage.from('paystubs').upload(fileName, file);
          
          if (error) {
              alert("Erro ao enviar arquivo PDF: " + error.message);
              return;
          }
          
          if (data) {
             const { data: urlData } = supabase.storage.from('paystubs').getPublicUrl(fileName);
             publicUrl = urlData.publicUrl;
          }
      }

      try {
          const { data, error } = await supabase.from('paystubs').insert([{
              employee_id: newPaystub.employeeId,
              title: newPaystub.title,
              month: newPaystub.month,
              year: newPaystub.year,
              value: newPaystub.value,
              payment_date: newPaystub.paymentDate,
              pdf_url: publicUrl
          }]).select();

          if (data && !error) {
              const insertedPaystub = { ...newPaystub, id: data[0].id, pdfUrl: publicUrl };
              setPaystubs(prev => [...prev, insertedPaystub]);
          }
      } catch (e) { console.error(e); }
  };

  const handleUpdateRequestStatus = async (id: string, newStatus: 'pending' | 'contacted') => {
      try {
          const { error } = await supabase.from('budget_requests').update({ status: newStatus }).eq('id', id);
          if (!error) {
            setBudgetRequests(prev => prev.map(req => 
                req.id === id ? { ...req, status: newStatus } : req
            ));
          }
      } catch (e) { console.error(e); }
  };

  const handleDeleteRequest = async (id: string) => {
      try {
          const { error } = await supabase.from('budget_requests').delete().eq('id', id);
          if (!error) {
            setBudgetRequests(prev => prev.filter(req => req.id !== id));
          }
      } catch (e) { console.error(e); }
  };

  const handleContactSubmit = async (data: { name: string; email: string; message: string }) => {
      try {
          const { data: insertedData, error } = await supabase.from('budget_requests').insert([{
              name: data.name,
              email: data.email,
              message: data.message,
              date: new Date().toLocaleDateString('pt-BR'),
              status: 'pending'
          }]).select();

          if (insertedData && !error) {
            setBudgetRequests(prev => [...prev, insertedData[0]]);
            alert('Sua mensagem foi enviada! Entraremos em contato em breve.');
            navigate('/');
          } else {
             alert('Erro ao enviar mensagem.');
          }
      } catch (e) { console.error(e); }
  };

  return (
    <Routes>
      <Route element={<Layout isLoggedIn={!!currentUser} onLogout={handleLogout} />}>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact onSubmit={handleContactSubmit} />} />
        
        {/* Login Page */}
        <Route path="/login" element={
            currentUser ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} onLoginAttempt={handleLoginAttempt} />
        } />

        {/* Protected Employee Route */}
        <Route path="/dashboard" element={
            currentUser ? (
                <Dashboard user={currentUser} paystubs={paystubs} onUpdatePassword={handleUpdatePassword} />
            ) : (
                <Navigate to="/login" replace />
            )
        } />

        {/* Protected Admin Route */}
        <Route path="/admin" element={
            currentUser && (currentUser.role === 'admin' || currentUser.role === 'master_admin') ? (
                <AdminDashboard 
                  requests={budgetRequests} 
                  companies={companies}
                  employees={employees}
                  onAddCompany={handleAddCompany}
                  onEditCompany={handleEditCompany}
                  onDeleteCompany={handleDeleteCompany}
                  onAddEmployee={handleAddEmployee}
                  onEditEmployee={handleEditEmployee}
                  onDeleteEmployee={handleDeleteEmployee}
                  onAddPaystub={handleAddPaystub}
                  onUpdateRequestStatus={handleUpdateRequestStatus}
                  onDeleteRequest={handleDeleteRequest}
                  currentUserRole={currentUser.role}
                  currentUserId={currentUser.id}
                  onDeleteAdmin={handleDeleteAdmin}
                  onUpdatePassword={handleUpdatePassword}
                />
            ) : (
                <Navigate to="/login" replace />
            )
        } />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;