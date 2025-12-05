import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Security: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMode, setLightboxMode] = useState<'static' | 'gallery'>('gallery');

  // The single static image (Lock)
  const staticImage = "pic/segimg.jpg";

  // The 4 distinct gallery images
  const galleryImages = [
      "pic/img3.png", // Security Guard
      "pic/img2.png", // Monitoring Room
      "pic/img4.png", // Digital Security
      "pic/img5.png"  // CCTV Camera
  ];

  const nextSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const openStaticLightbox = () => {
      setLightboxMode('static');
      setLightboxOpen(true);
  };

  const openGalleryLightbox = (index: number) => {
      setLightboxMode('gallery');
      setCurrentImageIndex(index);
      setLightboxOpen(true);
  };

  const closeLightbox = () => {
      setLightboxOpen(false);
  };

  return (
    <>
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* Top Banner Section - Blue Sky Background */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="pic\img6.jpg" 
               alt="Céu Azul com Câmera" 
               className="w-full h-full object-cover translate-x-[-90px] translate-y-[20px] scale-150"
             />
             <div className="absolute inset-0 bg-blue-900/10"></div>
             <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
            <h2 className="text-3xl md:text-5xl font-normal text-white uppercase tracking-wide mb-2">
                CONHEÇA NOSSO PROGRAMA
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-green-500 uppercase tracking-wide mb-6">
                DE MANUTENÇÃO
            </h2>
            <p className="text-white text-sm md:text-base font-medium max-w-3xl mx-auto drop-shadow-md">
                Obtenha significativa redução de custos com alta qualificação técnica em serviços de manutenção, a partir da terceirização da AGR SEGURANÇA.
            </p>
        </div>
      </section>

      {/* Main Content Section - Black Background */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            
            {/* Static Image Section */}
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-800 group">
                 <div 
                    className="relative overflow-hidden h-[300px] md:h-[400px] cursor-zoom-in"
                    onClick={openStaticLightbox}
                 >
                     <img 
                       src={staticImage} 
                       alt="Segurança Remota" 
                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                     />
                     {/* Overlay Hint */}
                     <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                        <i className="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 text-3xl drop-shadow-lg transition-opacity duration-300"></i>
                     </div>
                 </div>
            </div>
            
            {/* Text Content */}
            <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-normal text-green-600 mb-8">
                    Serviço de segurança remota
                </h3>
                
                <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                    <li>Sensores de presença contra roubo, intrusão e/ou incêndio;</li>
                    <li>Botões de pânico;</li>
                    <li>Central de monitoramento de alarme 24 horas;</li>
                    <li>Cercas elétricas, concertinas e sensores ativos;</li>
                    <li>Sistemas de Câmeras (CFTV);</li>
                    <li>Projeto, instalação e integração de câmeras de monitoramento (CFTV);</li>
                    <li>Central de monitoramento de video remoto de imagens 24 horas;</li>
                    <li>Serviço de monitoramento de vídeos personalizados: guaritas, portarias, salas de segurança, abertura/fechamento de empresas, etc;</li>
                </ul>

                <button 
                    onClick={() => navigate('/contact')}
                    className="inline-block bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-8 rounded transition-all hover:scale-105"
                >
                    FAÇA SEU ORÇAMENTO
                </button>
            </div>
        </div>

        {/* Carousel / Gallery Section */}
        <div className="max-w-5xl mx-auto bg-agr-gray/30 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl text-white font-bold mb-6 text-center uppercase tracking-wider flex items-center justify-center gap-3">
                <i className="fas fa-images text-green-500 scale-125"></i>
                Galeria de Imagens
            </h3>
            
            <div className="relative group bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                 <div 
                    className="relative overflow-hidden cursor-zoom-in h-[300px] md:h-[500px]"
                    onClick={() => openGalleryLightbox(currentImageIndex)}
                 >
                     <img 
                       src={galleryImages[currentImageIndex]} 
                       alt={`Imagem de Segurança ${currentImageIndex + 1}`} 
                       className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                     />
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>

                 {/* Navigation Arrows */}
                 <button 
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
                 >
                    <i className="fas fa-chevron-left text-lg"></i>
                 </button>
                 <button 
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
                 >
                    <i className="fas fa-chevron-right text-lg"></i>
                 </button>

                 {/* Dots Indicator */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                     {galleryImages.map((_, idx) => (
                         <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                            className={`w-3 h-3 rounded-full transition-all border border-white/50 ${currentImageIndex === idx ? 'bg-green-500 scale-125 border-green-400' : 'bg-transparent hover:bg-white/80'}`}
                         />
                     ))}
                 </div>
            </div>
        </div>

      </section>

      {/* Bottom Banner Image */}
      <div className="w-full h-[200px] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="AGR Segurança Building"
            className="w-full h-full object-cover object-bottom"
          />
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={closeLightbox}>
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-white text-4xl transition-colors z-[70]"
                onClick={closeLightbox}
              >
                  &times;
              </button>
              
              {/* Previous Button (Only for Gallery) */}
              {lightboxMode === 'gallery' && (
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-green-500 text-5xl p-4 transition-all hidden md:block"
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  >
                      <i className="fas fa-chevron-left"></i>
                  </button>
              )}

              <div className="relative max-w-7xl max-h-[90vh]">
                  <img 
                    src={lightboxMode === 'static' ? staticImage : galleryImages[currentImageIndex]} 
                    alt="Zoomed Security" 
                    className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-gray-800 rounded-lg"
                    onClick={(e) => e.stopPropagation()} 
                  />
                  {lightboxMode === 'gallery' && (
                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-gray-400 font-mono text-sm tracking-widest">
                        IMAGEM {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  )}
              </div>

              {/* Next Button (Only for Gallery) */}
              {lightboxMode === 'gallery' && (
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-green-500 text-5xl p-4 transition-all hidden md:block"
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  >
                      <i className="fas fa-chevron-right"></i>
                  </button>
              )}
          </div>
      )}

    </div>
    <Footer />
    </>
  );
};

export default Security;