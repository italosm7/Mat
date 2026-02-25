
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border-2 border-dashed border-emerald-300 flex flex-col items-center">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
            <ShieldCheck className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-emerald-900 mb-6 uppercase tracking-tight">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
            Se o material não for como você esperava, devolvemos seu dinheiro sem burocracia. É risco zero para você.
          </p>
        </div>
      </div>
    </section>
  );
};
