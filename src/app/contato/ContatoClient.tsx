'use client';

import { useState } from 'react';

const phone        = '5586994820054';
const phoneDrBen   = '(86) 99482-0054';
const phoneDrMauro = '(86) 99948-4761';
const phoneOffice  = '(86) 99519-8919';
const email        = 'contato@mauromoncao.adv.br';
const waBase       = `https://wa.me/${phone}`;
const waUrlDrBen   = `${waBase}?text=${encodeURIComponent('Olá Dr. Ben! Gostaria de uma consulta jurídica.')}`;
const waUrlDrMauro = `https://wa.me/5586999484761?text=${encodeURIComponent('Olá Dr. Mauro! Gostaria de falar sobre meu caso.')}`;

const areas = [
  'Direito Tributário',
  'Planejamento Patrimonial',
  'Advocacia Pública Municipal',
  'Direito Imobiliário',
  'Família e Sucessões',
  'Direito Ambiental',
  'Direito do Consumidor',
  'Direito Previdenciário',
  'Outro',
];

/* ─── Card WhatsApp personalizado estilo screenshot ─── */
function WhatsAppCard({
  photo, name, role, phone: tel, waUrl, isMain = false,
}: {
  photo: string; name: string; role: string; phone: string; waUrl: string; isMain?: boolean;
}) {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-3xl overflow-hidden flex flex-col sm:flex-row items-center gap-0 hover:scale-[1.015] transition-transform shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #0e9f6e 0%, #0aad74 30%, #10b981 55%, #34d399 80%, #6ee7b7 100%)',
        boxShadow: '0 8px 40px rgba(16,185,129,0.45), 0 2px 12px rgba(0,0,0,0.3)',
      }}
    >
      {/* Orbs decorativos de fundo */}
      <div className="absolute top-4 left-12 w-20 h-20 rounded-full bg-white/10 blur-xl pointer-events-none" />
      <div className="absolute bottom-4 left-32 w-32 h-32 rounded-full bg-white/8 blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-44 w-16 h-16 rounded-full bg-white/12 blur-lg pointer-events-none" />

      {/* ── LADO ESQUERDO: conteúdo ── */}
      <div className="flex-1 px-8 py-8 flex flex-col gap-3 relative z-10">
        {/* Ícone WA personalizado */}
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(8px)' }}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.324-2.236l-.442-.37-3.063 1.027 1.027-3.063-.37-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </div>
          {isMain && (
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              24h · Respostas instantâneas
            </span>
          )}
        </div>

        {/* Título */}
        <div>
          <h3 className="text-white font-black text-2xl lg:text-3xl leading-tight drop-shadow">
            WhatsApp Direto
          </h3>
          <p className="text-white font-bold text-xl mt-0.5 drop-shadow">{tel}</p>
        </div>

        {/* Descrição */}
        <p className="text-white/90 text-[15px] leading-relaxed max-w-xs">
          Atendimento rápido e personalizado.<br />
          Clique para iniciar uma conversa agora mesmo.
        </p>

        {/* Botão */}
        <div className="mt-1">
          <span
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-2.5 rounded-full border border-white/40 transition-all text-[15px] group-hover:bg-white/35 shadow"
          >
            Iniciar Conversa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>

        {/* Info 24h */}
        {isMain && (
          <div className="flex items-center gap-2 mt-1">
            <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="text-white/80 text-xs font-medium">24h · Agente Virtual disponível · Respostas instantâneas</span>
          </div>
        )}
      </div>

      {/* ── LADO DIREITO: foto personalizada ── */}
      <div className="relative shrink-0 flex flex-col items-center justify-center px-8 py-6 gap-2 z-10">
        {/* Foto com anel dourado e dot verde */}
        <div className="relative">
          {/* Anel externo pulsante */}
          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping scale-110 pointer-events-none" />
          {/* Anel dourado */}
          <div
            className="w-28 h-28 rounded-full p-1 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #D4A017, #F0C040, #D4A017)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Dot online */}
          <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#1a1a2e] border-2 border-white flex items-center justify-center shadow-lg">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse block" />
          </div>
        </div>

        {/* Nome e função */}
        <div className="text-center">
          <p className="text-white font-bold text-base leading-tight drop-shadow">{name}</p>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
    </a>
  );
}

