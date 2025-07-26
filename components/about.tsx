export default function About() {
  return (
    <section id="nosotros" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Acerca de nosotros
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Democratizamos el acceso a la IA
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              En ValueData, creemos que los datos y la inteligencia artificial deben estar al alcance de todas las personas y organizaciones.
            </p>
          </div>

          {/* Content grid */}
          <div className="mx-auto max-w-5xl">
            {/* Mission */}
            <div className="mb-12" data-aos="fade-up">
              <div className="rounded-2xl bg-gray-800/50 p-8">
                <h3 className="mb-4 text-2xl font-semibold">Nuestra Misión</h3>
                <p className="text-lg text-indigo-200/65">
                  Democratizar el acceso a las tecnologías de datos e IA, creando soluciones que sean tanto poderosas como accesibles para empresas de todos los tamaños.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="rounded-2xl bg-gray-800 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Accesibilidad</h4>
                <p className="text-sm text-indigo-200/65">
                  IA para todos, no solo grandes corporaciones
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Innovación</h4>
                <p className="text-sm text-indigo-200/65">
                  Exploramos constantemente nuevas tecnologías
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Transparencia</h4>
                <p className="text-sm text-indigo-200/65">
                  Explicamos cada proceso y decisión técnica
                </p>
              </div>

              <div className="rounded-2xl bg-gray-800 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Impacto</h4>
                <p className="text-sm text-indigo-200/65">
                  Soluciones con impacto real y medible
                </p>
              </div>
            </div>

            {/* Team info */}
            <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay={400}>
              <div className="rounded-2xl bg-gray-800/50 p-8">
                <h3 className="mb-4 text-2xl font-semibold">Nuestro Equipo</h3>
                <p className="text-lg text-indigo-200/65 mb-6">
                  Expertos en datos, ingenieros de machine learning y especialistas en IA generativa con sede en Santiago, Chile. 
                  Combinamos experiencia técnica profunda con una comprensión clara de las necesidades empresariales reales.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-indigo-200/65">
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1">Machine Learning</span>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1">Data Engineering</span>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1">IA Generativa</span>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1">Computer Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}