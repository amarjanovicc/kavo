import { cn } from '@/lib/cn';

/**
 * Tekst se na hover roditelja (klasa `group`) „zarola” prema gore, slovo po slovo.
 * Čisti CSS – bez JS-a i re-rendera.
 */
export function RollText({ text, className }: { text: string; className?: string }) {
  const chars = Array.from(text);
  const row = (hidden: boolean) =>
    chars.map((c, i) => (
      <span key={i} className="roll-char" style={{ transitionDelay: `${i * 16}ms` }} aria-hidden={hidden || undefined}>
        {c === ' ' ? ' ' : c}
      </span>
    ));

  return (
    <span className={cn('relative inline-flex overflow-hidden leading-[1.2]', className)}>
      <span className="flex" aria-hidden>
        {row(true)}
      </span>
      <span className="absolute left-0 top-full flex" aria-hidden>
        {row(true)}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
