'use client';

import { Fragment } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { useI18n } from '@/components/providers/LocaleProvider';
import { Button } from '@/components/ui/Button';
import type { PrivacyBlock } from '@/content/privacy';
import { site } from '@/content/site';
import { cn } from '@/lib/cn';

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
        {item}
      </li>
    ))}
  </ul>
);

/** `**tekst**` → <strong>, `{email}` → mailto link */
function Rich({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*|\{email\})/).map((part, i) => {
    if (part === '{email}')
      return (
        <a key={i} href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
          {site.email}
        </a>
      );
    if (part.startsWith('**'))
      return (
        <strong key={i} className="text-paper">
          {part.slice(2, -2)}
        </strong>
      );
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function BlockView({ block, first }: { block: PrivacyBlock; first: boolean }) {
  if ('p' in block)
    return (
      <p className={cn(!first && 'mt-4')}>
        <Rich text={block.p} />
      </p>
    );
  if ('h' in block) return <h3 className={cn('font-semibold text-paper', !first && 'mt-8')}>{block.h}</h3>;
  if ('list' in block) return <List items={block.list} />;
  return (
    <div className={cn('mt-6 grid gap-3', block.cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2')}>
      {block.cards.map(([title, text]) => (
        <div key={title} className="rounded-2xl bg-paper/5 p-5">
          <h3 className="font-semibold text-brand">{title}</h3>
          <p className="mt-2 text-sm">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function PrivacyView() {
  const { t, privacy } = useI18n();

  return (
    <section className="bg-ink pb-32 pt-40 text-paper md:pt-48">
      <div className="shell max-w-5xl">
        <p className="eyebrow mb-8 text-paper/50">{privacy.eyebrow}</p>
        <SplitText as="h1" text={privacy.title} className="display text-giant" bouncy />
        <Reveal className="mt-8 max-w-2xl text-lead text-paper/70">{privacy.lead}</Reveal>

        <ol className="mt-20 divide-y divide-paper/10 border-y border-paper/10">
          {privacy.sections.map((s, i) => (
            <Reveal as="li" key={i} className="grid gap-6 py-12 md:grid-cols-12" amount={0.15}>
              <div className="md:col-span-4">
                <span className="eyebrow text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="display mt-3 text-big">{s.title}</h2>
              </div>
              <div className="leading-relaxed text-paper/70 md:col-span-8">
                {s.blocks.map((block, j) => (
                  <BlockView key={j} block={block} first={j === 0} />
                ))}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 rounded-[1.75rem] bg-brand/10 p-8 text-paper/80">
          <p className="font-semibold text-brand">{privacy.updatedTitle}</p>
          <p className="mt-2">{privacy.updated}</p>
        </Reveal>

        <div className="mt-16">
          <Button href="/" variant="outline-light">
            {t.backHome}
          </Button>
        </div>
      </div>
    </section>
  );
}
