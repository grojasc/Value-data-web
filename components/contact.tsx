"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
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
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-gray-200 placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-indigo-200/65" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="form-textarea w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-gray-200 placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all duration-200"
              >
                Enviar mensaje
              </button>
              {status === "ok" && (
                <p className="text-center text-sm text-green-400">¡Mensaje enviado correctamente!</p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">Hubo un problema al enviar el mensaje.</p>
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