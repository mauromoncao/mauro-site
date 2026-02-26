import type { Metadata } from 'next';
import SiteLayout from '@/components/site/SiteLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Nós — Mauro Monção Advogados Associados',
  description:
    'Conheça a trajetória, missão, visão, valores e a equipe do escritório Mauro Monção Advogados Associados. Mais de 15 anos de atuação em CE, PI e MA.',
  alternates: { canonical: 'https://mauromoncao.adv.br/sobre' },
};

const phone = '5586994820054';
const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços jurídicos.')}`;

const pilares = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Missão',
    text: 'Oferecer soluções jurídicas inovadoras e personalizadas, utilizando tecnologia de ponta e a expertise de nossos profissionais para garantir a máxima satisfação e resultados para nossos clientes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: 'Visão',
    text: 'Ser referência nacional em advocacia inteligente, reconhecido pela excelência, ética e inovação, transformando o mercado jurídico e impactando positivamente a sociedade.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: 'Valores',
    text: 'Excelência, Inovação, Ética, Comprometimento com o Cliente, Transparência e Responsabilidade Social.',
  },
];

const valores = [
  'Excelência',
  'Inovação',
  'Ética',
  'Comprometimento com o Cliente',
  'Transparência',
  'Responsabilidade Social',
];

const especializacoes = [
  'Direito e Processo Eleitoral',
  'Políticas Públicas',
  'Direito Tributário',
  'Orçamento Público',
  'Direito Legislativo',
  'Direito Administrativo',
  'Gestão Pública',
  'Direito Constitucional',
];

