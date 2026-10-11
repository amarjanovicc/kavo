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
    description: 'Web dizajn s fokusom na responsive korisničko iskustvo i jednostavnost rezervacija.',
    image: '/projects/1.png',
    width: 1149,
    height: 1027,
    color: '#3A486F',
    tags: ['Web dizajn', 'Responsive', 'Hotelijerstvo'],
  },
  {
    id: 'ronin-gym',
    title: 'Ronin Gym',
    description: 'Branding i vizualni identitet za fitness centar.',
    image: '/projects/2.png',
    width: 888,
    height: 619,
    color: '#222222',
    tags: ['Branding', 'Vizualni identitet', 'Logo'],
  },
  {
    id: 'mara',
    title: 'MARA',
    description: 'Dizajn kataloga – tiskani materijali visokog standarda.',
    image: '/projects/3.png',
    width: 968,
    height: 1027,
    color: '#CDCBC4',
    tags: ['Katalog', 'Print', 'Grafički dizajn'],
  },
  {
    id: 'mapetrol-label',
    title: 'Mapetrol',
    description: 'Dizajn ambalaže i etiketa s 3D vizualizacijama.',
    image: '/projects/4.png',
    width: 1149,
    height: 1045,
    color: '#B1B1B1',
    tags: ['Produkt dizajn', '3D', 'Etikete'],
  },
  {
    id: 'procake',
    title: 'Procake',
    description: '3D vizualizacija i dizajn ambalaže.',
    image: '/projects/5.png',
    width: 888,
    height: 1451,
    color: '#E9E9E9',
    tags: ['Branding', '3D', 'Ambalaža'],
  },
  {
    id: 'moto-shop',
    title: 'Moto Shop',
    description: 'Web shop s responsive dizajnom.',
    image: '/projects/6.png',
    width: 968,
    height: 1027,
    color: '#FFFFFF',
    tags: ['Web dizajn', 'Responsive', 'E-commerce'],
  },
  {
    id: 'baltazar',
    title: 'Baltazar',
    description: 'UX/UI dizajn za interaktivnu anketu s automatskim slanjem maila.',
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
    description: 'Platforma za upravljanje kampanjama, kontaktima i automatizacijom.',
    image: '/projects/8.png',
    width: 712,
    height: 1029,
    color: '#F2A900',
    tags: ['Web app', 'Digitalni marketing', 'UI'],
  },
  {
    id: 'mapetrol-livery',
    title: 'Mapetrol Livery',
    description: '3D vizualizacija vozila s brendiranim omotom.',
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
