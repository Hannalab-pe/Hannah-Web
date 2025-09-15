
import { AnimatedTitle, FadeUpCard } from "@/components/animations";

export const Partners = () => {
  return (
    <div className="py-20 px-6 bg-[var(--negro)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedTitle className="text-4xl md:text-6xl font-bold text-[var(--verde)] uppercase mb-6">
            Partnerships
          </AnimatedTitle>
          <AnimatedTitle delay={0.2} className="text-xl md:text-2xl font-[var(--font-now)] text-[var(--gris-claro)] max-w-3xl mx-auto">
            Colaboraciones estratégicas que potencian nuestras soluciones
          </AnimatedTitle>
        </div>

        {/* Hannah x Odoo Partnership */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Partnership Description */}
          <FadeUpCard delay={0.3} className="space-y-8">
            <div>
              <AnimatedTitle delay={0.4} className="text-3xl font-bold text-[var(--verde-limon)] mb-4">
                Especialización en Soluciones ERP
              </AnimatedTitle>
              <FadeUpCard delay={0.6} className="text-lg font-[var(--font-now)] text-[var(--blanco)] leading-relaxed mb-6">
                Como <span className="text-[var(--verde)]">Partner Oficial de Odoo</span>, 
                Hannah Produce se especializa en implementar y personalizar soluciones ERP 
                que transforman la gestión empresarial de nuestros clientes.
              </FadeUpCard>
              <FadeUpCard delay={0.8} className="text-lg font-[var(--font-now)] text-[var(--gris-claro)] leading-relaxed">
                Combinamos nuestra experiencia en desarrollo de software con la potencia 
                de Odoo para crear sistemas integrados que optimizan procesos, mejoran 
                la productividad y impulsan el crecimiento empresarial.
              </FadeUpCard>
            </div>
          </FadeUpCard>

          {/* Right Column - Partnership Logos */}
          <FadeUpCard delay={0.5} className="flex items-center justify-center">
            <div className="flex items-center gap-8">
              {/* Hannah Logo */}
              <FadeUpCard delay={0.7} className="flex items-center">
                <img 
                  src="/images/logos/hannah.png" 
                  alt="Hannah Produce" 
                  className="h-24 md:h-40 object-contain"
                />
              </FadeUpCard>
              
              {/* X Symbol */}
              <FadeUpCard delay={0.9} className="text-4xl md:text-6xl font-bold text-[var(--verde)]">
                ×
              </FadeUpCard>
              
              {/* Odoo Logo */}
              <FadeUpCard delay={1.1} className="flex items-center">
                <div className="rounded-lg p-4">
                  <img 
                    src="/images/logos/odoo.png" 
                    alt="Odoo" 
                    className="h-12 md:h-25 object-contain"
                  />
                </div>
              </FadeUpCard>
            </div>
          </FadeUpCard>
        </div>

        {/* Additional Partners Section */}
        <div className="mt-16">
          <AnimatedTitle delay={3.0} className="text-2xl font-bold text-[var(--verde-limon)] text-center mb-8">
            Otros Partners Estratégicos
          </AnimatedTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60">
            {[
              { name: "Bosch", logo: "/images/logos/bosch.webp" },
              { name: "Entel", logo: "/images/logos/entel.webp" },
              { name: "Natura", logo: "/images/logos/natura.webp" },
              { name: "Volcán", logo: "/images/logos/volcan.webp" },
              { name: "Weber", logo: "/images/logos/weber.webp" },
              { name: "Betondecken", logo: "/images/logos/betondecken.webp" }
            ].map((partner, index) => (
              <FadeUpCard key={partner.name} delay={3.2 + index * 0.1} className="bg-[var(--gris-oscuro)] p-4 rounded-lg border border-[var(--gris)] hover:border-[var(--verde)] transition-all duration-300 hover:opacity-100 group">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </FadeUpCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
