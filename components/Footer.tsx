
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-white mb-4">AGR Segurança</h4>
                <p className="text-gray-400 text-sm">Protegendo o que é mais importante para você com tecnologia e profissionais qualificados.</p>
            </div>
            <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">Contato</h4>
                <div className="space-y-2">
                    <p className="text-gray-400 text-sm"><i className="fab fa-whatsapp text-green-500 mr-2"></i> (31) 98271-0843</p>
                    <p className="text-gray-400 text-sm"><i className="fas fa-phone-alt text-green-500 mr-2"></i> (31) 2526-6015</p>
                    <p className="text-gray-400 text-sm"><i className="fas fa-envelope text-green-500 mr-2"></i> comercial@safetycompanyseg.com.br</p>
                    <p className="text-gray-400 text-sm"><i className="fas fa-envelope text-green-500 mr-2"></i> gomes@safetycompanyseg.com.br</p>
                </div>
            </div>
            <div className="text-center md:text-right">
                <h4 className="text-xl font-bold text-white mb-4">Redes Sociais</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                    <a href="https://www.instagram.com/agr_seguranca/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center space-y-1">
            <p className="text-gray-500 text-xs">© 2024 AGR Segurança Patrimonial & Facility. Todos os direitos reservados.</p>
            <p className="text-gray-600 text-[10px]">54.647.453/0001-33 Agr Seguranca Patrimonial LTDA</p>
            <p className="text-gray-600 text-[10px]">54.647.423/0001-27 Company Facility Service LTDA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;