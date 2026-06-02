import { FAQ } from './sections/FAQ';
import { Download } from './sections/Download';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Nav } from './sections/Nav';
import { Pricing } from './sections/Pricing';
import { Providers } from './sections/Providers';
import { Testimonials } from './sections/Testimonials';
import { Grain } from './shared/Primitives';

export function DrivebaseLanding() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Grain />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Providers />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Download />
        <Footer />
      </main>
    </div>
  );
}
