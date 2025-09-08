"use client";

const services = [
  {
    id: 1,
    title: "IA Generativa",
    tagline: "Automatizamos lo complejo, potenciamos lo creativo",
    description: "Implementamos soluciones de IA generativa que van más allá del hype: desde asistentes especializados hasta automatización de procesos complejos. Nos enfocamos en casos de uso que generen valor real y medible para tu operación.",
    example: "Desarrollamos un asistente de IA para atención al cliente que resolvió 78% de consultas automáticamente, reduciendo tiempos de respuesta de horas a segundos.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-orange-500/20 to-red-500/20",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400"
  },
  {
    id: 2,
    title: "Optimización Matemática",
    tagline: "Transformamos problemas complejos en soluciones optimizadas",
    description: "Aplicamos técnicas avanzadas de optimización matemática para resolver problemas de logística, asignación de recursos, planificación y programación. Utilizamos algoritmos de optimización lineal, no lineal y metaheurísticos para maximizar eficiencia operacional.",
    example: "Optimizamos la cadena de suministro de una empresa logística, reduciendo costos de transporte en 25% y mejorando tiempos de entrega en 30%.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    id: 3,
    title: "Computer Vision",
    tagline: "Damos vista a las máquinas para automatizar procesos visuales",
    description: "Desarrollamos sistemas de visión artificial que interpretan y analizan contenido visual en tiempo real. Desde detección de objetos hasta reconocimiento facial, creamos soluciones que automatizan inspecciones visuales y mejoran control de calidad.",
    example: "Implementamos un sistema de control de calidad visual que detectó defectos con 99.8% de precisión, eliminando inspecciones manuales en líneas de producción.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    title: "Ingeniería de Datos",
    tagline: "Construimos la infraestructura que hace posible la magia",
    description: "Diseñamos y desarrollamos pipelines de datos robustos y escalables que convierten el caos de información en flujos ordenados y confiables. Implementamos arquitecturas modernas de datos que soportan desde analytics básico hasta machine learning avanzado, asegurando que tus datos estén siempre listos para generar insights.",
    example: "Desarrollamos un pipeline de datos para una empresa manufacturera que redujo el tiempo de procesamiento de informes de 8 horas a 45 minutos, permitiendo decisiones en tiempo casi real.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 5,
    title: "Arquitectura de Datos",
    tagline: "Diseñamos ecosistemas de datos que crecen contigo",
    description: "Creamos arquitecturas de datos modernas y flexibles que se adaptan al crecimiento de tu organización. Desde data lakes hasta data mesh, implementamos soluciones que balancean performance, escalabilidad y costos, siempre con foco en la facilidad de uso y mantenimiento.",
    example: "Implementamos una arquitectura cloud-native que permitió a un retailer procesar 10x más transacciones con 40% menos costo operacional.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    id: 6,
    title: "Aprendizaje Automático / Analítica Avanzada",
    tagline: "Convertimos patrones en predicciones accionables",
    description: "Construimos modelos de machine learning que aprenden continuamente de tus datos para anticipar tendencias, optimizar operaciones y personalizar experiencias. Desde modelos predictivos hasta sistemas de recomendación, entregamos IA que realmente funciona.",
    example: "Implementamos un modelo predictivo para una cadena de suministro que redujo desperdicios en 35% anticipando demanda con 94% de precisión.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400"
  },
  {
    id: 7,
    title: "Soluciones Centradas en las Personas",
    tagline: "Hacemos que los datos hablen el idioma de tu equipo",
    description: "Creamos dashboards intuitivos, interfaces conversacionales y experiencias de usuario que democratizan el acceso a insights. Nos aseguramos de que cada solución técnica tenga una interfaz humana que facilite la adopción y maximice el impacto.",
    example: "Diseñamos una plataforma de self-service analytics que permitió a equipos no-técnicos crear sus propios reportes, reduciendo dependencia de IT en 60%.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400"
  }
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Soluciones Integrales en Datos e IA
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Combinamos experiencia técnica de clase mundial con un profundo entendimiento del negocio para entregar soluciones que realmente transforman tu organización.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/20`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={service.iconColor}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-accent-300 mb-4 italic">
                    "{service.tagline}"
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Example */}
                  <div className="rounded-2xl bg-neutral-800/50 p-4 border border-neutral-700/50">
                    <p className="text-xs text-neutral-400 mb-1 font-medium uppercase tracking-wider">
                      Caso de Éxito:
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {service.example}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay={800}>
            <h3 className="text-2xl font-semibold text-white mb-6">
              ¿Qué servicio necesita tu empresa?
            </h3>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Cada proyecto comienza con una consulta personalizada para entender tus desafíos específicos y diseñar la solución perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Agenda una consulta gratuita
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("casos-exito");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-8 py-4 border-2 border-accent-500 text-accent-300 font-semibold rounded-xl hover:bg-accent-500/10 hover:border-accent-400 transition-all duration-200 flex items-center justify-center"
              >
                Ver más casos de éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}