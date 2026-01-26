import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Cpu,
  Brain,
  Eye,
  Sparkles,
} from 'lucide-react';

const About = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Optimización',
      description: 'Algoritmos que encuentran la mejor solución entre millones de opciones.',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Modelos que predicen y detectan patrones en tus datos.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'IA que ve, clasifica y analiza imágenes y video.',
    },
    {
      icon: Sparkles,
      title: 'GenAI',
      description: 'LLMs que procesan texto, documentos y conversan.',
    },
  ];

  const valores = [
    {
      icon: Target,
      title: 'Resultados medibles',
      description: 'Cada agente tiene KPIs claros. Sin resultados, no hay proyecto.',
    },
    {
      icon: Shield,
      title: 'Control humano',
      description: 'Tú decides cuánta autonomía tiene cada agente.',
    },
    {
      icon: Zap,
      title: 'Velocidad',
      description: 'Agentes funcionando en 90 días, no en años.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros | ValueData - AI Agentic Analytics</title>
        <meta
          name="description"
          content="ValueData: empresa de AI Agentic Analytics. Creamos agentes autónomos que combinan optimización, ML, computer vision y GenAI."
        />
        <meta name="keywords" content="AI agentic analytics, autonomous agents, enterprise AI, Chile, LATAM" />
        <link rel="canonical" href="https://valuedata.cl/nosotros" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              AI Agentic Analytics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creamos agentes que{' '}
              <span className="gradient-indigo-text">resuelven tu gestión</span>
            </h1>
            <p className="text-xl text-gray-600">
              Combinamos optimización, ML, computer vision y GenAI en agentes autónomos
              que toman decisiones y ejecutan acciones en tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* What we do - Visual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras capacidades de IA
            </h2>
            <p className="text-xl text-gray-600">
              Las combinamos para crear agentes especializados en tu problema.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl border border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                No entregamos reportes.<br />
                Entregamos agentes funcionando.
              </h2>
              <div className="space-y-4">
                {[
                  'Agentes que toman decisiones, no dashboards que muestran datos',
                  'Código en producción en 90 días, no PowerPoints en 6 meses',
                  'ROI medible desde el primer mes de operación',
                  'Humano en el loop cuando lo necesitas',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nuestro enfoque</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-200 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Agentes que escalan con tu operación</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-200 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Integración con tus sistemas existentes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-200 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Monitoreo y mejora continua</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-200 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Soporte dedicado post-implementación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cómo trabajamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {valor.title}
                </h3>
                <p className="text-gray-600">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tus primeros agentes?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Conversemos sobre qué problemas podemos automatizar.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
          >
            Agenda una llamada
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
