import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Wheat,
  Mountain,
  Truck,
  Factory,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 'agro',
      name: 'Agroindustria',
      icon: Wheat,
      tagline: 'IA para el campo del futuro',
      description:
        'Experiencia profunda en fruticultura, vitivinicultura, agroindustria de exportación. Entendemos los ciclos, la estacionalidad y los desafíos únicos del sector.',
      challenges: [
        'Planificación de cosecha con incertidumbre climática',
        'Optimización de dotación en temporada alta',
        'Control de calidad en packing',
        'Trazabilidad y cumplimiento de normas de exportación',
        'Gestión de inventario de insumos',
      ],
      solutions: [
        'WorkforceOptimizer para dotación de temporeros',
        'QualityVision para clasificación de fruta',
        'DemandForecast para planificación de cosecha',
        'KnowledgeHub para normativas de exportación',
      ],
      metrics: [
        { value: '-20%', label: 'Costos de mano de obra' },
        { value: '99.5%', label: 'Precisión en clasificación' },
        { value: '+12%', label: 'Carga por contenedor' },
      ],
      caseStudy: 'Exportador de fruta implementó optimización de dotación y clasificación visual, logrando reducir costos operacionales en 20% durante temporada.',
    },
    {
      id: 'mineria',
      name: 'Minería',
      icon: Mountain,
      tagline: 'Operaciones más seguras y eficientes',
      description:
        'Soluciones para minería a cielo abierto y subterránea. Foco en seguridad, eficiencia operacional y mantenimiento predictivo.',
      challenges: [
        'Mantenimiento de equipos críticos de alto costo',
        'Optimización de flotas de transporte',
        'Seguridad y prevención de accidentes',
        'Gestión de energía y sustentabilidad',
        'Planificación de extracción',
      ],
      solutions: [
        'QualityPredictor para mantenimiento predictivo',
        'RouteMax para optimización de flotas',
        'CountingVision para monitoreo de seguridad',
        'DomainCopilot para consultas operacionales',
      ],
      metrics: [
        { value: '-30%', label: 'Tiempo de detención' },
        { value: '-15%', label: 'Costos de transporte' },
        { value: '+25%', label: 'Vida útil de equipos' },
      ],
      caseStudy: 'Operación minera implementó mantenimiento predictivo en camiones de extracción, reduciendo fallas no programadas en 30%.',
    },
    {
      id: 'logistica',
      name: 'Logística',
      icon: Truck,
      tagline: 'Cada kilómetro cuenta',
      description:
        'Optimización de operaciones logísticas: distribución, transporte, almacenamiento. Soluciones que se integran con tu operación actual.',
      challenges: [
        'Ruteo eficiente con múltiples restricciones',
        'Consolidación de carga',
        'Gestión de inventario en múltiples bodegas',
        'Predicción de demanda para planificación',
        'Visibilidad de la cadena de suministro',
      ],
      solutions: [
        'RouteMax para optimización de rutas',
        'ContainerMax para consolidación de carga',
        'DemandForecast para planificación de inventario',
        'CountingVision para automatización de bodega',
      ],
      metrics: [
        { value: '-18%', label: 'Kilómetros recorridos' },
        { value: '+15%', label: 'Utilización de flota' },
        { value: '-25%', label: 'Quiebres de stock' },
      ],
      caseStudy: 'Empresa de distribución optimizó rutas de entrega, reduciendo distancia recorrida en 18% y mejorando nivel de servicio.',
    },
    {
      id: 'manufactura',
      name: 'Manufactura',
      icon: Factory,
      tagline: 'Producción inteligente',
      description:
        'Soluciones para plantas de producción: control de calidad, scheduling, mantenimiento. Industria 4.0 aplicada.',
      challenges: [
        'Control de calidad consistente',
        'Scheduling de producción óptimo',
        'Mantenimiento de líneas de producción',
        'Gestión de inventario de materias primas',
        'Eficiencia energética',
      ],
      solutions: [
        'QualityVision para inspección automatizada',
        'WorkforceOptimizer para scheduling de turnos',
        'QualityPredictor para predicción de defectos',
        'DomainCopilot para documentación técnica',
      ],
      metrics: [
        { value: '-40%', label: 'Defectos no detectados' },
        { value: '+12%', label: 'Eficiencia de línea' },
        { value: '-20%', label: 'Costos de calidad' },
      ],
      caseStudy: 'Planta de manufactura implementó inspección visual automatizada, reduciendo defectos que llegaban a cliente en 40%.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Agentes de IA por Industria | Agroindustria, Minería, Logística | ValueData</title>
        <meta
          name="description"
          content="Agentes de IA especializados por industria: agroindustria (cosecha, packing), minería (mantenimiento predictivo), logística (ruteo) y manufactura (calidad). Chile."
        />
        <meta name="keywords" content="IA agroindustria Chile, machine learning minería, optimización logística, manufactura inteligente, agentes IA por sector, automatización industrial" />
        <link rel="canonical" href="https://valuedata.cl/industrias" />
        <meta property="og:title" content="Agentes de IA por Industria | ValueData" />
        <meta property="og:description" content="Experiencia profunda en agroindustria, minería, logística y manufactura con agentes de IA especializados." />
        <meta property="og:url" content="https://valuedata.cl/industrias" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiencia profunda en{' '}
              <span className="gradient-indigo-text">tu industria</span>
            </h1>
            <p className="text-xl text-gray-600">
              No somos generalistas. Conocemos los desafíos específicos de cada sector
              porque hemos implementado soluciones en ellos.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-600 transition-colors">
                  <industry.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <industry.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{industry.name}</h2>
                    <p className="text-indigo-600 font-medium">{industry.tagline}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">{industry.description}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Desafíos que resolvemos:
                  </h3>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Soluciones aplicadas:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Conversemos sobre tu proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Metrics & Case Study */}
              <div className="space-y-6">
                {/* Metrics */}
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-lg font-semibold mb-6">Resultados típicos</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {industry.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold mb-1">{metric.value}</div>
                        <div className="text-sm text-indigo-100">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Caso de éxito</h3>
                  </div>
                  <p className="text-gray-600">{industry.caseStudy}</p>
                  <Link
                    to="/casos"
                    className="inline-flex items-center text-indigo-600 font-medium mt-4 hover:text-indigo-700"
                  >
                    Ver más casos
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué el enfoque sectorial funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La IA genérica no resuelve problemas específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hablamos tu idioma
              </h3>
              <p className="text-gray-600">
                Entendemos la terminología, los KPIs y los procesos de tu industria desde el primer día.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Implementación más rápida
              </h3>
              <p className="text-gray-600">
                Experiencia previa significa menos curva de aprendizaje y resultados más rápidos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ROI comprobado
              </h3>
              <p className="text-gray-600">
                Casos de éxito reales en tu mismo sector que demuestran el valor de las soluciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tu industria no está listada?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            También tenemos experiencia en retail, energía, salud y otros sectores.
            Conversemos sobre tu caso específico.
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

export default Industries;
