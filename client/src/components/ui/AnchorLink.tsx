'use client';

import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

export const SCROLL_OFFSET = -90;

/**
 * Link koji na početnoj stranici glatko scrolla do sekcije (Lenis),
 * a s ostalih stranica normalno navigira na `/#sekcija`.
 */
export function AnchorLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const lenis = useLenis();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    const [path, hash] = href.split('#');
    if (!hash || (path || '/') !== pathname || !lenis) return;
    const target = document.getElementById(hash);
    if (!target) return;
    e.preventDefault();
    // Lenis je zaustavljen dok je mobile izbornik otvoren – pokreni ga prije scrolla
    lenis.start();
    lenis.scrollTo(target, { offset: SCROLL_OFFSET, duration: 1.4, force: true });
    history.replaceState(null, '', `#${hash}`);
  };

  return <Link href={href} onClick={handleClick} scroll={!href.includes('#')} {...props} />;
}
