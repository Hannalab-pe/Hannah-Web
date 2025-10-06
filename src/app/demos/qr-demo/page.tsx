"use client";

import { QrCode, ArrowLeft, Star, Heart, Palette, Music } from "lucide-react";
import { useState, useEffect } from "react";

export default function QRDemoPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Elements with animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Partículas geométricas animadas verdes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-green-300 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-green-600 rounded-lg rotate-12 opacity-35 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

        {/* Partículas de iconos flotantes verdes */}
        <div className="absolute top-16 left-16 text-green-400 opacity-50 animate-pulse">
          <Star className="w-6 h-6" />
        </div>
        
        <div className="absolute top-20 right-20 text-green-300 opacity-45 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <Heart className="w-7 h-7" />
        </div>
        
        <div className="absolute bottom-20 left-20 text-green-500 opacity-60 animate-pulse" style={{ animationDelay: '3s' }}>
          <Palette className="w-5 h-5" />
        </div>
        
        <div className="absolute bottom-16 right-16 text-green-400 opacity-55 animate-bounce" style={{ animationDelay: '2s' }}>
          <Music className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="relative z-20 max-w-2xl mx-auto text-center">
          
          {/* Back Button */}
          <div className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Volver a Demos</span>
            </button>
          </div>

          {/* QR Icon */}
          <div className={`flex items-center justify-center mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.1s' }}>
            <div className="p-6 bg-gradient-to-br from-green-900 to-green-700 rounded-full border-2 border-green-500 shadow-xl">
              <QrCode className="w-16 h-16 text-green-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent transition-all duration-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.2s' }}>
            Demo Disponible
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-green-200 mb-8 font-light transition-all duration-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.3s' }}>
            Escanea el QR para habilitar la demo
          </p>

          {/* QR Placeholder */}
          <div className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 shadow-xl transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 mx-auto bg-white rounded-xl flex items-center justify-center border-4 border-green-500/20">
              <div className="text-center">
                <QrCode className="w-32 h-32 text-gray-800 mx-auto mb-4" />
                <p className="text-gray-600 text-sm font-medium">QR Code Demo</p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className={`mt-8 transition-all duration-1600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.5s' }}>
            <p className="text-green-300 text-base mb-2">
                Usa la cámara de tu dispositivo móvil
            </p>
            <p className="text-green-400 text-sm">
              Apunta al código QR y sigue las instrucciones
            </p>
          </div>

          {/* Hannalab Branding */}
          <div className={`mt-12 transition-all duration-1800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-2 text-green-500/70">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">
                Desarrollado por <span className="text-green-400 font-bold">Hannalab</span>
              </p>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}