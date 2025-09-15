import { AnimatedTitle, FadeUpCard } from "@/components/animations";
import { technologies } from "@/libs/tenologias";
import Image from "next/image";

export const Tecnologias = () => {

  return (
    <div className="py-20 px-6 bg-[var(--negro)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedTitle className="text-4xl md:text-6xl font-bold text-[var(--verde)] uppercase mb-4">
            Tecnologías
          </AnimatedTitle>
          <AnimatedTitle delay={0.2} className="text-xl md:text-2xl font-[var(--font-now)] text-[var(--gris-claro)] max-w-3xl mx-auto">
            Herramientas modernas que dominamos para crear soluciones innovadoras
          </AnimatedTitle>
        </div>

        {/* Inicio Collage*/}
        <div className="relative overflow-hidden">
          {/* Infinite Scrolling Carousel */}
          <div className="flex animate-scroll">
            {/* First set of technologies */}
            <div className="flex gap-6 min-w-max">
              {technologies.map((tech, index) => (
                <FadeUpCard 
                  key={`first-${tech.name}`}
                  delay={index * 0.05}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[var(--gris-oscuro)] rounded-xl border border-[var(--gris)] hover:border-[var(--verde)] transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:bg-[var(--verde)] hover:bg-opacity-10">
                    <Image 
                      width={100}
                      height={100}
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      title={tech.name}
                    />
                  </div>
                </FadeUpCard>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--negro)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--negro)] to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Technology Grid Collage */}

        {/* Fin Collage*/}
        
        {/* Bottom Message */}
        <FadeUpCard delay={0.8} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--gris-oscuro)] to-[var(--negro)] p-8 rounded-xl border border-[var(--verde)]">
            <p className="text-lg font-[var(--font-now)] text-[var(--gris-claro)] max-w-4xl mx-auto">
              Siempre actualizándonos con las últimas tecnologías para ofrecer
              <span className="text-[var(--verde)]"> soluciones de vanguardia</span> que
              impulsen tu negocio hacia el futuro.
            </p>
          </div>
        </FadeUpCard>
      </div>
    </div>
  );
};
