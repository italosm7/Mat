
import React from 'react';
import { FastForward, Clock, Target, MessageCircle, Sparkles } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <FastForward className="w-10 h-10 text-white" />,
      title: "Aprendizado muito mais rápido",
      desc: "Entenda o raciocínio que as bancas cobram e não apenas a fórmula."
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: "Revisão em poucos minutos",
      desc: "Use os esquemas para revisar qualquer assunto rapidamente antes da prova."
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Foco Total na Prova",
      desc: "O curso foi montado exclusivamente com os conteúdos que realmente caem em concursos."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-white" />,
      title: "Matemática sem Complicação",
      desc: "Um curso pensado para quem sempre teve dificuldade com matemática."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emerald-500 rounded-2xl rotate-12 shadow-xl shadow-emerald-500/20">
              <Sparkles className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tighter uppercase italic">
            O QUE VOCÊ VAI <span className="text-emerald-600 underline decoration-emerald-400">GANHAR HOJE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="relative group p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 rounded-2xl gradient-green flex items-center justify-center shadow-lg shadow-emerald-500/30 transform group-hover:rotate-6 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-black text-emerald-950 mb-4 leading-tight">{b.title}</h3>
                <p className="text-emerald-800/60 font-bold leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
