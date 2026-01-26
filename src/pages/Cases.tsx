import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Wheat,
  Truck,
  Bot,
  MapPin,
  Users,
  Calculator,
  Smartphone,
  Scale,
  FileCheck,
} from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      id: 1,
      icon: Wheat,
      industry: 'Agroindustria',
      title: 'Optimización de layout de campos y captura de pickers',
      client: 'Empresa agrícola',
      challenge: 'Campos con distribución ineficiente que generaba excesiva distancia recorrida por los trabajadores. Además, falta de visibilidad sobre la productividad real de los pickers en terreno.',
      solution: [
        {
          icon: MapPin,
          title: 'Optimización matemática de layout',
          description: 'Algoritmo que calcula la distribución óptima del campo para minimizar distancias recorridas.',
        },
        {
          icon: Users,
          title: 'Sistema de captura de pickers',
          description: 'Registro digital de productividad por trabajador en tiempo real.',
        },
      ],
      results: 'Reducción significativa en distancias recorridas y visibilidad completa de productividad por picker.',
      tags: ['Optimización', 'Layout', 'Productividad'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 2,
      icon: Truck,
      industry: 'Transporte',
      title: 'Minimización de costos y conciliación de transporte',
      client: 'Empresa de transporte',
      challenge: 'Costos de transporte sin optimizar y proceso manual de conciliación entre lo planificado, lo ejecutado y lo pesado en romana.',
      solution: [
        {
          icon: Calculator,
          title: 'Optimización de costos',
          description: 'Modelo de minimización de costos considerando uso óptimo de transportistas.',
        },
        {
          icon: Smartphone,
          title: 'App móvil conectada a ERP',
          description: 'Aplicación para transportistas integrada directamente con el sistema de gestión.',
        },
        {
          icon: Scale,
          title: 'Integración con romana',
          description: 'Conexión directa con báscula para conciliación automática de pesos.',
        },
        {
          icon: FileCheck,
          title: 'Conciliación automática',
          description: 'Cruce automático entre planificado, ejecutado y pesado.',
        },
      ],
      results: 'Reducción de costos de transporte y eliminación de discrepancias en conciliación.',
      tags: ['Optimización', 'App móvil', 'Integración ERP', 'IoT'],
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Casos de Éxito | ValueData - AI Agentic Analytics</title>
        <meta
          name="description"
          content="Casos reales de implementación de agentes de IA en agroindustria y transporte. Optimización, integración y automatización."
        />
        <meta name="keywords" content="casos de éxito IA, optimización agrícola, transporte inteligente, Chile" />
        <link rel="canonical" href="https://valuedata.cl/casos" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              Casos Reales
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agentes en{' '}
              <span className="gradient-indigo-text">producción</span>
            </h1>
            <p className="text-xl text-gray-600">
              Soluciones implementadas y funcionando en empresas reales.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseItem) => {
              const IconComponent = caseItem.icon;
              return (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${caseItem.color}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <span className="text-white/80 text-sm">{caseItem.industry}</span>
                          <h3 className="text-xl font-bold text-white">{caseItem.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Desafío
                      </h4>
                      <p className="text-gray-700">
                        {caseItem.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Solución
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseItem.solution.map((sol, index) => {
                          const SolIcon = sol.icon;
                          return (
                            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl">
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <SolIcon className="h-5 w-5 text-indigo-600" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 text-sm">{sol.title}</h5>
                                <p className="text-gray-600 text-sm">{sol.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Resultado
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {caseItem.results}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tienes un desafío similar?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Conversemos sobre cómo podemos ayudarte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
          >
            Agenda una conversación
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cases;
