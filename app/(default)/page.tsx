export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
@@ -13,12 +7,23 @@
export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
		<section>
			<h2>Nuestros Servicios</h2>
			<p>Nos especializamos en:</p>
			<ul>
			  <li>Data Engineering</li>
			  <li>Data Architecture</li>
			  <li>Data Governance & Privacy</li>
			  <li>Generative AI</li>
			  <li>Machine Learning</li>
			  <li>Human-Centered Data</li>
			  <li>Optimization Models</li>
			</ul>
		</section>
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
