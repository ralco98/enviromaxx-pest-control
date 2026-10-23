import { motion } from '../lib/motion';
import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_HREF, trustChips } from '../data';

const heroImg = 'https://images.pexels.com/photos/8292785/pexels-photo-8292785.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 px-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="badge-dark mb-6">
            LICENSED · INSURED · GUARANTEED
          </motion.span>
          <motion.h1 variants={item} className="font-display font-extrabold leading-[0.96] tracking-tight text-foreground" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            Your home.<br />Pest-free.<br /><span className="text-primary">Guaranteed.</span>
          </motion.h1>
          <motion.p variants={item} className="font-display font-normal text-[15px] text-muted-foreground mt-6 max-w-[400px] leading-relaxed">
            Fast, discreet, and fully guaranteed pest control for homes and businesses across Henderson and the Southwestern Las Vegas area. Same-day appointments available.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mt-8">
            <button onClick={onQuote} className="font-display font-semibold text-sm bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center gap-2">Get a free quote <ArrowRight className="w-4 h-4" /></button>
            <a href={PHONE_HREF} className="font-display font-semibold text-sm border border-border text-foreground px-6 py-3 rounded-md hover:border-foreground/40 transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> Call now</a>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
            {trustChips.map((chip) => (<span key={chip} className="bg-foreground/5 border border-border rounded-md px-3 py-1.5 font-mono text-[10px] text-foreground/80">{chip}</span>))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} className="relative">
          <div className="rounded-xl overflow-hidden hero-glow border border-border">
            <img src={heroImg} alt="Pest control technician inspecting a home" className="w-full h-full object-cover aspect-[4/5] sm:aspect-[4/5] max-h-[520px]" loading="eager" />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-surface border border-border rounded-lg px-5 py-3 hidden sm:block">
            <div className="font-mono text-[10px] text-primary tracking-wider">SAVE 20%</div>
            <div className="font-display font-semibold text-sm text-foreground">Off your first service</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
