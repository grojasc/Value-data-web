"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="mx-auto max-w-[400px] space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="form-input w-full"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          className="form-textarea w-full"
          rows={4}
          placeholder="Tu mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
        Enviar
      </button>
      {status === "ok" && (
        <p className="text-center text-sm text-green-500">Mensaje enviado correctamente.</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-500">Hubo un problema al enviar.</p>
      )}
    </form>
  );
}
