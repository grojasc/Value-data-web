export const metadata = {
  title: "Inicio - ValueData",
  description: "Convertimos datos en ventaja decisiva",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Experience from "@/components/experience";
import Workflows from "@/components/workflows";
import About from "@/components/about";
import Stats from "@/components/stats";
import CasosExito from "@/components/casos-exito";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Experience />
      <Workflows />
      <About />
      <Stats />
      <CasosExito />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  );
}
