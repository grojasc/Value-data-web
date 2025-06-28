export const metadata = {
  title: "Inicio - ValueData",
  description: "Convertimos datos en ventaja decisiva",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Experience from "@/components/experience";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Experience />
      <Workflows />
      <Testimonials />
      <Cta />
    </>
  );
}
