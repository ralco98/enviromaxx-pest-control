import { motion } from '../lib/motion';
import { ArrowRight, Phone } from 'lucide-react';
import { PHONE_HREF } from '../data';

export default function CTABanner({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="px-5 sm:px-6 md:px-8 py-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl bg-primary diagonal-texture rounded-2xl py-16 md:py-20 px-8 md:px-16 text-center flex flex-col items-center gap-5"
      >
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl tracking-tight text-black max-w-2xl text-balance">
          Ready to take back your home?
        </h2>
        <p className="font-display text-[15px] text-black/70 max-w-md">
          Get a free, no-obligation quote today. Same-day appointments available across Henderson and the Las Vegas area.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            onClick={onQuote}
            className="bg-black text-white font-display font-semibold text-sm px-6 py-3 rounded-md hover:bg-black/80 transition-colors flex items-center gap-2"
          >
            Get a free quote <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={PHONE_HREF}
            className="border border-black/30 text-black font-display font-semibold text-sm px-6 py-3 rounded-md hover:bg-black/10 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call us now
          </a>
        </div>
        <p className="font-mono text-[11px] text-black/50 mt-2">
          No call-out fee · Response within 2 hours
        </p>
      </motion.div>
    </section>
  );
}
