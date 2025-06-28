export const metadata = {
  title: "Inicio - ValueData",
  description: "Convertimos datos en ventaja decisiva",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="mb-2 text-2xl font-semibold">Nuestra experiencia</h2>
        <p className="mb-4">Nos especializamos en las siguientes áreas:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Ingeniería de datos</li>
          <li>Arquitectura de datos</li>
          <li>Gobernanza de datos y privacidad</li>
          <li>IA generativa</li>
          <li>Aprendizaje automático</li>
          <li>Datos centrados en las personas</li>
        </ul>
      </section>
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
