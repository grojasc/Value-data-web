import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Cpu,
  Brain,
  Eye,
  Sparkles,
} from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 60, damping: 20 },
    },
  };

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
        <title>Nosotros | ValueData - Empresa de AI Agentic Analytics en Chile</title>
        <meta
          name="description"
          content="ValueData: empresa de AI Agentic Analytics en Chile. Creamos agentes autónomos que combinan optimización, ML, computer vision y GenAI. Agentes en 90 días."
        />
        <meta name="keywords" content="AI agentic analytics Chile, agentes autónomos empresa, inteligencia artificial LATAM, consultoría IA, implementación machine learning" />
        <link rel="canonical" href="https://valuedata.cl/nosotros" />
        <meta property="og:title" content="Nosotros | ValueData - AI Agentic Analytics Chile" />
        <meta property="og:description" content="Creamos agentes autónomos que combinan optimización, ML, computer vision y GenAI. Resultados en 90 días." />
        <meta property="og:url" content="https://valuedata.cl/nosotros" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6"
              >
                <Bot className="h-4 w-4 mr-2" />
                AI Agentic Analytics
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Creamos agentes que{' '}
                <span className="gradient-indigo-text">resuelven tu gestión</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600"
              >
                Combinamos optimización, ML, computer vision y GenAI en agentes autónomos
                que toman decisiones y ejecutan acciones en tu operación.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                <img
                  src="/images/team.tech.png"
                  alt="Equipo de profesionales ValueData"
                  className="relative rounded-2xl shadow-2xl border border-white/50 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Nacimos con una convicción: que la inteligencia artificial no debería quedarse en un notebook o en un PowerPoint.
              Desde Chile, construimos <strong>agentes autónomos</strong> que operan dentro de las organizaciones, integrados a sus sistemas,
              tomando decisiones que antes requerían equipos completos.
              Nuestro enfoque combina <strong>rigor técnico</strong> con profundo conocimiento del negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do - Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras capacidades de IA
            </h2>
            <p className="text-xl text-gray-600">
              Las combinamos para crear agentes especializados en tu problema.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.04,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                className="group p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl border border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-200 text-center glow-border cursor-pointer"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we're different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                No entregamos reportes.<br />
                Entregamos agentes funcionando.
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-4"
              >
                {[
                  'Agentes que toman decisiones, no dashboards que muestran datos',
                  'Código en producción en 90 días, no PowerPoints en 6 meses',
                  'ROI medible desde el primer mes de operación',
                  'Humano en el loop cuando lo necesitas',
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Visual comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-sm font-semibold text-red-800 mb-2">BI Tradicional</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>Dashboards estáticos</li>
                    <li>Reportes manuales</li>
                    <li>6+ meses implementación</li>
                    <li>Sin acción directa</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2">ValueData</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>Agentes autónomos</li>
                    <li>Decisiones en tiempo real</li>
                    <li>90 días en producción</li>
                    <li>Ejecución automática</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Nuestro enfoque</h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {[
                    'Agentes que escalan con tu operación',
                    'Integración con tus sistemas existentes',
                    'Monitoreo y mejora continua',
                    'Soporte dedicado post-implementación',
                  ].map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-indigo-200 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/corporate-office.png"
                  alt="Oficina corporativa ValueData"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Santiago, Chile</p>
                  <p className="text-sm text-indigo-200">Operando en LATAM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra metodología
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso probado para llevar agentes a tu operación
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-blue-400" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: 1,
                  title: 'Diagnóstico',
                  description: 'Analizamos tus procesos, datos disponibles y decisiones clave. Identificamos oportunidades de automatización con mayor impacto.',
                },
                {
                  step: 2,
                  title: 'Diseño',
                  description: 'Definimos la arquitectura de agentes, fuentes de datos necesarias y puntos de integración con tus sistemas.',
                },
                {
                  step: 3,
                  title: 'Construcción',
                  description: 'Desarrollamos, entrenamos y validamos los agentes con datos reales de tu operación.',
                },
                {
                  step: 4,
                  title: 'Operación',
                  description: 'Desplegamos agentes en producción con monitoreo continuo, ajuste de parámetros y soporte dedicado.',
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/20 ring-4 ring-white">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center px-5 py-2.5 bg-indigo-50 border border-indigo-100 rounded-full">
              <Zap className="h-4 w-4 text-indigo-600 mr-2" />
              <span className="text-sm font-semibold text-indigo-700">90 días promedio de implementación</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué ValueData?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lo que nos diferencia de consultoras tradicionales y proveedores de BI.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Agentes, no reportes',
                description: 'Mientras otras consultoras entregan dashboards y PDFs, nosotros entregamos agentes autónomos que toman decisiones y ejecutan acciones en tu operación.',
              },
              {
                title: 'Resultados en 90 días',
                description: 'No hacemos pilotos eternos. En 3 meses tienes agentes funcionando en producción, integrados a tus sistemas y generando valor medible.',
              },
              {
                title: 'Conocimiento de industria',
                description: 'Experiencia real en agroindustria, logística, transporte y manufactura. Entendemos tu operación porque hemos trabajado en ella.',
              },
              {
                title: 'Tecnología de punta aplicada',
                description: 'Combinamos optimización matemática, machine learning, computer vision y GenAI. No somos generalistas: cada agente usa la tecnología correcta para el problema.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cómo trabajamos
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {valor.title}
                </h3>
                <p className="text-gray-600">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quién está detrás
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un equipo que combina experiencia en ingeniería, datos e industria.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                role: 'Fundador & CEO',
                expertise: 'Ingeniería Industrial, Optimización, ML',
                description: 'Experiencia liderando proyectos de analítica avanzada en agroindustria, logística y transporte.',
              },
              {
                role: 'Ingeniería de IA',
                expertise: 'Machine Learning, Computer Vision, GenAI',
                description: 'Desarrollo de modelos en producción: optimización, predicción, visión computacional y procesamiento de lenguaje.',
              },
              {
                role: 'Ingeniería de Software',
                expertise: 'Cloud, Integración, Arquitectura',
                description: 'Integración de agentes con sistemas empresariales: ERPs, bases de datos, APIs y plataformas cloud.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-white text-2xl font-bold">{member.role.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.role}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para tus primeros agentes?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Conversemos sobre qué problemas podemos automatizar.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Agenda una llamada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
