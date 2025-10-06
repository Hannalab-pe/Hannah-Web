"use client";

import { Building2, Hammer, Workflow, Home, ArrowRight, Star, Heart, Palette, Music, Rocket, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import "./demos.css";

export default function DemosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-green-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-green-600 rounded-lg rotate-12 opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-16 left-16 text-green-400 opacity-50 animate-floatMega">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-20 right-20 text-green-300 opacity-45 animate-floatIntense" style={{ animationDelay: '1.5s' }}>
          <Heart className="w-7 h-7" />
        </div>
        <div className="absolute bottom-20 left-20 text-green-500 opacity-60 animate-floatMega" style={{ animationDelay: '3s' }}>
          <Palette className="w-5 h-5" />
        </div>
        <div className="absolute bottom-16 right-16 text-green-400 opacity-55 animate-floatIntense" style={{ animationDelay: '2s' }}>
          <Music className="w-6 h-6" />
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className={`flex items-center justify-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-4 bg-gradient-to-br from-green-900 to-green-700 rounded-full border-2 border-green-500 shadow-xl">
                <Rocket className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <div className={`text-center transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.1s' }}>
              <p className="text-base text-green-300 mb-2 font-light">Explora nuestros</p>
            </div>
            <h1 className={`text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              Demos
            </h1>
            <p className={`text-sm md:text-base text-green-200 mb-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
              Descubre las soluciones tecnológicas innovadoras que desarrollamos para diferentes industrias
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
            <div 
              onClick={() => window.open('https://nido-pro-frontend.vercel.app/login', '_blank')}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-3">
                <GraduationCap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-green-300 text-base font-bold mb-2 text-center">EDA</h3>
              <p className="text-green-200 text-xs leading-relaxed text-center">Sistema educativo completo para gestión de colegios</p>
            </div>
            
            <div 
              onClick={() => window.location.href = '/demos/qr-demo'}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-3">
                <Hammer className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-green-300 text-base font-bold mb-2 text-center">Software</h3>
              <p className="text-green-200 text-xs leading-relaxed text-center">Herramientas para proyectos de construcción a gran escala</p>
            </div>
            
            <div 
              onClick={() => window.location.href = '/demos/qr-demo'}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-3">
                <Workflow className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-green-300 text-base font-bold mb-2 text-center">C1 Flujos</h3>
              <p className="text-green-200 text-xs leading-relaxed text-center">Automatización de procesos empresariales</p>
            </div>
            
            <div 
              onClick={() => window.location.href = '/demos/qr-demo'}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-3">
                <Home className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-green-300 text-base font-bold mb-2 text-center">Edificio Pro</h3>
              <p className="text-green-200 text-xs leading-relaxed text-center">Administración de edificios y viviendas</p>
            </div>
          </div>

          {/* Hannalab Branding */}
          <div className={`flex justify-center items-center mt-8 transition-all duration-1600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-green-500/70">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">
                Desarrollado por <span className="text-green-400 font-bold">HANNAH </span><span className="text-white font-bold">LAB</span>
              </p>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
