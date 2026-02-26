'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const waPhone   = '5586994820054';
const waMessage = 'Olá Dr. Ben! Gostaria de uma orientação jurídica.';
const waUrl     = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessage)}`;

export default function FloatingButtons() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted]     = useState(false);

  // Animate in after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .float-btn {
          animation: floatIn 0.45s ease forwards;
        }
        .float-btn-chat  { animation-delay: 0.1s; opacity: 0; }
        .float-btn-wa    { animation-delay: 0.25s; opacity: 0; }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .pulse-gold { animation: pulseRing 2.2s ease-out infinite; }
        .pulse-green { animation: pulseRing 2.2s ease-out infinite 0.5s; }
      `}</style>

      {/* ── Wrapper fixo bottom-right ── */}
      <div
        className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3"
        style={{ filter: mounted ? 'none' : 'opacity(0)' }}
      >

        {/* ══════════════════════════════════
            BOTÃO SUPERIOR — Chat Assistente
            Dourado, rota interna /assistente-juridico
        ══════════════════════════════════ */}
        <Link
          href="/assistente-juridico"
          aria-label="Abrir chat com assistente jurídico Dr. Ben"
          className="float-btn float-btn-chat group flex items-center gap-0 hover:gap-2.5 overflow-hidden rounded-full transition-all duration-300 ease-out hover:pr-4"
          style={{
            background: 'linear-gradient(135deg, #0f2340 0%, #19385C 100%)',
            border: '2.5px solid #D4A017',
            boxShadow: '0 0 18px rgba(212,160,23,0.45), 0 4px 16px rgba(0,0,0,0.4)',
            height: '56px',
            minWidth: '56px',
          }}
        >
          {/* Anel pulsante dourado */}
          <span
            className="pulse-gold absolute rounded-full pointer-events-none"
            style={{
              width: '56px', height: '56px',
              border: '2px solid rgba(212,160,23,0.55)',
              right: 0,
            }}
          />

          {/* Foto Dr. Ben */}
          <div
            className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0"
            style={{ border: '2px solid rgba(212,160,23,0.5)' }}
          >
            <img
              src="/dr-ben.jpg"
              alt="Dr. Ben"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Label — aparece no hover */}
          <span
            className="text-[13px] font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300"
            style={{ color: '#D4A017' }}
          >
            Chat Jurídico
          </span>

          {/* Badge chat ícone */}
          <div
            className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-[2px] border-white"
            style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)' }}
          >
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="#0f2340">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            </svg>
          </div>

          {/* Dot online */}
          <div className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white shadow" />
        </Link>

        {/* ══════════════════════════════════
            BOTÃO INFERIOR — WhatsApp Dr. Ben
            Borda verde, link externo wa.me
        ══════════════════════════════════ */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp do Dr. Ben"
          className="float-btn float-btn-wa group relative flex items-center gap-0 hover:gap-2.5 overflow-hidden rounded-full transition-all duration-300 ease-out hover:pr-4"
          style={{
            background: 'linear-gradient(135deg, #0f2340 0%, #19385C 100%)',
            border: '2.5px solid #25D366',
            boxShadow: '0 0 18px rgba(37,211,102,0.35), 0 4px 16px rgba(0,0,0,0.4)',
            height: '56px',
            minWidth: '56px',
          }}
        >
          {/* Anel pulsante verde */}
          <span
            className="pulse-green absolute rounded-full pointer-events-none"
            style={{
              width: '56px', height: '56px',
              border: '2px solid rgba(37,211,102,0.5)',
              right: 0,
            }}
          />

          {/* Foto Dr. Ben */}
          <div
            className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0"
            style={{ border: '2px solid rgba(37,211,102,0.45)' }}
          >
            <img
              src="/dr-ben.jpg"
              alt="Dr. Ben"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Label — aparece no hover */}
          <span
            className="text-[13px] font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[160px] transition-all duration-300"
            style={{ color: '#25D366' }}
          >
            WhatsApp
          </span>

          {/* Badge WhatsApp ícone */}
          <div
            className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-[2px] border-white"
            style={{ background: '#25D366' }}
          >
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </div>

          {/* Dot online */}
          <div className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white shadow" />
        </a>

        {/* Fechar ambos */}
        <button
          onClick={() => setDismissed(true)}
          className="text-[10px] text-white/35 hover:text-white/60 transition-colors tracking-wide"
          aria-label="Fechar botões flutuantes"
        >
          fechar
        </button>
      </div>
    </>
  );
}
