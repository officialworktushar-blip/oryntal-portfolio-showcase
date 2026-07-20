import { assetUrl } from "@/lib/asset-url";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-3 group animate-fade-in-down"
          aria-label="Oryntal Home"
        >
          <div className="relative">
            <img
              src={assetUrl(logoMark)}
              alt="Oryntal"
              className="h-9 w-9 rounded-full ring-1 ring-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:ring-gold opacity-0"
              onLoad={() => setLogoLoaded(true)}
              style={{ opacity: logoLoaded ? 1 : 0 }}
            />
            <div className="absolute -inset-1 rounded-full border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
          </div>
          <span className="font-display text-xl tracking-widest text-gold gradient-text-clamp">
            ORYNTAL
          </span>
        </Link>
        <nav
          className="hidden md:flex items-center gap-10"
          role="navigation"
          aria-label="Main navigation"
        >
          {links.map((l, idx) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold relative" }}
              inactiveProps={{
                className: "text-muted-foreground hover:text-gold transition-colors duration-300",
              }}
              className="relative text-sm tracking-wider uppercase transition-colors duration-300 animate-fade-in-down"
              style={{ animationDelay: `${100 + idx * 50}ms` }}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary animate-fade-in-down"
            style={{ animationDelay: `${100 + links.length * 50}ms` }}
          >
            Get Estimate
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground animate-fade-in-down"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ animationDelay: `${100 + (links.length + 1) * 50}ms` }}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-px bg-gold transition-all duration-300 origin-center ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-px bg-gold transition-all duration-300 origin-center ${
                open ? "top-1/2 -rotate-45 opacity-0" : "top-1/2"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-px bg-gold transition-all duration-300 origin-center ${
                open ? "bottom-0 opacity-0" : "bottom-0"
              }`}
            />
          </div>
        </button>
      </div>
      {open && (
        <div
          className="md:hidden border-t border-gold/30 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-fade-in-down"
          role="dialog"
          aria-label="Mobile menu"
        >
          {links.map((l, idx) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-lg text-foreground hover:text-gold transition-colors duration-300 animate-fade-in-left"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full mt-4 animate-fade-in-up"
            style={{ animationDelay: `${links.length * 80}ms` }}
          >
            Get Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
