'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'Como saber se o meu caso precisa de orientação jurídica imediata?',
    a: 'Notificações, intimações, cobranças, autuações fiscais, bloqueios judiciais, penhoras ou qualquer situação que envolva risco patrimonial ou prazo legal exigem análise técnica rápida. Agir com agilidade pode ampliar significativamente as possibilidades de defesa e mudar o desfecho do caso. Na dúvida, consulte um advogado antes de responder qualquer documento oficial.',
  },
  {
    q: 'O escritório atende apenas causas tributárias?',
    a: 'Não. Embora o Direito Tributário e a Defesa Fiscal sejam áreas de forte atuação do escritório, também atuamos em Planejamento Patrimonial, Societário e Sucessório, Advocacia Pública Municipal, Direito Imobiliário, Família e Sucessões, Direito Ambiental, Relações de Consumo e outras demandas jurídicas estratégicas. Nossa proposta é ser um parceiro jurídico completo.',
  },
  {
    q: 'Posso ser atendido de forma on-line?',
    a: 'Sim. O escritório realiza atendimentos presenciais em Parnaíba (PI) e Fortaleza (CE), e também atende de forma totalmente digital, com segurança e praticidade, clientes em todo o Brasil. Reuniões por videoconferência, análise remota de documentos e acompanhamento digital fazem parte da nossa rotina.',
  },
  {
    q: 'O que devo fazer ao receber uma autuação fiscal ou cobrança da Fazenda Pública?',
    a: 'Não ignore o documento e, sobretudo, não tome decisões precipitadas. O ideal é encaminhar o documento a um advogado especializado para análise técnica imediata, verificando prazos, legalidade do lançamento, riscos envolvidos e as melhores possibilidades de defesa ou negociação. Erros comuns nessa etapa podem comprometer seriamente a estratégia do caso.',
  },
  {
    q: 'O escritório analisa meu caso antes de propor qualquer medida?',
    a: 'Sempre. Toda demanda recebida pelo escritório passa por análise criteriosa antes de qualquer recomendação ou medida. Avaliamos documentos, o cenário jurídico vigente, os riscos envolvidos e a viabilidade estratégica de cada caminho possível. Só então indicamos a abordagem mais adequada para o seu caso.',
  },
  {
    q: 'Quais documentos normalmente são necessários para uma análise inicial?',
    a: 'Depende da natureza da demanda. Em geral, podem ser necessários documentos pessoais ou societários, contratos, notificações, autos de infração, certidões, processos administrativos ou judiciais, comprovantes de pagamento ou outras peças relacionadas ao caso. Na primeira consulta, orientamos sobre o que é indispensável para cada situação específica.',
  },
  {
    q: 'O escritório atua apenas no Ceará, Piauí e Maranhão?',
    a: 'O escritório possui operação consolidada nesses três estados, com sedes físicas em Parnaíba (PI) e Fortaleza (CE). No entanto, também atende clientes de outras localidades de forma on-line e estratégica, especialmente em matérias que admitem atuação remota ou que envolvem questões de alcance nacional.',
  },
  {
    q: 'Como funciona o primeiro contato com o escritório?',
    a: 'O contato pode ser feito pelo formulário desta página, por telefone, WhatsApp ou demais canais digitais disponíveis. Após o contato inicial, realizamos uma triagem para entender a natureza e urgência da demanda, e direcionamos adequadamente para o profissional mais indicado ao seu caso.',
  },
  {
    q: 'O escritório trabalha com planejamento preventivo ou apenas com problemas já instalados?',
    a: 'Atuamos de forma abrangente, tanto preventiva quanto contenciosa. Nosso trabalho inclui planejamento tributário, sucessório e societário, proteção e reorganização patrimonial, estruturação de holdings, gestão de riscos jurídicos e outras soluções preventivas que evitam litígios e reduzem a exposição futura. Resolver problemas é importante, mas antecipá-los é ainda mais estratégico.',
  },
  {
    q: 'Por que escolher uma advocacia estratégica em vez de uma atuação puramente reativa?',
    a: 'A advocacia estratégica vai além da defesa pontual de interesses. Ela busca antecipar riscos, proteger o patrimônio, estruturar soluções juridicamente seguras e apoiar decisões empresariais e pessoais com técnica, visão sistêmica e inteligência jurídica. Clientes que contam com assessoria estratégica tomam decisões mais seguras, reduzem custos com litígios e protegem melhor seus ativos e negócios.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07182e 0%, #0f2340 50%, #07182e 100%)' }}
    >
      {/* Decorative radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,160,23,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
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
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold font-serif leading-tight mb-5"
            style={{
              background: 'linear-gradient(135deg, #F0C040 0%, #D4A017 40%, #F0C040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Perguntas Frequentes
          </h2>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Respondemos as principais dúvidas de quem busca orientação jurídica
            estratégica e especializada.
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

        {/* ── Accordion ── */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl transition-all duration-300"
                style={{
                  background: isOpen
                    ? 'linear-gradient(135deg, rgba(212,160,23,0.08) 0%, rgba(15,35,64,0.6) 100%)'
                    : 'rgba(15,35,64,0.55)',
                  border: isOpen
                    ? '1px solid rgba(212,160,23,0.45)'
                    : '1px solid rgba(212,160,23,0.12)',
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(212,160,23,0.12), inset 0 1px 0 rgba(212,160,23,0.10)'
                    : '0 2px 8px rgba(0,0,0,0.20)',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-4 px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black mt-0.5 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg,#D4A017,#F0C040)'
                        : 'rgba(212,160,23,0.10)',
                      color: isOpen ? '#0f2340' : '#D4A017',
                      boxShadow: isOpen ? '0 0 12px rgba(212,160,23,0.35)' : 'none',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question text */}
                  <span
                    className="flex-1 text-[15px] font-semibold leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? '#F0C040' : 'rgba(255,255,255,0.88)' }}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5"
                    style={{
                      background: isOpen
                        ? 'rgba(212,160,23,0.20)'
                        : 'rgba(212,160,23,0.06)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#D4A017"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Answer panel */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    {/* Divider */}
                    <div
                      className="h-px mb-5"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(212,160,23,0.40), rgba(212,160,23,0.10), transparent)',
                      }}
                    />
                    <p className="text-white/70 text-[14.5px] leading-[1.85] pl-12">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── CTA below FAQ ── */}
        <div className="mt-16 text-center">
          <p className="text-white/45 text-sm mb-6 tracking-wide">
            Não encontrou a resposta que procurava?
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 text-[#0f2340] px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg,#D4A017,#F0C040)',
              boxShadow: '0 0 28px rgba(212,160,23,0.45), 0 4px 16px rgba(0,0,0,0.30)',
            }}
          >
            {/* Dr. Ben avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#0f2340]/30 shrink-0">
              <img
                src="/dr-ben.jpg"
                alt="Dr. Ben"
                className="w-full h-full object-cover object-top"
              />
            </div>
            Fale com nossa equipe
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Trust micro-copy */}
          <p className="text-white/30 text-xs mt-5 tracking-wider uppercase">
            Atendimento 24h &nbsp;·&nbsp; Resposta rápida &nbsp;·&nbsp; Sigilo garantido
          </p>
        </div>

      </div>

      {/* Bottom fade to next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(0deg, rgba(25,56,92,0.6) 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
