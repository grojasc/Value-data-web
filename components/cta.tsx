export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-3xl font-semibold text-transparent">
              ¿Listo para mejorar tu negocio con datos?
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65">
              Contáctanos hoy para discutir cómo podemos ayudar a tu empresa con soluciones basadas en datos.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
