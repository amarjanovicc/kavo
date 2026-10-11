// Zajednički easing i timing za sve animacije – jedan izvor istine.
export const ease = {
  /** Brz start, mekan kraj – default za reveal animacije */
  out: [0.16, 1, 0.3, 1],
  /** Simetričan – za overlaye, prijelaze i panele */
  inOut: [0.76, 0, 0.24, 1],
} as const;

export const duration = {
  fast: 0.45,
  base: 0.9,
  slow: 1.2,
} as const;

/** Odskok za hover efekte („sve skače”) */
export const bounce = { type: 'spring', stiffness: 520, damping: 13, mass: 0.7 } as const;

/** Mekana opruga za magnetic/cursor praćenje */
export const soft = { stiffness: 170, damping: 18, mass: 0.4 } as const;

export const stagger = 0.06;
