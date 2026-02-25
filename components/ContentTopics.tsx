
import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const ContentTopics: React.FC = () => {
  const topics = [
    {
      title: "ARITMÉTICA",
      items: ["Operações fundamentais", "Múltiplos e divisores", "MMC e MDC", "Frações", "Potenciação", "Radiciação"]
    },
    {
      title: "PORCENTAGEM E PROPORÇÕES",
      items: ["Porcentagem básica", "Aumentos e descontos", "Porcentagem sucessiva", "Razão e proporção", "Regra de três simples", "Regra de três composta"]
    },
    {
      title: "JUROS",
      items: ["Juros simples", "Juros compostos", "Montante", "Taxa e tempo"]
    },
    {
      title: "ÁLGEBRA",
      items: ["Expressões algébricas", "Produtos notáveis", "Fatoração", "Equações do 1º grau", "Equações do 2º grau", "Sistemas de equações"]
    },
    {
      title: "FUNÇÕES",
      items: ["Função afim", "Função quadrática", "Leitura e interpretação de gráficos"]
    },
    {
      title: "ESTATÍSTICA",
      items: ["Média", "Mediana", "Moda", "Tabelas", "Gráficos"]
    },
    {
      title: "PROBLEMAS CLÁSSICOS DE PROVA",
      items: ["Problemas de trabalho", "Problemas de movimento", "Divisão proporcional", "Misturas", "Raciocínio matemático"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="text-emerald-600 font-bold mb-2 uppercase tracking-widest text-sm">Organização Completa</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Curso completo organizado por módulos, do básico ao avançado, com esquemas e ilustrações em todas as aulas.
          </h2>
          <p className="text-xl text-emerald-700 font-semibold underline underline-offset-8">VEJA OS CONTEÚDOS:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topics.map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-emerald-100 pb-2">
                {t.title}
              </h3>
              <ul className="space-y-4">
                {t.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
