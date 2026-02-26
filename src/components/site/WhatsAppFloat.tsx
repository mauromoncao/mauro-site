'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 max-w-[240px]"
          style={{ animation: 'slideUpFade 0.4s ease' }}>
          {/* Seta */}
          <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 text-[10px]"
          >✕</button>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#D4A017] shrink-0">
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
          <p className="text-gray-600 text-xs leading-relaxed mb-2">
            Olá! Posso ajudar com sua dúvida jurídica. Clique para entrar em contato. 👋
          </p>
          <Link
            href="/contato"
            className="block text-center text-[11px] font-bold text-[#0f2340] rounded-full py-1.5 px-3 hover:brightness-110 transition-all"
            style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)' }}
          >
            Falar agora
          </Link>
        </div>
      )}

      {/* Botão principal — foto Dr. Ben com badge verde */}
      <Link
        href="/contato"
        aria-label="Entrar em contato com Dr. Ben"
        className="relative group flex items-center"
      >
        {/* Anel pulsante dourado */}
        <span className="absolute inset-0 rounded-full bg-[#D4A017]/30 animate-ping" />

        {/* Círculo principal com foto Dr. Ben */}
        <div
          className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-[#D4A017] shadow-2xl group-hover:scale-110 transition-transform"
          style={{ boxShadow: '0 0 20px rgba(212,160,23,0.5), 0 4px 14px rgba(0,0,0,0.3)' }}
        >
          <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
        </div>

        {/* Badge contato */}
        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#D4A017] flex items-center justify-center border-2 border-white shadow-md">
          {/* Ícone de mensagem/chat */}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          </svg>
        </div>

        {/* Dot online */}
        <div className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </div>
      </Link>

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
