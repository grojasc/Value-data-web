export default function Credentials() {
  const certifications = [
    { name: "AWS Certified Machine Learning", level: "Specialty" },
    { name: "Google Cloud Professional", level: "Data Engineer" },
    { name: "Microsoft Azure AI", level: "Engineer Associate" },
    { name: "Databricks Certified", level: "Data Engineer" }
  ];

  const technologies = [
    { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "Databricks"] },
    { category: "ML/AI Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"] },
    { category: "Data Engineering", items: ["Apache Spark", "Kafka", "Airflow", "dbt"] },
    { category: "Languages", items: ["Python", "R", "Scala", "SQL"] }
  ];

  return (
    <section className="relative bg-gray-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Credenciales y Experiencia
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Expertise Certificado y Comprobado
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Nuestro equipo mantiene las certificaciones más exigentes de la industria y domina las tecnologías más avanzadas del ecosistema de datos e IA.
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay={600}>
            <h3 className="mb-8 text-2xl font-semibold text-center">Certificaciones Profesionales</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name} 
                  className="rounded-2xl bg-gray-800/30 p-6 text-center border border-gray-700/50 hover:border-indigo-500/30 transition-all hover:bg-gray-800/50"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                      <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{cert.name}</h4>
                  <p className="text-sm text-indigo-200/65">{cert.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div data-aos="fade-up" data-aos-delay={800}>
            <h3 className="mb-8 text-2xl font-semibold text-center">Stack Tecnológico</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.category}
                  className="rounded-2xl bg-gray-800/30 p-6 border border-gray-700/50"
                >
                  <h4 className="mb-4 font-semibold text-white">{tech.category}</h4>
                  <div className="space-y-2">
                    {tech.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                        <span className="text-sm text-indigo-200/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success metrics */}
          <div className="mt-16 rounded-2xl bg-gray-800/50 p-8 md:p-12" data-aos="fade-up" data-aos-delay={1000}>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-indigo-400">500+</div>
                <div className="text-indigo-200/65">Expertos en Red Global</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-indigo-400">98%</div>
                <div className="text-indigo-200/65">Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-indigo-400">50+</div>
                <div className="text-indigo-200/65">Proyectos Entregados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}