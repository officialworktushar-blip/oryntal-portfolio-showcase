import { assetUrl } from "@/lib/asset-url";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";

export function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="border-t border-gold/30 mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3">
            <img src={assetUrl(logoMark)} alt="Oryntal" className="h-10 w-10 rounded-full ring-1 ring-gold/50" />
            <span className="font-display text-xl tracking-[0.25em] text-gold gradient-text-clamp">ORYNTAL</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
            We build AI, automation, and full-stack systems for teams who are done wasting time on manual work. India-based, remote-first, GST registered.
          </p>
<div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:support.oryntal@agency.org.in" className="text-sm text-muted-foreground hover:text-gold transition-colors">support.oryntal@agency.org.in</a>
            <span className="text-sm text-muted-foreground">India \u2014 Remote-first</span>
            <span className="text-sm text-muted-foreground">GST Registered</span>
          </div>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Capabilities</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>AI Engineering & LLM Agents</li>
            <li>Automation & n8n Workflows</li>
            <li>Full-Stack Web Development</li>
            <li>Shopify 2.0 Storefronts</li>
            <li>WordPress & WooCommerce</li>
            <li>React Native Mobile Apps</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 py-6 text-center text-xs text-muted-foreground tracking-[0.3em] relative">
        <span>© {new Date().getFullYear()} ORYNTAL — ALL RIGHTS RESERVED</span>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </footer>
  );
}

