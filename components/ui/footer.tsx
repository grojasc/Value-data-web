import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Ingeniería de Datos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  IA Generativa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Computer Vision
                </button>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("nosotros");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("proceso");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Metodología
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("casos-exito");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Casos de Éxito
                </button>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("recursos");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("recursos");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Recursos Gratuitos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contacto");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          {/* Contact block */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-4 text-indigo-200/65 font-medium">
                ¿Listo para transformar tu negocio con datos que realmente trabajan para ti?
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-indigo-200/65">
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="mailto:contacto@valuedata.cl"
                  >
                    contacto@valuedata.cl
                  </a>
                </p>
                <p className="text-indigo-200/65">+56 9 3294 2337</p>
                <p className="text-indigo-200/65">Santiago, Chile</p>
              </div>
              <ul className="inline-flex gap-2 mb-4">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://www.linkedin.com/company/valuedata-chile"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM12 24H8V13h4v11Zm-2-12.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm14 12.4h-4v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.4-.1.3-.1.7-.1 1v5.7h-4s.1-9.3 0-10.2h4v1.4c.5-.7 1.4-1.7 3.4-1.7 2.5 0 4.3 1.6 4.3 5.1V24Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://github.com/valuedata"
                    aria-label="GitHub"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.15 1.1-.35 1.1-.77v-2.72c-4.45.97-5.39-2.15-5.39-2.15-.73-1.85-1.78-2.34-1.78-2.34-1.45-.99.11-.97.11-.97 1.61.11 2.46 1.66 2.46 1.66 1.43 2.45 3.75 1.74 4.66 1.33.14-1.04.56-1.74 1.01-2.14-3.55-.4-7.29-1.78-7.29-7.91 0-1.75.62-3.18 1.64-4.3-.16-.4-.71-2.03.16-4.23 0 0 1.34-.43 4.4 1.64 1.28-.36 2.65-.54 4.01-.55 1.36.01 2.73.19 4.01.55 3.06-2.07 4.4-1.64 4.4-1.64.87 2.2.32 3.83.16 4.23 1.02 1.12 1.64 2.55 1.64 4.3 0 6.15-3.74 7.51-7.31 7.9.57.49 1.08 1.47 1.08 2.96v4.39c0 .43.29.93 1.11.77C27.42 29.06 32 23.08 32 16 32 7.16 24.84 0 16 0z"/>
                    </svg>
                  </a>
                </li>
              </ul>
              <p className="mb-3 text-xs text-indigo-200/45">
                © 2024 ValueData. Todos los derechos reservados.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Conversemos sobre tu proyecto
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
