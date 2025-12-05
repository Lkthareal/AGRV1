
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClass = (path: string) => {
      const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer block";
      const isActive = location.pathname === path;
      return isActive ? `${baseClass} text-green-400` : `${baseClass} text-gray-300 hover:text-white`;
  };

  return (
    <nav className="bg-agr-gray border-b border-green-900 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="flex-shrink-0 flex items-center gap-3">
               {/* Dual Logo Container */}
               <div className="flex items-center gap-3">
                   {/* Logo 1: Security (AGR) */}
                   <div className="w-20 h-20 rounded-full border-2 border-gray-600 relative overflow-hidden shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                       <img src="pic/logoAGR.png" alt="AGR Segurança Patrimonial" className="object-cover w-full h-full scale-[1.15]" />
                   </div>

                   {/* X Separator */}
                   <div className="text-xl font-black text-gray-500 select-none">X</div>

                   {/* Logo 2: Facilities (AG) */}
                   <div className="w-20 h-20 rounded-full border-2 border-gray-600 relative overflow-hidden shadow-lg group-hover:border-green-500 transition-colors duration-300">
                       <img src="pic/logoFA.png" alt="Company Facility Service" className="object-cover w-full h-full scale-[1.15]" />
                   </div>
               </div>

               <div className="flex flex-col ml-2">
                   <span className="font-bold text-xl tracking-wider text-white leading-none">
                     AGR
                   </span>
                   <span className="text-[10px] font-bold text-green-500 tracking-[0.3em] leading-none mt-1 group-hover:text-green-400 transition-colors">
                     SEGURANÇA
                   </span>
               </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={getLinkClass('/')}>
                HOME
              </Link>
              <Link to="/services" className={getLinkClass('/services')}>
                SERVIÇOS
              </Link>
              <Link to="/security" className={getLinkClass('/security')}>
                SEGURANÇA
              </Link>
              <Link to="/contact" className={getLinkClass('/contact')}>
                CONTATO
              </Link>
              
              {isLoggedIn ? (
                <>
                   <Link to="/dashboard" className={getLinkClass('/dashboard')}>
                    DASHBOARD
                  </Link>
                  <button 
                    onClick={onLogout}
                    className="bg-red-900/50 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium border border-red-700 ml-4"
                  >
                    SAIR
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-bold ml-4 shadow-lg shadow-green-900/50"
                >
                  ÁREA HOLERITE
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="-mr-2 flex md:hidden">
             <Link 
                  to={isLoggedIn ? "/dashboard" : "/login"}
                  className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs font-bold shadow-lg"
                >
                  {isLoggedIn ? "DASHBOARD" : "LOGIN"}
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
