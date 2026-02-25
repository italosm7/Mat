
import React, { useState, useEffect } from 'react';
import { X, User, CreditCard, Lock, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planBadge: string;
  planImage: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  planName, 
  planBadge, 
  planImage 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // WhatsApp Mask implementation
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
    if (value.length > 11) value = value.slice(0, 11); // Limit to 11 digits (DDD + 9 digits)

    // Format: (00) 00000-0000
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }

    setWhatsapp(value);
  };

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle outside click to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // 5. InitiateCheckout - Disparar após validação bem-sucedida
    // Fix: Access window.fbq via type assertion to resolve TypeScript property missing error
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }

    // Capture UTM parameters from current URL
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {
      source: urlParams.get('utm_source') || '',
      medium: urlParams.get('utm_medium') || '',
      campaign: urlParams.get('utm_campaign') || '',
      id: urlParams.get('utm_id') || '',
      content: urlParams.get('utm_content') || '',
      term: urlParams.get('utm_term') || ''
    };

    // Clean data for URL
    const cleanPhone = whatsapp.replace(/\D/g, '');
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPhone = encodeURIComponent(cleanPhone);

    let checkoutBaseUrl = "";
    
    // Determine which checkout link to use based on the plan
    if (planName.includes('Essencial')) {
      checkoutBaseUrl = `https://ism-digital.mycartpanda.com/checkout/208017379:1&hide-selector=208017379:1?utm_source=${utms.source}&utm_medium=${utms.medium}&utm_campaign=${utms.campaign}&utm_id=${utms.id}&utm_content=${utms.content}&utm_term=${utms.term}&email=${encodedEmail}&first_name=${encodedName}&phone=${encodedPhone}`;
    } else {
      // Assuming it's the Combo VIP
      checkoutBaseUrl = `https://ism-digital.mycartpanda.com/checkout/208022716:1&208022842:1&208035424:1&hide-selector=208022716,208022842,208035424?utm_source=${utms.source}&utm_medium=${utms.medium}&utm_campaign=${utms.campaign}&utm_id=${utms.id}&utm_content=${utms.content}&utm_term=${utms.term}&email=${encodedEmail}&first_name=${encodedName}&phone=${encodedPhone}`;
    }

    // Redirect to checkout
    window.location.href = checkoutBaseUrl;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-2 md:p-4 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative bg-white w-full max-w-[480px] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-y-auto max-h-[95vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-slate-400 hover:text-black transition-colors z-10"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-5 md:p-12 pt-8 md:pt-14">
          {/* Header */}
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-emerald-950 mb-1 tracking-tight">Vamos Iniciar...</h2>
            <p className="text-emerald-800/60 font-bold text-xs md:text-sm">Preencha as informações abaixo</p>
          </div>

          {/* Product Summary Box - MOBILE OPTIMIZED */}
          <div className="bg-emerald-50 rounded-2xl md:rounded-[2rem] p-3 md:p-6 border border-emerald-100 flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="w-16 h-16 md:w-32 md:h-32 bg-white rounded-xl md:rounded-2xl border border-emerald-100 flex items-center justify-center p-2 shrink-0 shadow-sm">
              <img 
                src={planImage} 
                alt={planName} 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-emerald-950 font-black text-lg md:text-xl leading-tight">
                {planName.includes('Essencial') ? 'Matemática Essencial' : 'Combo VIP Matemática'}
              </h3>
              <p className="text-emerald-600 font-black text-xs md:text-sm uppercase tracking-widest mt-1">{planBadge}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                <ShieldCheck className="w-3 h-3" /> Acesso Instantâneo
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-8">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-900 flex items-center justify-center text-white shadow-lg">
              <User className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="w-10 md:w-16 h-0.5 bg-emerald-100" />
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-200">
              <CreditCard className="w-5 h-5 md:w-7 md:h-7" />
            </div>
          </div>

          {/* Form */}
          <form className="space-y-3 md:space-y-6" onSubmit={handleFormSubmit}>
            {/* Nome Completo */}
            <div>
              <div className="flex justify-between items-center mb-1.5 md:mb-2">
                <label className="text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest px-1">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <span className="text-[10px] text-emerald-300 font-bold">{name.length}/29</span>
              </div>
              <input 
                required
                type="text" 
                placeholder="Seu nome completo" 
                maxLength={29}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-0 text-emerald-950 placeholder:text-emerald-200 text-sm md:text-base font-bold transition-all outline-none"
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest mb-1.5 md:mb-2 px-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input 
                required
                type="email" 
                placeholder="Ex: seuemail@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-0 text-emerald-950 placeholder:text-emerald-200 text-sm md:text-base font-bold transition-all outline-none"
              />
            </div>

            {/* Whatsapp */}
            <div>
              <label className="block text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest mb-1.5 md:mb-2 px-1">
                Whatsapp (com DDD) <span className="text-red-500">*</span>
              </label>
              <input 
                required
                type="text" 
                placeholder="(00) 00000-0000" 
                value={whatsapp}
                onChange={handleWhatsappChange}
                className="w-full px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-0 text-emerald-950 placeholder:text-emerald-200 text-sm md:text-base font-bold transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-2 py-4 md:py-6 rounded-xl md:rounded-[2rem] gradient-green text-white font-black text-base md:text-lg transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 uppercase tracking-widest group active:scale-[0.98] btn-pulse border-none cursor-pointer"
            >
              <Lock className="w-5 h-5 group-hover:scale-110 transition-transform fill-white/20" />
              PROSSEGUIR PARA A COMPRA
            </button>
          </form>

          {/* Security Footer */}
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-300 font-black text-[9px] md:text-[10px] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            AMBIENTE 100% SEGURO
          </div>
        </div>
      </div>
    </div>
  );
};
