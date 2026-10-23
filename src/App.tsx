import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import NatureCide from './components/NatureCide';
import About from './components/About';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Blog from './components/Blog';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar onQuote={openQuote} />
      <main>
        <Hero onQuote={openQuote} />
        <ProofStrip />
        <TrustBadges />
        <Services />
        <HowItWorks />
        <NatureCide onQuote={openQuote} />
        <About onQuote={openQuote} />
        <Coverage />
        <Testimonials />
        <CTABanner onQuote={openQuote} />
        <Blog />
      </main>
      <Footer />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
