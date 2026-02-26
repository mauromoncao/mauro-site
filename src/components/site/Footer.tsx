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
    <footer className="bg-[#19385C] text-white border-t border-white/5">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Marca ── */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo-oficial-fundo-branco.png"
                alt="Mauro Monção Advogados Associados"
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.82)' }}
              />
            </div>
            <p className="text-white/75 text-sm leading-relaxed">
              Mais de 15 anos de dedicação à prática jurídica, atuando nos Estados
              do Ceará, Piauí e Maranhão.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-full bg-[#E8B84B]/15 border border-[#E8B84B]/50 flex items-center justify-center text-[#E8B84B] hover:bg-[#E8B84B]/30 hover:border-[#E8B84B] hover:scale-110 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Links Rápidos ── */}
          <div>
            <h4 className="font-semibold text-[#E8B84B] mb-5 text-sm uppercase tracking-wider">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/',                    label: 'Início' },
                { href: '/sobre',               label: 'Sobre Nós' },
                { href: '/areas-de-atuacao',    label: 'Áreas de Atuação' },
                { href: '/solucoes-juridicas',  label: 'Soluções Jurídicas' },
                { href: '/blog',                label: 'Blog' },
                { href: '/faq',                 label: 'FAQ' },
                { href: '/contato',             label: 'Contato' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/75 hover:text-[#E8B84B] text-sm transition-colors flex items-center gap-1 group"
                >
                  <svg
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contato ── */}
          <div>
            <h4 className="font-semibold text-[#E8B84B] mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/75">

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E8B84B] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.72 9.72a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.35 6.35l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <p><span className="text-[#E8B84B] font-medium">Dr. Ben 24h:</span> {phoneDrBen}</p>
                  <p><span className="text-[#E8B84B] font-medium">Dr. Mauro:</span> {phoneDrMauro}</p>
                  <p><span className="text-[#E8B84B] font-medium">Escritório:</span> {phoneOffice}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#E8B84B] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${email}`} className="hover:text-[#E8B84B] transition-colors">
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E8B84B] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p><span className="text-[#E8B84B] font-medium">PI:</span> Parnaíba – Bairro São Benedito</p>
                  <p><span className="text-[#E8B84B] font-medium">CE:</span> Fortaleza – Aldeota</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA 24h ── */}
          <div>
            <h4 className="font-semibold text-[#E8B84B] mb-5 text-sm uppercase tracking-wider">
              Atendimento 24h
            </h4>
            <p className="text-white/75 text-sm mb-5 leading-relaxed">
              Fale agora com nosso assistente jurídico Dr. Ben. Disponível 24 horas por dia, 7 dias por semana.
            </p>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8B84B] text-[#19385C] px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.324-2.236l-.442-.37-3.063 1.027 1.027-3.063-.37-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              Falar com Dr. Ben
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-2">
          <p>
            &copy; {year} Mauro Monção Advogados Associados · OAB/PI 22.291 · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-[#E8B84B] transition-colors">
              Política de Privacidade
            </Link>
            <span className="opacity-30">|</span>
            <Link href="/termos-de-uso" className="hover:text-[#E8B84B] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
