import { motion } from '../lib/motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data';

const cardVariants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } };

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <span className="badge-dark mb-4">What We Treat</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">Pests we eliminate.</h2>
        </motion.div>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.08 } } }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.name} variants={cardVariants} className="glow-card bg-surface border border-border rounded-[10px] p-7 flex flex-col gap-4 group cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20"><Icon className="w-6 h-6 text-primary" strokeWidth={2} /></div>
                  <span className="badge-dark">{s.tag}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{s.name}</h3>
                <p className="font-display text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <a href="#contact" className="font-display font-semibold text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
