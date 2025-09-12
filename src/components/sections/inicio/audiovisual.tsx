import { AnimatedTitle, FadeUpCard } from "@/components/animations";
import { Section } from "@/components/section";

export const Audiovisual = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <AnimatedTitle
            className="text-6xl md:text-7xl font-[var(--font-righteous)] text-[var(--verde)] leading-tight text-center md:text-left"
            delay={0.2}
          >
            <h2 className="flex flex-col uppercase font-bold text-4xl md:text-7xl">
              Producción
              <span className="text-[var(--blanco)]">Audiovisual</span>
            </h2>
          </AnimatedTitle>
        </div>
        <FadeUpCard className="text-center md:text-left" delay={0.4}>
          <p className="text-xl md:text-2xl text-[var(--blanco)] font-[var(--font-now)] leading-relaxed italic">
            "Adobe Premiere, After Effects, DaVinci Resolve, Final Cut Pro y
            otras herramientas profesionales para crear contenido audiovisual de
            alta calidad."
          </p>
        </FadeUpCard>
      </div>
    </Section>
  );
};
