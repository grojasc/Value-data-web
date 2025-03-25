export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text">
              ¿Listo para mejorar tu negocio con datos?
            </h2>
            <p className="text-lg text-indigo-200/65">
              Contáctanos hoy para discutir cómo podemos ayudar a tu empresa con soluciones basadas en datos.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="/contact"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
