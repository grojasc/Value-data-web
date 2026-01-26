import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Calendar,
} from 'lucide-react';

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
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Mensaje enviado
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Gracias {formData.name}. Te contactaremos en las próximas 24 horas.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <p className="text-indigo-800 font-medium">
                  Confirmación enviada a {formData.email}
                </p>
              </div>
              <button
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
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Prueba Gratuita | ValueData - 2 Semanas Sin Costo</title>
        <meta
          name="description"
          content="Prueba gratuita de 2 semanas. Mapeamos tus decisiones y diseñamos tu primer agente de IA sin costo ni compromiso."
        />
        <meta name="keywords" content="contacto IA Chile, consultoría machine learning, diagnóstico gratuito, ValueData" />
        <link rel="canonical" href="https://valuedata.cl/contacto" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <img src="/logo.png" alt="ValueData" className="h-16 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prueba gratuita de{' '}
              <span className="gradient-indigo-text">2 semanas</span>
            </h1>
            <p className="text-xl text-gray-600">
              Sin costo ni compromiso. Mapeamos tus decisiones y diseñamos tu primer agente.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cuéntanos sobre tu desafío
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y te contactamos en 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tu cargo"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Qué te interesa? *
                    </label>
                    <select
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="diagnostico">Diagnóstico gratuito</option>
                      <option value="optimizacion">Optimización matemática</option>
                      <option value="ml">Machine Learning / Analytics</option>
                      <option value="vision">Computer Vision</option>
                      <option value="ia-generativa">IA Generativa</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu desafío *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Describe brevemente el problema que quieres resolver o la oportunidad que ves..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Sin compromiso. Respuesta en 24 horas.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
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
                    <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="flex items-start py-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prueba Gratuita Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
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
            </div>

            {/* CTA Direct Call */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Agenda una llamada de 30 minutos para discutir tu proyecto.
              </p>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar llamada
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
