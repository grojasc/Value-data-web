"use client";

import { useState, useEffect } from "react";

const metrics = [
  {
    id: 1,
    title: "Hasta 50% de reducción",
    subtitle: "en tiempos de parada",
    description: "Gracias a mantenimiento predictivo con IA",
    icon: (
      <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    id: 2,
    title: "99.5% de precisión",
    subtitle: "en control de calidad",
    description: "Mediante computer vision avanzada",
    icon: (
      <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    id: 3,
    title: "20% de ahorro",
    subtitle: "en costos logísticos",
    description: "Con optimización algorítmica de rutas y procesos",
    icon: (
      <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  }
];

export default function WhyValueData() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-valuedata');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="why-valuedata" className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-secondary-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="mb-6">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent-500/20 to-secondary-500/20 text-accent-300 border border-accent-500/30"
                data-aos="fade-up"
              >
                ¿Por qué ValueData?
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-neutral-100 to-accent-200 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              La diferencia está en los resultados
            </h2>
            <p 
              className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              En ValueData no solo manejamos datos: los transformamos en tu ventaja competitiva más poderosa. Nuestro equipo combina expertise técnico de nivel mundial con metodologías ágiles y una comprensión profunda del impacto empresarial. Trabajamos con ética, transparencia y un compromiso absoluto con la privacidad, adaptándonos a las necesidades específicas de tu industria para generar ROI tangible que puedes medir desde la primera semana.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {metrics.map((metric, index) => (
              <div
                key={metric.id}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${metric.gradient} backdrop-blur-sm border ${metric.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/20 group`}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-lg font-medium text-accent-300 mb-4">
                    {metric.subtitle}
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Differentiators */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div 
              className="text-center p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/70 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20">
                  <svg className="h-6 w-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-white mb-2">Velocidad de implementación</h4>
              <p className="text-sm text-neutral-400">ROI visible en las primeras 4-6 semanas</p>
            </div>

            <div 
              className="text-center p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/70 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-500/20">
                  <svg className="h-6 w-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-white mb-2">Expertise combinado</h4>
              <p className="text-sm text-neutral-400">Académico de clase mundial + experiencia empresarial</p>
            </div>

            <div 
              className="text-center p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/70 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-white mb-2">Soluciones a medida</h4>
              <p className="text-sm text-neutral-400">Adaptadas a tu industria y desafíos específicos</p>
            </div>

            <div 
              className="text-center p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/70 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-white mb-2">Soporte continuo</h4>
              <p className="text-sm text-neutral-400">Te acompañamos en el crecimiento y evolución</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center" data-aos="fade-up" data-aos-delay={1000}>
            <h3 className="text-2xl font-semibold text-white mb-6">
              ¿Listo para ver estos resultados en tu empresa?
            </h3>
            <button
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Conversemos sobre tu proyecto
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}