
export interface Paystub {
  id: string;
  employeeId: string; // Links the stub to a specific employee
  title: string; // "Nome no contracheque"
  month: string;
  year: number;
  value: number; // Salary value for the chart
  paymentDate: string;
  pdfUrl?: string; // URL for the uploaded PDF
}

export interface User {
  id: string;
  name: string;
  role: 'employee' | 'admin' | 'master_admin';
  companyId?: string; // Only for employees
  avatar: string;
}

export interface BudgetRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'pending' | 'contacted';
}

export interface ClientCompany {
  id: string;
  name: string;
  cnpj: string;
  contractStatus: 'active' | 'inactive';
}

export interface Employee {
  id: string;
  companyId: string;
  name: string;
  username: string;
  password: string;
  role?: 'employee' | 'admin' | 'master_admin';
}
