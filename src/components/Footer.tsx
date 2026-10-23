import { Shield, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY, PHONE, PHONE_HREF, EMAIL, CITY, footerServices, footerCompany } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-border px-5 sm:px-6 md:px-8 pt-12 pb-7">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-border">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" strokeWidth={2.5} />
              <span className="font-display font-extrabold text-lg text-foreground">EnviroMAXX</span>
            </div>
            <p className="font-display text-sm text-muted-foreground leading-relaxed max-w-xs">
              Locally owned, environmentally friendly pest control serving Henderson and the Southwestern Las Vegas area.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {CITY}
              </span>
              <a href={PHONE_HREF} className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" /> {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-sm text-foreground mb-1">Services</h4>
            {footerServices.map((s) => (
              <a key={s} href="#services" className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-sm text-foreground mb-1">Company</h4>
            {footerCompany.map((c) => (
              <a key={c} href="#home" className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors">
                {c}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} {COMPANY}® — All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
            LOCALLY OWNED · FULLY INSURED · 100% SATISFACTION GUARANTEE
          </p>
        </div>
      </div>
    </footer>
  );
}
