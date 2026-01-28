import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Brain,
  Eye,
  Sparkles,
  Bot,
  Users,
  Route,
  Package,
  DollarSign,
  TrendingUp,
  Camera,
  MessageSquare,
  Database,
  FileSearch,
  ArrowRight,
  CheckCircle,
  Cpu,
  Zap,
  Settings,
} from 'lucide-react';

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState('optimizacion');

  const categories = [
    { id: 'optimizacion', name: 'Agentes de Optimización', icon: Calculator, color: 'from-violet-500 to-purple-600' },
    { id: 'analytics', name: 'Agentes Predictivos', icon: Brain, color: 'from-blue-500 to-cyan-600' },
    { id: 'vision', name: 'Agentes de Visión', icon: Eye, color: 'from-emerald-500 to-teal-600' },
    { id: 'ia-generativa', name: 'Agentes GenAI', icon: Sparkles, color: 'from-orange-500 to-rose-600' },
  ];

  const solutions = {
    optimizacion: [
      {
        name: 'WorkforceAgent',
        icon: Users,
        tagline: 'Planificación autónoma de turnos',
        description: 'Agente que optimiza dotación y turnos automáticamente considerando regulaciones, costos y preferencias.',
        result: '-20% costos laborales',
      },
      {
        name: 'RouteAgent',
        icon: Route,
        tagline: 'Ruteo dinámico inteligente',
        description: 'Agente que recalcula rutas en tiempo real según tráfico, urgencias y restricciones.',
        result: '-15% km recorridos',
      },
      {
        name: 'LoadAgent',
        icon: Package,
        tagline: 'Maximización de carga',
        description: 'Agente que optimiza la consolidación de carga en contenedores y camiones.',
        result: '+12% uso de espacio',
      },
    ],
    analytics: [
      {
        name: 'PricingAgent',
        icon: DollarSign,
        tagline: 'Pricing dinámico autónomo',
        description: 'Agente que ajusta precios en tiempo real según demanda, competencia y elasticidad.',
        result: '+US$1M/año',
      },
      {
        name: 'DemandAgent',
        icon: TrendingUp,
        tagline: 'Predicción y reacción automática',
        description: 'Agente que predice demanda y dispara acciones automáticas de reabastecimiento.',
        result: '-30% quiebres stock',
      },
      {
        name: 'MaintenanceAgent',
        icon: Settings,
        tagline: 'Mantenimiento predictivo',
        description: 'Agente que anticipa fallas y programa mantenimiento automáticamente.',
        result: '-40% paradas no planificadas',
      },
    ],
    vision: [
      {
        name: 'QualityAgent',
        icon: Camera,
        tagline: 'Inspección visual 24/7',
        description: 'Agente que inspecciona productos y rechaza defectos automáticamente en línea.',
        result: '99.5% precisión',
      },
      {
        name: 'CountingAgent',
        icon: Eye,
        tagline: 'Conteo y tracking automático',
        description: 'Agente que cuenta y rastrea objetos, personas o vehículos en tiempo real.',
        result: '100% automatizado',
      },
      {
        name: 'SafetyAgent',
        icon: Eye,
        tagline: 'Vigilancia de seguridad',
        description: 'Agente que detecta situaciones de riesgo y genera alertas inmediatas.',
        result: 'Alertas en <1 seg',
      },
    ],
    'ia-generativa': [
      {
        name: 'KnowledgeAgent',
        icon: FileSearch,
        tagline: 'Búsqueda inteligente de conocimiento',
        description: 'Agente que responde preguntas complejas consultando tu documentación técnica.',
        result: '-60% tiempo búsqueda',
      },
      {
        name: 'AssistantAgent',
        icon: MessageSquare,
        tagline: 'Copiloto de operaciones',
        description: 'Agente conversacional que ayuda a tu equipo con tareas y decisiones diarias.',
        result: '-40% consultas repetitivas',
      },
      {
        name: 'ProcessAgent',
        icon: Database,
        tagline: 'Automatización de documentos',
        description: 'Agente que extrae, clasifica y procesa documentos automáticamente.',
        result: '3x más documentos/día',
      },
    ],
  };

  const currentSolutions = solutions[activeCategory as keyof typeof solutions];
  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <>
      <Helmet>
        <title>Agentes de IA | ValueData - Optimización, ML, Vision, GenAI</title>
        <meta
          name="description"
          content="Catálogo de agentes de IA: WorkforceAgent, PricingAgent, QualityAgent y más. Agentes autónomos en producción para optimización, ML, computer vision y GenAI."
        />
        <meta name="keywords" content="agentes IA optimización, workforce optimization, price intelligence, computer vision industrial, GenAI empresarial, machine learning Chile, automatización decisiones" />
        <link rel="canonical" href="https://valuedata.cl/soluciones" />
        <meta property="og:title" content="Catálogo de Agentes de IA | ValueData" />
        <meta property="og:description" content="Agentes autónomos listos para tu operación: optimización, machine learning, computer vision y GenAI." />
        <meta property="og:url" content="https://valuedata.cl/soluciones" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              Catálogo de Agentes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agentes de IA{' '}
              <span className="gradient-indigo-text">listos para tu operación</span>
            </h1>
            <p className="text-xl text-gray-600">
              Cada agente ha sido probado en empresas reales. Elige el que necesitas o combínalos.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs - Visual cards instead of buttons */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative p-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-102'
                  }`}
                >
                  <IconComponent className={`h-8 w-8 mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span className={`text-sm font-semibold block ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid - More visual cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Card header with gradient */}
                  <div className={`p-6 bg-gradient-to-br ${currentCategory?.color}`}>
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {solution.result}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4">
                      {solution.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {solution.tagline}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      {solution.description}
                    </p>
                    <Link
                      to="/contacto"
                      className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700"
                    >
                      Quiero este agente
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual: How agents work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Así funcionan nuestros agentes
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                { icon: Database, title: 'Datos', desc: 'Se conectan a tus sistemas' },
                { icon: Cpu, title: 'Análisis', desc: 'Procesan en tiempo real' },
                { icon: Brain, title: 'Decisión', desc: 'Evalúan opciones óptimas' },
                { icon: Zap, title: 'Acción', desc: 'Ejecutan automáticamente' },
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas un agente personalizado?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Diseñamos agentes a medida combinando múltiples capacidades.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
          >
            Diseñar mi agente
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Solutions;
