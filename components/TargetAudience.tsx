
import React from 'react';
import { UserCheck } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    "Busca aprovação em concursos públicos",
    "Tem dificuldade para entender o raciocínio das questões",
    "Erra por confundir fórmulas",
    "Precisa de um curso organizado do zero ao avançado",
    "Quer estudar mesmo com pouco tempo disponível",
    "Procura um material direto, visual e bem estruturado",
    "Quer dominar a matemática que mais elimina candidatos"
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Este curso de Matemática é para você que…
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {points.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <UserCheck className="w-3 h-3 text-emerald-900 fill-emerald-900" />
                </div>
              </div>
              <p className="text-lg leading-tight opacity-90">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-[100px]" />
    </section>
  );
};
