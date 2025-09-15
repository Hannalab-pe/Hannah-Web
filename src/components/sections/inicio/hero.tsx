"use client";

import { AnimatedTitle } from "@/components/animations";
import { Section } from "@/components/section";
import { useState } from "react";

export const HeroInicio = () => {

  // Función para determinar si un link está activo
  const [activeSection, setActiveSection] = useState("inicio");
  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <div id="inicio"></div>
      <Section
        videoSrc="/videos/fondo-1.mp4"
        overlay={true}
        overlayOpacity={0.4}
        className="flex items-center justify-start"
      >
        <div className="text-left text-white max-w-4xl ml-8 lg:ml-16 ">
          <AnimatedTitle
            className="text-7xl md:text-9xl font-[var(--font-righteous)] uppercase mb-6 leading-tight"
            delay={0.2}
            direction="up"
          >
            <h1>
              <span className="text-[var(--verde)]">Hannah</span>
              <br />
              Lab
            </h1>
          </AnimatedTitle>

          <AnimatedTitle
            className="text-xl md:text-2xl font-semibold mb-8 max-w-2xl uppercase leading-relaxed"
            delay={0.6}
            direction="up"
          >
            Herramientas que manejan herramientas
          </AnimatedTitle>

          <AnimatedTitle
            className="text-lg md:text-xl font-semibold opacity-90 uppercase"
            delay={1.0}
            direction="up"
          >
            Soluciones de automatización y desarrollo
          </AnimatedTitle>

          <AnimatedTitle
            className="text-lg md:text-xl font-semibold opacity-90 uppercase"
            delay={1.0}
            direction="up"
          >
            <button
              className="bg-transparent border border-[var(--verde)] text-[var(--verde)] hover:bg-[var(--verde)] hover:text-white px-6 py-2 rounded-full mt-8 transition-all duration-200"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar
            </button>

          </AnimatedTitle>
        </div>
      </Section>
    </>
  );
};
