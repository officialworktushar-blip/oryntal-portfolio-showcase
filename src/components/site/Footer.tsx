import { assetUrl } from "@/lib/asset-url";
import { Link } from "@tanstack/react-router";
import logoFull from "@/assets/oryntal-ai-labs.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-gold mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={assetUrl(logoFull)} alt="Oryntal AI Labs" className="h-24 w-auto -ml-2" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            The gravitational studio. We collapse scattered operations — AI, automation, full-stack — into a single, inevitable point of truth.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@oryntal.com</li>
            <li>Global · Remote-first</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold py-6 text-center text-xs text-muted-foreground tracking-widest">
        © {new Date().getFullYear()} ORYNTAL AI LABS — ENGINEERED WITH PRECISION
      </div>
    </footer>
  );
}
