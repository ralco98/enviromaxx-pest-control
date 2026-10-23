import { motion } from '../lib/motion';
import { steps } from '../data';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-16 md:py-24 px-5 sm:px-6 md:px-8 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="badge-dark mb-4">Process</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">Simple. Fast. Guaranteed.</h2>
        </motion.div>
        <motion.div variants={{ show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div key={step.num} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } }} className="relative">
              <span className="font-mono text-5xl md:text-6xl font-normal text-primary opacity-[0.12] leading-none block mb-3">{step.num}</span>
              <h3 className="font-display font-bold text-base text-foreground mb-1.5">{step.name}</h3>
              <p className="font-display text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
