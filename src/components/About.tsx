import { motion } from '../lib/motion';
import { ArrowRight } from 'lucide-react';
import { PHONE_HREF } from '../data';

const aboutImg = 'https://images.pexels.com/photos/6195874/pexels-photo-6195874.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000';

export default function About({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="bg-surface border-y border-border py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dark mb-4">Our Story</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-5">
            Locally owned.{' '}
            <span className="text-primary">Environmentally friendly.</span>
          </h2>
          <p className="font-display text-[15px] text-muted-foreground leading-relaxed mb-4">
            As a top-rated local company, we're passionate about making life easier for our neighbors.
            We know that pests can have a massive impact on your quality of life, and we want you to
            know that you don't have to just deal with them.
          </p>
          <p className="font-display text-[15px] text-muted-foreground leading-relaxed mb-6">
            Using proven methods that are safe for your family and pets, our team of Henderson
            exterminators will make the issue disappear. Contact us any time for a fast,
            compassionate response.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onQuote}
              className="font-display font-semibold text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              Schedule service <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={PHONE_HREF}
              className="font-display font-semibold text-sm border border-border text-foreground px-6 py-3 rounded-md hover:border-foreground/40 transition-colors"
            >
              Contact us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={aboutImg}
              alt="Pest control team unloading equipment from service vehicle"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
