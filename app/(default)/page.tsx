import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <h2>Nuestra experiencia</h2>
        <p>Nos especializamos en las siguientes áreas:</p>
        <ul>
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

