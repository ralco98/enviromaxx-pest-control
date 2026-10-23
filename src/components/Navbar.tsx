import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from '../lib/motion';
import { Shield, Menu, X, Phone } from 'lucide-react';
import { navLinks, PHONE, PHONE_HREF } from '../data';

export default function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-black/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-8 py-1.5 flex items-center justify-center gap-3">
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground">24/7 EMERGENCY CALL-OUT · {PHONE}</span>
        </div>
      </div>
      <header className={`fixed top-0 md:top-[26px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/94 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
        <nav className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" strokeWidth={2.5} />
            <span className="font-display font-extrabold text-lg text-foreground tracking-tight">EnviroMAXX</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (<a key={l.href} href={l.href} className="font-display font-medium text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 font-display font-semibold text-sm text-foreground hover:text-primary transition-colors"><Phone className="w-4 h-4" />{PHONE}</a>
            <button onClick={onQuote} className="font-display font-semibold text-[13px] bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">Get a free quote</button>
          </div>
          <button className="md:hidden p-2 text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border">
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((l) => (<a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-display font-medium text-base text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>))}
                <div className="flex flex-col gap-3 pt-2 border-t border-border">
                  <a href={PHONE_HREF} className="flex items-center gap-2 font-display font-semibold text-sm text-foreground"><Phone className="w-4 h-4 text-primary" />{PHONE}</a>
                  <button onClick={() => { onQuote(); setMenuOpen(false); }} className="font-display font-semibold text-sm bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-center">Get a free quote</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
