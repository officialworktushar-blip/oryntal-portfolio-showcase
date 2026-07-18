import { assetUrl } from "@/lib/asset-url";
import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/oryntal-mark.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-gold mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={assetUrl(logoMark)} alt="Oryntal" className="h-10 w-10 rounded-full" />
            <span className="font-display text-xl tracking-[0.25em] text-gold">ORYNTAL</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
            We build AI, automation, and full-stack systems for teams who are done wasting time on manual work. India-based, remote-first, GST registered.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@oryntal.com" className="hover:text-gold">hello@oryntal.com</a></li>
            <li className="text-muted-foreground">India · Remote-first</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold py-6 text-center text-xs text-muted-foreground tracking-[0.3em]">
        © {new Date().getFullYear()} ORYNTAL — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

