import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  videoSrc?: string;
  imageSrc?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const Section = ({
  children,
  videoSrc,
  imageSrc,
  className = "",
  overlay = false,
  overlayOpacity = 0.5,
}: SectionProps) => {
  return (
    <section className={`relative min-h-screen w-full ${className}`}>
      {/* Video de fondo opcional */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      )}

      {/* Imagen de fondo opcional */}
      {imageSrc && !videoSrc && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Overlay opcional */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Contenido */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">{children}</div>
      </div>
    </section>
  );
};
