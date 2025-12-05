
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background overlay effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('pic/imghome.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-agr-dark/90 via-agr-dark/80 to-agr-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        
        {/* Logos Container */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-down">
          {/* Logo 1: Security - Now Blue on Hover */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-600 shadow-2xl relative overflow-hidden group hover:border-blue-500 transition-colors duration-500">
             <img src="pic/logoAGR.png" alt="AGR Segurança Patrimonial" className="object-cover w-full h-full scale-[1.15]" />
          </div>

          {/* X Separator */}
          <div className="text-4xl md:text-6xl font-black text-gray-700 mx-4 select-none">X</div>

          {/* Logo 2: Facilities - Now Green on Hover */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-600 shadow-2xl relative overflow-hidden group hover:border-green-500 transition-colors duration-500">
             <img src="pic/logoFA.png" alt="Company Facility Service" className="object-cover w-full h-full scale-[1.15]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-white">SUA SEGURANÇA É </span>
          <span className="text-green-500">NOSSA PRIORIDADE</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-gray-300">
          Uma equipe 24h à sua disposição zelando por você e seu patrimônio.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/5531982710843" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-green-600 hover:bg-green-500 md:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          >
            <i className="fab fa-whatsapp mr-2 text-2xl"></i>
            Whatsapp (31) 98271-0843
          </a>
          
          <button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-black md:text-lg transition-all duration-300 hover:scale-105"
          >
            SOLICITE SEU ORÇAMENTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;