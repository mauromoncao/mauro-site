import type { Metadata } from 'next';
import SiteLayout from '@/components/site/SiteLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advocacia Tributária e Patrimonial em Parnaíba, Fortaleza e São Luís',
  description:
    'Mauro Monção Advogados Associados — Direito Tributário, Planejamento Patrimonial, Previdenciário e Empresarial. Atuação em Ceará, Piauí e Maranhão. Consulta gratuita.',
  alternates: { canonical: 'https://mauromoncao.adv.br/' },
};

const phone = '5586994820054';
const waMsg = 'Olá! Gostaria de mais informações sobre os serviços jurídicos.';
const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMsg)}`;

/* ─── Áreas de atuação — com texto curto e longo ─── */
const areas = [
  {
    id: 'tributario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Direito Tributário',
    sub: 'Defesa estratégica em autuações e processos fiscais, com foco em segurança jurídica e proteção patrimonial.',
    full: 'Atuação técnica e estratégica na prevenção e solução de litígios fiscais, com foco em segurança jurídica, redução de riscos e eficiência financeira. Abrange consultoria, planejamento, compliance, defesa em autuações, processos administrativos, dívida ativa/execuções fiscais e medidas para proteger caixa e patrimônio diante de constrições.',
  },
  {
    id: 'planejamento-patrimonial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Planejamento Patrimonial, Societário e Sucessório',
    sub: 'Estruturação de holdings e governança para organizar patrimônio, sucessão e continuidade empresarial com previsibilidade.',
    full: 'Estruturação de soluções para organização do patrimônio e continuidade familiar/empresarial, com governança, proteção patrimonial e racionalidade tributária. Inclui holdings, reorganizações societárias, acordos de sócios, sucessão planejada e instrumentos jurídicos voltados à previsibilidade e estabilidade.',
  },
  {
    id: 'advocacia-publica',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Advocacia Pública Municipal',
    sub: 'Atuação consultiva e contenciosa para municípios, com conformidade, gestão de riscos e respaldo técnico nas decisões.',
    full: 'Assessoria e atuação contenciosa voltadas à Administração Pública municipal, com foco em conformidade, gestão de riscos e tomada de decisões com respaldo jurídico. Apoio em processos administrativos, orientação normativa, controle de legalidade e defesa institucional em demandas judiciais.',
  },
  {
    id: 'imobiliario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Direito Imobiliário',
    sub: 'Segurança jurídica em contratos, regularizações e negociações imobiliárias, com análise documental e redução de riscos.',
    full: 'Apoio jurídico em negociações e regularizações imobiliárias com foco em segurança documental e redução de riscos. Atuação em compra e venda, contratos, due diligence, registros, posse/propriedade, locações e solução de conflitos relacionados ao imóvel.',
  },
  {
    id: 'familia-sucessoes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Família e Sucessões',
    sub: 'Soluções técnicas e sensíveis para inventários, partilhas e planejamento sucessório, preservando direitos e estabilidade.',
    full: 'Atuação sensível e técnica na estruturação e resolução de questões familiares e sucessórias, com foco em proteção de direitos, patrimônio e estabilidade. Abrange inventários, partilhas, testamentos, pactos, planejamento sucessório e demandas correlatas, sempre buscando soluções juridicamente seguras.',
  },
  {
    id: 'ambiental',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0110 0c0 4-5 7-5 7z" />
      </svg>
    ),
    title: 'Direito Ambiental',
    sub: 'Assessoria preventiva e defesa em procedimentos e autuações ambientais, com foco em conformidade e mitigação de riscos.',
    full: 'Assessoria preventiva e contenciosa para pessoas físicas e empresas, orientada à conformidade e à mitigação de riscos regulatórios. Abrange licenciamento, autos e sanções administrativas, termos de ajustamento, responsabilidade ambiental e defesa em procedimentos fiscalizatórios.',
  },
  {
    id: 'consumidor',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.6L23 6H6" />
      </svg>
    ),
    title: 'Direito do Consumidor',
    sub: 'Prevenção e resolução de conflitos de consumo com estratégia processual, revisão de contratos e proteção reputacional.',
    full: 'Atuação na prevenção e resolução de conflitos de consumo, com enfoque em estratégia processual e segurança jurídica. Inclui análise de risco, defesa e propositura de demandas, revisão de práticas e contratos, além de suporte em situações com impacto reputacional e financeiro.',
  },
  {
    id: 'previdenciario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Direito Previdenciário',
    sub: 'Atuação administrativa e judicial em benefícios e revisões previdenciárias, com análise criteriosa e condução técnica.',
    full: 'Orientação e atuação em demandas previdenciárias com foco em análise documental, estratégia e segurança do pedido. Abrange requerimentos administrativos e judiciais, revisões, benefícios e questões correlatas, com condução técnica e linguagem clara ao cliente.',
  },
];

/* ─── Diferenciais ─── */
const diferenciais = [
  'Atendimento personalizado e humanizado',
  'Experiência em administração pública municipal',
  'Atuação em 3 estados: Ceará, Piauí e Maranhão',
  'Equipe especializada em múltiplas áreas do Direito',
  'Atendimento 24 horas via assistente jurídico Dr. Ben',
  'Planejamento estratégico e preventivo',
];

/* ─── Blog preview (estático) ─── */
const blogPosts = [
  {
    slug: 'planejamento-tributario-2025',
    title: 'Planejamento Tributário 2025: Estratégias Essenciais para Empresas',
    excerpt: 'Descubra as principais estratégias de planejamento tributário para reduzir legalmente a carga fiscal da sua empresa em 2025.',
    cat: 'Tributário',
    date: 'Jan 2025',
  },
  {
    slug: 'holding-familiar-vantagens',
    title: 'Holding Familiar: Vale a Pena? Vantagens, Custos e Quando Criar',
    excerpt: 'Entenda quando criar uma holding familiar, quais as vantagens tributárias e como proteger o patrimônio da sua família.',
    cat: 'Patrimonial',
    date: 'Jan 2025',
  },
  {
    slug: 'irpf-autismo-beneficios-fiscais-familias',
    title: 'IRPF e Autismo: Benefícios Fiscais que as Famílias TEA Precisam Conhecer',
    excerpt: 'Famílias com dependentes autistas têm direito à isenção do IRPF e outros benefícios fiscais. Saiba como solicitar.',
    cat: 'IRPF · TEA',
    date: 'Fev 2025',
  },
];

export default function HomePage() {
  return (
    <SiteLayout>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative text-white overflow-hidden"
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        {/* Fundo fotográfico + gradiente */}
        <div className="absolute inset-0">
          <img
            src="/hero-lobby.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg,rgba(7,24,46,0.97) 0%,rgba(7,24,46,0.80) 45%,rgba(7,24,46,0.15) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top,rgba(7,24,46,0.80) 0%,transparent 50%)',
            }}
          />
        </div>
        {/* Grid sutil */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#D4A017 1px,transparent 1px),linear-gradient(90deg,#D4A017 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container relative z-10 h-full">
          <div
            className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center"
            style={{
              minHeight: 'calc(100vh - 72px)',
              paddingTop: '4rem',
              paddingBottom: '4rem',
            }}
          >
            {/* ── ESQUERDA ── */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#D4A017]/60 bg-[#D4A017]/12 rounded-full px-4 py-2 text-sm text-[#D4A017] font-bold tracking-[.2em] uppercase mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-badge-pulse shrink-0" />
                Advocacia · CE · PI · MA
              </div>

              {/* H1 */}
              <h1
                className="font-serif font-bold leading-[1.05] mb-5 tracking-tight text-white"
                style={{ fontSize: 'clamp(2.4rem,4vw,3.75rem)' }}
              >
                Advocacia com{' '}
                <em className="not-italic text-[#D4A017]">inovação</em>
                <br />e{' '}
                <em className="not-italic text-[#D4A017]">compromisso</em>
              </h1>

              <p className="text-white/85 text-base leading-relaxed mb-2 max-w-[480px]">
                Atuação técnica para garantir segurança jurídica nas suas
                decisões e preservar o seu patrimônio.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 mt-4">
                {[
                  { v: '+15', l: 'anos de experiência' },
                  { v: '3',   l: 'estados' },
                  { v: '24h', l: 'atendimento' },
                ].map((s) => (
                  <span key={s.l} className="flex items-baseline gap-1.5 text-sm text-white/80">
                    <strong className="text-[#D4A017] font-bold text-xl font-serif leading-none">
                      {s.v}
                    </strong>
                    {s.l}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#0f2340] px-7 py-3.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040)', boxShadow: '0 0 18px rgba(212,160,23,0.55)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  Falar com Dr. Ben
                  <span className="w-2 h-2 rounded-full bg-green-600 shrink-0" />
                </a>
                <Link
                  href="/areas-de-atuacao"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/85 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#D4A017]/40 hover:text-white transition-all"
                >
                  Áreas de Atuação
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <p className="text-white/60 text-sm mt-8 tracking-wide">
                Atendimento nacional · Sedes em Parnaíba, Fortaleza e São Luís
              </p>
            </div>

            {/* ── DIREITA — card visual moderno com imagem ── */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center pb-8 lg:pb-0">
              <div
                className="relative w-full max-w-[460px] rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  border: '1px solid rgba(212,160,23,0.30)',
                  boxShadow: '0 0 60px rgba(212,160,23,0.15), 0 24px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Faixa dourada superior */}
                <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg,transparent,#D4A017,#F0C040,#D4A017,transparent)' }} />

                {/* Imagem de fundo — escritório moderno */}
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/hero-card-office.jpg"
                    alt="Advocacia Especializada"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay gradient escuro */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(160deg, rgba(7,24,46,0.72) 0%, rgba(15,35,64,0.55) 50%, rgba(7,24,46,0.80) 100%)' }}
                  />

                  {/* Apenas logo centralizada sobre a imagem */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <img
                      src="/logo-cropped-gold.png"
                      alt="Mauro Monção"
                      className="h-16 w-auto object-contain"
                      style={{ filter: 'drop-shadow(0 0 14px rgba(212,160,23,0.9))', imageRendering: 'crisp-edges' }}
                    />
                  </div>
                </div>

                {/* Stats row */}
                <div
                  className="grid grid-cols-4"
                  style={{ background: 'rgba(7,24,46,0.97)', borderTop: '1px solid rgba(212,160,23,0.20)' }}
                >
                  {[
                    { v: '+15', l: 'Anos' },
                    { v: '500+', l: 'Clientes' },
                    { v: '3', l: 'Estados' },
                    { v: '24h', l: 'Online' },
                  ].map((s, i) => (
                    <div
                      key={s.l}
                      className="py-3.5 text-center"
                      style={{ borderRight: i < 3 ? '1px solid rgba(212,160,23,0.10)' : 'none' }}
                    >
                      <p className="text-[#D4A017] font-black text-lg font-serif leading-none">{s.v}</p>
                      <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wider">{s.l}</p>
                    </div>
                  ))}
                </div>

                {/* Faixa dourada inferior */}
                <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg,transparent,#D4A017,#F0C040,#D4A017,transparent)' }} />
              </div>

              {/* Badge Dr. Ben — DOURADO + foto */}
              <a
                href="/assistente-juridico"
                className="absolute -bottom-4 -right-2 lg:-right-6 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                style={{ background: 'linear-gradient(135deg,#0f2340,#19385C)', border: '2px solid #D4A017', boxShadow: '0 0 18px rgba(212,160,23,0.55), 0 4px 12px rgba(0,0,0,0.5)' }}
              >
                <div
                  className="w-10 h-10 rounded-full p-0.5 shrink-0"
                  style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div>
                  <p className="text-[#D4A017] text-xs font-bold leading-none">Dr. Ben</p>
                  <p className="text-white/80 text-xs mt-0.5 font-semibold">Assistente 24h</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-badge-pulse ml-1 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-[#112845] border-y border-[#D4A017]/15 py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '15+', l: 'Anos de Experiência' },
              { v: '3',   l: 'Estados de Atuação' },
              { v: '500+',l: 'Clientes Atendidos' },
              { v: '24h', l: 'Atendimento' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-bold text-[#D4A017] font-serif">{s.v}</p>
                <p className="text-sm text-white/75 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ÁREAS DE ATUAÇÃO
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f0]" id="areas">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">
              Especialidades
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 font-serif">
              Áreas de Atuação
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
              Atuamos nos principais ramos do Direito com expertise técnica e
              dedicação para proteger seus direitos e interesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.map(({ id, icon, title, sub }) => (
              <Link
                key={id}
                href={`/areas-de-atuacao#${id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#D4A017]/40 flex flex-col"
              >
                <div className="w-12 h-12 bg-[#19385C] rounded-xl flex items-center justify-center text-[#D4A017] mb-4 group-hover:bg-[#D4A017] group-hover:text-[#19385C] transition-colors shrink-0">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-[#19385C] mb-2 group-hover:text-[#D4A017] transition-colors font-serif leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{sub}</p>
                <span className="inline-flex items-center gap-1 text-[#D4A017] text-sm font-semibold mt-4">
                  Saiba mais{' '}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border-2 border-[#19385C] text-[#19385C] hover:bg-[#19385C] hover:text-white transition-all"
            >
              Ver todas as áreas de atuação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          POR QUE ESCOLHER
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">
                Diferenciais
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 mb-6 font-serif">
                Por que escolher o escritório{' '}
                <span className="text-[#D4A017]">Mauro Monção?</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                Com mais de 15 anos de dedicação à prática jurídica, nosso
                escritório oferece atendimento personalizado e soluções eficientes
                para cada caso.
              </p>
              <div className="space-y-3.5">
                {diferenciais.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#19385C] rounded-3xl p-8 text-white shadow-2xl">
              <div className="w-12 h-12 bg-[#D4A017]/15 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 font-serif">Consulta Inicial Gratuita</h3>
              <p className="text-white/85 mb-6 leading-relaxed text-sm">
                Agende uma consulta sem compromisso e descubra como podemos ajudar
                no seu caso.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#19385C] px-6 py-3 rounded-full font-bold transition-all text-sm hover:brightness-110"
                style={{ background: '#D4A017', boxShadow: '0 0 12px rgba(212,160,23,0.35)' }}
              >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                Agendar Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">
                Conteúdo
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 font-serif">
                Insights Jurídicos
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                Artigos e análises da nossa equipe especializada
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4A017] font-semibold hover:underline shrink-0 text-sm"
            >
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#D4A017]/30 flex flex-col"
              >
                <div className="aspect-video bg-[#19385C] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#D4A017]/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#D4A017] font-bold bg-[#D4A017]/20 px-2 py-0.5 rounded-full">
                      {post.cat}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#19385C] mb-2 group-hover:text-[#D4A017] transition-colors leading-snug font-serif">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#D4A017] text-sm font-semibold mt-4">
                    Ler artigo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#19385C] text-white">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/60 rounded-full px-4 py-2 text-sm text-[#D4A017] font-bold uppercase tracking-[.15em] mb-6">
            Atendimento 24h
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-white/85 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Entre em contato agora e fale com nosso assistente jurídico Dr. Ben.
            Disponível 24 horas.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#0f2340] px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition-all"
            style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)', boxShadow: '0 0 24px rgba(212,160,23,0.55)' }}
          >
            <div
              className="w-9 h-9 rounded-full p-0.5 shrink-0"
              style={{ background: 'linear-gradient(135deg,#0f2340,#19385C)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border border-[#D4A017]/50">
                <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            Falar com Dr. Ben — 24h
          </a>
        </div>
      </section>

    </SiteLayout>
  );
}
