
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-emerald-900 font-bold text-xl mb-4">Curso Completo de Matemática para Concursos</p>
        
        <p className="text-gray-600 font-medium mb-2">
          Suporte: <a href="mailto:suporteaprovaconcursos@gmail.com" className="text-emerald-600 hover:underline">suporteaprovaconcursos@gmail.com</a>
        </p>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados. Foco em Concursos.
        </p>
        
        <div className="mt-6 flex justify-center gap-6 text-xs text-gray-400 font-medium">
          <a href="#" className="hover:text-emerald-600 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};
