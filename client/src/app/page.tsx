'use client';

import Hero from '@/components/Hero/Hero';
import StatementSection from '@/components/StatementSection';
import ScrollCards from '@/components/ScrollCards';
import KavoStudioSection from '@/components/KavoStudioSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToHash from '@/components/ScrollToHash';
import Script from 'next/script';

// Since this is a client component, we need a separate metadata file
// Create a new file at: c:\Users\Korisnik\OneDrive\Dokumenti\kavo\kavo\client\src\app\metadata.ts
// with the content from below comment blocks

export default function HomePage() {
  return (
    <>
      {/* Structured data for the homepage */}
      <Script
        id="structured-data-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Kavo | Kreativna agencija za dizajn i tehnologiju',
            description: 'Kavo je kreativna agencija specijalizirana za grafički dizajn, branding, web razvoj i digitalni marketing. Stvaramo jedinstvene vizualne identitete.',
            url: 'https://kavo.studio',
            mainEntity: {
              '@type': 'Organization',
              name: 'Kavo Studio',
              url: 'https://kavo.studio',
              logo: 'https://kavo.studio/logo.png',
              sameAs: [
                'https://www.facebook.com/kavostudio',
                'https://www.instagram.com/kavostudio',
                'https://www.linkedin.com/company/kavostudio'
              ]
            }
          })
        }}
      />

      <main className="bg-[#080D10] text-white scroll-smooth" aria-label="Kavo Studio glavna stranica">  
        <ScrollToHash />
        
        <section id="hero" aria-label="Uvodna sekcija">
          <Hero />
        </section>

        <section id="about" aria-label="O nama">
          <StatementSection />
        </section>

        <section id="scrollcards" aria-label="Naše usluge">
          <ScrollCards />
        </section>

        <section id="studio" aria-label="Kavo Studio">
          <KavoStudioSection />
        </section>

        <section id="services" aria-label="Naše usluge i djelatnosti">
          <ServicesSection />
        </section>

        <section id="portfolio" aria-label="Portfolio i projekti">
          <ProjectsSection />
        </section>

        <section id="contact" aria-label="Kontakt informacije">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
