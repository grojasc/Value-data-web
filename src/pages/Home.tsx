import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Eye, Zap, Workflow, Shield, Clock, TrendingUp, Wheat, Mountain, Truck, Factory, CheckCircle, Cpu, Database, LineChart } from 'lucide-react';

const Home = () => {
  const diferenciadores = [
    {
      icon: Bot,
      title: 'Agentes Autónomos',
      description: 'IA que ejecuta, no solo recomienda. Agentes que toman decisiones y actúan en tiempo real.',
      metric: 'Ejecución 24/7',
    },
    {
      icon: Workflow,
      title: 'Orquestación Inteligente',
      description: 'Múltiples agentes coordinados resolviendo problemas complejos de gestión.',
      metric: 'Multi-agente',
    },
    {
      icon: Shield,
      title: 'Control Total',
      description: 'Humano en el loop cuando lo necesitas. Trazabilidad completa de cada decisión.',
      metric: '100% auditable',
    },
    {
      icon: Clock,
      title: 'Producción en 90 días',
      description: 'De concepto a agentes funcionando en tu operación en 3 meses.',
      metric: '90 días',
    },
  ];

  const agentTypes = [
    {
      icon: Database,
      name: 'Agentes de Optimización',
      description: 'Toman decisiones óptimas de recursos, rutas y scheduling automáticamente.',
    },
    {
      icon: Eye,
      name: 'Agentes de Visión',
      description: 'Inspeccionan, clasifican y cuentan usando computer vision en tiempo real.',
    },
    {
      icon: LineChart,
      name: 'Agentes Predictivos',
      description: 'Anticipan demanda, detectan anomalías y predicen mantenimiento.',
    },
    {
      icon: Brain,
      name: 'Agentes GenAI',
      description: 'Procesan documentos, responden consultas y automatizan workflows.',
    },
  ];


  const industrias = [
    {
      icon: Wheat,
      name: 'Agroindustria',
      description: 'Agentes que optimizan cosecha, controlan calidad y gestionan recursos.',
      href: '/industrias#agro',
    },
    {
      icon: Mountain,
      name: 'Minería',
      description: 'Agentes de mantenimiento predictivo, seguridad y optimización de flotas.',
      href: '/industrias#mineria',
    },
    {
      icon: Truck,
      name: 'Logística',
      description: 'Agentes de ruteo dinámico, optimización de carga y forecasting.',
      href: '/industrias#logistica',
    },
    {
      icon: Factory,
      name: 'Manufactura',
      description: 'Agentes de control de calidad, scheduling y gestión de producción.',
      href: '/industrias#manufactura',
    },
  ];

  return (
    <>
      <Helmet>
        <title>ValueData | AI Agentic Analytics - Agentes Inteligentes para tu Empresa</title>
        <meta
          name="description"
          content="Creamos agentes de IA autónomos que resuelven problemas de gestión empresarial. Optimización, Computer Vision, ML y GenAI trabajando juntos."
        />
        <meta name="keywords" content="AI agents, agentic AI, autonomous agents, machine learning, computer vision, GenAI, enterprise AI, Chile" />
        <link rel="canonical" href="https://valuedata.cl" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Cpu className="h-4 w-4 mr-2" />
              AI Agentic Analytics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Agentes de IA que{' '}
              <span className="gradient-indigo-text">resuelven tu gestión</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Creamos agentes autónomos que combinan optimización, computer vision,
              machine learning y GenAI para resolver problemas complejos de tu operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Diseña tu primer agente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/soluciones"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
              >
                Ver tipos de agentes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un agente para cada desafío
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos diferentes capacidades de IA en agentes especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentTypes.map((agent, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl border border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <agent.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IA que actúa, no solo recomienda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestros agentes toman decisiones y ejecutan acciones en tu operación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciadores.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>
                <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {item.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De tu problema de gestión a agentes funcionando en producción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Define el problema</h3>
              <p className="text-gray-600">
                Identificamos qué decisiones quieres automatizar y qué datos tienes disponibles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diseñamos los agentes</h3>
              <p className="text-gray-600">
                Combinamos las capacidades de IA necesarias: optimización, visión, ML o GenAI.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agentes en producción</h3>
              <p className="text-gray-600">
                Desplegamos agentes que trabajan 24/7 con monitoreo y control humano cuando necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agentes para tu industria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencia profunda creando agentes especializados por sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrias.map((industria, index) => (
              <Link
                key={index}
                to={industria.href}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <industria.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {industria.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industria.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/industrias"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Ver todas las industrias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Assessment CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              Agent Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Descubre qué agentes necesitas
            </h2>
            <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
              En 2 semanas identificamos los procesos que puedes automatizar con agentes de IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 mr-2 text-indigo-200" />
                <span>2 semanas</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 mr-2 text-indigo-200" />
                <span>Roadmap de agentes</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 mr-2 text-indigo-200" />
                <span>ROI estimado</span>
              </div>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Solicitar Agent Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para automatizar tu gestión con agentes de IA?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Conversemos sobre qué problemas podemos resolver con agentes inteligentes.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200"
          >
            Agenda una llamada
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
