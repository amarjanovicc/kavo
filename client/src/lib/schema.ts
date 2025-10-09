export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kavo Studio',
  legalName: 'Kavo Studio d.o.o.',
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
  telephone: '+385 42 000 000', // Add your actual phone number
  description: 'Stvaramo digitalna iskustva koja ostavljaju dojam. Vaša vizija, naša stručnost.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ulica Ivana Kukuljevića 33', // Update with your actual address
    addressLocality: 'Varaždin',
    addressRegion: 'Varaždinska županija',
    postalCode: '42000',
    addressCountry: 'HR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '46.305746',
    longitude: '16.337059'
  },
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/kavostudioo/',
    'https://www.linkedin.com/in/kavo-studio-065538388/'
  ],
  knowsAbout: ['Grafički dizajn', 'Branding', 'Web razvoj', 'Digitalni marketing'],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '46.305746',
      longitude: '16.337059'
    },
    geoRadius: '100000'
  },
  foundingDate: '2023'
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Grafički dizajn',
      description: 'Profesionalni grafički dizajn za sve vaše potrebe, od vizualnog identiteta do marketinških materijala.',
      url: 'https://kavo.studio/graficki-dizajn',
      provider: {
        '@type': 'Organization',
        name: 'Kavo Studio'
      }
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Branding',
      description: 'Strategija brendiranja i razvoj vizualnog identiteta za tvrtke i proizvode.',
      url: 'https://kavo.studio/branding',
      provider: {
        '@type': 'Organization',
        name: 'Kavo Studio'
      }
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Web razvoj',
      description: 'Izrada modernih i responzivnih web stranica i aplikacija po mjeri.',
      url: 'https://kavo.studio/web-razvoj',
      provider: {
        '@type': 'Organization',
        name: 'Kavo Studio'
      }
    }
  ]
};

// Add FAQ schema for common questions
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koje usluge nudi Kavo Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kavo Studio nudi usluge grafičkog dizajna, brandinga, web razvoja i digitalnog marketinga. Stvaramo vizualne identitete i digitalna rješenja prilagođena potrebama klijenata.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gdje se nalazi Kavo Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kavo Studio se nalazi u Varaždinu, Hrvatska. Radimo s klijentima diljem Hrvatske i inozemstva.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kako mogu zatražiti ponudu za usluge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ponudu možete zatražiti putem našeg obrasca na stranici Kontakt, slanjem emaila na hi@kavo.studio ili nas kontaktirajte putem društvenih mreža.'
      }
    }
  ]
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

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://kavo.studio/#LocalBusiness',
  name: 'Kavo Studio',
  image: 'https://kavo.studio/og-image.jpg',
  logo: 'https://kavo.studio/logo.png',
  telephone: '+385 42 000 000', // Match to organization schema
  email: 'hi@kavo.studio',
  url: 'https://kavo.studio',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ulica Ivana Kukuljevića 33', // Match to organization schema
    addressLocality: 'Varaždin',
    addressRegion: 'Varaždinska županija',
    postalCode: '42000',
    addressCountry: 'HR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '46.305746',
    longitude: '16.337059'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: 'EUR, HRK'
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