
import { AnimatedTitle } from "@/components/animations";
import { Section } from "@/components/section";

export const HeroInicio = () => {
  return (
    <Section
      videoSrc="/videos/designer.mp4"
      overlay={true}
      overlayOpacity={0.4}
      className="flex items-center justify-center"
    >
      <div className="text-center text-white max-w-4xl mx-auto">
        <AnimatedTitle
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          delay={0.2}
          direction="up"
        >
          <span className="text-[var(--verde)]">Hannah</span>
          <br />
          Produce
        </AnimatedTitle>

        <AnimatedTitle
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
          delay={0.6}
          direction="up"
        >
          Productos agrícolas premium que conectan la tierra con tu mesa
        </AnimatedTitle>

        <AnimatedTitle
          className="text-lg md:text-xl font-medium opacity-90"
          delay={1.0}
          direction="up"
        >
          Calidad excepcional • Sostenibilidad • Tradición agrícola
        </AnimatedTitle>
      </div>
    </Section>
  );
};
