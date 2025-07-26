export const metadata = {
  title: "Acerca de nosotros - ValueData",
  description: "Conoce más sobre ValueData y nuestro equipo",
};

import PageIllustration from "@/components/page-illustration";

export default function About() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Acerca de ValueData
              </h1>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl space-y-8" data-aos="fade-up">
              <div>
                <h2 className="mb-4 text-2xl font-semibold">Nuestra Misión</h2>
                <p className="text-lg text-indigo-200/65">
                  En ValueData, creemos que los datos y la inteligencia artificial deben estar al alcance de todas las personas y organizaciones. Nuestra misión es democratizar el acceso a estas tecnologías transformadoras, creando soluciones que sean tanto poderosas como accesibles.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">¿Quiénes Somos?</h2>
                <p className="text-lg text-indigo-200/65 mb-4">
                  Somos un equipo de expertos en datos, ingenieros de machine learning y especialistas en IA generativa con sede en Santiago, Chile. Combinamos experiencia técnica profunda con una comprensión clara de las necesidades empresariales reales.
                </p>
                <p className="text-lg text-indigo-200/65">
                  Nuestro enfoque se centra en crear soluciones de datos centradas en las personas, asegurando que cada implementación no solo sea técnicamente sólida, sino también intuitiva y valiosa para los usuarios finales.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">Nuestros Valores</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-gray-800 p-6">
                    <h3 className="mb-2 font-semibold">Accesibilidad</h3>
                    <p className="text-indigo-200/65">
                      Creemos que la IA y los datos deben ser accesibles para todos, no solo para grandes corporaciones.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-800 p-6">
                    <h3 className="mb-2 font-semibold">Innovación</h3>
                    <p className="text-indigo-200/65">
                      Estamos constantemente explorando nuevas tecnologías y metodologías para ofrecer las mejores soluciones.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-800 p-6">
                    <h3 className="mb-2 font-semibold">Transparencia</h3>
                    <p className="text-indigo-200/65">
                      Trabajamos con total transparencia, explicando cada proceso y decisión técnica a nuestros clientes.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-800 p-6">
                    <h3 className="mb-2 font-semibold">Impacto</h3>
                    <p className="text-indigo-200/65">
                      Nos enfocamos en crear soluciones que generen un impacto real y medible en los negocios de nuestros clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">¿Por Qué Elegirnos?</h2>
                <ul className="space-y-3 text-lg text-indigo-200/65">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                    <span>Experiencia comprobada en proyectos de IA y datos en múltiples industrias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                    <span>Enfoque personalizado para cada cliente y proyecto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                    <span>Compromiso con la educación y transferencia de conocimiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                    <span>Soporte continuo y mantenimiento de soluciones implementadas</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="mb-4 text-2xl font-semibold">¿Listo para Transformar tu Negocio?</h2>
                <p className="mb-6 text-lg text-indigo-200/65">
                  Contáctanos para discutir cómo podemos ayudarte a aprovechar el poder de los datos y la IA.
                </p>
                <a
                  className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  href="/contact"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}