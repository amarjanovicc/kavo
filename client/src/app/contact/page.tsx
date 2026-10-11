import type { Metadata } from 'next';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Imate pitanje ili komentar? Javite se – Kavo je osobni projekt, rado ćemo popričati.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactView />;
}