/* ─── Componente principal ─── */
export default function ContatoClient() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const msg = `Olá! Me chamo *${form.nome}*.%0A` +
      `📱 Telefone: ${form.telefone}%0A` +
      `📧 E-mail: ${form.email}%0A` +
      `⚖️ Área: ${form.area || 'Não informada'}%0A%0A` +
      `💬 Mensagem:%0A${form.mensagem}`;
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      window.open(`${waBase}?text=${msg}`, '_blank');
    }, 800);
  }

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="bg-[#07182e] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#D4A017 1px,transparent 1px),linear-gradient(90deg,#D4A017 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/40 rounded-full px-4 py-1.5 text-[#D4A017] text-sm font-bold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-badge-pulse" />
            Fale Conosco
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
            Estamos prontos para{' '}
            <span className="text-[#D4A017]">atender você</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha o canal mais conveniente. Atendimento 24h via Dr. Ben,
            WhatsApp direto ou preencha nosso formulário.
          </p>
        </div>
      </section>

      {/* ══ CARDS WHATSAPP PERSONALIZADOS ══ */}
      <section className="py-12 bg-[#0f2340]">
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">Canais de Atendimento</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif mt-1">Fale diretamente conosco</h2>
          </div>

          <div className="flex flex-col gap-5 max-w-3xl mx-auto">
            {/* Card Dr. Ben — principal, destaque */}
            <WhatsAppCard
              photo="/dr-ben.jpg"
              name="Dr. Ben"
              role="Assistente Virtual"
              phone={phoneDrBen}
              waUrl={waUrlDrBen}
              isMain={true}
            />

            {/* Card Dr. Mauro — secundário */}
            <WhatsAppCard
              photo="/dr-mauro.jpg"
              name="Dr. Mauro Monção"
              role="Fundador & Diretor"
              phone={phoneDrMauro}
              waUrl={waUrlDrMauro}
              isMain={false}
            />
          </div>

          {/* Linha de contatos rápidos */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#19385C] rounded-2xl p-4 flex items-center gap-3 border border-[#D4A017]/20">
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.72 9.72a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.35 6.35l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#D4A017] text-[11px] font-bold uppercase tracking-wide">Escritório</p>
                <p className="text-white text-[14px] font-medium">{phoneOffice}</p>
              </div>
            </div>
            <div className="bg-[#19385C] rounded-2xl p-4 flex items-center gap-3 border border-[#D4A017]/20">
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-[#D4A017] text-[11px] font-bold uppercase tracking-wide">E-mail</p>
                <a href={`mailto:${email}`} className="text-white text-[13px] font-medium hover:text-[#D4A017] transition-colors break-all">{email}</a>
              </div>
            </div>
            <div className="bg-[#19385C] rounded-2xl p-4 flex items-center gap-3 border border-[#D4A017]/20">
              <div className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-[#D4A017] text-[11px] font-bold uppercase tracking-wide">Sedes</p>
                <p className="text-white text-[14px] font-medium">Parnaíba · Fortaleza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORMULÁRIO + ESCRITÓRIOS ══ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── FORMULÁRIO ── */}
            <div>
              <span className="text-[#D4A017] text-sm font-bold uppercase tracking-[.2em]">Formulário</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#19385C] mt-2 mb-2 font-serif">
                Envie sua mensagem
              </h2>
              <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                Preencha os campos abaixo. Seu contato será encaminhado via
                WhatsApp diretamente para nossa equipe.
              </p>

              {enviado ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#19385C] font-serif mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500 text-[15px]">Você foi redirecionado para o WhatsApp. Responderemos em breve.</p>
                  <button
                    onClick={() => { setEnviado(false); setForm({ nome:'', email:'', telefone:'', area:'', mensagem:'' }); }}
                    className="mt-6 text-[#D4A017] font-semibold hover:underline text-sm"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#19385C] mb-1.5">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="nome" value={form.nome} onChange={handleChange} required
                      placeholder="Seu nome completo"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 transition-all bg-gray-50 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#19385C] mb-1.5">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="seu@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 transition-all bg-gray-50 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#19385C] mb-1.5">
                        WhatsApp / Telefone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel" name="telefone" value={form.telefone} onChange={handleChange} required
                        placeholder="(86) 99999-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 transition-all bg-gray-50 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#19385C] mb-1.5">Área de interesse</label>
                    <select
                      name="area" value={form.area} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 transition-all bg-gray-50"
                    >
                      <option value="">Selecione uma área</option>
                      {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#19385C] mb-1.5">
                      Descreva brevemente sua situação <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="mensagem" value={form.mensagem} onChange={handleChange} required rows={5}
                      placeholder="Conte-nos sobre seu caso ou dúvida jurídica..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 transition-all bg-gray-50 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <p className="text-[13px] text-gray-400">
                    🔒 Suas informações são confidenciais e protegidas pelo sigilo profissional.
                  </p>

                  <button
                    type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-3 text-[#19385C] py-4 rounded-full text-[15px] font-bold hover:brightness-110 transition-all shadow-lg disabled:opacity-70"
                    style={{ background: '#D4A017', boxShadow: '0 0 20px rgba(212,160,23,0.4)' }}
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.324-2.236l-.442-.37-3.063 1.027 1.027-3.063-.37-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                        </svg>
                        Enviar via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── ESCRITÓRIOS + HORÁRIOS ── */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#19385C] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-serif text-[#D4A017] mb-6">Nossos Escritórios</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#D4A017] font-bold text-sm uppercase tracking-wider mb-1">Parnaíba – PI</p>
                      <p className="text-white/80 text-[15px] leading-relaxed">Av. Leonardo de Carvalho Castelo Branco, nº 2835, Sala 12</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#D4A017] font-bold text-sm uppercase tracking-wider mb-1">Fortaleza – CE</p>
                      <p className="text-white/80 text-[15px] leading-relaxed">Rua Monsenhor Bruno, nº 1153, Sala 1423<br/>Centro Empresarial Scopa Platinum Corporate</p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-[#D4A017] font-bold text-sm uppercase tracking-wider mb-3">Horário de Atendimento</p>
                    <div className="space-y-1.5 text-white/75 text-[15px]">
                      <div className="flex justify-between"><span>Segunda – Sexta</span><span className="text-white font-medium">08h – 18h</span></div>
                      <div className="flex justify-between"><span>Sábado</span><span className="text-white font-medium">09h – 13h</span></div>
                      <div className="flex justify-between items-center">
                        <span>Dr. Ben (IA)</span>
                        <span className="text-[#D4A017] font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>24h / 7 dias
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-[#19385C] font-bold text-sm uppercase tracking-wider mb-4">Siga-nos nas redes</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: 'https://www.instagram.com/mauromoncao.adv/', label: 'Instagram', color: 'from-purple-600 to-pink-500' },
                    { href: 'https://www.youtube.com/@mauromoncao', label: 'YouTube', color: 'from-red-600 to-red-500' },
                    { href: 'https://www.tiktok.com/@mauromoncao.adv', label: 'TikTok', color: 'from-gray-800 to-gray-600' },
                    { href: 'https://www.linkedin.com/in/mauromoncao', label: 'LinkedIn', color: 'from-blue-700 to-blue-500' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${s.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-sm`}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="py-16 bg-[#07182e]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <WhatsAppCard
              photo="/dr-ben.jpg"
              name="Dr. Ben"
              role="Assistente Virtual · 24h"
              phone={phoneDrBen}
              waUrl={waUrlDrBen}
              isMain={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
