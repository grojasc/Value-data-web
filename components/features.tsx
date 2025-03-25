export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Header */}
          <h2 className="text-3xl font-semibold">Servicios de Consultoría</h2>
          <p className="text-lg text-indigo-200/65">
            Nuestra experiencia ayuda a tu negocio a prosperar en las siguientes áreas:
          </p>
          {/* Lista de características */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3>Ingeniería de datos</h3>
              <p>Diseñamos e implementamos flujos de datos escalables para soportar inteligencia empresarial.</p>
            </div>
            <div>
              <h3>Arquitectura de datos</h3>
              <p>Desarrollamos arquitecturas robustas para gestionar y almacenar datos de manera eficiente.</p>
            </div>
            <div>
              <h3>Gobernanza de datos y privacidad</h3>
              <p>Aseguramos que tus datos sean seguros, cumplan con normativas y sean accesibles manteniendo estándares de privacidad.</p>
            </div>
            <div>
              <h3>IA generativa</h3>
              <p>Implementamos IA para automatizar procesos, optimizar la toma de decisiones y crear soluciones innovadoras.</p>
            </div>
            <div>
              <h3>Aprendizaje automático</h3>
              <p>Construimos y desplegamos modelos de aprendizaje automático para extraer información de datos y predecir resultados.</p>
            </div>
            <div>
              <h3>Datos centrados en las personas</h3>
              <p>Desarrollamos soluciones de datos alineadas con las necesidades humanas, mejorando la experiencia del usuario y el valor empresarial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

