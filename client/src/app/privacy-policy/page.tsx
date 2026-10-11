import type { Metadata } from 'next';
import { PrivacyView } from '@/components/privacy/PrivacyView';

export const metadata: Metadata = {
  title: 'Pravila privatnosti',
  description: 'Kako Kavo Studio prikuplja, koristi i štiti osobne podatke.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
