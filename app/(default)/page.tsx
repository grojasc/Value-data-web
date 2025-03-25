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
        <h2>Our Expertise</h2>
        <p>We specialize in the following areas:</p>
        <ul>
          <li>Data Engineering</li>
          <li>Data Architecture</li>
          <li>Data Governance & Privacy</li>
          <li>Generative AI</li>
          <li>Machine Learning</li>
          <li>Human-Centered Data</li>
        </ul>
      </section>
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
