"use client";

import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "ROI Real en Proyectos de IA: Métricas que Importan en 2024",
    excerpt: "Descubre cómo medir el verdadero retorno de inversión en iniciativas de inteligencia artificial y evita las métricas vanidosas.",
    category: "ROI & Métricas",
    readTime: "8 min",
    date: "2024-03-15",
    featured: true
  },
  {
    id: 2,
    title: "Data Lakes vs Data Warehouses: Guía Práctica para CTOs",
    excerpt: "Una comparación técnica detallada para ayudarte a elegir la arquitectura de datos correcta según tus necesidades específicas.",
    category: "Arquitectura",
    readTime: "12 min",
    date: "2024-03-10",
    featured: true
  },
  {
    id: 3,
    title: "5 Señales de que tu Empresa Está Lista para Machine Learning",
    excerpt: "Identifica si tu organización tiene la madurez de datos necesaria para implementar ML exitosamente.",
    category: "Machine Learning",
    readTime: "6 min",
    date: "2024-03-05",
    featured: false
  }
];

const resources = [
  {
    id: 1,
    title: "Checklist de Preparación para IA",
    description: "Evaluación gratuita de 25 puntos para determinar si tu empresa está lista para implementar IA",
    type: "Checklist",
    format: "PDF",
    pages: "4 páginas"
  },
  {
    id: 2,
    title: "Calculadora de ROI para Proyectos de Datos",
    description: "Herramienta interactiva para calcular el retorno de inversión esperado en tus iniciativas de datos",
    type: "Herramienta",
    format: "Excel",
    pages: "Interactivo"
  },
  {
    id: 3,
    title: "Guía de Arquitecturas de Datos Modernas",
    description: "Whitepaper técnico con patrones, mejores prácticas y casos de uso para arquitecturas cloud-native",
    type: "Whitepaper",
    format: "PDF",
    pages: "24 páginas"
  }
];

export default function BlogResources() {
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <section id="recursos" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Blog y Recursos
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Insights y Herramientas Prácticas
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Mantente al día con las últimas tendencias en IA y datos. Descarga recursos gratuitos para acelerar tu transformación digital.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex justify-center" data-aos="fade-up" data-aos-delay={600}>
            <div className="flex rounded-full bg-gray-800/50 p-1">
              <button
                onClick={() => setActiveTab("blog")}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === "blog"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-indigo-200/65 hover:text-indigo-200"
                }`}
              >
                Últimos Artículos
              </button>
              <button
                onClick={() => setActiveTab("recursos")}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === "recursos"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-indigo-200/65 hover:text-indigo-200"
                }`}
              >
                Recursos Gratuitos
              </button>
            </div>
          </div>

          {/* Blog Posts */}
          {activeTab === "blog" && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay={800}>
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className={`group cursor-pointer rounded-2xl bg-gray-800/30 p-6 transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 border border-gray-700/50 hover:border-indigo-500/30 ${
                    post.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                      {post.category}
                    </span>
                    <time className="text-xs text-indigo-200/50">
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </time>
                  </div>
                  <h3 className="mb-3 font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-indigo-200/65 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-200/50">{post.readTime} de lectura</span>
                    <div className="flex items-center text-indigo-400 group-hover:text-indigo-300">
                      <span className="text-sm">Leer más</span>
                      <svg className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Resources */}
          {activeTab === "recursos" && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay={800}>
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="group cursor-pointer rounded-2xl bg-gray-800/30 p-6 transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 border border-gray-700/50 hover:border-indigo-500/30"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
                      {resource.type}
                    </span>
                    <div className="text-right text-xs text-indigo-200/50">
                      <div>{resource.format}</div>
                      <div>{resource.pages}</div>
                    </div>
                  </div>
                  <h3 className="mb-3 font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mb-6 text-sm text-indigo-200/65">
                    {resource.description}
                  </p>
                  <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 px-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                    Descargar Gratis
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 p-8 md:p-12 border border-indigo-500/20" data-aos="fade-up" data-aos-delay={1000}>
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Recibe insights semanales sobre IA y datos
              </h3>
              <p className="mb-6 text-indigo-200/80">
                Únete a más de 1,000 profesionales que reciben nuestro newsletter con las últimas tendencias, casos de estudio y recursos exclusivos.
              </p>
              <form className="mx-auto flex max-w-md gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 rounded-xl bg-gray-800/50 px-4 py-3 text-white placeholder-indigo-200/50 border border-gray-700/50 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Suscribirme
                </button>
              </form>
              <p className="mt-3 text-xs text-indigo-200/50">
                Sin spam. Puedes cancelar en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}