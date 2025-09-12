import { HeroInicio } from "@/components/sections/inicio/hero";
import { Herramientas } from "@/components/sections/inicio/herramientas";
import { Dominamos } from "@/components/sections/inicio/dominamos";
import { Automatizacion } from "@/components/sections/inicio/automatizacion";
import { Audiovisual } from "@/components/sections/inicio/audiovisual";
import { DesarrolloWeb } from "@/components/sections/inicio/desarrollo-web";
import { Diseno3D } from "@/components/sections/inicio/diseno-3d";

export default function HomePage() {
  return (
    <>
      {/* Sección Hero con Video de Fondo */}
      <HeroInicio />

      {/* Sección de Herramientas que usan Herramientas */}
      <Herramientas />

      {/* Otras secciones pueden ir aquí */}
      <Dominamos />
      <Automatizacion />
      <Audiovisual />
      <DesarrolloWeb />
      <Diseno3D />

    </>
  );
}
