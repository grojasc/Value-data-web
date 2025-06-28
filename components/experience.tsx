import Spotlight from "@/components/spotlight";

const experiencias = [
  {
    titulo: "Ingeniería de datos",
    descripcion: "Diseñamos e implementamos flujos de datos escalables para soportar inteligencia empresarial.",
  },
  {
    titulo: "Arquitectura de datos",
    descripcion: "Desarrollamos arquitecturas robustas para gestionar y almacenar datos de manera eficiente.",
  },
  {
    titulo: "Gobernanza de datos y privacidad",
    descripcion: "Aseguramos que tus datos sean seguros, cumplan con normativas y sean accesibles manteniendo estándares de privacidad.",
  },
  {
    titulo: "IA generativa",
    descripcion: "Implementamos IA para automatizar procesos, optimizar la toma de decisiones y crear soluciones innovadoras.",
  },
  {
    titulo: "Aprendizaje automático",
    descripcion: "Construimos y desplegamos modelos de aprendizaje automático para extraer información de datos y predecir resultados.",
  },
  {
    titulo: "Datos centrados en las personas",
    descripcion: "Desarrollamos soluciones de datos alineadas con las necesidades humanas, mejorando la experiencia del usuario y el valor empresarial.",
  },
];

export default function Experience() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="mb-2 text-3xl font-semibold">Nuestra experiencia</h2>
            <p className="text-lg text-indigo-200/65">
              Nos especializamos en las siguientes áreas:
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {experiencias.map((item, idx) => (
              <div
                key={idx}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div className="p-6">
                    <h3 className="mb-2 font-semibold">{item.titulo}</h3>
                    <p className="text-indigo-200/65">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
