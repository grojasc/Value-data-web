"use client";

import { useState } from "react";

const processSteps = [
  {
    id: 1,
    phase: "Ideación",
    title: "Exploramos y definimos el problema junto a ti",
    description: "Realizamos un diagnóstico completo de tu situación actual, identificamos oportunidades de valor y diseñamos una hoja de ruta personalizada.",
    timeline: "2-3 semanas",
    deliverables: ["Diagnóstico completo", "Identificación de oportunidades", "Hoja de ruta personalizada"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 2,
    phase: "Setup & Kickoff",
    title: "Establecemos las bases técnicas y del equipo",
    description: "Configuramos infraestructura, definimos arquitectura de datos y alineamos expectativas con todos los stakeholders clave.",
    timeline: "1-2 semanas",
    deliverables: ["Infraestructura configurada", "Arquitectura de datos definida", "Expectativas alineadas"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 3,
    phase: "Desarrollo e Iteración",
    title: "Construimos y refinamos la solución de forma ágil",
    description: "Desarrollamos en sprints cortos con feedback continuo, asegurando que cada iteración agregue valor medible.",
    timeline: "6-12 semanas",
    deliverables: ["Desarrollo en sprints", "Feedback continuo", "Iteraciones con valor medible"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 4,
    phase: "Puesta en Marcha",
    title: "Implementamos y escalamos la solución",
    description: "Desplegamos en producción, capacitamos a tu equipo y establecemos métricas de monitoreo continuo.",
    timeline: "2-4 semanas",
    deliverables: ["Despliegue en producción", "Capacitación del equipo", "Monitoreo continuo"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function AgileProcess() {
  const [activeStep, setActiveStep] = useState(1);
  
  const activeStepData = processSteps.find(step => step.id === activeStep);

  return (
    <section id="proceso" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Metodología Ágil
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Nuestra Metodología: De Oportunidad a Solución Escalable
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Esta aproximación sistemática convierte una oportunidad identificada en una solución escalable y sostenible, minimizando riesgos y maximizando el valor entregado en cada fase. Cada paso está diseñado para generar valor incremental y medible.
            </p>
          </div>

          {/* Process navigation */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay={600}>
            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                    activeStep === step.id
                      ? "border-indigo-500/50 bg-indigo-500/10 shadow-lg shadow-indigo-500/20"
                      : "border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50 hover:bg-gray-800/50"
                  }`}
                >
                  {/* Step number */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      activeStep === step.id
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {step.id}
                    </div>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                      activeStep === step.id
                        ? "text-indigo-400"
                        : "text-gray-400"
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="mb-1 text-xs font-medium text-indigo-200/50 uppercase tracking-wider">
                      {step.phase}
                    </div>
                    <h3 className="mb-2 font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-indigo-200/65 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeStep === step.id && (
                    <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active step details */}
          {activeStepData && (
            <div className="rounded-2xl bg-gray-800/50 p-8 md:p-12" data-aos="fade-up" data-aos-delay={800}>
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left column - Description */}
                <div>
                  <div className="mb-2 text-sm font-medium text-indigo-400 uppercase tracking-wider">
                    Fase {activeStepData.id}: {activeStepData.phase}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {activeStepData.title}
                  </h3>
                  <p className="mb-6 text-lg text-indigo-200/80 leading-relaxed">
                    {activeStepData.description}
                  </p>
                  
                  {/* Timeline */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20">
                      <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-indigo-200/50">Duración estimada</div>
                      <div className="font-semibold text-white">{activeStepData.timeline}</div>
                    </div>
                  </div>
                </div>

                {/* Right column - Deliverables */}
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Entregables Clave
                  </h4>
                  <div className="space-y-3">
                    {activeStepData.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                          <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-indigo-200/80">{deliverable}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process benefits */}
                  <div className="mt-8 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 border border-indigo-500/20">
                    <h5 className="mb-3 font-semibold text-white">Beneficios del Enfoque Ágil</h5>
                    <ul className="space-y-2 text-sm text-indigo-200/70">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Minimización de riesgos técnicos y de negocio
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Validación temprana con feedback continuo
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Adaptabilidad a cambios de requisitos
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                        Entrega de valor incremental y medible
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}