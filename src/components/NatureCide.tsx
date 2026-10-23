import { motion } from '../lib/motion';
import { Sprout, ArrowRight } from 'lucide-react';

const naturecideImg = 'https://images.pexels.com/photos/6508837/pexels-photo-6508837.jpeg?auto=compress&cs=tinysrgb&h=600&w=900';

export default function NatureCide({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative order-2 lg:order-1">
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={naturecideImg} alt="Natural eco-friendly pest control spray application" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg px-4 py-3 shadow-lg max-w-[140px]">
            <div className="font-mono text-[10px] tracking-wider uppercase">New Offering</div>
            <div className="font-display font-bold text-sm">Natur-cide</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="order-1 lg:order-2">
          <span className="badge-dark mb-4"><Sprout className="w-3 h-3" /> Eco-Friendly</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-5">Now offering{' '}<span className="text-primary">Nature-cide</span> products.</h2>
          <p className="font-display text-[15px] text-muted-foreground leading-relaxed max-w-lg mb-6">We now use Natur-cide products for your pest control needs. They are all-natural, environmentally friendly, and effective — safe for your family, your pets, and the planet.</p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['All-natural, plant-based ingredients', 'Environmentally friendly and biodegradable', 'Safe around children and pets', 'Proven effective against common pests'].map((point) => (
              <li key={point} className="flex items-start gap-2.5"><Sprout className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="font-display text-sm text-foreground/90">{point}</span></li>
            ))}
          </ul>
          <button onClick={onQuote} className="font-display font-semibold text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center gap-2">Book a consultation <ArrowRight className="w-4 h-4" /></button>
        </motion.div>
      </div>
    </section>
  );
}
