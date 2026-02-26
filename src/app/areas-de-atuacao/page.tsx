import type { Metadata } from 'next';
import SiteLayout from '@/components/site/SiteLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Áreas de Atuação — Mauro Monção Advogados Associados',
  description:
    'Conheça as 8 áreas de atuação do escritório Mauro Monção: Direito Tributário, Planejamento Patrimonial, Advocacia Pública Municipal, Imobiliário, Família, Ambiental, Consumidor e Previdenciário.',
  alternates: { canonical: 'https://mauromoncao.adv.br/areas-de-atuacao' },
};

const phone = '5586994820054';
const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent('Olá! Gostaria de uma consulta sobre serviços jurídicos.')}`;

const areas = [
  {
    id: 'tributario',
    title: 'Direito Tributário',
    sub: 'Defesa estratégica em autuações e processos fiscais, com foco em segurança jurídica e proteção patrimonial.',
    full: 'Atuação técnica e estratégica na prevenção e solução de litígios fiscais, com foco em segurança jurídica, redução de riscos e eficiência financeira. Abrange consultoria, planejamento, compliance, defesa em autuações, processos administrativos, dívida ativa/execuções fiscais e medidas para proteger caixa e patrimônio diante de constrições.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    services: [
      'Consultoria e planejamento tributário',
      'Compliance fiscal',
      'Defesa em autuações administrativas',
      'Execuções fiscais e dívida ativa',
      'Recuperação de créditos tributários',
      'Transação tributária',
    ],
  },
  {
    id: 'planejamento-patrimonial',
    title: 'Planejamento Patrimonial, Societário e Sucessório',
    sub: 'Estruturação de holdings e governança para organizar patrimônio, sucessão e continuidade empresarial com previsibilidade.',
    full: 'Estruturação de soluções para organização do patrimônio e continuidade familiar/empresarial, com governança, proteção patrimonial e racionalidade tributária. Inclui holdings, reorganizações societárias, acordos de sócios, sucessão planejada e instrumentos jurídicos voltados à previsibilidade e estabilidade.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    services: [
      'Constituição e gestão de holdings',
      'Reorganizações societárias',
      'Acordos de sócios e quotistas',
      'Planejamento sucessório',
      'Proteção patrimonial',
      'Governança familiar e empresarial',
    ],
  },
  {
    id: 'advocacia-publica',
    title: 'Advocacia Pública Municipal / Direito Público Municipal',
    sub: 'Atuação consultiva e contenciosa para municípios, com conformidade, gestão de riscos e respaldo técnico nas decisões.',
    full: 'Assessoria e atuação contenciosa voltadas à Administração Pública municipal, com foco em conformidade, gestão de riscos e tomada de decisões com respaldo jurídico. Apoio em processos administrativos, orientação normativa, controle de legalidade e defesa institucional em demandas judiciais.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    services: [
      'Assessoria jurídica municipal',
      'Controle de legalidade de atos',
      'Processos administrativos',
      'Orientação normativa',
      'Contratos públicos e licitações',
      'Defesa institucional judicial',
    ],
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    sub: 'Segurança jurídica em contratos, regularizações e negociações imobiliárias, com análise documental e redução de riscos.',
    full: 'Apoio jurídico em negociações e regularizações imobiliárias com foco em segurança documental e redução de riscos. Atuação em compra e venda, contratos, due diligence, registros, posse/propriedade, locações e solução de conflitos relacionados ao imóvel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/>
        <line x1="9" y1="12" x2="15" y2="12"/>
      </svg>
    ),
    services: [
      'Compra, venda e permuta de imóveis',
      'Due diligence imobiliária',
      'Contratos de locação',
      'Regularização registral',
      'Usucapião e posse',
      'Solução de conflitos imobiliários',
    ],
  },
  {
    id: 'familia-sucessoes',
    title: 'Família e Sucessões',
    sub: 'Soluções técnicas e sensíveis para inventários, partilhas e planejamento sucessório, preservando direitos e estabilidade.',
    full: 'Atuação sensível e técnica na estruturação e resolução de questões familiares e sucessórias, com foco em proteção de direitos, patrimônio e estabilidade. Abrange inventários, partilhas, testamentos, pactos, planejamento sucessório e demandas correlatas, sempre buscando soluções juridicamente seguras.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    services: [
      'Inventários judiciais e extrajudiciais',
      'Partilha de bens',
      'Testamentos e pactos antenupciais',
      'Divórcio e separação',
      'Guarda e alimentos',
      'Planejamento sucessório preventivo',
    ],
  },
  {
    id: 'ambiental',
    title: 'Direito Ambiental',
    sub: 'Assessoria preventiva e defesa em procedimentos e autuações ambientais, com foco em conformidade e mitigação de riscos.',
    full: 'Assessoria preventiva e contenciosa para pessoas físicas e empresas, orientada à conformidade e à mitigação de riscos regulatórios. Abrange licenciamento, autos e sanções administrativas, termos de ajustamento, responsabilidade ambiental e defesa em procedimentos fiscalizatórios.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0110 0c0 4-5 7-5 7z"/>
      </svg>
    ),
    services: [
      'Licenciamento ambiental',
      'Defesa em autuações ambientais',
      'Termos de ajustamento de conduta',
      'Responsabilidade ambiental',
      'Compliance ambiental',
      'Procedimentos fiscalizatórios',
    ],
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    sub: 'Prevenção e resolução de conflitos de consumo com estratégia processual, revisão de contratos e proteção reputacional.',
    full: 'Atuação na prevenção e resolução de conflitos de consumo, com enfoque em estratégia processual e segurança jurídica. Inclui análise de risco, defesa e propositura de demandas, revisão de práticas e contratos, além de suporte em situações com impacto reputacional e financeiro.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.6L23 6H6"/>
      </svg>
    ),
    services: [
      'Defesa e propositura de demandas',
      'Revisão de contratos de consumo',
      'Análise de risco empresarial',
      'Recall e responsabilidade do produto',
      'Ações coletivas de consumo',
      'Gestão de crises reputacionais',
    ],
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    sub: 'Atuação administrativa e judicial em benefícios e revisões previdenciárias, com análise criteriosa e condução técnica.',
    full: 'Orientação e atuação em demandas previdenciárias com foco em análise documental, estratégia e segurança do pedido. Abrange requerimentos administrativos e judiciais, revisões, benefícios e questões correlatas, com condução técnica e linguagem clara ao cliente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    services: [
      'Concessão de benefícios INSS',
      'Aposentadorias e revisões',
      'Auxílio-doença e invalidez',
      'Pensão por morte',
      'Recursos administrativos',
      'Ações judiciais previdenciárias',
    ],
  },
];

export default function AreasPage() {
  return (
    <SiteLayout>

      {/* ── Hero ── */}
      <section
        className="relative text-white py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#07182e 0%,#112845 60%,#1a3d5c 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#D4A017 1px,transparent 1px),linear-gradient(90deg,#D4A017 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 border border-[#D4A017]/60 bg-[#D4A017]/12 rounded-full px-4 py-2 text-sm text-[#D4A017] font-bold tracking-[.2em] uppercase mb-6">
            Especialidades
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-4">
            Áreas de Atuação
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Atuamos nos principais ramos do Direito com expertise técnica e dedicação
            para proteger seus direitos e interesses em Ceará, Piauí e Maranhão.
          </p>
        </div>
      </section>

      {/* ── Cards com âncoras ── */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="container">
          <div className="space-y-8">
            {areas.map(({ id, icon, title, sub, full, services }, index) => (
              <div
                key={id}
                id={id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#D4A017]/30 overflow-hidden scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Coluna de conteúdo */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#19385C] rounded-2xl flex items-center justify-center text-[#D4A017] shrink-0">
                        {icon}
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-[#19385C] font-serif leading-snug">
                          {title}
                        </h2>
                        <p className="text-[#D4A017] text-sm font-semibold mt-1">{sub}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{full}</p>
                    <Link
                      href="/contato"
                      className="inline-flex items-center gap-2 text-[#0f2340] px-6 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-all"
                      style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)', boxShadow: '0 0 12px rgba(212,160,23,0.4)' }}
                    >
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-[#0f2340]/20 shrink-0">
                        <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
                      </div>
                      Consultar sobre esta área
                    </Link>
                  </div>

                  {/* Coluna de serviços */}
                  <div className="bg-[#f7f5f0] p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-100">
                    <h3 className="text-sm font-bold text-[#19385C] uppercase tracking-wider mb-5">
                      O que abrange
                    </h3>
                    <ul className="space-y-3">
                      {services.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <span className="text-gray-700 text-sm">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#19385C] text-white">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-serif">
            Tem alguma dúvida sobre sua situação jurídica?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto text-sm">
            Fale agora com nossa equipe. Atendimento 24h via assistente Dr. Ben.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 text-[#0f2340] px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition-all"
            style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)', boxShadow: '0 0 22px rgba(212,160,23,0.55)' }}
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
