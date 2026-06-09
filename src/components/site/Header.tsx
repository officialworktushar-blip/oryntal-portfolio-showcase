import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold backdrop-blur-xl bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={assetUrl(logoMark)} alt="Oryntal" className="h-9 w-9 rounded-full ring-1 ring-gold transition-transform group-hover:scale-110" />
          <span className="font-display text-xl tracking-widest text-gold">ORYNTAL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm tracking-wider uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-widest text-gold hover:bg-gold-gradient hover:text-primary-foreground transition-all"
          >
            Start a Project
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <div className="h-px w-6 bg-gold" />
            <div className="h-px w-6 bg-gold" />
            <div className="h-px w-4 bg-gold ml-auto" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold bg-background/95 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-lg text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
