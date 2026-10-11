import { About } from '@/components/sections/About';
import { ContactCta } from '@/components/sections/ContactCta';
import { Hero } from '@/components/sections/Hero';
import { MarqueeBand } from '@/components/sections/MarqueeBand';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Statement } from '@/components/sections/Statement';
import { Values } from '@/components/sections/Values';
import { HashScroll } from '@/components/ui/HashScroll';
import { jsonLd, portfolioSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <HashScroll />
      <Hero />
      <MarqueeBand />
      <Statement />
      <Values />
      <About />
      <Services />
      <Projects />
      <ContactCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(portfolioSchema) }} />
    </>
  );
}
