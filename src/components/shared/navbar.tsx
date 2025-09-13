"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Función para determinar si un link está activo
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Toggle mobile menu with closing animation
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Si está abierto, iniciar animación de cierre
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 300); // Duración de la animación de salida
    } else {
      // Si está cerrado, abrirlo directamente
      setIsMobileMenuOpen(true);
      setIsClosing(false);
    }
  };

  // Función para cerrar el menú con animación desde botones/links
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full py-4 px-6 transition-all duration-500 z-50 ${
        isScrolled ? "navbar-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <h1 className="text-2xl font-bold text-[var(--blanco)]">
                        <span className="text-[var(--verde)]">Hannah</span> Produce
                    </h1> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/inicio"
            className={`transition-colors duration-300 relative group ${
              isActiveLink("/inicio")
                ? "text-[var(--verde-limon)]"
                : "text-[var(--blanco)] hover:text-[var(--verde-limon)]"
            }`}
          >
            Inicio
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde-limon)] transition-all duration-300 ${
              isActiveLink("/inicio") ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </Link>
          <Link
            href="/servicios"
            className={`transition-colors duration-300 relative group ${
              isActiveLink("/servicios")
                ? "text-[var(--verde-limon)]"
                : "text-[var(--blanco)] hover:text-[var(--verde-limon)]"
            }`}
          >
            Servicios
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde-limon)] transition-all duration-300 ${
              isActiveLink("/servicios") ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </Link>
          <Link
            href="/nosotros"
            className={`transition-colors duration-300 relative group ${
              isActiveLink("/nosotros")
                ? "text-[var(--verde-limon)]"
                : "text-[var(--blanco)] hover:text-[var(--verde-limon)]"
            }`}
          >
            Nosotros
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde-limon)] transition-all duration-300 ${
              isActiveLink("/nosotros") ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </Link>
          <Link
            href="/contacto"
            className={`transition-colors duration-300 relative group ${
              isActiveLink("/contacto")
                ? "text-[var(--verde-limon)]"
                : "text-[var(--blanco)] hover:text-[var(--verde-limon)]"
            }`}
          >
            Contacto
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde-limon)] transition-all duration-300 ${
              isActiveLink("/contacto") ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </Link>
          <button
            className={`px-4 py-2 rounded transition-all duration-300 ${
              isActiveLink("/portafolio")
                ? "bg-[var(--verde-limon)] text-[var(--negro)]"
                : "bg-[var(--verde)] text-[var(--negro)] hover:bg-[var(--verde-limon)]"
            }`}
            onClick={() => router.push("/portafolio")}
          >
            Portafolio
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[var(--blanco)] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {(isMobileMenuOpen || isClosing) && (
        <>
          {/* Overlay con animación */}
          <div
            className={`fixed inset-0 bg-black/70 z-40 md:hidden ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={toggleMobileMenu}
          ></div>

          {/* Mobile Menu Panel con animación reversa */}
          <div
            className={`fixed top-0 left-0 right-0 w-full h-auto bg-white z-50 md:hidden ${
              isClosing ? "animate-slide-up" : "animate-slide-down"
            }`}
          >
            {/* Header del menú */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">MENÚ</h3>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links con animación escalonada */}
            <div className="flex flex-col p-6 space-y-6">
              <Link
                href="/inicio"
                className={`border-b border-gray-200 text-xl font-medium relative group transition-colors duration-300 py-2 ${
                  isActiveLink("/inicio") 
                    ? "text-[var(--verde)]" 
                    : "text-gray-800"
                } ${
                  isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
                }`}
                style={{ animationDelay: isClosing ? "0s" : "0.1s" }}
                onClick={closeMobileMenu}
              >
                Inicio
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde)] transition-all duration-300 ${
                  isActiveLink("/inicio") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
              <Link
                href="/servicios"
                className={`border-b border-gray-200 text-xl font-medium relative group transition-colors duration-300 py-2 ${
                  isActiveLink("/servicios") 
                    ? "text-[var(--verde)]" 
                    : "text-gray-800"
                } ${
                  isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
                }`}
                style={{ animationDelay: isClosing ? "0.05s" : "0.2s" }}
                onClick={closeMobileMenu}
              >
                Servicios
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde)] transition-all duration-300 ${
                  isActiveLink("/servicios") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
              <Link
                href="/nosotros"
                className={`border-b border-gray-200 text-xl font-medium relative group transition-colors duration-300 py-2 ${
                  isActiveLink("/nosotros") 
                    ? "text-[var(--verde)]" 
                    : "text-gray-800"
                } ${
                  isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
                }`}
                style={{ animationDelay: isClosing ? "0.1s" : "0.3s" }}
                onClick={closeMobileMenu}
              >
                Nosotros
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde)] transition-all duration-300 ${
                  isActiveLink("/nosotros") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
              <Link
                href="/contacto"
                className={`text-xl font-medium relative group transition-colors duration-300 py-2 ${
                  isActiveLink("/contacto") 
                    ? "text-[var(--verde)]" 
                    : "text-gray-800"
                } ${
                  isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
                }`}
                style={{ animationDelay: isClosing ? "0.15s" : "0.4s" }}
                onClick={closeMobileMenu}
              >
                Contacto
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--verde)] transition-all duration-300 ${
                  isActiveLink("/contacto") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>

              {/* Action Buttons con animación */}
              <div
                className={`pt-6 space-y-4 ${
                  isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
                }`}
                style={{ animationDelay: isClosing ? "0.2s" : "0.5s" }}
              >
                <button
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActiveLink("/portafolio")
                      ? "bg-[var(--verde-limon)] text-white"
                      : "bg-[var(--verde)] text-white hover:bg-[var(--verde-limon)]"
                  }`}
                  onClick={() => {
                    router.push("/portafolio");
                    closeMobileMenu();
                  }}
                >
                  Ver Portafolio
                </button>
                <button
                  className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-[var(--verde)] hover:text-[var(--verde)] transition-all duration-300"
                  onClick={() => {
                    router.push("/contacto");
                    closeMobileMenu();
                  }}
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
