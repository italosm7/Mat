
import React from 'react';
import { Download, Monitor, RefreshCcw, Lock } from 'lucide-react';

export const DigitalContent: React.FC = () => {
  const features = [
    { icon: <Monitor className="w-5 h-5 md:w-6 md:h-6" />, text: "Plataforma disponível 24h" },
    { icon: <RefreshCcw className="w-5 h-5 md:w-6 md:h-6" />, text: "Acesso a todas as atualizações" },
    { icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />, text: "Acesso vitalício liberado" }
  ];

  return (
    <section className="py-12 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl border-2 border-emerald-100 flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block text-emerald-600 font-black text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Acesso Instantâneo
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 uppercase tracking-tighter">
              CONTEÚDO <span className="text-emerald-600">100% ONLINE</span>
            </h2>
            
            <div className="inline-flex items-center gap-2 md:gap-3 bg-emerald-600 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-black text-sm md:text-xl mb-10 shadow-xl shadow-emerald-600/30 hover:scale-105 transition-transform cursor-pointer">
              <Download className="w-6 h-6 md:w-7 md:h-7" /> LIBERADO IMEDIATAMENTE
            </div>
            
            <p className="text-base md:text-xl text-slate-600 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Receba seu acesso na hora e comece a estudar em segundos. Curso otimizado para celular, tablet e computador.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-left">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-emerald-950 font-black bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                    {f.icon}
                  </div>
                  <span className="text-xs md:text-base leading-tight">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Visual Representation */}
          <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-emerald-100 rounded-[3rem] rotate-12 shadow-2xl border-4 border-white z-0 opacity-40"></div>
              
              <div className="relative z-10 w-full h-full bg-emerald-600 rounded-[3rem] -rotate-6 shadow-[0_30px_60px_-15px_rgba(6,78,59,0.3)] flex flex-col items-center justify-center border-4 border-white overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40"></div>
                <Monitor className="w-20 h-20 md:w-28 md:h-28 text-white mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-xs md:text-sm font-black uppercase tracking-widest border border-white/30">
                  Vitalício
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white p-3 rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform">
                  <Download className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
