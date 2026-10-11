import Link from 'next/link';
import { Magnetic } from '@/components/motion/Magnetic';
import { RollText } from '@/components/motion/RollText';
import { AnchorLink } from './AnchorLink';
import { ArrowUpRight } from './icons';
import { cn } from '@/lib/cn';

const variants = {
  brand: { base: 'bg-brand text-ink hover:text-brand', fill: 'bg-ink' },
  ink: { base: 'bg-ink text-paper hover:text-ink', fill: 'bg-brand' },
  paper: { base: 'bg-paper text-ink hover:text-ink', fill: 'bg-brand' },
  'outline-light': { base: 'border border-paper/25 text-paper hover:text-ink', fill: 'bg-paper' },
  'outline-dark': { base: 'border border-ink/25 text-ink hover:text-paper', fill: 'bg-ink' },
} as const;

type Props = {
  href: string;
  children: string;
  variant?: keyof typeof variants;
  size?: 'md' | 'lg';
  className?: string;
  magnetic?: boolean;
};

/** Pill gumb: fill se podiže odozdo, tekst se „zarola”, strelica se okrene */
export function Button({ href, children, variant = 'brand', size = 'md', className, magnetic = true }: Props) {
  const v = variants[variant];
  const classes = cn(
    'group relative inline-flex items-center gap-3 overflow-hidden rounded-full font-medium transition-colors duration-500 ease-expo',
    size === 'lg' ? 'px-8 py-5 text-base' : 'px-6 py-3.5 text-sm',
    v.base,
    className
  );
  const inner = (
    <>
      <span
        aria-hidden
        className={cn('absolute inset-0 translate-y-[110%] rounded-[50%_50%_0_0] transition-all duration-700 ease-expo group-hover:translate-y-0 group-hover:rounded-none', v.fill)}
      />
      <RollText text={children} className="relative z-10" />
      <ArrowUpRight className="relative z-10 size-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
    </>
  );

  const external = /^(https?:|mailto:)/.test(href);
  const link = external ? (
    <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : href.includes('#') ? (
    <AnchorLink href={href} className={classes}>
      {inner}
    </AnchorLink>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );

  return magnetic ? <Magnetic strength={0.25}>{link}</Magnetic> : link;
}
