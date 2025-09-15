
import { AnimatedTitle, FadeUpCard } from "@/components/animations";
import { Section } from "@/components/section";

export const Herramientas = () => {
  return (
    <Section videoSrc="/videos/fondo-2.mp4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <AnimatedTitle
            className="text-6xl md:text-7xl font-[var(--font-righteous)] text-[var(--verde)] leading-tight text-center md:text-left"
            delay={0.2}
          >
            <h2 className="flex flex-col uppercase font-bold text-4xl md:text-7xl">
              Herramientas
              <span className="text-[var(--blanco)]">que usan herramientas</span>
            </h2>
          </AnimatedTitle>
        </div>
        <FadeUpCard className="text-center md:text-left" delay={0.4}>
          <p className="text-xl md:text-2xl text-[var(--blanco)] font-[var(--font-now)] leading-relaxed italic">
            {'"Creamos automatizaciones inteligentes que ahorran tiempo, reducen errores y aumentan la eficiencia, sin necesidad de cambiar tu ecosistema actual."'}
          </p>
        </FadeUpCard>
      </div>
    </Section>
  );
};
