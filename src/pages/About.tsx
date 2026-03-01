import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Users } from 'lucide-react';

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

  return (
    <>
      <Helmet>
        <title>Nosotros | ValueData - Equipo de AI Agentic Analytics en Chile</title>
        <meta
          name="description"
          content="Conoce al equipo fundador de ValueData: expertos en IA, optimización, machine learning y computer vision construyendo agentes autónomos desde Chile."
        />
        <meta name="keywords" content="equipo ValueData, fundadores IA Chile, expertos machine learning, consultores inteligencia artificial LATAM" />
        <link rel="canonical" href="https://valuedata.cl/nosotros" />
        <meta property="og:title" content="Nosotros | ValueData - Equipo AI Agentic Analytics Chile" />
        <meta property="og:description" content="Conoce al equipo fundador de ValueData: expertos en IA, optimización, ML y computer vision." />
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
                <Users className="h-4 w-4 mr-2" />
                Nuestro Equipo
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Las personas detrás de{' '}
                <span className="gradient-indigo-text">los agentes</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600"
              >
                Un equipo que combina experiencia en ingeniería, datos e industria
                para construir agentes autónomos que transforman operaciones.
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
                  src="/images/team-tech real.jpeg"
                  alt="Equipo fundador ValueData - Gonzalo Rojas, Manuel Muñoz y Jorge Cordero"
                  className="relative rounded-2xl shadow-2xl border border-white/50 w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
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
            </p>
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
              Cofundadores con experiencia real en industria, datos e ingeniería.
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
                name: 'Gonzalo Rojas Chacón',
                initials: 'GR',
                role: 'CoFounder & AI/Data Architect',
                expertise: 'MBA, MSc AI, Ing. Civil Industrial',
                description: 'Lidera la arquitectura de agentes de IA y la estrategia de datos. Experiencia en proyectos de analítica avanzada en agroindustria, logística y transporte.',
              },
              {
                name: 'Manuel Muñoz',
                initials: 'MM',
                role: 'CoFounder & Data Scientist',
                expertise: 'Ing. Civil en Computación',
                description: 'Responsable del desarrollo de modelos de machine learning, computer vision y GenAI en producción.',
              },
              {
                name: 'Jorge Cordero',
                initials: 'JC',
                role: 'CoFounder & Optimization Lead',
                expertise: 'Licenciado en Ingeniería',
                description: 'Lidera los modelos de optimización matemática: scheduling, ruteo, asignación de recursos y planificación operacional.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-white text-lg font-bold">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-indigo-600 font-semibold mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 mb-3">{member.expertise}</p>
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
              ¿Quieres conocer cómo trabajamos?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Descubre nuestra metodología y capacidades técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/metodologia"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                Nuestra metodología
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-400 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 border border-indigo-400"
              >
                Agenda una llamada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
