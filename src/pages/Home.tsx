import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Brain, Eye, Workflow, Shield, Clock, Wheat, Mountain, Truck, Factory, Cpu, Database, LineChart, Users, DollarSign, Gift } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const useTypewriter = (text: string, speed = 40, delay = 1000) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const { displayed: subtitleText, done: typingDone } = useTypewriter(
    'Deja atrás el BI tradicional. Implementamos agentes autónomos que se integran a tus sistemas y toman decisiones en tiempo real.',
    30,
    1200
  );

  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  const stats = [
    { value: 50, suffix: '+', label: 'Agentes desplegados' },
    { value: 4, suffix: '', label: 'Industrias' },
    { value: 90, suffix: ' días', label: 'Implementación' },
    { value: 1, prefix: '$', suffix: 'M+', label: 'Impacto generado' },
  ];

  const diferenciadores = [
    {
      icon: Bot,
      title: 'Decisiones, no reportes',
      description: 'Nuestros agentes toman decisiones reales en tu operación. No generan PDFs ni dashboards.',
      metric: 'Acción directa',
    },
    {
      icon: Workflow,
      title: 'En TU organización',
      description: 'Los agentes operan dentro de tus sistemas, con tus datos, integrados a tu ERP.',
      metric: 'Integración total',
    },
    {
      icon: Shield,
      title: 'Control cuando quieras',
      description: 'Humano en el loop cuando lo necesitas. Trazabilidad completa de cada decisión.',
      metric: '100% auditable',
    },
    {
      icon: Clock,
      title: 'En producción real',
      description: 'Agentes funcionando en tu operación, no en un piloto eterno ni en un notebook.',
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
      image: '/images/industry-agro.png',
    },
    {
      icon: Mountain,
      name: 'Minería',
      description: 'Agentes de mantenimiento predictivo, seguridad y optimización de flotas.',
      href: '/industrias#mineria',
      image: '/images/industry-mining.png',
    },
    {
      icon: Truck,
      name: 'Logística',
      description: 'Agentes de ruteo dinámico, optimización de carga y forecasting.',
      href: '/industrias#logistica',
      image: '/images/industry-logistic.png',
    },
    {
      icon: Factory,
      name: 'Manufactura',
      description: 'Agentes de control de calidad, scheduling y gestión de producción.',
      href: '/industrias#manufactura',
      image: '/images/industry-manufacture.png',
    },
  ];

  const steps = [
    {
      number: '1',
      title: '¿Qué decisiones automatizar?',
      description: 'Identificamos las decisiones repetitivas que hoy toman tus equipos y que podrían tomar agentes.',
    },
    {
      number: '2',
      title: 'Diseñamos tus agentes',
      description: 'Combinamos optimización, visión, ML y GenAI según lo que necesita cada decisión.',
    },
    {
      number: '3',
      title: 'Agentes en tu operación',
      description: 'Desplegamos agentes integrados a tus sistemas que deciden y actúan 24/7.',
    },
  ];

  const problemas = [
    { question: '¿Cómo optimizo la dotación de personal sin afectar el servicio?', agent: 'WorkforceAgent' },
    { question: '¿Cómo reduzco costos de transporte manteniendo nivel de servicio?', agent: 'RouteAgent' },
    { question: '¿Cómo automatizo la inspección de calidad 24/7?', agent: 'QualityAgent' },
    { question: '¿Cómo anticipo fallas en equipos antes de que ocurran?', agent: 'MaintenanceAgent' },
    { question: '¿Cómo ajusto precios dinámicamente según demanda?', agent: 'PricingAgent' },
    { question: '¿Cómo proceso documentos y consultas sin saturar a mi equipo?', agent: 'ProcessAgent' },
  ];

  return (
    <>
      <Helmet>
        <title>ValueData | AI Agentic Analytics - Agentes de IA para tu Empresa</title>
        <meta
          name="description"
          content="Implementamos agentes de IA autónomos en tu organización para automatizar decisiones. No BI tradicional: agentes que ejecutan. Prueba gratis 2 semanas."
        />
        <meta name="keywords" content="agentes de IA, AI agentic analytics, automatización decisiones, inteligencia artificial empresarial, machine learning Chile, computer vision, GenAI, optimización workforce, price intelligence" />
        <link rel="canonical" href="https://valuedata.cl" />
        <meta property="og:title" content="ValueData | AI Agentic Analytics - Agentes de IA para tu Empresa" />
        <meta property="og:description" content="Implementamos agentes de IA autónomos en tu organización para automatizar decisiones. Prueba gratis 2 semanas." />
        <meta property="og:url" content="https://valuedata.cl" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden animated-grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />

        {/* Animated grid mesh SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#6366F1">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="30" y1="0" x2="30" y2="60" stroke="#6366F1" strokeWidth="0.3" opacity="0.3" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#6366F1" strokeWidth="0.3" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Logo en Hero */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full blur-2xl opacity-20 animate-pulse" />
                  <img
                    src="/logo.png"
                    alt="ValueData - AI Agentic Analytics - Agentes de IA para empresas en Chile"
                    className="h-32 md:h-40 w-auto relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6"
              >
                <Cpu className="h-4 w-4 mr-2" />
                AI Agentic Analytics
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Agentes de IA{' '}
                <span className="gradient-indigo-text">en tu organización</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed min-h-[4.5rem]"
              >
                <span>{subtitleText}</span>
                {!typingDone && <span className="typewriter-cursor" />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/contacto"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
                >
                  Conversemos sobre tu operación
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Prueba gratuita de 2 semanas
                </Link>
              </motion.div>
            </div>

            {/* Hero Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: 'spring', stiffness: 40 }}
              className="hidden lg:block relative"
            >
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/hero-dashboard.png"
                  alt="Dashboard de agentes de IA"
                  className="relative rounded-2xl shadow-2xl border border-white/50 w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Agentes activos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-indigo-text mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agent Types Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un agente para cada desafío
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos diferentes capacidades de IA en agentes especializados.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {agentTypes.map((agent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                className="group p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl border border-gray-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-200 cursor-pointer glow-border shimmer-card"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                  <agent.icon className="h-7 w-7 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section className="py-20 bg-warm-gray" style={{ backgroundColor: '#F9F7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Te identificas con alguno de estos desafíos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estos son problemas reales que nuestros agentes resuelven hoy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {problemas.map((problema, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <p className="text-lg font-semibold text-gray-900 mb-4 leading-snug">
                  {problema.question}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {problema.agent}
                  </span>
                  <Link
                    to="/soluciones"
                    className="text-indigo-500 hover:text-indigo-700 transition-colors"
                    aria-label={`Ver solución ${problema.agent}`}
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              No es BI tradicional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No construimos dashboards ni chatbots. Nuestros agentes <strong>automatizan el ciclo completo</strong>:
              ingestan datos, modelan, predicen y <strong>ejecutan acciones</strong> sin intervención manual.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {diferenciadores.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* How it works - Connected Timeline */}
      <section className="py-20 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo llevamos agentes a tu organización
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De tu problema de gestión a agentes tomando decisiones en tu operación.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2">
              <motion.div
                className="w-full bg-gradient-to-b from-indigo-500 to-blue-500 origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/30"
                    >
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados demostrados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Agentes en producción generando valor real en operaciones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-200">
                  <Users className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Workforce Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Agente que ajusta turnos y cargas laborales automáticamente según demanda y restricciones operativas.
              </p>
              <div className="bg-indigo-50 rounded-xl p-4 group-hover:bg-indigo-100 transition-colors">
                <span className="text-3xl font-bold text-indigo-600">
                  <AnimatedCounter target={20} prefix="-" suffix="%" duration={2} />
                </span>
                <p className="text-sm text-indigo-800 mt-1">reducción en recursos con mejor servicio</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                  <DollarSign className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Price Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Agente que analiza precios, competidores y demanda para definir estrategia óptima de pricing.
              </p>
              <div className="bg-green-50 rounded-xl p-4 group-hover:bg-green-100 transition-colors">
                <span className="text-3xl font-bold text-green-600">
                  +US$<AnimatedCounter target={1} suffix="M" duration={2} />
                </span>
                <p className="text-sm text-green-800 mt-1">impacto adicional en ingresos por año</p>
              </div>
            </motion.div>

            {/* Success chart image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg hidden lg:block"
            >
              <img
                src="/images/success-chart.jpg"
                alt="Resultados de agentes de IA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-bold">Resultados comprobados</p>
                <p className="text-sm text-indigo-200">Impacto medible en cada implementación</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/casos"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Ver más casos de éxito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agentes para tu industria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencia profunda creando agentes especializados por sector.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industrias.map((industria, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={industria.href}
                  className="block h-full group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="absolute inset-0">
                    <img
                      src={industria.image}
                      alt={industria.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
                  </div>
                  <div className="relative p-6 flex flex-col h-full min-h-[220px] justify-end">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <industria.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {industria.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {industria.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

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

      {/* Conversemos CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <img src="/logo.png" alt="ValueData logo" className="h-16 w-auto" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conversemos sobre tu operación
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Te ayudamos a identificar qué decisiones de tu operación pueden automatizarse con agentes de IA.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Agenda una conversación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Tienes un desafío operacional?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Conversemos sobre cómo nuestros agentes pueden resolverlo.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-500/20"
            >
              Hablemos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
