import { Reveal } from '@/components/motion/Reveal';
import { ScrollWords, type ScrollWord } from '@/components/motion/ScrollWords';
import { Button } from '@/components/ui/Button';

const words: ScrollWord[] = [
  { text: 'Volimo' },
  { text: 'dizajn,', decoration: { src: '/underline/words1.png', kind: 'underline' } },
  { text: 'tehnologiju', decoration: { src: '/underline/words2.png', kind: 'underline' } },
  { text: 'i' },
  { text: 'stvaranje' },
  { text: 'digitalnih' },
  { text: 'iskustava', decoration: { src: '/underline/words3.png', kind: 'circle' } },
  { text: 'koja' },
  { text: 'ljudi' },
  { text: 'pamte.' },
];

export function Statement() {
  return (
    <section id="about" className="relative bg-paper pb-32 pt-44 text-ink md:pb-44 md:pt-56">
      <div className="shell">
        <Reveal className="eyebrow mb-10 flex items-center gap-3 text-ink/50">
          <span className="text-ink">(01)</span> O nama
        </Reveal>
        <ScrollWords words={words} className="display max-w-[16ch] text-giant" />
        <div className="mt-20 grid gap-8 md:grid-cols-12">
          <Reveal className="text-lead text-ink/70 md:col-span-5 md:col-start-7">
            Kavo je osobni projekt dizajnerice, developera i marketingaša. Ovdje skupljamo radove, eksperimente i sve što učimo
            o brandingu, dizajnu i webu.
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
            <Button href="/#studio" variant="outline-dark">
              Upoznaj tim
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
