import { motion } from '../lib/motion';
import { trustBadges } from '../data';

export default function TrustBadges() {
  return (
    <section className="py-10 sm:py-12 px-5 sm:px-6 md:px-8 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={{ show: { transition: { staggerChildren: 0.08 } } }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div key={badge.label} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } } }} className="flex flex-col items-center text-center gap-2 bg-surface border border-border rounded-xl px-5 py-6">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" strokeWidth={2} /></div>
                <span className="font-display font-bold text-sm text-foreground">{badge.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{badge.sub}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
