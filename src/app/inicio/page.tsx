import { Section } from "@/components/section";
import { AnimatedTitle } from "@/components/animations";

export default function HomePage() {
  return (
    <>
      {/* Sección Hero con Video de Fondo */}
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

      {/* Sección adicional sin video (placeholder) */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Próximamente más contenido
          </h2>
          <p className="text-gray-600">
            Estamos trabajando en secciones adicionales para mostrar nuestros
            productos y servicios.
          </p>
        </div>
      </Section>
    </>
  );
}
