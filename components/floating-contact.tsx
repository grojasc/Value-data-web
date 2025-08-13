"use client";

import { useState, useEffect } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 500; // Show after scrolling 500px
      
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsExpanded(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "56932942337"; // Remove + and spaces
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de ValueData.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsExpanded(false);
  };

  const openEmail = () => {
    window.location.href = "mailto:gonzalo@valuedata.us?subject=Consulta sobre servicios&body=Hola, me interesa conocer más sobre los servicios de ValueData.";
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {/* WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-105 group"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.75"/>
            </svg>
            <span className="whitespace-nowrap">WhatsApp</span>
          </button>

          {/* Email */}
          <button
            onClick={openEmail}
            className="flex items-center gap-3 rounded-full bg-indigo-500 px-4 py-3 text-white shadow-lg transition-all hover:bg-indigo-600 hover:scale-105 group"
            aria-label="Enviar email"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="whitespace-nowrap">Email</span>
          </button>

          {/* Scroll to contact form */}
          <button
            onClick={scrollToContact}
            className="flex items-center gap-3 rounded-full bg-purple-500 px-4 py-3 text-white shadow-lg transition-all hover:bg-purple-600 hover:scale-105 group"
            aria-label="Ir al formulario de contacto"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="whitespace-nowrap">Formulario</span>
          </button>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative h-14 w-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isExpanded ? 'rotate-45' : ''
        }`}
        aria-label={isExpanded ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-ping opacity-75"></div>
        
        {/* Icon */}
        <div className="relative flex h-full w-full items-center justify-center">
          {isExpanded ? (
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </div>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
              ¿Necesitas ayuda?
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </button>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 -z-10 bg-black/20 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}