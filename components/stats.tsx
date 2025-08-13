import AnimatedCounter from "@/components/animated-counter";

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Stats grid */}
          <div 
            className="grid gap-6 md:grid-cols-4 sm:grid-cols-2"
            data-aos="fade-up"
          >
            {/* Stat 1 */}
            <div className="text-center rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm">
              <div className="mb-2">
                <AnimatedCounter
                  end={50}
                  suffix="%"
                  className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent"
                />
              </div>
              <div className="text-sm text-indigo-200/65">
                Reducción en tiempo de parada
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm">
              <div className="mb-2">
                <AnimatedCounter
                  end={99}
                  suffix=".5%"
                  className="text-4xl font-bold bg-linear-to-r from-green-400 to-green-200 bg-clip-text text-transparent"
                />
              </div>
              <div className="text-sm text-indigo-200/65">
                Precisión en control de calidad
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm">
              <div className="mb-2">
                <AnimatedCounter
                  end={35}
                  suffix="%"
                  className="text-4xl font-bold bg-linear-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
                />
              </div>
              <div className="text-sm text-indigo-200/65">
                Aumento en productividad
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm">
              <div className="mb-2">
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  className="text-4xl font-bold bg-linear-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent"
                />
              </div>
              <div className="text-sm text-indigo-200/65">
                Proyectos implementados
              </div>
            </div>
          </div>

          {/* Additional metrics */}
          <div 
            className="mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="rounded-2xl bg-gray-800/30 p-8">
              <h3 className="mb-6 text-2xl font-semibold">Métricas de impacto</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="mb-2">
                    <AnimatedCounter
                      end={20}
                      suffix="%"
                      className="text-3xl font-bold text-indigo-400"
                    />
                  </div>
                  <div className="text-indigo-200/65">
                    Reducción en costos operativos
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <AnimatedCounter
                      end={24}
                      suffix="/7"
                      className="text-3xl font-bold text-green-400"
                    />
                  </div>
                  <div className="text-indigo-200/65">
                    Monitoreo continuo
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <AnimatedCounter
                      end={15}
                      suffix=" días"
                      className="text-3xl font-bold text-purple-400"
                    />
                  </div>
                  <div className="text-indigo-200/65">
                    Tiempo promedio de implementación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}