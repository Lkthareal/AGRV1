
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
  onLoginAttempt: (u: string, p: string) => Promise<User | null>;
}

const Login: React.FC<LoginProps> = ({ onLogin, onLoginAttempt }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
        const user = await onLoginAttempt(username, password);

        if (user) {
            onLogin(user);
        } else {
            setError('Credenciais inválidas. Tente novamente.');
            setIsLoading(false);
        }
    } catch (err) {
        console.error(err);
        setError('Erro ao conectar. Tente novamente.');
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute inset-0 bg-[url('pic/imghome.jpg')] opacity-10 bg-cover bg-center"></div>
       
       <div className="max-w-md w-full space-y-8 relative z-10 bg-gray-900/90 p-10 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm">
         <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-2 border-green-600 mb-4 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                <i className="fas fa-shield-alt text-4xl text-green-500"></i>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Área Holerite
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Acesse seus contracheques e documentos
            </p>
         </div>
         
         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="username" className="sr-only">CPF</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition-all"
                        placeholder="CPF"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-lock text-gray-500"></i>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition-all"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              </div>
            </div>

            {error && (
                <div className="text-red-500 text-sm text-center bg-red-900/20 p-2 rounded">
                    {error}
                </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isLoading ? 'bg-green-800' : 'bg-green-600 hover:bg-green-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.2)]`}
              >
                {isLoading ? (
                    <span className="flex items-center">
                        <i className="fas fa-circle-notch fa-spin mr-2"></i> Acessando...
                    </span>
                ) : (
                    "ENTRAR"
                )}
              </button>
            </div>
         </form>
       </div>
    </div>
  );
};

export default Login;
