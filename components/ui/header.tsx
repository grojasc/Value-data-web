"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "experiencia", "flujos", "nosotros", "casos-exito", "contacto"];
      const scrollPosition = window.scrollY + 100;

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
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <button onClick={() => scrollToSection("inicio")}>
              <Logo />
            </button>
          </div>

          {/* Navigation menu */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("experiencia")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === "experiencia" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection("flujos")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === "flujos" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Flujos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === "nosotros" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === "casos-exito" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              Casos de Éxito
            </button>
          </nav>
          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Contacto
              </button>
            </li>
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
