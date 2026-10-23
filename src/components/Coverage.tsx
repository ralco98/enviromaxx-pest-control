import { useState } from 'react';
import { motion } from '../lib/motion';
import { Check, Search, ArrowRight } from 'lucide-react';
import { guaranteeBullets } from '../data';

export default function Coverage() {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    if (postcode.trim().length < 4) {
      setResult('Please enter a valid postcode or ZIP code.');
      return;
    }
    setResult('Great news! We service your area. Call us to book your appointment.');
  };

  return (
    <section id="coverage" className="py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dark mb-4">Coverage</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-8">
            We cover your area.
          </h2>
          <div className="bg-surface border border-border rounded-xl aspect-[4/3] md:aspect-[4/3] flex flex-col items-center justify-center p-6 sm:p-8 gap-4">
            <p className="font-display text-sm text-muted-foreground text-center max-w-xs">
              Enter your postcode or ZIP to check if we service your neighborhood.
            </p>
            <div className="flex w-full max-w-sm gap-2">
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. 89002"
                className="flex-1 bg-background border border-border rounded-md px-4 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              />
              <button
                onClick={handleCheck}
                className="bg-primary text-primary-foreground font-display font-semibold text-sm px-4 py-2.5 rounded-md hover:bg-primary-dark transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" /> Check
              </button>
            </div>
            {result && (
              <p className="font-display text-sm text-primary text-center max-w-xs">{result}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface border border-border border-l-[3px] border-l-primary rounded-r-xl rounded-l-lg p-8 flex flex-col gap-5 self-start"
        >
          <div className="w-14 h-14 rounded-full bg-primary/12 border border-primary/25 flex items-center justify-center">
            <Check className="w-7 h-7 text-primary" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl text-foreground mb-4">12-month guarantee</h3>
            <ul className="flex flex-col gap-3">
              {guaranteeBullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-display text-sm text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="font-display font-semibold text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all">
            View guarantee terms <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
