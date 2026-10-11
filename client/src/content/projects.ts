import type { Locale } from './dictionary';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  color: string;
  tags: string[];
  /** Zauzima cijeli red u gridu */
  wide?: boolean;
};

export const projects: Project[] = [
  {
    id: 'hotel-heritage',
    title: 'Hotel Heritage',
    description: 'Web stranica hotela s jednostavnom rezervacijom – jednako preglednom na mobitelu i računalu.',
    image: '/projects/1.png',
    width: 1149,
    height: 1027,
    color: '#3A486F',
    tags: ['Web dizajn', 'Responsive', 'Hotelijerstvo'],
  },
  {
    id: 'ronin-gym',
    title: 'Ronin Gym',
    description: 'Logotip i vizualni identitet za fitness centar.',
    image: '/projects/2.png',
    width: 888,
    height: 619,
    color: '#222222',
    tags: ['Branding', 'Vizualni identitet', 'Logo'],
  },
  {
    id: 'mara',
    title: 'MARA',
    description: 'Katalog proizvoda pripremljen za tisak.',
    image: '/projects/3.png',
    width: 968,
    height: 1027,
    color: '#CDCBC4',
    tags: ['Katalog', 'Print', 'Grafički dizajn'],
  },
  {
    id: 'mapetrol-label',
    title: 'Mapetrol',
    description: 'Ambalaža i etikete, prikazane kroz 3D vizualizacije.',
    image: '/projects/4.png',
    width: 1149,
    height: 1045,
    color: '#B1B1B1',
    tags: ['Produkt dizajn', '3D', 'Etikete'],
  },
  {
    id: 'procake',
    title: 'Procake',
    description: 'Dizajn ambalaže i 3D vizualizacija proizvoda.',
    image: '/projects/5.png',
    width: 888,
    height: 1451,
    color: '#E9E9E9',
    tags: ['Branding', '3D', 'Ambalaža'],
  },
  {
    id: 'moto-shop',
    title: 'Moto Shop',
    description: 'Web shop prilagođen svakom ekranu.',
    image: '/projects/6.png',
    width: 968,
    height: 1027,
    color: '#FFFFFF',
    tags: ['Web dizajn', 'Responsive', 'E-commerce'],
  },
  {
    id: 'baltazar',
    title: 'Baltazar',
    description: 'UX/UI za interaktivnu anketu koja na kraju automatski šalje mail.',
    image: '/projects/7.png',
    width: 3180,
    height: 1045,
    color: '#4A9235',
    tags: ['UX/UI', 'Anketa', 'Mail automatizacija'],
    wide: true,
  },
  {
    id: 'marketing-platform',
    title: 'Marketing platforma',
    description: 'Sučelje za vođenje kampanja, kontakata i automatizacija na jednom mjestu.',
    image: '/projects/8.png',
    width: 712,
    height: 1029,
    color: '#F2A900',
    tags: ['Web app', 'Digitalni marketing', 'UI'],
  },
  {
    id: 'mapetrol-livery',
    title: 'Mapetrol Livery',
    description: '3D vizualizacija vozila s brendiranom folijom.',
    image: '/projects/9.png',
    width: 1149,
    height: 1027,
    color: '#F1E6F2',
    tags: ['3D modeliranje', 'Livery dizajn', 'Vizualizacija'],
  },
  {
    id: 'dv-studio-gogi',
    title: 'DV Studio Gogi',
    description: 'Web stranica i branding za glazbeni studio.',
    image: '/projects/10.png',
    width: 1149,
    height: 1027,
    color: '#B964CF',
    tags: ['Web dizajn', 'Branding', 'UI/UX'],
  },
];

const en: Record<string, Partial<Pick<Project, 'title' | 'description' | 'tags'>>> = {
  'hotel-heritage': {
    description: 'Hotel website with simple booking – just as clear on mobile as on desktop.',
    tags: ['Web design', 'Responsive', 'Hospitality'],
  },
  'ronin-gym': { description: 'Logo and visual identity for a fitness centre.', tags: ['Branding', 'Visual identity', 'Logo'] },
  mara: { description: 'Product catalogue prepared for print.', tags: ['Catalogue', 'Print', 'Graphic design'] },
  'mapetrol-label': {
    description: 'Packaging and labels, presented through 3D visualisations.',
    tags: ['Product design', '3D', 'Labels'],
  },
  procake: { description: 'Packaging design and 3D product visualisation.', tags: ['Branding', '3D', 'Packaging'] },
  'moto-shop': { description: 'Online shop that fits every screen.', tags: ['Web design', 'Responsive', 'E-commerce'] },
  baltazar: {
    description: 'UX/UI for an interactive survey that automatically sends an email at the end.',
    tags: ['UX/UI', 'Survey', 'Email automation'],
  },
  'marketing-platform': {
    title: 'Marketing platform',
    description: 'One interface for running campaigns, contacts and automations.',
    tags: ['Web app', 'Digital marketing', 'UI'],
  },
  'mapetrol-livery': {
    description: '3D visualisation of a vehicle with a branded wrap.',
    tags: ['3D modelling', 'Livery design', 'Visualisation'],
  },
  'dv-studio-gogi': { description: 'Website and branding for a music studio.', tags: ['Web design', 'Branding', 'UI/UX'] },
};

export const projectsByLocale: Record<Locale, Project[]> = {
  hr: projects,
  en: projects.map((p) => ({ ...p, ...en[p.id] })),
};
