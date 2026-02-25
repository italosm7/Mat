
import React from 'react';
import { Eye, Brain, Zap, XCircle, CheckCircle2 } from 'lucide-react';

export const PainSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-emerald-950 text-white overflow-hidden relative px-4">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-400/10 rounded-full blur-[80px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-emerald-600/5 rounded-full blur-[60px] md:blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tighter italic">
            VOCÊ ESTÁ <span className="text-emerald-400">JOGANDO TEMPO FORA?</span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Problem Column */}
          <div className="bg-emerald-900/40 border border-emerald-800 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-6 md:mb-8 flex items-center gap-3 italic underline decoration-red-500/30">
              O MÉTODO TRADICIONAL É LENTO:
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Vídeos longos e repetitivos",
                "Fórmulas jogadas sem explicação de raciocínio",
                "Falta de organização entre os assuntos",
                "Dificuldade para revisar antes da prova"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-emerald-100/70 text-sm md:text-base font-medium">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="gradient-green p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl green-glow-strong transform lg:scale-110">
            <h3 className="text-xl md:text-2xl font-black text-emerald-950 mb-6 md:mb-8 flex items-center gap-3">
              A REVOLUÇÃO VISUAL:
            </h3>
            <p className="text-emerald-950 font-bold text-base md:text-xl mb-6 md:mb-8 leading-relaxed italic">
              “Quando você enxerga o caminho da resolução, a matemática deixa de ser decoreba e vira lógica.”
            </p>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Esquemas visuais para cada tipo de questão",
                "Resolução passo a passo ilustrada",
                "Revisão rápida por mapas e resumos visuais",
                "Conteúdo alinhado ao padrão real das provas"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-emerald-950 font-extrabold text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
