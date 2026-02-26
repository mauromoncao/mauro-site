'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const areasDropdown = [
  { href: '/areas-de-atuacao',                          label: 'Ver todas as Áreas' },
  { href: '/areas-de-atuacao#tributario',               label: 'Direito Tributário' },
  { href: '/areas-de-atuacao#planejamento-patrimonial', label: 'Planejamento Patrimonial' },
  { href: '/areas-de-atuacao#advocacia-publica',        label: 'Advocacia Pública Municipal' },
  { href: '/areas-de-atuacao#imobiliario',              label: 'Direito Imobiliário' },
  { href: '/areas-de-atuacao#familia-sucessoes',        label: 'Família e Sucessões' },
  { href: '/areas-de-atuacao#ambiental',                label: 'Direito Ambiental' },
  { href: '/areas-de-atuacao#consumidor',               label: 'Direito do Consumidor' },
  { href: '/areas-de-atuacao#previdenciario',           label: 'Direito Previdenciário' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/mauromoncao.adv/',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@mauromoncao',
    label: 'YouTube',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@mauromoncao.adv',
    label: 'TikTok',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.15 8.15 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/mauromoncao',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [areasOpen,  setAreasOpen]    = useState(false);
  const pathname = usePathname();
  const areasRef = useRef<HTMLDivElement>(null);
  const phone    = '5586994820054';

  /* fecha dropdown ao clicar fora */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (areasRef.current && !areasRef.current.contains(e.target as Node))
        setAreasOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-[15px] font-semibold transition-colors hover:text-[#D4A017] whitespace-nowrap ${
        pathname === href ? 'text-[#D4A017]' : 'text-white/90'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-[#19385C] sticky top-0 z-50 shadow-lg border-b border-[#D4A017]/20">
      <div className="container flex items-center justify-between h-[76px] gap-4">

        {/* ── LOGO OFICIAL DOURADO ── */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo-oficial-dourado.png"
            alt="Mauro Monção Advogados Associados"
            className="h-14 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(212,160,23,0.45))' }}
          />
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden xl:flex items-center gap-4 flex-1 justify-end">

          {navLink('/', 'Início')}

          {/* Dropdown Áreas */}
          <div className="relative" ref={areasRef}>
            <button
              onMouseEnter={() => setAreasOpen(true)}
              onClick={() => setAreasOpen(!areasOpen)}
              className={`flex items-center gap-1 text-[15px] font-semibold transition-colors hover:text-[#D4A017] whitespace-nowrap ${
                pathname?.startsWith('/areas-de-atuacao') ? 'text-[#D4A017]' : 'text-white/90'
              }`}
            >
              Áreas de Atuação
              <svg
                className={`w-3.5 h-3.5 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {areasOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-[#19385C] border border-[#D4A017]/30 rounded-xl shadow-2xl py-2 z-50"
                onMouseLeave={() => setAreasOpen(false)}
              >
                {areasDropdown.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setAreasOpen(false)}
                    className={`block px-4 py-2.5 text-[14px] transition-colors hover:bg-white/5 hover:text-[#D4A017] ${
                      idx === 0
                        ? 'text-[#D4A017] font-bold border-b border-white/10 mb-1 text-xs uppercase tracking-wider'
                        : pathname === item.href
                        ? 'text-[#D4A017] font-semibold'
                        : 'text-white/80'
                    }`}
                  >
                    {idx === 0 ? `${item.label} →` : item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLink('/solucoes-juridicas', 'Soluções Jurídicas')}
          {navLink('/sobre', 'Sobre Nós')}
          {navLink('/blog', 'Blog')}
          {navLink('/faq', 'FAQ')}
          {navLink('/contato', 'Contato')}

          {/* ── Dr. Ben badge — VERMELHO com borda DOURADA ── */}
          <a
            href="/assistente-juridico"
            className="flex items-center gap-2 bg-red-700 border-2 border-[#D4A017] text-white px-3.5 py-2 rounded-full text-[13px] font-bold hover:bg-red-600 hover:border-[#F0C040] transition-all whitespace-nowrap shadow-lg shadow-red-900/30"
            style={{ boxShadow: '0 0 12px rgba(212,160,23,0.35), 0 2px 8px rgba(185,28,28,0.4)' }}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#D4A017]/80 shrink-0">
              <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
            </div>
            <span>Dr. Ben</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          </a>

          {/* Tributoflix */}
          <a
            href="https://tributoflix.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-red-700 text-white px-3 py-2 rounded text-[13px] font-black hover:bg-red-600 transition-colors whitespace-nowrap tracking-wide"
          >
            ▶ TRIBUTOFLIX
          </a>

          {/* CTA WhatsApp */}
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A017] text-[#19385C] px-5 py-2.5 rounded-full text-[14px] font-bold hover:brightness-110 transition-all whitespace-nowrap shadow-md"
          >
            Fale Conosco
          </a>

          {/* Sociais */}
          <div className="flex items-center gap-2.5 border-l border-[#D4A017]/30 pl-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="text-[#D4A017] hover:text-[#F0C040] hover:scale-110 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="xl:hidden p-2 text-[#D4A017]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE NAV ── */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#19385C] border-t border-[#D4A017]/20 px-4 pb-6">
          <div className="flex flex-col gap-0.5 pt-3">
            {[
              { href: '/',                    label: 'Início' },
              { href: '/areas-de-atuacao',    label: 'Áreas de Atuação' },
              { href: '/solucoes-juridicas',  label: 'Soluções Jurídicas' },
              { href: '/sobre',               label: 'Sobre Nós' },
              { href: '/blog',                label: 'Blog' },
              { href: '/faq',                 label: 'FAQ' },
              { href: '/contato',             label: 'Contato' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 border-b border-white/10 text-white/90 text-[16px] font-semibold hover:text-[#D4A017] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Dr. Ben mobile — vermelho + dourado */}
            <a
              href="/assistente-juridico"
              className="mt-4 flex items-center justify-center gap-3 bg-red-700 border-2 border-[#D4A017] text-white py-3.5 rounded-full text-[15px] font-bold"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-[#D4A017]/80">
                <img src="/dr-ben.jpg" alt="Dr. Ben" className="w-full h-full object-cover object-top" />
              </div>
              Dr. Ben — Assistente IA
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </a>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#D4A017] text-[#19385C] text-center px-4 py-3.5 rounded-full text-[15px] font-bold"
            >
              Fale Conosco
            </a>
            <a
              href="https://tributoflix.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-red-700 text-white text-center px-4 py-3 rounded text-[14px] font-black"
            >
              ▶ TRIBUTOFLIX
            </a>
            <div className="flex items-center justify-center gap-5 mt-5">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-[#D4A017]">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
