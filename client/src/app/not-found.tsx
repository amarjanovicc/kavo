import type { Metadata } from 'next';
import { SplitText } from '@/components/motion/SplitText';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Stranica nije pronađena',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-ink px-4 text-center text-paper">
      <SplitText text="404" className="display text-[clamp(8rem,32vw,24rem)] leading-[0.8] text-brand" bouncy />
      <h1 className="display mt-6 text-big">Ups, ova stranica ne postoji.</h1>
      <p className="mt-4 max-w-md text-paper/60">Možda je premještena, ili se u adresu potkrala greška.</p>
      <div className="mt-10">
        <Button href="/">Natrag na početnu</Button>
      </div>
    </section>
  );
}
