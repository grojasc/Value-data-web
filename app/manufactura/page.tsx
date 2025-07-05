"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: "Manufactura - ValueData",
  description: "Casos de éxito en Industria 4.0 y optimización de procesos productivos",
};

export default function Manufactura() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h1 className="text-3xl font-semibold" data-aos="fade-up">
              Casos de éxito en Manufactura
            </h1>
            <p
              className="text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Industria 4.0 y optimización de procesos productivos
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6" data-aos="fade-up">
            <h2 className="text-2xl font-semibold">
              Desafíos principales que resolvemos:
            </h2>
            <ul className="ml-5 list-disc text-indigo-200/65">
              <li>Mantenimiento predictivo de equipos</li>
              <li>Optimización de la cadena de suministro</li>
              <li>Control de calidad automatizado</li>
              <li>Eficiencia energética</li>
            </ul>
          </div>

          <div
            className="mt-12 grid gap-8 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="rounded-2xl bg-gray-800 p-6">
              <h3 className="mb-2 font-semibold">Mantenimiento Predictivo</h3>
              <p className="text-indigo-200/65">
                50% menos tiempo parado
                <br />IoT y ML para predecir fallas antes que ocurran
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800 p-6">
              <h3 className="mb-2 font-semibold">Quality Control IA</h3>
              <p className="text-indigo-200/65">
                99.5% precisión en calidad
                <br />Computer vision para detección automática de defectos
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800 p-6">
              <h3 className="mb-2 font-semibold">Supply Chain Optimization</h3>
              <p className="text-indigo-200/65">
                20% reducción en costos
                <br />Optimización de rutas e inventarios con algoritmos avanzados
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-16 max-w-3xl space-y-4 text-center"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <h2 className="text-2xl font-semibold">Soluciones para Manufactura</h2>
            <p className="text-indigo-200/65">Recursos descargables</p>
            <div className="flex flex-col items-center gap-4">
              <a
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white"
                href="/files/playbook-sectorial.pdf"
              >
                Playbook Sectorial
                <br />
                <span className="text-sm font-normal">
                  Roadmap hacia la manufactura inteligente con datos
                </span>
              </a>
              <a
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white"
                href="/files/whitepaper-industria-40.pdf"
              >
                Whitepaper
                <br />
                <span className="text-sm font-normal">
                  Industria 4.0: casos de uso prácticos de IA en manufactura
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
