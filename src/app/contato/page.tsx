import type { Metadata } from 'next';
import SiteLayout from '@/components/site/SiteLayout';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: 'Contato | Mauro Monção Advogados Associados',
  description:
    'Entre em contato com o escritório Mauro Monção Advogados. Atendimento 24h via assistente jurídico Dr. Ben, WhatsApp direto ou formulário. Parnaíba-PI e Fortaleza-CE.',
  alternates: { canonical: 'https://mauromoncao.adv.br/contato' },
};

export default function ContatoPage() {
  return (
    <SiteLayout>
      <ContatoClient />
    </SiteLayout>
  );
}
