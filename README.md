# Mauro Monção — Site Institucional

Site institucional do escritório Mauro Monção Advogados Associados, construído com **Next.js 13 + Tailwind CSS**.

## Stack

- **Framework**: Next.js 13 (App Router)
- **Estilização**: Tailwind CSS 3
- **Tipografia**: Cormorant Garamond (títulos) + Outfit (corpo)
- **Deploy**: Vercel / Cloudflare Pages

## Paleta de Cores

| Variável | Hex |
|---|---|
| Brand Blue | `#19385C` |
| Brand Gold | `#E8B84B` |
| Blue Dark | `#0f2340` |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      # Root layout com metadata SEO + Schema.org
│   ├── page.tsx        # Home page
│   └── globals.css     # Estilos globais + paleta
├── components/
│   └── site/
│       ├── Header.tsx       # Navegação sticky
│       ├── Footer.tsx       # Rodapé completo
│       ├── SiteLayout.tsx   # Wrapper de layout
│       ├── LogoMM.tsx       # Logo SVG inline
│       └── WhatsAppFloat.tsx # Botão flutuante WA
public/
├── *.jpg / *.png        # Imagens hero + logos
└── icons/               # Favicons
```

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build produção
npm start         # Servidor produção
```

## Deploy (Vercel)

1. Conectar repositório no [vercel.com](https://vercel.com)
2. Framework: **Next.js** (detectado automaticamente)
3. Click **Deploy** — pronto em < 2 minutos

## Contato

**Mauro Monção Advogados Associados**  
OAB/PI 22.291 · Parnaíba (PI) · Fortaleza (CE) · São Luís (MA)  
WhatsApp: (86) 99482-0054  
Email: contato@mauromoncao.adv.br
