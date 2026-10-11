'use client';

import { MotionConfig } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import type { ReactNode } from 'react';
import { IntroProvider } from './IntroProvider';
import { ScrollState } from './ScrollState';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1, autoRaf: true }}>
      <MotionConfig reducedMotion="user">
        <IntroProvider>
          <ScrollState />
          {children}
        </IntroProvider>
      </MotionConfig>
    </ReactLenis>
  );
}