const escritorios = [
  {
    estado: 'Piauí',
    cidade: 'Parnaíba',
    endereco: 'Av. Leonardo de Carvalho Castelo Branco, nº 2835, Sala 12',
    cep: 'Parnaíba – PI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    estado: 'Ceará',
    cidade: 'Fortaleza',
    endereco: 'Rua Monsenhor Bruno, nº 1153, Sala 1423, Centro Empresarial Scopa Platinum Corporate',
    cep: 'Fortaleza – CE',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function SobrePage() {
  return (
    <SiteLayout>

      {/* ══════════════════════════════════════
          HERO / BANNER
      ══════════════════════════════════════ */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#07182e 0%,#112845 60%,#1a3d5c 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#D4A017 1px,transparent 1px),linear-gradient(90deg,#D4A017 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(232,184,75,.08) 0%,transparent 70%)' }}
        />

        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 border border-[#D4A017]/60 bg-[#D4A017]/12 rounded-full px-4 py-2 text-sm text-[#D4A017] font-bold tracking-[.2em] uppercase mb-6">
            Nossa Trajetória
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-4 leading-tight">
            Sobre o Escritório
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Pilares estratégicos, aspirações e princípios que guiam nossas ações
            há mais de 15 anos de dedicação à prática jurídica.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSÃO · VISÃO · VALORES
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">Pilares</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 font-serif">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
              Pilares estratégicos, aspirações e princípios que guiam nossas ações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pilares.map(({ icon, label, text }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#D4A017]/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#19385C] rounded-2xl flex items-center justify-center text-[#D4A017] mx-auto mb-5">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-[#19385C] mb-3 font-serif">{label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Valores como badges */}
          <div className="bg-[#19385C] rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white font-serif mb-2">Nossos Valores</h3>
            <p className="text-white/70 text-sm mb-8">Os princípios que orientam cada decisão e relacionamento</p>
            <div className="flex flex-wrap justify-center gap-3">
              {valores.map((v) => (
                <span
                  key={v}
                  className="bg-[#D4A017]/20 border border-[#D4A017]/50 text-[#D4A017] px-5 py-2 rounded-full text-sm font-semibold"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DR. MAURO MONÇÃO
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Foto + card */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#D4A017]/20"
                style={{ background: 'linear-gradient(160deg,#1d4170 0%,#19385C 50%,#0f2340 100%)' }}
              >
                <div className="aspect-[4/5] bg-[#112845] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/dr-mauro.jpg"
                    alt="Dr. Mauro Monção da Silva"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 border-t border-[#D4A017]/20">
                  <p className="text-[#D4A017] text-xs font-bold uppercase tracking-widest mb-1">
                    Fundador e Diretor Executivo
                  </p>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Mauro Monção da Silva
                  </h3>
                  <p className="text-[#D4A017] text-xs mt-1 font-semibold">Fundador</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Direito Tributário', 'Advocacia Pública', 'Planejamento Sucessório'].map((tag) => (
                      <span key={tag} className="text-[10px] bg-[#D4A017]/15 border border-[#D4A017]/30 text-[#D4A017] px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Texto biográfico */}
            <div>
              <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">
                Quem é o Dr. Mauro Monção
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 mb-6 font-serif leading-snug">
                Nossa Trajetória
              </h2>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-[#19385C]">Mauro Monção da Silva</strong> é advogado com mais de 15 anos de
                  dedicação à prática jurídica, atuando nos Estados do Ceará, Piauí e Maranhão. Fundou o escritório
                  <strong className="text-[#19385C]"> Mauro Monção Advogados Associados</strong>, focado em consultoria
                  e assessoria jurídica para administrações públicas municipais, além de Direito Tributário e
                  Planejamento Sucessório, Societário e Tributário.
                </p>
                <p>
                  É o responsável pela liderança das operações e supervisiona a equipe executiva do escritório.
                </p>
                <p>
                  Ao longo de sua trajetória profissional, também exerceu o magistério no Curso de Direito da
                  <strong className="text-[#19385C]"> Universidade Estadual do Piauí – UESPI</strong>, ministrando
                  disciplinas como Direito Administrativo, Direito Constitucional e Direito Financeiro, contribuindo
                  para a formação de novos profissionais.
                </p>
              </div>

              {/* Especializações */}
              <div className="mt-8">
                <h4 className="font-bold text-[#19385C] mb-4 text-sm uppercase tracking-wider">
                  Especializações (Pós-Graduação)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {especializacoes.map((esp) => (
                    <div key={esp} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#D4A017] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-gray-600 text-sm">{esp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-8 text-[#19385C] px-7 py-3.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg"
                style={{ background: '#D4A017', boxShadow: '0 0 12px rgba(212,160,23,0.35)' }}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#D4A017]/80 shrink-0">
                  <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
                </div>
                Falar com Dr. Ben
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NOSSOS ESCRITÓRIOS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">Localização</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 font-serif">
              Nossos Escritórios
            </h2>
            <p className="text-gray-500 mt-3 text-sm">Presença nos estados do Ceará e Piauí</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {escritorios.map((e) => (
              <div
                key={e.estado}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-[#D4A017]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#19385C] rounded-xl flex items-center justify-center text-[#D4A017]">
                    {e.icon}
                  </div>
                  <div>
                    <p className="text-[#D4A017] text-xs font-bold uppercase tracking-wider">{e.estado}</p>
                    <h3 className="text-lg font-bold text-[#19385C] font-serif">{e.cidade}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{e.endereco}</p>
                <p className="text-[#D4A017] font-semibold text-sm mt-2">{e.cep}</p>
              </div>
            ))}
          </div>

          {/* Contatos */}
          <div className="mt-12 bg-[#19385C] rounded-3xl p-10 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-serif mb-6 text-center">Contatos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Central 24h — Dr. Ben', value: '(86) 99482-0054', isWA: true },
                { label: 'Dr. Mauro Monção', value: '(86) 99948-4761', isWA: false },
                { label: 'Escritório', value: '(86) 99519-8919', isWA: false },
              ].map((c) => (
                <div key={c.label}>
                  <p className="text-[#D4A017] text-xs font-bold uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="text-white font-semibold text-base">{c.value}</p>
                  {c.isWA && (
                    <a
                      href={`https://wa.me/55${c.value.replace(/\D/g,'')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D4A017]/80 hover:text-[#D4A017] mt-1 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.324-2.236l-.442-.37-3.063 1.027 1.027-3.063-.37-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                      </svg>
                      Abrir WhatsApp
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-6 pt-6 border-t border-white/10">
              <p className="text-[#D4A017] text-xs font-bold uppercase tracking-wider mb-1">E-mail</p>
              <a href="mailto:contato@mauromoncao.adv.br" className="text-white hover:text-[#D4A017] transition-colors font-medium">
                contato@mauromoncao.adv.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section className="py-16 bg-[#19385C] text-white">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-serif">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto text-sm">
            Entre em contato e descubra como podemos ajudar com sua situação jurídica.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[#19385C] px-7 py-3.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg"
              style={{ background: '#D4A017', boxShadow: '0 0 12px rgba(212,160,23,0.35)' }}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#D4A017]/80 shrink-0">
                <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
              </div>
              Falar com Dr. Ben
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#D4A017]/50 hover:text-[#D4A017] transition-all"
            >
              Ver página de Contato
            </Link>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
