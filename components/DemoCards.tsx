
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const DemoCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 1, label: "Aula 1", src: "https://i.imgur.com/hIMSYyZ.png" },
    { id: 2, label: "Aula 2", src: "https://i.imgur.com/JxEiCiJ.png" },
    { id: 3, label: "Aula 3", src: "https://i.imgur.com/QfEowhD.png" },
    { id: 4, label: "Aula 4", src: "https://i.imgur.com/r73SNWX.png" },
    { id: 5, label: "Aula 5", src: "https://i.imgur.com/hnLbba8.png" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Scroll logic for the carousel
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4 uppercase tracking-tighter">
            CONFIRA O <span className="text-emerald-600">CONTEÚDO!</span>
          </h2>
          <p className="text-gray-500 font-medium">Arraste para o lado ou use as setas para navegar</p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-emerald-600 hover:text-white p-3 rounded-full shadow-xl border border-emerald-100 transition-all duration-300 -ml-4 md:-ml-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-emerald-600 hover:text-white p-3 rounded-full shadow-xl border border-emerald-100 transition-all duration-300 -mr-4 md:-mr-6"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-gray-50 border-2 border-emerald-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 h-full">
                  <div className="aspect-[3/4] rounded-[2rem] bg-emerald-50 flex items-center justify-center border-dashed border-2 border-emerald-200 text-emerald-300 font-medium text-lg overflow-hidden relative group">
                    <img 
                      src={card.src} 
                      alt={card.label} 
                      className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-emerald-600' : 'w-2 bg-emerald-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
