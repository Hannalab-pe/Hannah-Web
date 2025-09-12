import { AnimatedTitle, FadeUpCard } from "@/components/animations";
import { Section } from "@/components/section";

export const DesarrolloWeb = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <AnimatedTitle
            className="text-6xl md:text-7xl font-[var(--font-righteous)] text-[var(--verde)] leading-tight text-center md:text-left"
            delay={0.2}
          >
            <h2 className="flex flex-col uppercase font-bold text-4xl md:text-7xl">
              Desarrollo
              <span className="text-[var(--blanco)]">Web</span>
            </h2>
          </AnimatedTitle>
        </div>
        <FadeUpCard className="text-center md:text-left" delay={0.4}>
          <p className="text-xl md:text-2xl text-[var(--blanco)] font-[var(--font-now)] leading-relaxed italic">
            "Creamos soluciones digitales completas y a medida. Nos encargamos
            tanto del cerebro de la operación que maneja los datos y la lógica,
            como de la experiencia de usuario final, para que sea fluida, veloz
            y se adapte a cualquier dispositivo."
          </p>
        </FadeUpCard>
      </div>
    </Section>
  );
};
