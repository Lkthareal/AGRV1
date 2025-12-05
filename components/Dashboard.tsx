
import React, { useState } from 'react';
import { Paystub, User } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface DashboardProps {
  user: User; // The user here represents the Employee
  paystubs: Paystub[];
  onUpdatePassword: (newPass: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, paystubs, onUpdatePassword }) => {
  const [selectedPaystub, setSelectedPaystub] = useState<Paystub | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Filter paystubs for the logged-in employee
  const employeePaystubs = paystubs.filter(p => p.employeeId === user.id);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
          alert("As senhas não coincidem.");
          return;
      }
      onUpdatePassword(newPassword);
      setNewPassword('');
      setConfirmPassword('');
      setShowPasswordModal(false);
  };

  return (
    <div className="bg-agr-gray min-h-screen pb-20">
      <div className="bg-agr-dark pb-32">
        <header className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center border-2 border-green-500">
                        <i className="fas fa-user text-3xl text-gray-300"></i>
                   </div>
                   <div>
                       <h1 className="text-3xl font-bold text-white">Olá, {user.name}</h1>
                       <p className="text-green-500 font-medium">Portal do Colaborador</p>
                   </div>
               </div>
               <button 
                 onClick={() => setShowPasswordModal(true)}
                 className="text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
               >
                   <i className="fas fa-key mr-2"></i> Trocar Senha
               </button>
           </div>
        </header>
      </div>

      <main className="-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Charts Section */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border border-gray-700">
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <i className="fas fa-chart-line text-green-500"></i>
                 Histórico Salarial
             </h2>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={employeePaystubs}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                            formatter={(value: number) => formatCurrency(value)}
                        />
                        <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} name="Valor Líquido" />
                    </BarChart>
                </ResponsiveContainer>
             </div>
        </div>

        {/* List Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* List */}
           <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
               <div className="px-6 py-4 border-b border-gray-700 bg-gray-900/50">
                   <h3 className="text-lg font-bold text-white">Meus Contracheques</h3>
               </div>
               <div className="divide-y divide-gray-700 max-h-[500px] overflow-y-auto">
                   {employeePaystubs.length === 0 ? (
                       <div className="p-8 text-center text-gray-500">Nenhum documento encontrado.</div>
                   ) : (
                       employeePaystubs.map(stub => (
                           <div 
                             key={stub.id} 
                             onClick={() => setSelectedPaystub(stub)}
                             className={`p-4 flex items-center justify-between cursor-pointer transition-colors ${selectedPaystub?.id === stub.id ? 'bg-green-900/20' : 'hover:bg-gray-700/50'}`}
                           >
                               <div className="flex items-center gap-3">
                                   <div className="bg-gray-700 p-2 rounded text-green-500">
                                       <i className="fas fa-file-invoice-dollar"></i>
                                   </div>
                                   <div>
                                       <p className="text-white font-medium">{stub.title}</p>
                                       <p className="text-xs text-gray-400">{stub.month} / {stub.year} • Pago: {stub.paymentDate}</p>
                                   </div>
                               </div>
                               <div className="text-right">
                                   <p className="text-green-400 font-bold">{formatCurrency(stub.value)}</p>
                                   <span className="text-xs text-gray-500">Ver detalhes</span>
                               </div>
                           </div>
                       ))
                   )}
               </div>
           </div>

           {/* Details */}
           <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 flex flex-col">
               <div className="px-6 py-4 border-b border-gray-700 bg-gray-900/50">
                   <h3 className="text-lg font-bold text-white">Detalhes do Documento</h3>
               </div>
               <div className="p-6 flex-1">
                   {selectedPaystub ? (
                       <div className="space-y-6 animate-fade-in">
                           <div className="flex justify-between items-end border-b border-gray-700 pb-4">
                               <div>
                                   <p className="text-sm text-gray-400">Referência</p>
                                   <p className="text-2xl font-bold text-white">{selectedPaystub.month} / {selectedPaystub.year}</p>
                                   <p className="text-xs text-gray-500 mt-1">{selectedPaystub.title}</p>
                               </div>
                               {selectedPaystub.pdfUrl && (
                                   <a 
                                     href={selectedPaystub.pdfUrl}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center gap-2"
                                   >
                                       <i className="fas fa-file-pdf"></i> Baixar / Visualizar PDF
                                   </a>
                               )}
                           </div>

                           <div className="space-y-3">
                               <div className="flex justify-between text-white text-xl font-bold">
                                   <span>Valor Líquido</span>
                                   <span className="text-green-500">{formatCurrency(selectedPaystub.value)}</span>
                               </div>
                               <div className="flex justify-between text-gray-400 text-sm">
                                   <span>Data do Pagamento</span>
                                   <span>{selectedPaystub.paymentDate}</span>
                               </div>
                           </div>
                       </div>
                   ) : (
                       <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
                           <i className="fas fa-search-dollar text-6xl mb-4"></i>
                           <p>Selecione um item da lista para visualizar</p>
                       </div>
                   )}
               </div>
           </div>
        </div>
      </main>

      {/* Password Change Modal */}
      {showPasswordModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-600 w-full max-w-md">
                  <div className="px-6 py-4 border-b border-gray-700 bg-gray-900 rounded-t-lg">
                      <h3 className="text-xl font-bold text-white">Trocar Minha Senha</h3>
                  </div>
                  <form onSubmit={handleChangePasswordSubmit} className="p-6 space-y-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Nova Senha</label>
                          <input 
                              type="password" 
                              required
                              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              placeholder="Digite a nova senha"
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Confirmar Nova Senha</label>
                          <input 
                              type="password" 
                              required
                              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              placeholder="Confirme a nova senha"
                          />
                      </div>
                      <div className="flex justify-end gap-3 mt-6">
                          <button 
                              type="button" 
                              onClick={() => {
                                  setShowPasswordModal(false);
                                  setNewPassword('');
                                  setConfirmPassword('');
                              }}
                              className="px-4 py-2 rounded bg-gray-700 text-gray-300 hover:bg-gray-600"
                          >
                              Cancelar
                          </button>
                          <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-500">
                              Atualizar Senha
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default Dashboard;
