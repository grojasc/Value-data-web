"use client";

import { useState } from "react";

const industries = [
  {
    id: "manufactura",
    name: "Manufactura",
    description: "La industria 4.0 demanda eficiencia máxima y cero desperdicios. Ayudamos a empresas manufactureras a implementar mantenimiento predictivo, control de calidad automatizado y optimización de procesos mediante IA y IoT.",
    challenges: ["Paradas no programadas costosas", "Control de calidad manual", "Desperdicios en producción", "Falta de visibilidad en tiempo real"],
    cases: [
      {
        id: 1,
        title: "Mantenimiento Predictivo en Planta Química: 50% menos tiempo de parada",
        problem: "Paradas no programadas costaban $2M mensuales",
        solution: "Sensores IoT + ML predictivo para anticipar fallas",
        results: "Redujo paradas imprevistas en 50% y ahorró $1M mensual",
        metrics: ["50% reducción paradas", "$1M ahorro mensual", "99.2% precisión predicciones"]
      },
      {
        id: 2,
        title: "Control de Calidad con Computer Vision: 99.5% de precisión",
        problem: "Inspección manual lenta y propensa a errores",
        solution: "Sistema de visión artificial para detección automática",
        results: "99.5% precisión y 80% reducción en tiempo de inspección",
        metrics: ["99.5% precisión", "80% menos tiempo", "0 defectos críticos"]
      }
    ],
    bgGradient: "from-blue-900/20 to-cyan-900/20",
    accentColor: "blue"
  },
  {
    id: "retail",
    name: "Retail",
    description: "El comercio moderno requiere personalización a escala y decisiones en tiempo real. Desarrollamos soluciones de recomendación, optimización de inventarios y análisis de comportamiento del cliente.",
    challenges: ["Baja conversión online", "Inventario desoptimizado", "Experiencia no personalizada", "Pérdida de clientes"],
    cases: [
      {
        id: 1,
        title: "Personalización con IA: 35% aumento en conversión",
        problem: "Baja conversión en e-commerce (2.1%)",
        solution: "Motor de recomendaciones ML + personalización dinámica",
        results: "Aumentó conversión a 2.8% y AOV en $47",
        metrics: ["35% más conversión", "+$47 AOV", "2.8x engagement"]
      },
      {
        id: 2,
        title: "Optimización de Inventario: 25% reducción en costos",
        problem: "Exceso de stock en productos de baja rotación",
        solution: "ML para predicción de demanda y optimización automática",
        results: "25% reducción costos inventario y 40% menos stockouts",
        metrics: ["25% menos costos", "40% menos stockouts", "94% precisión demanda"]
      }
    ],
    bgGradient: "from-purple-900/20 to-pink-900/20",
    accentColor: "purple"
  },
  {
    id: "fintech",
    name: "Fintech",
    description: "El sector financiero necesita velocidad, precisión y cumplimiento normativo. Implementamos sistemas de detección de fraude, análisis de riesgo crediticio y automatización de procesos regulatorios.",
    challenges: ["Fraudes sofisticados", "Evaluación de riesgo lenta", "Compliance complejo", "Experiencia de usuario lenta"],
    cases: [
      {
        id: 1,
        title: "Detección de Fraude en Tiempo Real: 99.2% de precisión",
        problem: "$500K pérdidas mensuales por fraude",
        solution: "ML en tiempo real + análisis comportamental",
        results: "Redujo fraudes en 87% manteniendo UX fluida",
        metrics: ["99.2% precisión", "87% menos fraudes", "<100ms respuesta"]
      },
      {
        id: 2,
        title: "Análisis de Riesgo Crediticio: 60% más rápido",
        problem: "Evaluación crediticia manual de 5-7 días",
        solution: "Modelos ML con datos alternativos + automatización",
        results: "Decisiones en 2 horas con 15% mejor precisión",
        metrics: ["60% más rápido", "15% mejor precisión", "40% más aprobaciones"]
      }
    ],
    bgGradient: "from-green-900/20 to-emerald-900/20",
    accentColor: "green"
  }
];

