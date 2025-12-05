import React, { useState } from 'react';
import Footer from './Footer';

interface ContactProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate phone and description into the message field for the admin dashboard
    const fullMessage = `Telefone: ${form.phone}\n\nDescrição: ${form.description}`;
    onSubmit({ name: form.name, email: form.email, message: fullMessage });
    setForm({ name: '', phone: '', email: '', description: '' });
  };

  return (
    <>
    <div className="bg-black text-white w-full font-sans">
      
      {/* Top Banner */}
      <section className="relative h-[400px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image - Skyscrapers */}
        <div className="absolute inset-0 z-0">
        <img 
               src="pic\imgctt.jpg" 
               alt="Skyscrapers" 
               className="w-full h-full object-cover opacity-70 translate-y-[-5px] scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 mt-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white uppercase tracking-tight mb-2">
                INTELIGENCIA É NOSSA <span className="text-green-600 font-bold">PALAVRA CHAVE</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mt-6 max-w-4xl mx-auto font-medium">
                Através de um sistema de inteligência de informação, são integradas análises estatísticas, rondas preventivas e monitoramento remoto.
            </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black">
         <div className="max-w-4xl mx-auto">
             {/* Text */}
             <div className="text-left text-sm text-gray-300 leading-relaxed text-justify space-y-4">
                 <h2 className="text-2xl font-normal text-green-600 mb-6 uppercase tracking-wide">SOBRE A EMPRESA</h2>
                 <p className="font-bold text-white">Um jeito diferente de fazer segurança.</p>
                 <p>
                    A AGR SEGURANÇA é formada por pessoas como você, que acreditam na importância de um ambiente tranquilo e seguro para viver e trabalhar.
                    Dedicamos ao aprimoramento do gerenciamento humano e dos processos de nossa equipe, além de atualização constante em tecnologia, para oferecer a nossos clientes a melhor e mais eficiente prestação de serviços.
                 </p>
                 <p>
                    Mas tão importante quanto tudo isso, é a nossa visão de que "nenhum homem é uma ilha", de que pouco adianta nos trancarmos em fortalezas cada vez mais intransponíveis, se não zelarmos pela estabilidade e melhoria das condições sociais do nosso entorno.
                 </p>
             </div>
         </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Text */}
              <div>
                  <h2 className="text-2xl font-normal text-green-600 mb-6 uppercase tracking-wide">SOLICITE SEU ORÇAMENTO</h2>
                  <p className="text-white text-sm leading-relaxed mb-4 font-medium">
                      Contate um dos nossos consultores e descubra o que existe de melhor quando se fala em segurança.
                  </p>
                  <p className="text-white text-sm leading-relaxed font-medium">
                      Estamos sempre prontos para te atender. Nossa prioridade é sua segurança!
                  </p>
              </div>

              {/* Right Form */}
              <div>
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-md ml-auto md:ml-0 w-full">
                      <input 
                        type="text" 
                        placeholder="Nome *" 
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full bg-white text-gray-900 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                      />
                      <input 
                        type="tel" 
                        placeholder="Telefone *" 
                        required
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full bg-white text-gray-900 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                      />
                      <input 
                        type="email" 
                        placeholder="E-mail *" 
                        required
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full bg-white text-gray-900 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                      />
                      <textarea 
                        placeholder="Descrição / Mensagem *" 
                        required
                        rows={4}
                        value={form.description}
                        onChange={(e) => setForm({...form, description: e.target.value})}
                        className="w-full bg-white text-gray-900 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400 resize-none"
                      ></textarea>
                      <div className="pt-2">
                        <button type="submit" className="px-8 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase text-sm font-bold tracking-widest bg-transparent">
                            Enviar
                        </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-gray-900 relative">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.43329444036365!2d-43.9815592!3d-19.9272402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697029c68ec1b%3A0x6c0ae4d91e4b5623!2sRua%20Fausto%20Alvim%2C%20272%20-%20Calafate%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-545!5e0!3m2!1spt-BR!2sbr!4v1764545883660!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização AGR Segurança"
        ></iframe>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Contact;