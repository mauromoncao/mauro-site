import Link from 'next/link';

const phone        = '5586994820054';
const phoneDrBen   = '(86) 99482-0054';
const phoneDrMauro = '(86) 99948-4761';
const phoneOffice  = '(86) 99519-8919';
const email        = 'contato@mauromoncao.adv.br';

const socialLinks = [
  {
    href: 'https://www.instagram.com/mauromoncao.adv/',
    label: 'Instagram',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    href: 'https://www.youtube.com/@mauromoncao',
    label: 'YouTube',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    href: 'https://www.tiktok.com/@mauromoncao.adv',
    label: 'TikTok',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.15 8.15 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/></svg>,
  },
  {
    href: 'https://www.linkedin.com/in/mauromoncao',
    label: 'LinkedIn',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#19385C] text-white border-t-2 border-[#D4A017]/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Marca ── */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo-transparent.png"
                alt="Mauro Monção Advogados Associados"
                className="h-20 w-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Mais de 15 anos de dedicação à prática jurídica, atuando nos Estados
              do Ceará, Piauí e Maranhão.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/50 flex items-center justify-center text-[#D4A017] hover:bg-[#D4A017]/30 hover:border-[#D4A017] hover:scale-110 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Links Rápidos ── */}
          <div>
            <h4 className="font-bold text-[#D4A017] mb-5 text-[15px] uppercase tracking-wider">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/',                    label: 'Início' },
                { href: '/sobre',               label: 'Sobre Nós' },
                { href: '/areas-de-atuacao',    label: 'Áreas de Atuação' },
                { href: '/solucoes-juridicas',  label: 'Soluções Jurídicas' },
                { href: '/blog',                label: 'Blog' },
                { href: '/faq',                 label: 'FAQ' },
                { href: '/contato',             label: 'Contato' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-[#D4A017] text-[15px] transition-colors flex items-center gap-1.5 group"
                >
                  <svg
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-1 shrink-0"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Contato ── */}
          <div>
            <h4 className="font-bold text-[#D4A017] mb-5 text-[15px] uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-[15px] text-white/80">

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.72 9.72a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.35 6.35l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div className="space-y-1">
                  <p>
                    <span className="text-[#D4A017] font-semibold">Central 24h: </span>
                    <a
                      href={`https://wa.me/${phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-[#D4A017] transition-colors font-medium"
                    >
                      {phoneDrBen}
                    </a>
                  </p>
                  <p><span className="text-[#D4A017] font-semibold">Dr. Mauro:</span> <span className="text-white/80">{phoneDrMauro}</span></p>
                  <p><span className="text-[#D4A017] font-semibold">Escritório:</span> <span className="text-white/80">{phoneOffice}</span></p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#D4A017] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${email}`} className="hover:text-[#D4A017] transition-colors">
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="space-y-1">
                  <p><span className="text-[#D4A017] font-semibold">PI:</span> Parnaíba</p>
                  <p><span className="text-[#D4A017] font-semibold">CE:</span> Fortaleza</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA 24h com Dr. Ben ── */}
          <div>
            <h4 className="font-bold text-[#D4A017] mb-5 text-[15px] uppercase tracking-wider">
              Atendimento 24h
            </h4>
            <p className="text-white/80 text-[15px] mb-5 leading-relaxed">
              Fale agora com nosso assistente jurídico Dr. Ben. Disponível 24 horas por dia, 7 dias por semana.
            </p>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#0f2340] px-5 py-3 rounded-full text-[14px] font-bold hover:brightness-110 transition-all shadow-lg"
              style={{ background: 'linear-gradient(135deg,#D4A017,#F0C040)', boxShadow: '0 0 16px rgba(212,160,23,0.5)' }}
            >
              <div
                className="w-8 h-8 rounded-full p-0.5 shrink-0"
                style={{ background: 'linear-gradient(135deg,#0f2340,#19385C)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border border-[#D4A017]/50">
                  <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              Central de Atendimento 24h
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#D4A017]/20">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center text-[13px] text-white/55 gap-2">
          <p>
            &copy; {year} Mauro Monção Advogados Associados · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="/politica-de-privacidade" className="hover:text-[#D4A017] transition-colors">
              Política de Privacidade
            </a>
            <span className="opacity-30">|</span>
            <a href="/termos-de-uso" className="hover:text-[#D4A017] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
