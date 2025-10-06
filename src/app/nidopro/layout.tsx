import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | NidoPro",
    default: "NidoPro - Plataforma Exclusiva",
  },
  description: "Plataforma exclusiva para profesionales - Acceso restringido",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NidoProLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      
      <div className="nidopro-container min-h-screen">
        {children}
      </div>
    </>
  );
}