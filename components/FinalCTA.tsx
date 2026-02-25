
import React from 'react';
import { Zap, Rocket } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();

    // 4. AddToCart - Disparar ao clicar no botão de comprar da oferta final
    // Fix: Access window.fbq via type assertion to resolve TypeScript property missing error
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'AddToCart');
    }

    const target = document.getElementById('cta-plano-essencial');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-emerald-950 relative overflow-hidden px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-emerald-400/10 rounded-full blur-[80px] md:blur-[120px]" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-emerald-300 font-black uppercase tracking-widest text-[10px] md:text-sm mb-6 bg-emerald-400/10 px-4 md:px-6 py-2 rounded-full border border-emerald-400/20">
          <Rocket className="w-3 h-3 md:w-4 md:h-4" /> Sua Aprovação começa aqui
        </div>
        
        <h2 className="text-3xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1] tracking-tighter px-2">
          PARE DE SOFRER COM <br className="hidden md:block" />
          <span className="text-emerald-400 italic uppercase">A MATEMÁTICA</span>
        </h2>
        
        <p className="text-base md:text-2xl text-emerald-100/70 font-bold mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed px-4">
          O próximo edital não vai esperar você aprender do jeito difícil.
        </p>
        
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <button 
            onClick={scrollToPricing}
            className="group relative btn-pulse bg-white text-emerald-950 px-8 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[2rem] text-xl md:text-3xl font-black shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 md:gap-4 border-none cursor-pointer"
          >
            QUERO ACESSAR AGORA
            <Zap className="w-6 h-6 md:w-8 md:h-8 fill-emerald-950" />
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-emerald-400 font-bold text-sm md:text-lg uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-ping" />
              Apenas R$ 5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
