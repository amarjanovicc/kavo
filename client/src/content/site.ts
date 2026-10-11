export const site = {
  name: 'Kavo Studio',
  url: 'https://kavo.studio',
  email: 'hi@kavo.studio',
  location: 'Varaždin, HR',
  since: 2023,
  description:
    'Kavo je osobni, nekomercijalni projekt i portfolio iz Hrvatske – grafički dizajn, branding i web development.',
  disclaimer:
    'Kavo je osobni, nekomercijalni projekt. Nije registrirana tvrtka i ne prodaje proizvode ni usluge.',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/kavostudioo/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kavo-studio-065538388/' },
  ],
} as const;

export const navLinks = [
  { label: 'O nama', href: '/#about' },
  { label: 'Usluge', href: '/#services', hasServices: true },
  { label: 'Radovi', href: '/#portfolio' },
] as const;
