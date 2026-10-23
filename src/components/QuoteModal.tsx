import { useEffect } from 'react';
import { motion, AnimatePresence } from '../lib/motion';
import { X, Check } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../data';

export default function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative bg-surface border border-border rounded-2xl w-full max-w-md p-5 sm:p-7 flex flex-col gap-5 max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="badge-dark mb-3">Free Quote</span>
              <h3 className="font-display font-extrabold text-2xl text-foreground tracking-tight">
                Get your free quote
              </h3>
              <p className="font-display text-sm text-muted-foreground mt-1">
                Tell us about your pest problem and we'll get back to you within 2 hours.
              </p>
            </div>

            <form
              className="flex flex-col gap-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <select
                className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Select pest type</option>
                <option value="rodents">Rats & Mice</option>
                <option value="bedbugs">Bed Bugs</option>
                <option value="roaches">Cockroaches</option>
                <option value="wasps">Wasps & Hornets</option>
                <option value="ants">Ants</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Describe the problem (optional)"
                rows={2}
                className="bg-background border border-border rounded-md px-3.5 py-2.5 font-display text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <button
                type="submit"
                className="bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 mt-1"
              >
                <Check className="w-4 h-4" /> Request my free quote
              </button>
            </form>

            <p className="font-mono text-[11px] text-muted-foreground text-center">
              Prefer to call? <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
