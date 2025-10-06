"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente a /inicio después de un breve delay
    const timer = setTimeout(() => {
      router.push("/inicio");
    }, 2000); // 2 segundos de delay

    // Cleanup del timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[var(--negro)] flex items-center justify-center px-4">
      <div className="text-center text-[var(--blanco)] max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[var(--verde)] mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-[var(--gris-claro)] mb-6">
            La página que buscas no existe. Te redirigiremos a inicio en unos segundos...
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--verde)]"></div>
        </div>
        
        <button
          onClick={() => router.push("/inicio")}
          className="px-6 py-3 bg-[var(--verde)] text-[var(--negro)] font-semibold rounded-lg hover:bg-[var(--verde-limon)] transition-all duration-300"
        >
          Ir a Inicio Ahora
        </button>
      </div>
    </div>
  );
}