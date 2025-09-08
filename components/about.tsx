import GeometricBackground from "./geometric-background";

export default function About() {
  return (
    <section id="nosotros" className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
      <GeometricBackground variant="subtle" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32">
          {/* Asymmetrical header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="mb-6">
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-secondary-500/20 to-accent-500/20 text-secondary-300 border border-secondary-500/30"
                  data-aos="fade-up"
                >
                  Acerca de ValueData
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-neutral-100 to-secondary-200 bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                El equipo detrás de la
                <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  {" "}transformación digital
                </span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed" data-aos="fade-up" data-aos-delay={200}>
                En un mundo donde los datos crecen exponencialmente, nosotros no solo los organizamos: los convertimos en tu ventaja competitiva. Combinamos experiencia técnica de nivel mundial con un profundo entendimiento del negocio local. Nuestro equipo entrega soluciones que generan valor desde la primera semana.
              </p>
            </div>
          </div>

          {/* Asymmetrical content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Mission - Left side */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 h-full">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent-400 rounded-full"></div>
                <h3 className="text-3xl font-bold mb-6 text-white">Nuestra Misión</h3>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Democratizar el acceso a tecnologías de datos e inteligencia artificial de clase mundial, creando soluciones que generen impacto real y sostenible para organizaciones de todos los tamaños en América Latina.
                </p>
              </div>
            </div>
            
            {/* Values - Right side with offset */}
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-12" data-aos="fade-left" data-aos-delay={200}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-500/10 to-transparent border border-accent-500/20">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Nuestra Visión</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Ser el partner tecnológico de referencia para la transformación digital basada en datos, reconocidos por nuestra excelencia técnica, ética profesional y capacidad de generar valor tangible desde el primer día.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-r from-secondary-500/10 to-transparent border border-secondary-500/20">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500/20">
                      <svg className="h-6 w-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Enfoque Ágil</h4>
                      <p className="text-sm text-neutral-400">Metodologías lean e iterativas que entregan valor rápido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders section */}
          <div className="mb-20" data-aos="fade-up" data-aos-delay={400}>
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Equipo Fundador</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Gonzalo Rojas Chacón */}
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/20">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent-500/20 to-secondary-500/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-300">GR</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Gonzalo Rojas Chacón</h4>
                  <p className="text-accent-300 font-medium mb-4">CEO & Chief AI Officer</p>
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    Ingeniero Civil Industrial (UTFSM), Magíster en Inteligencia Artificial (UC) y MBA (UChile). Experto en aplicar IA a problemas complejos de negocio, con más de 10 años transformando organizaciones mediante datos e inteligencia artificial.
                  </p>
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-xs font-medium">
                    "La IA debe resolver problemas reales"
                  </div>
                </div>
              </div>

              {/* Manuel Muñoz */}
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary-500/20">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-secondary-500/20 to-primary-500/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-secondary-300">MM</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Manuel Muñoz</h4>
                  <p className="text-secondary-300 font-medium mb-4">CTO & Chief Data Engineer</p>
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    Ingeniero Civil en Computación (Universidad de O'Higgins), especialista en arquitecturas cloud y desarrollo de software de datos. Lidera la implementación técnica de soluciones escalables y robustas.
                  </p>
                  <div className="inline-flex px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-medium">
                    "La arquitectura correcta es invisible al usuario"
                  </div>
                </div>
              </div>

              {/* Rodolfo Molina */}
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-300">RM</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Rodolfo Molina</h4>
                  <p className="text-primary-300 font-medium mb-4">COO & Chief Analytics Officer</p>
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    Ingeniero Civil Industrial (UC), orientado a optimización de procesos y liderazgo de proyectos de analítica avanzada. Garantiza que cada implementación genere valor operacional medible.
                  </p>
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-medium">
                    "Los datos sin acción son solo números"
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company expertise */}
          <div className="mb-20" data-aos="fade-up" data-aos-delay={600}>
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-white">Nuestra Expertise</h3>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Combinamos formación académica de primer nivel con experiencia práctica en la implementación de soluciones de IA y datos para empresas de todos los tamaños, desde startups hasta grandes corporaciones.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-accent-600/20 text-accent-300 border border-accent-500/30 text-sm font-medium">Machine Learning</span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 text-secondary-300 border border-secondary-500/30 text-sm font-medium">Data Engineering</span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-300 border border-primary-500/30 text-sm font-medium">IA Generativa</span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-secondary-500/20 text-accent-300 border border-accent-500/30 text-sm font-medium">Computer Vision</span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 text-sm font-medium">Cloud Architecture</span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 text-sm font-medium">Business Intelligence</span>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className="mt-20" data-aos="fade-up" data-aos-delay={600}>
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Valores</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/30 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/20">
                    <svg className="h-6 w-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">Ética</h4>
                <p className="text-sm text-neutral-400">Transparencia total en procesos y resultados</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/30 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500/20">
                    <svg className="h-6 w-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">Colaboración</h4>
                <p className="text-sm text-neutral-400">Tu éxito es nuestro éxito</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/30 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20">
                    <svg className="h-6 w-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">Innovación</h4>
                <p className="text-sm text-neutral-400">Siempre un paso adelante en tecnología</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/30 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2">Orientación a Personas</h4>
                <p className="text-sm text-neutral-400">La tecnología sirve a las personas, no al revés</p>
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="mt-20" data-aos="fade-up" data-aos-delay={800}>
            <h3 className="text-3xl font-bold mb-8 text-center text-white">¿Por qué ValueData?</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-500/10 to-transparent border border-accent-500/20">
                <h4 className="font-semibold text-white mb-3">Velocidad de implementación</h4>
                <p className="text-neutral-300">ROI visible en las primeras 4-6 semanas, no después de meses de implementación.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-secondary-500/10 to-transparent border border-secondary-500/20">
                <h4 className="font-semibold text-white mb-3">Expertise combinado</h4>
                <p className="text-neutral-300">Académico de clase mundial + experiencia empresarial real en Fortune 500.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/20">
                <h4 className="font-semibold text-white mb-3">Soluciones a medida</h4>
                <p className="text-neutral-300">Cada proyecto se adapta específicamente a tu industria y desafíos únicos.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
                <h4 className="font-semibold text-white mb-3">Soporte continuo</h4>
                <p className="text-neutral-300">No solo implementamos, te acompañamos en el crecimiento y evolución.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}