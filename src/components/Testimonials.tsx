import { motion } from '../lib/motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="badge-dark mb-4">Reviews</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            Trusted by thousands.
          </h2>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-surface border border-border rounded-[10px] p-7 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-light italic text-sm text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="font-display font-semibold text-sm text-foreground">{t.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">{t.pest}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
