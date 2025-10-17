"use client";

import {
  Building2,
  Hammer,
  Workflow,
  Home,
  ArrowRight,
  Star,
  Heart,
  Palette,
  Music,
  Rocket,
  GraduationCap,
  X,
  QrCode,
  Mail,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import "./demos.css";
import { saveEdaEmail } from "@/services/emailService";

export default function DemosPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemoClick = () => {
    setShowModal(true);
    // Pequeño delay para que la transición se vea suave
    setTimeout(() => setModalVisible(true), 10);
  };

  const closeModal = () => {
    setModalVisible(false);
    // Esperar a que termine la transición antes de ocultar el modal
    setTimeout(() => setShowModal(false), 300);
  };

  const handleEDAClick = () => {
    setShowEmailModal(true);
    setTimeout(() => setEmailModalVisible(true), 10);
  };

  const closeEmailModal = () => {
    setEmailModalVisible(false);
    setTimeout(() => {
      setShowEmailModal(false);
      setEmail("");
      setSubmitStatus("idle");
      setErrorMessage("");
      setIsLoading(false);
    }, 300);
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Por favor ingresa tu email");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Guardar email en Firebase
      const success = await saveEdaEmail(email.trim());

      if (success) {
        setSubmitStatus("success");
        console.log("Email guardado exitosamente:", email);

        // Mostrar éxito por 1 segundo y luego redirigir
        setTimeout(() => {
          closeEmailModal();
          // Usar setTimeout adicional para asegurar que el modal se cierre completamente
          setTimeout(() => {
            // Para iOS Safari, usar location.assign en lugar de window.open
            // que puede ser bloqueado por políticas de seguridad
            window.location.assign("https://eda-demo.vercel.app/login");
          }, 400);
        }, 1000);
      } else {
        throw new Error("Error al guardar el email");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setErrorMessage("Error al procesar tu solicitud. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full opacity-30 animate-float" style={{ backgroundColor: "#92cb07" }}></div>
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s", backgroundColor: "#92cb07" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s", backgroundColor: "#92cb07" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-lg rotate-12 opacity-35 animate-float"
          style={{ animationDelay: "0.5s", backgroundColor: "#92cb07" }}
        ></div>
        <div className="absolute top-16 left-16 opacity-50 animate-floatMega" style={{ color: "#92cb07" }}>
          <Star className="w-6 h-6" />
        </div>
        <div
          className="absolute top-20 right-20 opacity-45 animate-floatIntense"
          style={{ animationDelay: "1.5s", color: "#92cb07" }}
        >
          <Heart className="w-7 h-7" />
        </div>
        <div
          className="absolute bottom-20 left-20 opacity-60 animate-floatMega"
          style={{ animationDelay: "3s", color: "#92cb07" }}
        >
          <Palette className="w-5 h-5" />
        </div>
        <div
          className="absolute bottom-16 right-16 opacity-55 animate-floatIntense"
          style={{ animationDelay: "2s", color: "#92cb07" }}
        >
          <Music className="w-6 h-6" />
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div
              className={`flex items-center justify-center mb-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="p-4 rounded-full border-2 shadow-xl" style={{ 
                background: "linear-gradient(to bottom right, #1f2937, #374151)", 
                borderColor: "#92cb07" 
              }}>
                <Rocket className="w-12 h-12" style={{ color: "#92cb07" }} />
              </div>
            </div>
            <div
              className={`text-center transition-all duration-1200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-base mb-2 font-light" style={{ color: "#92cb07" }}>
                Explora nuestros
              </p>
            </div>
            <h1
              className={`text-3xl md:text-5xl font-black mb-4 bg-clip-text text-transparent transition-all duration-1200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                animationDelay: "0.2s",
                background: `linear-gradient(to right, #92cb07, #a6d808, #92cb07)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              Demos
            </h1>
            <p
              className={`text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "0.3s", color: "#d1d5db" }}
            >
              Descubre las soluciones tecnológicas innovadoras que desarrollamos
              para diferentes industrias
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div
              onClick={handleEDAClick}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                borderColor: "rgba(146, 203, 7, 0.3)",
                boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.5)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.3)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)";
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <GraduationCap className="w-8 h-8" style={{ color: "#92cb07" }} />
              </div>
              <h3 className="text-base font-bold mb-2 text-center" style={{ color: "#92cb07" }}>
                EDA
              </h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "#d1d5db" }}>
                Sistema educativo completo para gestión de colegios
              </p>
            </div>

            <div
              onClick={handleDemoClick}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                borderColor: "rgba(146, 203, 7, 0.3)",
                boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.5)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.3)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)";
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <Hammer className="w-8 h-8" style={{ color: "#92cb07" }} />
              </div>
              <h3 className="text-base font-bold mb-2 text-center" style={{ color: "#92cb07" }}>
                Constructicon
              </h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "#d1d5db" }}>
                Herramientas para proyectos de construcción a gran escala
              </p>
            </div>

            <div
              onClick={handleDemoClick}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                borderColor: "rgba(146, 203, 7, 0.3)",
                boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.5)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.3)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)";
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <Workflow className="w-8 h-8" style={{ color: "#92cb07" }} />
              </div>
              <h3 className="text-base font-bold mb-2 text-center" style={{ color: "#92cb07" }}>
                C1 Flujos
              </h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "#d1d5db" }}>
                Automatización de procesos empresariales
              </p>
            </div>

            <div
              onClick={handleDemoClick}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                borderColor: "rgba(146, 203, 7, 0.3)",
                boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.5)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.3)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.1), 0 4px 6px -2px rgba(146, 203, 7, 0.05)";
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <Home className="w-8 h-8" style={{ color: "#92cb07" }} />
              </div>
              <h3 className="text-base font-bold mb-2 text-center" style={{ color: "#92cb07" }}>
                Edificio Pro
              </h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "#d1d5db" }}>
                Administración de edificios y viviendas
              </p>
            </div>
          </div>

          {/* Botón Ir al Inicio */}
          <div
            className={`flex justify-center mt-8 mb-6 transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="/inicio"
              className="inline-flex items-center gap-2 px-6 py-3 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(to right, #92cb07, #a6d808)",
                boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #a6d808, #92cb07)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #92cb07, #a6d808)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.3)";
              }}
            >
              <Home className="w-5 h-5" />
              Ir al Inicio
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Hannalab Branding */}
          <div
            className={`flex justify-center items-center mt-8 transition-all duration-1600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2" style={{ color: "rgba(146, 203, 7, 0.7)" }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#92cb07" }}></div>
              <p className="text-sm font-medium">
                Desarrollado por{" "}
                <span className="font-bold" style={{ color: "#92cb07" }}>HANNAH </span>
                <span className="font-bold" style={{ color: "#92cb07" }}>LAB</span>
              </p>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#92cb07" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-gray-900/95 border rounded-2xl p-8 max-w-md w-full mx-auto shadow-2xl transition-all duration-300 transform ${
              modalVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            style={{ 
              borderColor: "rgba(146, 203, 7, 0.3)",
              boxShadow: "0 25px 50px -12px rgba(146, 203, 7, 0.1)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={closeModal}
                className="transition-colors duration-300 hover:scale-110 transform"
                style={{ color: "#92cb07" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#a6d808"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#92cb07"}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* QR Icon */}
            <div
              className={`flex items-center justify-center mb-6 transition-all duration-500 ${
                modalVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: modalVisible ? "100ms" : "0ms" }}
            >
              <div className="p-4 rounded-full border-2 shadow-xl" style={{
                background: "linear-gradient(to bottom right, #1f2937, #374151)",
                borderColor: "#92cb07"
              }}>
                <QrCode className="w-12 h-12" style={{ color: "#92cb07" }} />
              </div>
            </div>

            {/* Modal Content */}
            <div
              className={`text-center transition-all duration-500 ${
                modalVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: modalVisible ? "200ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#92cb07" }}>
                Demo Restringida
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#d1d5db" }}>
                Necesitas escanear el QR para acceder a esta demo
              </p>
              <p className="text-sm" style={{ color: "#92cb07" }}>
                Contacta con nuestro equipo para obtener acceso
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal para EDA */}
      {showEmailModal && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${
            emailModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeEmailModal}
        >
          <div
            className={`bg-gray-900/95 border rounded-2xl p-8 max-w-md w-full mx-auto shadow-2xl transition-all duration-300 transform ${
              emailModalVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            style={{ 
              borderColor: "rgba(146, 203, 7, 0.3)",
              boxShadow: "0 25px 50px -12px rgba(146, 203, 7, 0.1)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={closeEmailModal}
                className="transition-colors duration-300 hover:scale-110 transform"
                style={{ color: "#92cb07" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#a6d808"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#92cb07"}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mail Icon */}
            <div
              className={`flex items-center justify-center mb-6 transition-all duration-500 ${
                emailModalVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: emailModalVisible ? "100ms" : "0ms" }}
            >
              <div className="p-4 rounded-full border-2 shadow-xl" style={{
                background: "linear-gradient(to bottom right, #1f2937, #374151)",
                borderColor: "#92cb07"
              }}>
                <Mail className="w-12 h-12" style={{ color: "#92cb07" }} />
              </div>
            </div>

            {/* Modal Content */}
            <div
              className={`text-center transition-all duration-500 ${
                emailModalVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: emailModalVisible ? "200ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#92cb07" }}>
                Acceso a EDA Demo
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#d1d5db" }}>
                Coloca tu correo electrónico para acceder a la demo
              </p>

              {/* Form */}
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu-email@ejemplo.com"
                    disabled={isLoading || submitStatus === "success"}
                    className="w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(146, 203, 7, 0.3)",
                      color: "#d1d5db"
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#92cb07";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(146, 203, 7, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(146, 203, 7, 0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    required
                  />
                  {errorMessage && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || submitStatus === "success"}
                  className="w-full px-6 py-3 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(to right, #92cb07, #a6d808)",
                    boxShadow: "0 10px 15px -3px rgba(146, 203, 7, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading && submitStatus !== "success") {
                      e.currentTarget.style.background = "linear-gradient(to right, #a6d808, #92cb07)";
                      e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(146, 203, 7, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading && submitStatus !== "success") {
                      e.currentTarget.style.background = "linear-gradient(to right, #92cb07, #a6d808)";
                      e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(146, 203, 7, 0.3)";
                    }
                  }}
                >
                  {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                  {submitStatus === "success" && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  {submitStatus === "error" && (
                    <AlertCircle className="w-5 h-5" />
                  )}

                  {isLoading
                    ? "Procesando..."
                    : submitStatus === "success"
                    ? "¡Éxito! Redirigiendo..."
                    : submitStatus === "error"
                    ? "Intentar de nuevo"
                    : "Acceder a Demo"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
