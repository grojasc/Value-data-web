import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  DollarSign,
  TrendingUp,
  Brain,
} from 'lucide-react';

const Cases = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 60 },
    },
  };

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
      results: 'Reducción de distancias recorridas en los campos, visibilidad completa de productividad por picker en tiempo real, y mejora en la planificación de temporada.',
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
      results: 'Reducción de costos de transporte mediante asignación óptima de transportistas, eliminación de discrepancias en conciliación, y trazabilidad completa del proceso desde planificación hasta romana.',
      tags: ['Optimización', 'App móvil', 'Integración ERP', 'IoT'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      icon: DollarSign,
      industry: 'Retail / Pricing',
      title: 'Agente de pricing dinámico para estrategia de precios',
      client: 'Empresa de retail',
      challenge: 'Proceso manual de fijación de precios que no respondía a cambios de demanda, competencia ni estacionalidad. Margen erosionado por reacciones tardías del equipo comercial.',
      solution: [
        {
          icon: TrendingUp,
          title: 'Agente de análisis competitivo',
          description: 'Monitoreo automático de precios de competencia y detección de oportunidades de ajuste.',
        },
        {
          icon: Brain,
          title: 'Modelo de elasticidad de demanda',
          description: 'Predicción del impacto en volumen ante cambios de precio por categoría y canal.',
        },
      ],
      results: 'Impacto significativo en ingresos anuales gracias a ajustes de precio basados en datos, con respuesta en tiempo real a cambios de mercado.',
      tags: ['Machine Learning', 'Pricing', 'Competencia', 'Automatización'],
      color: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Casos de Éxito | Agentes de IA en Producción | ValueData</title>
        <meta
          name="description"
          content="Casos reales de agentes de IA: optimización de campos agrícolas, captura de pickers, minimización de costos de transporte y conciliación automática. Chile."
        />
        <meta name="keywords" content="casos éxito IA Chile, optimización agrícola, transporte inteligente, agentes producción, automatización logística, workforce optimization" />
        <link rel="canonical" href="https://valuedata.cl/casos" />
        <meta property="og:title" content="Casos de Éxito - Agentes de IA en Producción | ValueData" />
        <meta property="og:description" content="Soluciones implementadas y funcionando: optimización de campos, transporte y conciliación automática." />
        <meta property="og:url" content="https://valuedata.cl/casos" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6"
              >
                <Bot className="h-4 w-4 mr-2" />
                Casos Reales
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Agentes en{' '}
                <span className="gradient-indigo-text">producción</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600"
              >
                Soluciones implementadas y funcionando en empresas reales.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                <img
                  src="/images/agentes.png"
                  alt="Agentes autónomos de IA en producción - ValueData"
                  className="relative rounded-2xl shadow-xl border border-white/50 w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            {cases.map((caseItem, caseIndex) => {
              const IconComponent = caseItem.icon;
              return (
                <motion.div
                  key={caseItem.id}
                  variants={itemVariants}
                  className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${caseItem.color}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + caseIndex * 0.1, type: 'spring' }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4"
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
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
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="mb-6"
                    >
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Desafío
                      </h4>
                      <p className="text-gray-700">
                        {caseItem.challenge}
                      </p>
                    </motion.div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Solución
                      </h4>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {caseItem.solution.map((sol, index) => {
                          const SolIcon = sol.icon;
                          return (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <SolIcon className="h-5 w-5 text-indigo-600" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 text-sm">{sol.title}</h5>
                                <p className="text-gray-600 text-sm">{sol.description}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>

                    {/* Results */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Resultado
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {caseItem.results}
                      </p>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: '#E0E7FF' }}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              ¿Tienes un desafío similar?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Conversemos sobre cómo podemos ayudarte.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Agenda una conversación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Cases;
