
import React from 'react';
import { CheckCircle, Zap, ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 2. AddToWishlist - Disparar ao clicar no primeiro botão de comprar (Hero)
    // Fix: Access window.fbq via type assertion to resolve TypeScript property missing error
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'AddToWishlist');
    }

    const target = document.getElementById('cta-plano-essencial');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="relative pt-12 pb-20 md:py-32 bg-emerald-950 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-lime-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 md:mb-8 text-[10px] md:text-sm font-bold tracking-wider text-lime-400 uppercase bg-emerald-900/50 border border-lime-500/30 rounded-full shadow-sm floating backdrop-blur-md">
          <Zap className="w-3 h-3 md:w-4 md:h-4 fill-lime-400 text-lime-400" />
          O Atalho para sua Aprovação
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter px-2">
          DOMINE MATEMÁTICA <br className="hidden md:block" />
          <span className="text-lime-400 uppercase italic">EM TEMPO RECORDE</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base md:text-2xl text-emerald-100/80 mb-10 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
          Substitua apostilas cansativas por um <span className="text-white font-extrabold underline decoration-lime-400 decoration-4 underline-offset-4">Curso Completo de Matemática</span>, com todo o conteúdo esquematizado e ilustrado.
        </p>

        {/* Hero Image / Product Visual */}
        <div className="mb-10 md:mb-14 flex justify-center relative px-2">
          <div className="relative group w-full md:w-auto">
            <div className="absolute inset-0 bg-lime-500/20 blur-3xl group-hover:bg-lime-500/30 transition-colors duration-500" />
            <img 
              src="https://i.imgur.com/my3Yxg5.png" 
              alt="Curso de Matemática Ilustrado" 
              className="relative z-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] border-4 md:border-8 border-emerald-900 w-full max-w-lg md:max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Price & CTA */}
        <div className="max-w-xl mx-auto bg-emerald-900/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
          
          <div className="flex flex-col items-center justify-center space-y-2 mb-8 md:mb-10">
            <div className="flex items-center gap-1 text-lime-400 mb-2 scale-110">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
              <span className="text-emerald-100/60 text-xs md:text-base font-bold ml-2">(4.9/5 de 12 mil alunos)</span>
            </div>
            <div className="text-emerald-100/30 line-through text-lg md:text-2xl font-bold uppercase tracking-widest">DE R$ 97,00 POR</div>
            <div className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-[0_5px_15px_rgba(163,230,53,0.3)]">R$ 5</div>
          </div>

          <button 
            onClick={scrollToPricing}
            className="group relative btn-pulse bg-lime-400 text-emerald-950 w-full py-4 md:py-8 rounded-xl md:rounded-[2rem] text-base md:text-3xl font-black transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center z-20 cursor-pointer border-none shadow-xl shadow-lime-400/20"
          >
            QUERO ACESSAR AGORA!
            <Zap className="ml-2 md:ml-3 w-4 h-4 md:w-8 md:h-8 fill-emerald-950 text-emerald-950 group-hover:animate-bounce shrink-0" />
          </button>
          
          <p className="mt-6 text-emerald-100/60 font-bold flex items-center justify-center gap-2 text-xs md:text-sm">
            <ShieldCheck className="w-5 h-5 text-lime-400" /> Garantia total de satisfação ou reembolso
          </p>
        </div>
        
        {/* Trusted By / Features */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 opacity-40">
          <div className="flex items-center gap-2 font-black text-emerald-100 text-sm md:text-xl">
            <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-lime-400" /> AULAS ORGANIZADAS
          </div>
          <div className="flex items-center gap-2 font-black text-emerald-100 text-sm md:text-xl">
            <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-lime-400" /> ACESSO VITALÍCIO
          </div>
          <div className="flex items-center gap-2 font-black text-emerald-100 text-sm md:text-xl">
            <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-lime-400" /> CONTEÚDO ILUSTRADO
          </div>
        </div>
      </div>
    </header>
  );
};
