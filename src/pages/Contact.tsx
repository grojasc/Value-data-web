import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Calendar,
} from 'lucide-react';

const ConfettiPiece = ({ index }: { index: number }) => {
  const style = useMemo(() => {
    const colors = ['#6366F1', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    return {
      left: `${Math.random() * 100}%`,
      backgroundColor: colors[index % colors.length],
      animationDelay: `${Math.random() * 1}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    };
  }, [index]);

  return <div className="confetti-piece" style={style} />;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gonzalo@valuedata.cl',
      href: 'mailto:gonzalo@valuedata.cl',
      description: 'Respuesta en 24 horas',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+56 9 3294 2337',
      href: 'https://wa.me/56932942337',
      description: 'Lunes a viernes, 9-18h',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Santiago, Chile',
      href: null,
      description: 'Reuniones presenciales disponibles',
    },
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Mensaje Enviado | ValueData</title>
        </Helmet>

        <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {/* Confetti */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 30 }).map((_, i) => (
                <ConfettiPiece key={i} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="bg-white rounded-2xl shadow-lg p-8 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Mensaje enviado
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 mb-6"
              >
                Gracias {formData.name}. Te contactaremos en las próximas 24 horas.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-indigo-50 p-4 rounded-lg mb-6"
              >
                <p className="text-indigo-800 font-medium">
                  Confirmación enviada a {formData.email}
                </p>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    phone: '',
                    interest: '',
                    message: '',
                  });
                }}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Enviar otro mensaje
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Prueba Gratuita 2 Semanas | Agentes de IA | ValueData</title>
        <meta
          name="description"
          content="Prueba gratuita de 2 semanas: mapeamos tus decisiones y diseñamos tu primer agente de IA. Sin costo, sin compromiso. Contacto directo en Chile."
        />
        <meta name="keywords" content="prueba gratis IA, contacto agentes IA Chile, consultoría machine learning gratuita, diagnóstico IA empresarial, ValueData contacto" />
        <link rel="canonical" href="https://valuedata.cl/contacto" />
        <meta property="og:title" content="Prueba Gratuita 2 Semanas | ValueData" />
        <meta property="og:description" content="Sin costo ni compromiso. Mapeamos tus decisiones y diseñamos tu primer agente de IA." />
        <meta property="og:url" content="https://valuedata.cl/contacto" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <img src="/logo.png" alt="ValueData - Solicita tu prueba gratuita de agentes de IA" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conversemos sobre{' '}
              <span className="gradient-indigo-text">tu operación</span>
            </h1>
            <p className="text-xl text-gray-600">
              Cuéntanos tu desafío. Te ayudamos a identificar qué decisiones pueden automatizarse con agentes de IA — sin costo ni compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cuéntanos sobre tu desafío
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y un especialista te contactará en 24 horas hábiles.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <motion.div animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                        placeholder="Tu nombre"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <motion.div animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                        placeholder="tu@empresa.com"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <motion.div animate={focusedField === 'company' ? { scale: 1.02 } : { scale: 1 }}>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                        placeholder="Nombre de tu empresa"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo
                    </label>
                    <motion.div animate={focusedField === 'role' ? { scale: 1.02 } : { scale: 1 }}>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('role')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                        placeholder="Tu cargo"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <motion.div animate={focusedField === 'phone' ? { scale: 1.02 } : { scale: 1 }}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                        placeholder="+56 9 1234 5678"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Qué te interesa? *
                    </label>
                    <motion.div animate={focusedField === 'interest' ? { scale: 1.02 } : { scale: 1 }}>
                      <select
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('interest')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="diagnostico">Diagnóstico gratuito</option>
                        <option value="optimizacion">Optimización matemática</option>
                        <option value="ml">Machine Learning / Analytics</option>
                        <option value="vision">Computer Vision</option>
                        <option value="ia-generativa">IA Generativa</option>
                        <option value="otro">Otro</option>
                      </select>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu desafío *
                  </label>
                  <motion.div animate={focusedField === 'message' ? { scale: 1.01 } : { scale: 1 }}>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 focus:shadow-lg focus:shadow-indigo-500/10"
                      placeholder="Describe brevemente el problema que quieres resolver o la oportunidad que ves..."
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-xl"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Enviando...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        Enviar mensaje
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Sin compromiso. Respuesta en 24 horas.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const content = (
                    <>
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </>
                  );

                  return info.href ? (
                    <motion.a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start py-2"
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Prueba Gratuita Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-3">
                Prueba Gratuita
              </h3>
              <p className="text-green-100 mb-4 text-sm">
                2 semanas sin costo para mapear tus decisiones y diseñar tu primer agente.
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-200" />
                  100% gratuito
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-200" />
                  Sin compromiso
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-200" />
                  Roadmap + diseño de agente
                </li>
              </ul>
            </motion.div>

            {/* CTA Direct Call */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-900 rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-3">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Agenda una llamada de 30 minutos para discutir tu proyecto.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center px-4 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar llamada
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
