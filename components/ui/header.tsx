"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "experiencia", "flujos", "nosotros", "casos-exito", "contacto"];
      const scrollPosition = window.scrollY + 100;
      
      // Detectar scroll para header sticky
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Agregar clase al body para sticky header
      if (scrolled) {
        document.body.classList.add('header-sticky');
      } else {
        document.body.classList.remove('header-sticky');
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <header className={`z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 backdrop-blur-xl bg-neutral-900/95 shadow-xl border-b border-neutral-700/30' 
        : 'mt-4 md:mt-8'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative flex h-16 items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'px-0' 
            : 'px-6 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 shadow-lg'
        }`}>
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <button onClick={() => scrollToSection("inicio")}>
              <Logo />
            </button>
          </div>

          {/* Navigation menu */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection("experiencia")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === "experiencia" 
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25" 
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60 hover:shadow-md"
              }`}
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection("flujos")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === "flujos" 
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25" 
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60 hover:shadow-md"
              }`}
            >
              Flujos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === "nosotros" 
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25" 
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60 hover:shadow-md"
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === "casos-exito" 
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25" 
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60 hover:shadow-md"
              }`}
            >
              Casos de Éxito
            </button>
          </nav>
          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-5 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-medium rounded-full shadow-lg shadow-secondary-500/25 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Contacto
            </button>
            
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/signin"
                className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/60 transition-all duration-300"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-full shadow-lg shadow-accent-500/25 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
