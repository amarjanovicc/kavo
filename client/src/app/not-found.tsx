import type { Metadata } from 'next';
import { NotFoundView } from '@/components/ui/NotFoundView';

export const metadata: Metadata = {
  title: 'Stranica nije pronađena',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
