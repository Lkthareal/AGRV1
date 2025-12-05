
import React from 'react';

const ServiceCard: React.FC<{ imageSrc: string; title: string; description: string }> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-agr-gray/50 rounded-xl hover:bg-agr-gray transition duration-300 border border-transparent hover:border-green-900 group h-full">
    <div className="w-24 h-24 mb-6 flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-green-500 mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Specialties: React.FC = () => {
  return (
      <section className="bg-agr-dark py-20 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-2">Nossas Especialidades</h2>
              <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                imageSrc="pic/icon1.png" 
                title="Segurança Eletrônica" 
                description="A AGR SEGURANÇA planeja e executa projetos integrados de segurança eletrônica, agregando os mais modernos produtos e tecnologias disponíveis no mercado."
              />
              <ServiceCard 
                imageSrc="pic/icon2.png" 
                title="Segurança Patrimonial" 
                description="Somos capacitados e regulamentados para prestar serviços de segurança patrimonial armada e desarmada, no comércio, condomínios, indústrias e instituições financeiras."
              />
              <ServiceCard 
                imageSrc="pic/icon3.png" 
                title="Consultoria em Segurança" 
                description="Conte com a experiência da AGR SEGURANÇA para elaborar o seu plano de segurança, envolvendo gestão de recursos humanos, rigorosos procedimentos operacionais com tecnologia."
              />
            </div>
          </div>
      </section>
  );
};

export default Specialties;
