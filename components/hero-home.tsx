"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import AnimatedSpaceBackground from "@/components/animated-space-background";
import AIVideoPlaceholder from "@/components/ai-video-placeholder";

export default function HeroHome() {
  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen">
      
      {/* Enhanced floating elements with AI theme */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* AI Circuit patterns */}
        <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
          <svg viewBox="0 0 64 64" className="w-full h-full text-accent-400 animate-pulse">
            <circle cx="8" cy="8" r="2" fill="currentColor"/>
            <circle cx="56" cy="8" r="2" fill="currentColor"/>
            <circle cx="8" cy="56" r="2" fill="currentColor"/>
            <circle cx="56" cy="56" r="2" fill="currentColor"/>
            <path d="M8 8 L56 8 L56 56 L8 56 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M20 20 L44 20 L44 44 L20 44 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="32" cy="32" r="4" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Data flow visualization */}
        <div className="absolute top-1/4 right-20 w-24 h-24 opacity-15">
          <svg viewBox="0 0 96 96" className="w-full h-full text-secondary-400">
            <path d="M10 48 Q48 10, 86 48 Q48 86, 10 48" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '3s' }}/>
            <circle cx="10" cy="48" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}/>
            <circle cx="48" cy="20" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}/>
            <circle cx="86" cy="48" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}/>
          </svg>
        </div>
        
        {/* Neural network nodes */}
        <div className="absolute bottom-20 left-1/4 w-20 h-20 opacity-25">
          <svg viewBox="0 0 80 80" className="w-full h-full text-green-400">
            <circle cx="15" cy="15" r="3" fill="currentColor" className="animate-pulse"/>
            <circle cx="65" cy="15" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            <circle cx="40" cy="40" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }}/>
            <circle cx="15" cy="65" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.5s' }}/>
            <circle cx="65" cy="65" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2s' }}/>
            <line x1="15" y1="15" x2="40" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <line x1="65" y1="15" x2="40" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <line x1="40" y1="40" x2="15" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <line x1="40" y1="40" x2="65" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        <div className="py-20 md:py-32">
          {/* Hero content with video-focused layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text content */}
            <div className="lg:col-span-6 text-left">
              <div className="mb-6">
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent-500/20 to-secondary-500/20 text-accent-300 border border-accent-500/30 animate-pulse"
                  data-aos="fade-up"
                >
                  IA y Datos • Soluciones Inteligentes
                </span>
              </div>
              
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <span className="bg-gradient-to-r from-white via-neutral-100 to-primary-200 bg-clip-text text-transparent">
                  Datos que transforman
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-300 bg-clip-text text-transparent animate-[gradient_6s_linear_infinite] bg-[length:200%_auto]">
                  decisiones inteligentes
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-neutral-100 to-primary-200 bg-clip-text text-transparent">
                  en resultados
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-300 bg-clip-text text-transparent">
                  extraordinarios
                </span>
              </h1>
              
              <p
                className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-3xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Combinamos ingeniería de datos de clase mundial con inteligencia artificial generativa y analítica avanzada para ayudar a empresas de todos los sectores a tomar mejores decisiones. Nuestro expertise técnico, respaldado por una sólida comprensión del negocio, garantiza que cada implementación genere ROI medible desde el primer día.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay={300}>
                <button
                  onClick={() => {
                    const element = document.getElementById("contacto");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center animate-pulse"
                >
                  Agenda una demo
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
                  </svg>
                </button>
                
                <button
                  onClick={() => {
                    const element = document.getElementById("casos-exito");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="px-8 py-4 border-2 border-accent-500 text-accent-300 font-semibold rounded-xl hover:bg-accent-500/10 hover:border-accent-400 transition-all duration-200 flex items-center justify-center"
                >
                  Explora nuestros casos
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Visual content - AI Visualization */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay={400}>
              <div className="relative">
                {/* Enhanced decorative elements with AI theme */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-secondary-400/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Neural network connection lines */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-32 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* AI Processing Visualization */}
                <AIVideoPlaceholder 
                  width={1200} 
                  height={675} 
                  className="transform hover:scale-105 transition-transform duration-500 cursor-pointer shadow-2xl shadow-accent-500/20"
                />
                
                {/* Floating AI badges */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-semibold rounded-full animate-bounce">
                  AI EN VIVO
                </div>
                <div className="absolute -bottom-2 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full animate-pulse">
                  PROCESANDO...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

