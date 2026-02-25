
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { DemoCards } from './components/DemoCards';
import { PainSolution } from './components/PainSolution';
import { Benefits } from './components/Benefits';
import { TargetAudience } from './components/TargetAudience';
import { ContentTopics } from './components/ContentTopics';
import { DigitalContent } from './components/DigitalContent';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Plano Essencial',
    badge: 'PACOTE SIMPLES',
    image: 'https://i.imgur.com/36EFUlu.png'
  });

  const openCheckout = (plan: { name: string; badge: string; image: string }) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Hero />
      <DemoCards />
      <PainSolution />
      <Benefits />
      <TargetAudience />
      <ContentTopics />
      <DigitalContent />
      <Pricing onOpenCheckout={openCheckout} />
      <Guarantee />
      <FinalCTA />
      <FAQ />
      <Footer />

      {/* Checkout Modal Overlay */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        planName={selectedPlan.name}
        planBadge={selectedPlan.badge}
        planImage={selectedPlan.image}
      />
    </div>
  );
}

export default App;
