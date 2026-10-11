export const site = {
  name: 'Kavo Studio',
  url: 'https://kavo.studio',
  email: 'hi@kavo.studio',
  location: 'Varaždin, HR',
  since: 2023,
  description:
    'Kavo je osobni, nekomercijalni projekt i portfolio iz Hrvatske – grafički dizajn, branding i web development.',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/kavostudioo/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kavo-studio-065538388/' },
  ],
} as const;

/** Natpisi su u `dictionary.nav[key]` */
export const navLinks = [
  { key: 'about', href: '/#about' },
  { key: 'services', href: '/#services', hasServices: true },
  { key: 'work', href: '/#portfolio' },
] as const;
