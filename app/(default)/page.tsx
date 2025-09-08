export const metadata = {
  title: "Inicio - ValueData",
  description: "Convertimos datos en ventaja decisiva",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import WhyValueData from "@/components/why-valuedata";
import ServicesGrid from "@/components/services-grid";
import AgileProcess from "@/components/agile-process";
import IndustriesCases from "@/components/industries-cases";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import BlogResources from "@/components/blog-resources";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <WhyValueData />
      <ServicesGrid />
      <AgileProcess />
      <IndustriesCases />
      <About />
      <Testimonials />
      <BlogResources />
      <Contact />
      <Cta />
    </>
  );
}