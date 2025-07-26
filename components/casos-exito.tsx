export default function CasosExito() {
  return (
    <section id="casos-exito" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Casos de éxito
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Transformando industrias con IA
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Descubre cómo hemos ayudado a empresas de diferentes sectores a aprovechar el poder de los datos y la inteligencia artificial.
            </p>
          </div>

          {/* Industry focus */}
          <div className="mb-12" data-aos="fade-up">
            <div className="rounded-2xl bg-gray-800/50 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-center">Manufactura - Industria 4.0</h3>
              <p className="text-lg text-indigo-200/65 text-center mb-8">
                Optimización de procesos productivos y mantenimiento predictivo
              </p>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-800 p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                      <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold text-center">Mantenimiento Predictivo</h4>
                  <p className="text-sm text-indigo-200/65 text-center mb-3">
                    50% menos tiempo parado
                  </p>
                  <p className="text-xs text-indigo-200/50 text-center">
                    IoT y ML para predecir fallas antes que ocurran
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-800 p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                      <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold text-center">Quality Control IA</h4>
                  <p className="text-sm text-indigo-200/65 text-center mb-3">
                    99.5% precisión en calidad
                  </p>
                  <p className="text-xs text-indigo-200/50 text-center">
                    Computer vision para detección automática de defectos
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-800 p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                      <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold text-center">Supply Chain Optimization</h4>
                  <p className="text-sm text-indigo-200/65 text-center mb-3">
                    20% reducción en costos
                  </p>
                  <p className="text-xs text-indigo-200/50 text-center">
                    Optimización de rutas e inventarios con algoritmos avanzados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key challenges */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="mb-6 text-2xl font-semibold text-center">Desafíos principales que resolvemos:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center rounded-lg bg-gray-800 p-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-indigo-200/65">Mantenimiento predictivo de equipos</span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-800 p-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-indigo-200/65">Optimización de la cadena de suministro</span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-800 p-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-indigo-200/65">Control de calidad automatizado</span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-800 p-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-indigo-200/65">Eficiencia energética</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="text-center" data-aos="fade-up" data-aos-delay={400}>
            <h3 className="mb-6 text-2xl font-semibold">Recursos descargables</h3>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                href="/files/playbook-sectorial.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center">
                  <div className="font-semibold">Playbook Sectorial</div>
                  <div className="text-sm font-normal opacity-80">
                    Roadmap hacia la manufactura inteligente
                  </div>
                </div>
              </a>
              <a
                className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                href="/files/whitepaper-industria-40.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center">
                  <div className="font-semibold">Whitepaper</div>
                  <div className="text-sm font-normal opacity-80">
                    Industria 4.0: casos de uso prácticos de IA
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}