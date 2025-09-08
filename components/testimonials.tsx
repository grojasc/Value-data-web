"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Eduardo Ramírez",
    role: "Director de Tecnología",
    company: "UNIACC",
    image: "/images/uniacc-logo.png",
    logo: "/images/uniacc-logo.png",
    content: "ValueData transformó nuestros procesos académicos con IA agents inteligentes. La optimización matemática de horarios y recursos mejoró significativamente nuestra eficiencia operacional.",
    rating: 5
  },
  {
    id: 2,
    name: "Carolina Garcés",
    role: "Gerente de Operaciones",
    company: "GARCES FRUIT",
    image: "/images/garces-fruit-logo.png",
    logo: "/images/garces-fruit-logo.png",
    content: "La implementación de computer vision para control de calidad y el modelamiento matemático de la cadena de frío revolucionó nuestras operaciones. Los insights de datos nos permiten tomar mejores decisiones.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonios" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Testimonios
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={400}>
              Descubre cómo hemos ayudado a empresas a transformar sus operaciones con IA y datos.
            </p>
          </div>

          {/* Testimonials carousel */}
          <div className="relative" data-aos="fade-up" data-aos-delay={600}>
            <div className="overflow-hidden rounded-2xl bg-gray-800/50 p-8 md:p-12">
              <div className="relative">
                {/* Main testimonial */}
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-2xl bg-white p-4 shadow-lg">
                      <Image
                        className="object-contain"
                        src={testimonials[currentIndex].logo}
                        width={120}
                        height={60}
                        alt={testimonials[currentIndex].company}
                      />
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="mb-6 flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="mb-6 text-xl text-indigo-200/80 md:text-2xl">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-indigo-200/65">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/50 text-white transition-all hover:bg-gray-700 hover:scale-110"
                  aria-label="Testimonio anterior"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/50 text-white transition-all hover:bg-gray-700 hover:scale-110"
                  aria-label="Siguiente testimonio"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-indigo-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="mt-4 flex justify-center">
              <div className="text-xs text-indigo-200/50">
                {isAutoPlaying ? "Reproducción automática" : "Pausa en reproducción"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}