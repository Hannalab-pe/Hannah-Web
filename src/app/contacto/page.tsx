import { Metadata } from "next";
import { FormularioContacto } from "@/components/contact-form";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Hannah Lab. Hablemos de tu proyecto y empecemos algo especial juntos. Servicios de automatización, desarrollo y audiovisual.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 lg:py-20 py-15">
        {/* Lado izquierdo - Información */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 bg-[var(--blanco)] text-[var(--negro)]">
          {/* Título principal */}
          <div className="mb-12">
            <h1 className="text-6xl lg:text-7xl font-[var(--font-righteous)] leading-tight mb-6">
              Let&apos;s get
              <br />
              <span className="text-[var(--verde)]">in touch</span>
            </h1>
            
            {/* Línea y texto descriptivo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-[var(--negro)]"></div>
              <p className="text-lg font-[var(--font-now)] text-[var(--gris)]">
                ¡Genial! Estamos emocionados de escucharte y
                <br />
                empezar algo especial juntos.
                <br />
                Llámanos para cualquier consulta.
              </p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--negro)] mb-2">
                No tengas miedo de
                <br />
                saludarnos!
              </h3>
            </div>

            <div className="space-y-6">
              {/* Teléfono */}
              <div>
                <p className="text-sm font-medium text-[var(--gris)] mb-1">Teléfono</p>
                <p className="text-lg font-medium text-[var(--negro)]">+(51) 984 323 201</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-[var(--gris)] mb-1">Email</p>
                <p className="text-lg font-medium text-[var(--negro)]">gerencia@hannalab.com</p>
              </div>

              {/* Oficina */}
              <div>
                <p className="text-sm font-medium text-[var(--gris)] mb-1">Oficina</p>
                <p className="text-lg font-medium text-[var(--negro)]">
                  Lima, Perú
                  <br />
                  <span className="text-sm text-[var(--gris)]">Disponible remotamente</span>
                </p>
                <a href="#" className="text-sm text-[var(--verde)] hover:underline inline-flex items-center gap-1 mt-1">
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="flex items-center justify-start bg-[var(--negro)]">
          <div className="w-full h-full max-h-xl">
            <FormularioContacto />
          </div>
        </div>
      </div>
    </Section>
  );
}
