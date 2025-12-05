import React from 'react';
import Footer from './Footer';

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-black">
        
        {/* Top Banner Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background Image/Pattern */}
          <div className="absolute inset-0 bg-blue-900/30 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4">
                  <span className="text-white">ZELANDO PELA </span>
                  <span className="text-yellow-400">SUA SEGURANÇA</span>
              </h2>
              <div className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed space-y-2">
                  <p>AGR SEGURANÇA é uma opção segura para a terceirização de serviços.</p>
                  <p>Além disso, realizamos diagnósticos e planos de melhorias sociais nas comunidades do entorno de seus clientes.</p>
              </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          
          {/* Section 1: SEGURANÇA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                      <img 
                          src="pic/serv1.png" 
                          alt="Profissional de Segurança" 
                          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                  </div>
              </div>
              
              <div className="text-left">
                  <h3 className="text-3xl font-bold text-green-600 mb-6 uppercase border-l-4 border-green-600 pl-4">
                      Segurança
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                      Planejamos e executamos projetos customizados e integrados de segurança para nossos clientes. 
                      Integramos recursos humanos com o que existe de mais moderno em segurança eletrônica, 
                      diagnosticamos as vulnerabilidades e atuamos na melhoria social do entorno, 
                      oferecendo uma solução completa e eficiente de segurança.
                  </p>
              </div>
          </div>

          {/* Section 2: SERVIÇOS TERCEIRIZADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-green-600 mb-6 uppercase border-l-4 border-green-600 pl-4">
                      Serviços Terceirizados
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                      Somos especialistas na prestação de serviços terceirizados de apoio ao seu negócio, 
                      tais como portaria, recepção, limpeza, copa e manutenção. Assim, nossos clientes podem 
                      focar suas energias em seu negócio principal, garantindo maior eficiência e qualidade 
                      nos serviços de apoio.
                  </p>
              </div>

              <div className="relative group order-1 md:order-2">
                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                      <img 
                          src="pic/serv2.png" 
                          alt="Monitoramento e Facilities" 
                          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                  </div>
              </div>
          </div>

          {/* Section 3: FACILITY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                      <img 
                          src="pic/serv3.png" 
                          alt="Facilities e Infraestrutura" 
                          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                  </div>
              </div>
              
              <div className="text-left">
                  <h3 className="text-3xl font-bold text-green-600 mb-6 uppercase border-l-4 border-green-600 pl-4">
                      Facility
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                      Oferecemos atividades integradas de suporte e de infraestrutura, 
                      atuando como um elo importante para a dinâmica organizacional, na 
                      busca da melhor eficiência possível para os serviços de apoio a 
                      indústrias, condomínios residenciais e comerciais, comércios, órgãos de 
                      administração pública e bancos.
                  </p>
                  <a 
                      href="https://wa.me/5531982710843"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(21,128,61,0.4)]"
                  >
                      SAIBA MAIS
                  </a>
              </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;