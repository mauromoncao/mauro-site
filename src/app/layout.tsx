import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mauro Monção Advogados Associados',
    template: '%s | Mauro Monção Advogados',
  },
  description:
    'Mauro Monção Advogados Associados — Direito Tributário, Planejamento Patrimonial, Previdenciário e Empresarial. Atuação em Ceará, Piauí e Maranhão. Consulta gratuita.',
  keywords:
    'advogado tributário Parnaíba, escritório advocacia Piauí, planejamento tributário, defesa fiscal, recuperação tributária, direito previdenciário',
  authors: [{ name: 'Mauro Monção Advogados Associados' }],
  metadataBase: new URL('https://mauromoncao.adv.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mauromoncao.adv.br',
    siteName: 'Mauro Monção Advogados Associados',
    images: [{ url: '/logo-oficial-dourado.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#19385C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Fonts — carregadas de forma não-bloqueante */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD — Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Mauro Monção Advogados Associados',
              url: 'https://mauromoncao.adv.br',
              logo: 'https://mauromoncao.adv.br/logo-brand.png',
              description:
                'Escritório de advocacia especializado em Direito Tributário, Planejamento Patrimonial, Previdenciário e Empresarial.',
              foundingDate: '2015',
              areaServed: ['Piauí', 'Maranhão', 'Ceará', 'Brasil'],
              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Parnaíba',
                  addressRegion: 'PI',
                  addressCountry: 'BR',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'São Luís',
                  addressRegion: 'MA',
                  addressCountry: 'BR',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-86-99482-0054',
                contactType: 'customer service',
              },
              sameAs: [
                'https://www.instagram.com/mauromoncao.adv/',
                'https://www.linkedin.com/in/mauromoncao',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