export default function IndustriesCases() {
  const [activeIndustry, setActiveIndustry] = useState("manufactura");
  const [selectedCase, setSelectedCase] = useState<{
    id: number;
    title: string;
    problem: string;
    solution: string;
    results: string;
    metrics: string[];
  } | null>(null);

  const currentIndustry = industries.find(ind => ind.id === activeIndustry);
  
  const getAccentColors = (color: string) => {
    const colors: Record<string, {
      button: string;
      buttonHover: string;
      text: string;
      border: string;
      gradient: string;
    }> = {
      blue: {
        button: "bg-blue-500 text-white",
        buttonHover: "hover:bg-blue-600",
        text: "text-blue-400",
        border: "border-blue-500/30",
        gradient: "from-blue-500/10 to-cyan-500/10"
      },
      purple: {
        button: "bg-purple-500 text-white",
        buttonHover: "hover:bg-purple-600",
        text: "text-purple-400",
        border: "border-purple-500/30",
        gradient: "from-purple-500/10 to-pink-500/10"
      },
      green: {
        button: "bg-green-500 text-white",
        buttonHover: "hover:bg-green-600",
        text: "text-green-400",
        border: "border-green-500/30",
        gradient: "from-green-500/10 to-emerald-500/10"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="casos-exito" className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-16 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Industrias y Casos de Éxito
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

          {/* Industry Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay={600}>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? "bg-gradient-to-r from-accent-500 to-secondary-500 text-white shadow-lg scale-105"
                    : "bg-neutral-800/50 text-neutral-300 border border-neutral-700/50 hover:bg-neutral-700/50 hover:text-white"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Industry Content */}
          {currentIndustry && (
            <div className="space-y-12">
              {/* Industry Overview */}
              <div 
                className={`rounded-3xl bg-gradient-to-br ${currentIndustry.bgGradient} backdrop-blur-sm border border-white/10 p-8 md:p-12`}
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {currentIndustry.name}: Desafíos y Oportunidades
                    </h3>
                    <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                      {currentIndustry.description}
                    </p>
                    <button
                      onClick={() => {
                        const element = document.getElementById("contacto");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`inline-flex items-center gap-2 px-6 py-3 ${getAccentColors(currentIndustry.accentColor).button} ${getAccentColors(currentIndustry.accentColor).buttonHover} font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
                    >
                      Conversemos sobre tu industria
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Principales Desafíos:</h4>
                    <div className="space-y-3">
                      {currentIndustry.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/50">
                          <div className={`h-2 w-2 rounded-full ${getAccentColors(currentIndustry.accentColor).text.replace('text-', 'bg-')}`}></div>
                          <span className="text-neutral-300">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cases Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {currentIndustry.cases.map((case_, index) => (
                  <div
                    key={case_.id}
                    className={`group rounded-3xl bg-gradient-to-br ${getAccentColors(currentIndustry.accentColor).gradient} backdrop-blur-sm border ${getAccentColors(currentIndustry.accentColor).border} p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/20 cursor-pointer`}
                    data-aos="fade-up"
                    data-aos-delay={900 + index * 200}
                    onClick={() => setSelectedCase(case_)}
                  >
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent-300 transition-colors">
                        {case_.title}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-red-400 uppercase tracking-wider mb-2">Problema:</p>
                          <p className="text-sm text-neutral-300">{case_.problem}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">Solución:</p>
                          <p className="text-sm text-neutral-300">{case_.solution}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-green-400 uppercase tracking-wider mb-2">Resultados:</p>
                          <p className="text-sm text-neutral-300 mb-4">{case_.results}</p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {case_.metrics.map((metric, idx) => (
                          <span 
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getAccentColors(currentIndustry.accentColor).button}`}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${getAccentColors(currentIndustry.accentColor).text}`}>
                          Caso de Éxito Verificado
                        </span>
                        <div className={`flex items-center gap-1 ${getAccentColors(currentIndustry.accentColor).text} group-hover:translate-x-1 transition-transform`}>
                          <span className="text-sm">Ver detalles</span>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay={1200}>
            <div className="rounded-3xl bg-gradient-to-r from-accent-500/10 via-secondary-500/10 to-accent-500/10 p-8 md:p-12 border border-accent-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                ¿Tu industria necesita una transformación similar?
              </h3>
              <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto">
                Cada empresa es única, pero los resultados son consistentes: mayor eficiencia, menores costos y decisiones más inteligentes basadas en datos.
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
                  Agenda tu consulta personalizada
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("servicios");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="px-8 py-4 border-2 border-accent-500 text-accent-300 font-semibold rounded-xl hover:bg-accent-500/10 hover:border-accent-400 transition-all duration-200 flex items-center justify-center"
                >
                  Conoce todos nuestros servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Detail Modal (simplified) */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedCase.title}</h3>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Problema Inicial:</h4>
                <p className="text-neutral-300">{selectedCase.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Solución Implementada:</h4>
                <p className="text-neutral-300">{selectedCase.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Resultados Obtenidos:</h4>
                <p className="text-neutral-300">{selectedCase.results}</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent-400 mb-3">Métricas Clave:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-2 bg-accent-500 text-white rounded-full text-sm font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}