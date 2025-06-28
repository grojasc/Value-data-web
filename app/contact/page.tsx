export const metadata = {
  title: "Contacto - ValueData",
  description: "Envíanos un mensaje",
};

import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Contáctanos
            </h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
