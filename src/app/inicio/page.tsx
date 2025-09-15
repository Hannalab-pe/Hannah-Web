import { Metadata } from "next";
import { HeroInicio } from "@/components/sections/inicio/hero";
import { Herramientas } from "@/components/sections/inicio/herramientas";
import { Dominamos } from "@/components/sections/inicio/dominamos";
import { Automatizacion } from "@/components/sections/inicio/automatizacion";
import { DesarrolloWeb } from "@/components/sections/inicio/desarrollo-web";
import { Hannah } from "@/components/sections/sobre-nosotros/hannah";
import { Tecnologias } from "@/components/sections/sobre-nosotros/tecnologias";
import { Partners } from "@/components/sections/sobre-nosotros/partners";
import Contacto from "@/components/sections/contacto/contacto";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Automatización inteligente, desarrollo de software y producción audiovisual. Herramientas que usan herramientas para transformar tu negocio.",
};

export default function HomePage() {
  return (
    <>
      {/* Sección Hero con Video de Fondo */}
      <HeroInicio />
      {/* Sección de Herramientas que usan Herramientas */}
      <Herramientas />
      <Dominamos />
      <Automatizacion />
      {/* <Audiovisual /> */}
      <DesarrolloWeb />
      {/* <Diseno3D /> */}
      {/* Sección de Hannah - Sobre Nosotros - El equipo*/}
      <Hannah />
      <Tecnologias />
      <Partners />

      {/* Sección de Contacto */}
      <Contacto />
    </>
  );
}
