import { motion } from '../lib/motion';
import { stats } from '../data';
import { useCountUp } from '../hooks/use-count-up';

function StatItem({ stat, isLast }: { stat: typeof stats[number]; isLast: boolean }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className={`flex flex-col items-center gap-1 flex-1 ${isLast ? '' : 'border-r border-border md:px-0'} pb-4 md:pb-0 border-b md:border-b-0 last:border-b-0 last:border-r-0 last:pb-0`}>
      <span ref={ref} className="font-mono text-[11px] text-primary tracking-wider">{value}{stat.suffix}</span>
      <span className="font-display text-[12px] text-muted-foreground">{stat.label}</span>
    </div>
  );
}

export default function ProofStrip() {
  return (
    <section className="border-t border-b border-border bg-surface py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 md:gap-0">
          {stats.map((s, i) => (<StatItem key={s.label} stat={s} isLast={i === stats.length - 1} />))}
        </motion.div>
      </div>
    </section>
  );
}
