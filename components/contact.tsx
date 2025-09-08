"use client";

import { useState } from "react";

interface FormErrors {
  email?: string;
  message?: string;
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Ingresa un email válido";
    }
    
    if (!message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    
    return newErrors;
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative bg-neutral-900 py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-16 text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-accent-500 bg-opacity-20 text-accent-300 border border-accent-500 border-opacity-30">
                ✉️ Hablemos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Transformemos tu
              <span className="text-accent-400"> Proyecto Juntos</span>
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              ¿Listo para convertir tus datos en ventaja competitiva? Contáctanos para una consulta gratuita y descubre cómo la IA puede transformar tu negocio.
            </p>
          </div>

          {/* Contact form */}
          <div className="mx-auto max-w-2xl">
            <div className="relative p-8 rounded-3xl bg-neutral-800 border border-neutral-700">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary-400 rounded-full"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-medium text-neutral-200" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full rounded-xl border px-4 py-4 text-white placeholder-neutral-400 bg-neutral-900 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? "border-red-500 focus:border-red-400 focus:ring-red-400" 
                        : "border-neutral-600 focus:border-accent-400 focus:ring-accent-400"
                    }`}
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="mb-3 block text-sm font-medium text-neutral-200" htmlFor="message">
                    Mensaje *
                    <span className="ml-2 text-xs text-neutral-400">
                      ({message.length}/500)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    className={`w-full rounded-xl border px-4 py-4 text-white placeholder-neutral-400 bg-neutral-900 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? "border-red-500 focus:border-red-400 focus:ring-red-400" 
                        : "border-neutral-600 focus:border-accent-400 focus:ring-accent-400"
                    }`}
                    rows={5}
                    maxLength={500}
                    placeholder="Cuéntanos sobre tu proyecto... (mínimo 10 caracteres)"
                    value={message}
                    onChange={(e) => handleMessageChange(e.target.value)}
                    required
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting || Object.keys(errors).length > 0
                      ? "bg-neutral-600 cursor-not-allowed opacity-50 text-neutral-400"
                      : "bg-accent-500 text-white shadow-lg hover:bg-accent-600 hover:scale-105 transform"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
                
                {status === "ok" && (
                  <div className="p-4 bg-accent-500 bg-opacity-20 rounded-xl border border-accent-500 border-opacity-30">
                    <p className="text-sm text-accent-300 flex items-center justify-center gap-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Mensaje enviado correctamente!
                    </p>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="p-4 bg-red-500 bg-opacity-20 rounded-xl border border-red-500 border-opacity-30">
                    <p className="text-sm text-red-400 flex items-center justify-center gap-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Hubo un problema al enviar el mensaje.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-neutral-800 border border-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 bg-opacity-20">
                  <svg className="h-6 w-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-neutral-300">
                <a href="mailto:gonzalo@valuedata.us" className="hover:text-accent-400 transition-colors">
                  gonzalo@valuedata.us
                </a>
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-neutral-800 border border-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 bg-opacity-20">
                  <svg className="h-6 w-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ubicación</h3>
              <p className="text-neutral-300">Santiago, Chile</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-neutral-800 border border-neutral-700">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 bg-opacity-20">
                  <svg className="h-6 w-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
              <p className="text-neutral-300">+569 32942337</p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-4">
              <a
                href="https://twitter.com/valuedata_ai"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-accent-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/value-data-ai"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-secondary-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32">
                  <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM12 24H8V13h4v11Zm-2-12.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm14 12.4h-4v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.4-.1.3-.1.7-.1 1v5.7h-4s.1-9.3 0-10.2h4v1.4c.5-.7 1.4-1.7 3.4-1.7 2.5 0 4.3 1.6 4.3 5.1V24Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}