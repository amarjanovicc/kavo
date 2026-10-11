import type { Metadata } from 'next';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Imaš pitanje, ideju ili komentar? Piši nam – Kavo je osobni projekt i rado ćemo popričati.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactView />;
}
