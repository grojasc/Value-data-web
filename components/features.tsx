export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Header */}
          <h2 className="text-3xl font-semibold">Nuestros Servicios</h2>
          <p className="text-lg text-indigo-200/65">
            Soluciones integrales que combinan experiencia técnica de clase mundial con un profundo entendimiento del negocio local:
          </p>
          {/* Lista de servicios de datos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-2xl bg-gray-800/30 p-6 transition-all hover:bg-gray-800/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Ingeniería de Datos</h3>
              <p className="text-indigo-200/65 mb-3"><strong>"Construimos la infraestructura que hace posible la magia"</strong></p>
              <p className="text-indigo-200/65">Diseñamos y construimos pipelines de datos escalables que convierten el caos de información en flujos ordenados y confiables. Desde ETL tradicional hasta arquitecturas de datos modernas en tiempo real, creamos la base sólida que necesitas para decisiones inteligentes.</p>
            </div>
            <div className="rounded-2xl bg-gray-800/30 p-6 transition-all hover:bg-gray-800/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Inteligencia Artificial Generativa</h3>
              <p className="text-indigo-200/65 mb-3"><strong>"Automatizamos lo repetitivo, potenciamos lo creativo"</strong></p>
              <p className="text-indigo-200/65">Implementamos IA generativa que no solo automatiza tareas, sino que amplifica la capacidad creativa de tu equipo. Desde asistentes virtuales especializados hasta generación automática de contenido y análisis, llevamos la IA generativa más allá del hype hacia resultados tangibles.</p>
            </div>
            <div className="rounded-2xl bg-gray-800/30 p-6 transition-all hover:bg-gray-800/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Machine Learning y Analítica Predictiva</h3>
              <p className="text-indigo-200/65 mb-3"><strong>"Vemos el futuro en tus datos"</strong></p>
              <p className="text-indigo-200/65">Construimos modelos predictivos que anticipan tendencias, identifican oportunidades y previenen problemas antes de que ocurran. Nuestros algoritmos aprenden continuamente de tus datos para entregar insights cada vez más precisos y valiosos.</p>
            </div>
            <div className="rounded-2xl bg-gray-800/30 p-6 transition-all hover:bg-gray-800/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Computer Vision</h3>
              <p className="text-indigo-200/65 mb-3"><strong>"Enseñamos a las máquinas a ver lo que importa"</strong></p>
              <p className="text-indigo-200/65">Desarrollamos sistemas de visión artificial que automatizan inspecciones, optimizan procesos y detectan patrones invisibles al ojo humano. Desde control de calidad hasta análisis de comportamiento, convertimos imágenes en información accionable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

