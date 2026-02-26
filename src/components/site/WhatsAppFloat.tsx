'use client';

import { useState, useEffect } from 'react';

const phone   = '5586994820054';
const message = 'Olá Dr. Ben! Gostaria de uma orientação jurídica.';
const waUrl   = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed]  = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBubble(true), 3500);
    const t2 = setTimeout(() => setShowBubble(false), 13000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Bubble de chamada */}
      {showBubble && (
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 max-w-[230px]"
          style={{ animation: 'slideUpFade 0.4s ease' }}>
          {/* Seta */}
          <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 text-[10px]"
          >✕</button>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-[#D4A017] shrink-0">
              <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-[#19385C] font-bold text-xs leading-none">Dr. Ben</p>
              <span className="flex items-center gap-1 text-[10px] text-green-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                online agora
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">
            Olá! Posso ajudar com sua dúvida jurídica agora mesmo. 👋
          </p>
        </div>
      )}

      {/* Botão principal com foto Dr. Ben */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dr. Ben no WhatsApp"
        className="relative group flex items-center"
      >
        {/* Anel pulsante dourado */}
        <span className="absolute inset-0 rounded-full bg-[#D4A017]/30 animate-ping" />

        {/* Círculo principal */}
        <div
          className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-[#D4A017] shadow-2xl group-hover:scale-110 transition-transform"
          style={{ boxShadow: '0 0 20px rgba(212,160,23,0.5), 0 4px 14px rgba(0,0,0,0.3)' }}
        >
          <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
        </div>

        {/* Badge WhatsApp */}
        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center border-2 border-white shadow-md">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.324-2.236l-.442-.37-3.063 1.027 1.027-3.063-.37-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
        </div>

        {/* Dot online */}
        <div className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </div>
      </a>

      {/* Fechar */}
      <button
        onClick={() => setDismissed(true)}
        className="text-[10px] text-white/40 hover:text-white/70 transition-colors mt-0.5"
      >
        fechar
      </button>

      <style jsx>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
