"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "manufactura",
    title: "Manufactura - Industria 4.0",
    description: "Optimización de procesos productivos y mantenimiento predictivo",
    content: {
      overview: "Transformación completa de procesos de manufactura mediante IA y IoT",
      metrics: [
        { label: "Mantenimiento Predictivo", value: "50% menos tiempo parado", description: "IoT y ML para predecir fallas antes que ocurran" },
        { label: "Quality Control IA", value: "99.5% precisión en calidad", description: "Computer vision para detección automática de defectos" },
        { label: "Supply Chain Optimization", value: "20% reducción en costos", description: "Optimización de rutas e inventarios con algoritmos avanzados" }
      ]
    }
  },
  {
    id: "retail",
    title: "Retail - Experiencia del Cliente",
    description: "Personalización e insights de comportamiento del consumidor",
    content: {
      overview: "Implementación de IA para mejorar la experiencia del cliente y optimizar inventarios",
      metrics: [
        { label: "Personalización IA", value: "45% aumento en ventas", description: "Recomendaciones inteligentes basadas en comportamiento" },
        { label: "Gestión de Inventario", value: "30% reducción en excedentes", description: "Predicción de demanda con machine learning" },
        { label: "Análisis de Sentimientos", value: "Real-time insights", description: "Monitoreo de redes sociales y feedback" }
      ]
    }
  },
  {
    id: "fintech",
    title: "Fintech - Detección de Fraude",
    description: "Sistemas de seguridad y análisis de riesgo en tiempo real",
    content: {
      overview: "Desarrollo de sistemas de detección de fraude y análisis de riesgo crediticio",
      metrics: [
        { label: "Detección de Fraude", value: "99.8% precisión", description: "ML para identificar transacciones sospechosas" },
        { label: "Análisis de Riesgo", value: "60% más rápido", description: "Evaluación crediticia automatizada" },
        { label: "Cumplimiento", value: "100% compliance", description: "Monitoreo automático de regulaciones" }
      ]
    }
  }
];

export default function CasosExito() {
  const [activeTab, setActiveTab] = useState("manufactura");

  const activeCase = caseStudies.find(cs => cs.id === activeTab);

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
              Historias reales de transformación digital que generan resultados medibles
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Cada proyecto incluye desafíos únicos, soluciones personalizadas y métricas de impacto que demuestran valor tangible para nuestros clientes.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="mb-12" data-aos="fade-up">
            {/* Tab navigation */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === study.id
                      ? "bg-indigo-500 text-white scale-105 shadow-lg shadow-indigo-500/25"
                      : "bg-gray-800/50 text-indigo-200/65 hover:bg-gray-700/50 hover:text-indigo-200"
                  }`}
                >
                  {study.title.split(" - ")[0]}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeCase && (
              <div className="rounded-2xl bg-gray-800/50 p-8 transition-all duration-500">
                <h3 className="mb-6 text-2xl font-semibold text-center">{activeCase.title}</h3>
                <p className="text-lg text-indigo-200/65 text-center mb-8">
                  {activeCase.description}
                </p>
                <p className="text-center mb-8 text-indigo-200/80">
                  {activeCase.content.overview}
                </p>
                
                <div className="grid gap-6 md:grid-cols-3">
                  {activeCase.content.metrics.map((metric, index) => (
                    <div 
                      key={metric.label} 
                      className="rounded-2xl bg-gray-800 p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-4 flex justify-center">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          index === 0 ? "bg-green-500/20" : 
                          index === 1 ? "bg-blue-500/20" : 
                          "bg-purple-500/20"
                        }`}>
                          <svg className={`h-6 w-6 ${
                            index === 0 ? "text-green-400" : 
                            index === 1 ? "text-blue-400" : 
                            "text-purple-400"
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {index === 1 && <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>}
                            {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                          </svg>
                        </div>
                      </div>
                      <h4 className="mb-2 font-semibold text-center">{metric.label}</h4>
                      <p className="text-sm text-indigo-200/65 text-center mb-3">
                        {metric.value}
                      </p>
                      <p className="text-xs text-indigo-200/50 text-center">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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