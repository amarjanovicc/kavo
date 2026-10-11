// Kavo je osobni, nekomercijalni projekt – bez pravne osobe, cijena, adrese i radnog vremena.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kavo Studio',
  url: 'https://kavo.studio',
  logo: {
    '@type': 'ImageObject',
    url: 'https://kavo.studio/logo.png',
    width: '112',
    height: '112',
    caption: 'Kavo Studio logo'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://kavo.studio/og-image.jpg',
    width: '1200',
    height: '630'
  },
  email: 'hi@kavo.studio',
  description: 'Osobni projekt i portfolio – grafički dizajn, branding i web development. Nije registrirana tvrtka i ne nudi komercijalne usluge.',
  sameAs: [
    'https://www.instagram.com/kavostudioo/',
    'https://www.linkedin.com/in/kavo-studio-065538388/'
  ],
  knowsAbout: ['Grafički dizajn', 'Branding', 'Web development', 'Web dizajn']
};

// Add BreadcrumbList schema for better navigation representation
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// Add this new schema for portfolio projects

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'CreativeWork',
      position: 1,
      name: 'Hotel Heritage',
      description: 'Web dizajn i razvoj za Hotel Heritage s fokusom na responsive korisničko iskustvo i jednostavnost rezervacija. Implementiran sustav za online bookiranje i prezentaciju smještajnih jedinica.',
      image: 'https://kavo.studio/projects/1.png',
      url: 'https://kavo.studio/projekti/laptop',
      creator: {
        '@type': 'Organization',
        name: 'Kavo Studio'
      },
      keywords: ['Web dizajn', 'Responsive', 'Hotelijerstvo', 'Booking sustav'],
      dateCreated: '2023-06-15'
    },
    // Add others if possible with real data
  ]
};