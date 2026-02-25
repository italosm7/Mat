
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

// Using React.FC to properly handle standard React props like 'key' in a way that satisfies TypeScript
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-emerald-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-emerald-900 group-hover:text-emerald-600 transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const questions = [
    { q: "Como recebo o acesso ao curso?", a: "Imediatamente após a confirmação do pagamento, você receberá os dados de acesso em seu e-mail cadastrado." },
    { q: "Em quanto tempo libero o acesso?", a: "Pagamentos via Cartão ou PIX são liberados em poucos segundos. Boletos podem levar até 48h úteis." },
    { q: "Posso acessar pelo celular?", a: "Com certeza! A plataforma é totalmente otimizada para celulares, tablets e computadores." },
    { q: "As aulas ficam gravadas?", a: "Sim, todas as aulas e esquemas estão disponíveis para você assistir e revisar quando quiser." },
    { q: "Tenho direito às atualizações?", a: "Sim, comprando hoje você tem acesso a todas as futuras atualizações do curso sem custos adicionais." },
    { q: "Posso assistir quantas vezes quiser?", a: "Sim, o acesso é vitalício e ilimitado. Você pode ver e rever as aulas quantas vezes precisar." }
  ];

  return (
    <section className="py-24 bg-emerald-50/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Tire suas dúvidas</h2>
        </div>
        
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-emerald-100">
          {questions.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
