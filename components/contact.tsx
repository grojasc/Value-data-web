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
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Ingresa un email válido";
    }
    
    // Message validation
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
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    if (errors.message) {
      const newErrors = { ...errors };
      delete newErrors.message;
      setErrors(newErrors);
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
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              ¿Listo para transformar tu negocio con datos e IA? Contáctanos para una consulta gratuita.
            </p>
          </div>

          {/* Contact form */}
          <div className="mx-auto max-w-lg" data-aos="fade-up" data-aos-delay={600}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-input w-full rounded-lg border px-4 py-3 text-gray-200 placeholder-gray-600 bg-gray-900/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                      : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 animate-pulse">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-indigo-200/65" htmlFor="message">
                  Mensaje *
                  <span className="ml-2 text-xs text-indigo-200/50">
                    ({message.length}/500)
                  </span>
                </label>
                <textarea
                  id="message"
                  className={`form-textarea w-full rounded-lg border px-4 py-3 text-gray-200 placeholder-gray-600 bg-gray-900/50 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                      : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                  rows={5}
                  maxLength={500}
                  placeholder="Cuéntanos sobre tu proyecto... (mínimo 10 caracteres)"
                  value={message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 animate-pulse">{errors.message}</p>
                )}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`btn w-full py-3 text-white transition-all duration-200 ${
                  isSubmitting || Object.keys(errors).length > 0
                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] hover:scale-105 transform"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
              {status === "ok" && (
                <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-400 flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ¡Mensaje enviado correctamente!
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="text-center p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                  <p className="text-sm text-red-400 flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Hubo un problema al enviar el mensaje.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay={800}>
            <div className="rounded-2xl bg-gray-800/50 p-8">
              <h3 className="mb-4 text-xl font-semibold">Información de contacto</h3>
              <div className="space-y-2 text-indigo-200/65">
                <p>
                  <a href="mailto:gonzalo@valuedata.us" className="hover:text-indigo-400 transition-colors">
                    gonzalo@valuedata.us
                  </a>
                </p>
                <p>Santiago, Chile</p>
                <p>+569 32942337</p>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://twitter.com/valuedata_ai"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/value-data-ai"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors"
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
      </div>
    </section>
  );
}