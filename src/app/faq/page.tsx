import type { Metadata } from 'next';
import SiteLayout from '@/components/site/SiteLayout';
import FaqSection from '@/components/site/FaqSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — Mauro Monção Advogados Associados',
  description:
    'Tire suas dúvidas sobre nossos serviços jurídicos: Direito Tributário, Planejamento Patrimonial, Advocacia Pública e muito mais. Atendimento 24h.',
  alternates: { canonical: 'https://mauromoncao.adv.br/faq' },
};

export default function FaqPage() {
  return (
    <SiteLayout>

      {/* ── HERO ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #07182e 0%, #0f2340 100%)',
        }}
      >
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs uppercase tracking-[.18em] mb-8">
            <Link href="/" className="hover:text-[#D4A017] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#D4A017]">Perguntas Frequentes</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/40 rounded-full px-5 py-2 mb-6">
            <svg
              className="w-4 h-4 text-[#D4A017]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-[#D4A017] text-xs font-bold uppercase tracking-[.22em]">
              Dúvidas Frequentes
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-tight mb-5"
            style={{
              background: 'linear-gradient(135deg, #F0C040 0%, #D4A017 40%, #F0C040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Perguntas Frequentes
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Respondemos as principais dúvidas de quem busca orientação jurídica
            estratégica e especializada. Não encontrou sua resposta?{' '}
            <Link href="/contato" className="text-[#D4A017] hover:underline font-semibold">
              Entre em contato
            </Link>
            .
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4A017]/50" />
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)' }}
            />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4A017]/50" />
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION (reuses the shared component) ── */}
      <FaqSection />

      {/* ── FINAL CTA ── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #0f2340 0%, #07182e 100%)' }}
      >
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/60 rounded-full px-4 py-2 text-sm text-[#D4A017] font-bold uppercase tracking-[.15em] mb-6">
            Atendimento 24h
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif text-white">
            Ainda tem dúvidas?
          </h2>
          <p className="text-white/60 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Nossa equipe está pronta para orientá-lo. Entre em contato agora e receba
            um atendimento personalizado e sigiloso.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 text-[#0f2340] px-8 py-4 rounded-full text-base font-bold hover:brightness-110 hover:scale-105 transition-all"
            style={{
              background: 'linear-gradient(135deg,#D4A017,#F0C040)',
              boxShadow: '0 0 28px rgba(212,160,23,0.45)',
            }}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#0f2340]/20 shrink-0">
              <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
            </div>
            Falar com Dr. Ben — 24h
            <span className="w-2.5 h-2.5 rounded-full bg-green-600 shrink-0" />
          </Link>
        </div>
      </section>

    </SiteLayout>
  );
}
