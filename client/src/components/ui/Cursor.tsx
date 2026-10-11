'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

// Invertirana bijela točka na žutoj (#FFBD00) daje plavu sa slabim kontrastom –
// na žutoj podlozi kursor je zato tamna točka sa svijetlim rubom.
const bgCache = new WeakMap<Element, boolean>();
function isOnYellow(start: Element | null): boolean {
  for (let el = start; el; el = el.parentElement) {
    const cached = bgCache.get(el);
    if (cached !== undefined) return cached;
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
    if (m && (m[3] === undefined || Number(m[3]) > 0.5)) {
      const [r, g, b] = m.map(Number);
      const yellow = r > 230 && g > 160 && g < 215 && b < 60;
      bgCache.set(el, yellow);
      return yellow;
    }
  }
  return false;
}

/**
 * Custom cursor (samo za miš). Elementi s `data-cursor="Tekst"` pretvaraju ga u oznaku s tekstom
 * (žutu, a na žutoj podlozi tamnu).
 * Sistemski kursor ostaje vidljiv zbog pristupačnosti.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const [onYellow, setOnYellow] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      setLabel(el?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? null);
      setHovering(!!el?.closest(INTERACTIVE));
      setOnYellow(isOnYellow(el));
    };
    const hide = () => setVisible(false);

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', hide);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hovering ? 48 : 12;

  return (
    // Blend mora biti na vanjskom (fixed) sloju – on stvara stacking context koji se stapa sa stranicom
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: sx, y: sy, mixBlendMode: label || onYellow ? 'normal' : 'difference' }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          backgroundColor: onYellow ? '#080D10' : label ? '#FFBD00' : '#FFFFFF',
          boxShadow: onYellow && !label ? '0 0 0 2px #EBECE7' : '0 0 0 0px rgba(235,236,231,0)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              className={`eyebrow text-[10px] font-semibold ${onYellow ? 'text-brand' : 'text-ink'}`}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
