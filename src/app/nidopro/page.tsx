"use client";

import { GraduationCap, Shield, Zap, Target, ArrowRight, PenTool, Book, Apple, Star, Heart, Palette, Music, Smile } from "lucide-react";
import { Crown, Diamond, Gift, Cake, Baby, Scissors, Puzzle, Trophy, Gamepad2, Flower, Paintbrush, Shapes, Rocket, Bird, TreePine, Sun, Moon, Cloud, BookOpen, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import "./nidopro.css";

export default function NidoProPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cargar las fuentes de Google Fonts dinámicamente
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    setIsVisible(true);

    return () => {
      // Cleanup si es necesario
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-purple-100 relative overflow-hidden">
      
      {/* Background Elements with animations */}
      <div className={`absolute inset-0 transition-all duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculos decorativos grandes */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-25 blur-2xl"></div>
          <div className="absolute -bottom-12 -right-24 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-25 blur-2xl"></div>
          
          {/* Formas geométricas flotantes con animación suave */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-lg rotate-45 opacity-30 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-yellow-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-7 h-7 bg-purple-500 rounded-lg rotate-12 opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>

          {/* Partículas de iconos flotantes */}
          
          {/* Partículas GRANDES */}
          <div className="absolute top-20 left-16 text-blue-400 opacity-70 animate-floatMega">
            <PenTool className="w-8 h-8" />
          </div>
          
          <div className="absolute top-32 right-20 text-pink-400 opacity-65 animate-floatIntense" style={{ animationDelay: '1.5s' }}>
            <Book className="w-9 h-9" />
          </div>
          
          <div className="absolute top-1/2 left-12 text-green-400 opacity-75 animate-floatMega" style={{ animationDelay: '3s' }}>
            <Apple className="w-7 h-7" />
          </div>
          
          <div className="absolute bottom-32 left-24 text-yellow-400 opacity-70 animate-floatIntense" style={{ animationDelay: '2s' }}>
            <Star className="w-8 h-8" />
          </div>
          
          <div className="absolute bottom-20 right-16 text-red-400 opacity-65 animate-floatMega" style={{ animationDelay: '4s' }}>
            <Heart className="w-7 h-7" />
          </div>
          
          {/* PARTÍCULAS EXTRA GRANDES */}
          <div className="absolute top-14 left-6 text-emerald-500 opacity-75 animate-floatMega" style={{ animationDelay: '0.8s' }}>
            <Cake className="w-10 h-10" />
          </div>
          
          <div className="absolute top-72 right-6 text-purple-500 opacity-80 animate-floatIntense" style={{ animationDelay: '2.3s' }}>
            <Crown className="w-11 h-11" />
          </div>
          
          <div className="absolute bottom-14 left-6 text-cyan-500 opacity-70 animate-floatMega" style={{ animationDelay: '3.7s' }}>
            <Diamond className="w-10 h-10" />
          </div>
          
          <div className="absolute bottom-72 right-12 text-orange-500 opacity-75 animate-floatIntense" style={{ animationDelay: '1.4s' }}>
            <Gift className="w-9 h-9" />
          </div>
          
          {/* Partículas MEDIANAS */}
          <div className="absolute top-40 left-32 text-purple-400 opacity-60 animate-floatIntense" style={{ animationDelay: '1s' }}>
            <Palette className="w-6 h-6" />
          </div>
          
          <div className="absolute bottom-40 left-8 text-indigo-400 opacity-75 animate-floatMega" style={{ animationDelay: '3.5s' }}>
            <Music className="w-6 h-6" />
          </div>
          
          <div className="absolute top-60 right-32 text-orange-400 opacity-65 animate-floatIntense" style={{ animationDelay: '2.5s' }}>
            <Smile className="w-7 h-7" />
          </div>
          
          <div className="absolute bottom-60 right-8 text-teal-400 opacity-70 animate-floatMega" style={{ animationDelay: '5s' }}>
            <Baby className="w-6 h-6" />
          </div>
          
          {/* Partículas NUEVAS - Tamaño Grande */}
          <div className="absolute top-16 left-40 text-cyan-400 opacity-65 animate-floatIntense" style={{ animationDelay: '1.2s' }}>
            <Scissors className="w-8 h-8" />
          </div>
          
          <div className="absolute top-80 left-20 text-lime-400 opacity-70 animate-floatMega" style={{ animationDelay: '4.2s' }}>
            <Puzzle className="w-9 h-9" />
          </div>
          
          <div className="absolute bottom-16 left-40 text-amber-400 opacity-75 animate-floatIntense" style={{ animationDelay: '2.8s' }}>
            <Trophy className="w-8 h-8" />
          </div>
          
          <div className="absolute top-24 right-8 text-rose-400 opacity-60 animate-floatMega" style={{ animationDelay: '3.8s' }}>
            <Gift className="w-7 h-7" />
          </div>
          
          {/* Partículas PEQUEÑAS - Alta densidad */}
          <div className="absolute top-28 left-8 text-violet-400 opacity-55 animate-floatIntense" style={{ animationDelay: '0.5s' }}>
            <Gamepad2 className="w-4 h-4" />
          </div>
          
          <div className="absolute top-44 right-12 text-sky-400 opacity-60 animate-floatMega" style={{ animationDelay: '2.2s' }}>
            <Flower className="w-5 h-5" />
          </div>
          
          <div className="absolute bottom-28 left-16 text-emerald-400 opacity-65 animate-floatIntense" style={{ animationDelay: '1.8s' }}>
            <Paintbrush className="w-4 h-4" />
          </div>
          
          <div className="absolute bottom-44 right-24 text-fuchsia-400 opacity-55 animate-floatMega" style={{ animationDelay: '3.2s' }}>
            <Shapes className="w-5 h-5" />
          </div>
          
          <div className="absolute top-36 left-4 text-orange-300 opacity-50 animate-floatIntense" style={{ animationDelay: '4.5s' }}>
            <Zap className="w-4 h-4" />
          </div>
          
          <div className="absolute top-52 right-4 text-blue-300 opacity-60 animate-floatMega" style={{ animationDelay: '1.7s' }}>
            <Rocket className="w-5 h-5" />
          </div>
          
          <div className="absolute bottom-36 left-4 text-pink-300 opacity-55 animate-floatIntense" style={{ animationDelay: '3.7s' }}>
            <Bird className="w-4 h-4" />
          </div>
          
          <div className="absolute bottom-52 right-4 text-green-300 opacity-65 animate-floatMega" style={{ animationDelay: '2.7s' }}>
            <TreePine className="w-5 h-5" />
          </div>
          
          {/* Partículas MICRO - Súper pequeñas */}
          <div className="absolute top-12 left-28 text-yellow-300 opacity-45 animate-floatIntense" style={{ animationDelay: '0.8s' }}>
            <Sun className="w-3 h-3" />
          </div>
          
          <div className="absolute top-68 left-36 text-slate-400 opacity-50 animate-floatMega" style={{ animationDelay: '2.3s' }}>
            <Moon className="w-3 h-3" />
          </div>
          
          <div className="absolute bottom-12 left-28 text-gray-400 opacity-45 animate-floatIntense" style={{ animationDelay: '4.1s' }}>
            <Cloud className="w-3 h-3" />
          </div>
          
          <div className="absolute bottom-68 right-28 text-purple-300 opacity-55 animate-floatMega" style={{ animationDelay: '1.3s' }}>
            <Cake className="w-4 h-4" />
          </div>
        
          
          <div className="absolute bottom-8 right-8 text-violet-400 opacity-75 animate-floatMega" style={{ animationDelay: '2.2s' }}>
            <BarChart3 className="w-8 h-8" />
          </div>
          
          {/* Más iconos en zona inferior */}
          <div className="absolute bottom-16 right-20 text-pink-400 opacity-70 animate-floatMega" style={{ animationDelay: '2.8s' }}>
            <Star className="w-7 h-7" />
          </div>
          
          <div className="absolute bottom-24 right-40 text-cyan-400 opacity-65 animate-floatMega" style={{ animationDelay: '3.7s' }}>
            <Target className="w-6 h-6" />
          </div>
          
          <div className="absolute bottom-32 right-32 text-rose-400 opacity-60 animate-floatMega" style={{ animationDelay: '4.8s' }}>
            <Apple className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <div className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full border-2 border-purple-200 shadow-2xl">
              <GraduationCap className="w-20 h-20 text-purple-600" />
            </div>
          </div>

          <h1 className={`nidopro-title text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-900 via-violet-500 to-rose-500 bg-clip-text text-transparent transition-all duration-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.2s' }}>
            NidoPro
          </h1>
          
          <div className={`bg-transparent rounded-3xl p-10 mb-12 transition-all duration-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.4s' }}>
            <p className="nidopro-text text-lg md:text-4xl text-gray-800 mb-8 font-bold leading-relaxed">
              Plataforma educativa completa <br/> para la gestión integral de centros educativos
            </p>

            {/* Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-blue-700 text-base font-bold">Gestión de estudiantes y padres</span>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-purple-700 text-base font-bold">Sistema de matrículas integrado</span>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-pink-700 text-base font-bold">Reportes y análisis en tiempo real</span>
              </div>
            </div>

            <div className={`flex justify-center items-center transition-all duration-1600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => window.open('https://nido-pro-frontend.vercel.app/login', '_blank')}
                className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-3xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-4 group shadow-2xl hover:shadow-3xl transform hover:scale-110 cursor-pointer"
              >
                PROBAR NIDO PRO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}