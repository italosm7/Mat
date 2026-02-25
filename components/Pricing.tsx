
import React, { useEffect, useRef } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingProps {
  onOpenCheckout: (plan: { name: string; badge: string; image: string }) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasViewed = useRef(false);

  useEffect(() => {
    // 3. ViewContent - Disparar quando o bloco da oferta entrar na área visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasViewed.current) {
          // Fix: Access window.fbq via type assertion to resolve TypeScript property missing error
          if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'ViewContent');
            hasViewed.current = true;
          }
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-emerald-50/50 relative" id="secao-precos">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-200/50 rounded-lg border border-emerald-200">
            Aproveite o Lote Atual
          </div>
          <h2 className="text-3xl md:text-7xl font-black text-emerald-950 mb-4 md:mb-6 tracking-tighter">
            INVISTA NO SEU <span className="heading-gradient">CARGO PÚBLICO</span>
          </h2>
          <p className="text-base md:text-xl text-emerald-800/60 font-medium px-4">Preço promocional limitado para os próximos 500 alunos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch max-w-5xl mx-auto">
          {/* Pacote Simples */}
          <div className="glass-green rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-emerald-200 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl font-black text-emerald-900/30 mb-1 md:mb-2 uppercase italic">Plano</h3>
              <div className="text-3xl md:text-4xl font-black text-emerald-950">ESSENCIAL</div>
            </div>
            
            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-12 flex-grow">
              <li className="flex items-center gap-3 font-bold text-emerald-900/70 text-sm md:text-base">
                <div className="bg-emerald-200 p-1 rounded-full shrink-0"><Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-700" /></div>
                Curso Completo de Matemática para Concursos
              </li>
              <li className="flex items-center gap-3 font-bold text-emerald-900/70 text-sm md:text-base">
                <div className="bg-emerald-200 p-1 rounded-full shrink-0"><Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-700" /></div>
                Material esquematizado e ilustrado
              </li>
              <li className="flex items-center gap-3 font-bold text-emerald-900/70 text-sm md:text-base">
                <div className="bg-emerald-200 p-1 rounded-full shrink-0"><Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-700" /></div>
                Acesso vitalício
              </li>
            </ul>

            <div className="mb-8 flex justify-center">
              <img 
                src="https://i.imgur.com/my3Yxg5.png" 
                alt="Kit Essencial Matemática" 
                className="w-full max-w-[280px] rounded-2xl shadow-lg border border-emerald-100"
              />
            </div>

            <div className="mb-8 md:mb-10">
              <div className="text-emerald-900/30 line-through text-base md:text-lg mb-1 font-bold">DE R$ 97,00 POR:</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tighter italic">R$ 5</span>
                <span className="text-emerald-900/40 font-bold uppercase text-[10px] md:text-xs">Acesso Único</span>
              </div>
            </div>

            <button 
              id="cta-plano-essencial"
              data-plan="essencial"
              onClick={() => onOpenCheckout({ 
                name: 'Plano Essencial', 
                badge: 'PACOTE SIMPLES', 
                image: 'https://i.imgur.com/my3Yxg5.png' 
              })}
              className="w-full py-4 md:py-6 rounded-xl md:rounded-2xl bg-white border-2 md:border-4 border-emerald-600 text-emerald-700 font-black text-lg md:text-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg"
            >
              LIBERAR AGORA
            </button>
          </div>

          {/* Combo - Destaque */}
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 card-premium flex flex-col transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] relative overflow-hidden lg:scale-110 z-20">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-700 to-emerald-500 text-white px-5 md:px-8 py-2 md:py-3 rounded-bl-[1.5rem] md:rounded-bl-[2rem] font-black text-[10px] md:text-sm flex items-center gap-2 tracking-widest">
              <Crown className="w-3 h-3 md:w-4 md:h-4 fill-white" /> MAIS ESCOLHIDO
            </div>

            <div className="mb-6 md:mb-8 mt-2 md:mt-0 text-center">
              <h3 className="text-xl font-black text-emerald-500 mb-1 md:mb-2 uppercase italic">Plano</h3>
              <div className="text-4xl md:text-5xl font-black text-emerald-900 tracking-tighter">COMBO VIP</div>
            </div>

            <div className="mb-8 flex justify-center">
              <img 
                src="https://i.imgur.com/OGGhRcq.png" 
                alt="Combo VIP Português" 
                className="w-full max-w-[320px] rounded-2xl shadow-2xl border-2 border-emerald-100"
              />
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-grow">
              {[
                "Curso completo de Matemática",
                "1000 Questões de Matemática",
                "100 Dicas de resolução de prova",
                "Acesso Vitalício a todas as atualizações",
                "Garantia de 7 dias ou seu dinheiro de volta",
                "Acesso Imediato após pagamento"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-extrabold text-emerald-950 text-sm md:text-base">
                  <div className="bg-emerald-500 p-1 md:p-1.5 rounded-full shadow-lg shadow-emerald-500/30 shrink-0"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-8 md:mb-10 p-5 md:p-8 bg-emerald-50/50 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-emerald-100">
              <div className="text-emerald-700/50 line-through text-base md:text-lg mb-1 font-bold">DE R$ 149,00 POR:</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-black text-emerald-600 tracking-tighter italic">R$ 10,70</span>
                <span className="text-emerald-600 font-bold uppercase text-[10px] md:text-xs">Vitalício</span>
              </div>
            </div>

            <button 
              data-plan="combo"
              onClick={() => onOpenCheckout({ 
                name: 'Plano Combo VIP', 
                badge: 'PACOTE VIP', 
                image: 'https://i.imgur.com/OGGhRcq.png' 
              })}
              className="w-full py-4 md:py-6 rounded-xl md:rounded-2xl gradient-green text-white font-black text-lg md:text-2xl hover:scale-105 transition-all duration-300 shadow-2xl green-glow-strong btn-pulse"
            >
              QUERO O COMBO VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
