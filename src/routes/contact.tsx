"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// SplitText-style utility for GSAP
class SplitText {
  lines: HTMLElement[] = [];
  element: HTMLElement;

  constructor(element: HTMLElement, options: { type: string; linesClass?: string }) {
    this.element = element;
    this.split(options);
  }

  split(options: { type: string; linesClass?: string }) {
    const { type, linesClass = "split-line" } = options;
    const text = this.element.textContent || "";
    this.element.innerHTML = "";

    if (type.includes("lines")) {
      const lines = text.split("\n");
      lines.forEach((line, i) => {
        const lineEl = document.createElement("div");
        lineEl.className = linesClass;
        lineEl.style.overflow = "hidden";
        lineEl.textContent = line;
        this.element.appendChild(lineEl);
        this.lines.push(lineEl);
        if (i < lines.length - 1) this.element.appendChild(document.createElement("br"));
      });
    }
  }
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Project Estimate | Oryntal" },
      { name: "description", content: "Tell us what you want to build. We reply within one working day with a real opinion — never a sales deck." },
      { property: "og:title", content: "Contact — Get a Free Project Estimate | Oryntal" },
      { property: "og:description", content: "One thoughtful reply within a working day." },
    ],
  }),
  component: ContactPage,
});

const budgets = ["< $10k", "$10–25k", "$25–60k", "$60k+", "Retainer"];
const services = ["AI", "Automation", "Full Stack", "Shopify", "WordPress", "Mobile App"];

function ContactPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggle = (s: string) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (selected.length === 0) newErrors.services = "Select at least one service";
    if (!budget) newErrors.budget = "Select a budget range";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setShowSuccess(false);
      }, 800);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Hero and form animations
  useEffect(() => {
    if (prefersReduced) return;
    
    const ctx = gsap.context(() => {
      // Hero title - SplitText lines
      const titleEl = document.querySelector(".contact-hero-title");
      if (titleEl) {
        const split = new SplitText(titleEl as HTMLElement, { type: "lines", linesClass: "split-line" });
        gsap.set(split.lines, { y: "100%", opacity: 0 });
        
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });
        tl.to(split.lines, { y: 0, opacity: 1, stagger: 0.12, duration: 1.2 }, 0)
          .to(".contact-hero-subtitle", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
          .to(".contact-form-field", { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "expo.out" }, "-=0.6")
          .to(".contact-info-item", { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.4")
          .to(".service-chip", { scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
          .to(".budget-option", { scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
      }
    }, scrollRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Success state animation
  useEffect(() => {
    if (submitted && !prefersReduced) {
      gsap.fromTo(".success-content", 
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
      );
      gsap.fromTo(".success-icon", 
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 0.2 }
      );
      gsap.fromTo(".success-text", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.4 }
      );
    }
  }, [submitted, prefersReduced]);

  // Magnetic button effect for submit
  useEffect(() => {
    if (prefersReduced) return;
    
    const submitBtn = document.querySelector(".submit-btn") as HTMLElement;
    if (!submitBtn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = submitBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(submitBtn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(submitBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    submitBtn.addEventListener("mousemove", handleMouseMove);
    submitBtn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      submitBtn.removeEventListener("mousemove", handleMouseMove);
      submitBtn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced, submitted]);

  return (
    <div ref={scrollRef} className="relative min-h-screen">
      <Hero />
      <FormSection
        submitted={submitted}
        showSuccess={showSuccess}
        selected={selected}
        setSelected={setSelected}
        budget={budget}
        setBudget={setBudget}
        formData={formData}
        setFormData={setFormData}
        focusedField={focusedField}
        setFocusedField={setFocusedField}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <InfoSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-gold/20 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Contact</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] contact-hero-title">
          <span className="line block">Tell us what you</span>
          <span className="line block"><span className="text-gold italic gradient-text-clamp">want to build.</span></span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground contact-hero-subtitle">
          One reply within a working day. No drip campaigns, no discovery decks — just a real opinion from the people who'll do the work.
        </p>
      </div>
    </section>
  );
}

function FormSection({
  submitted,
  showSuccess,
  selected,
  setSelected,
  budget,
  setBudget,
  formData,
  setFormData,
  focusedField,
  setFocusedField,
  errors,
  handleChange,
  handleSubmit,
}: {
  submitted: boolean;
  showSuccess: boolean;
  selected: string[];
  setSelected: (s: string[]) => void;
  budget: string;
  setBudget: (s: string) => void;
  formData: Record<string, string>;
  setFormData: (d: Record<string, string>) => void;
  focusedField: string | null;
  setFocusedField: (s: string | null) => void;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-[1fr_320px] gap-12">
        <div className="rounded-3xl border border-gold/20 bg-card/50 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
          <div className="relative">
            {submitted ? (
              <SuccessState />
            ) : showSuccess ? (
              <div className="success-content text-center py-16">
                <div className="success-icon inline-block h-20 w-20 rounded-full bg-gold-gradient mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="success-text font-display text-3xl mb-3">Brief received.</h2>
                <p className="success-text text-muted-foreground mb-6">We'll reply from support.oryntal@agency.org.in within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedField
                    label="Your name"
                    name="name"
                    placeholder="Jane Mercer"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    error={errors.name}
                    focused={focusedField === "name"}
                    required
                    className="contact-form-field"
                  />
                  <AnimatedField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    error={errors.email}
                    focused={focusedField === "email"}
                    required
                    className="contact-form-field"
                  />
                </div>
                <AnimatedField
                  label="Company"
                  name="company"
                  placeholder="Acme Co."
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  focused={focusedField === "company"}
                  className="contact-form-field"
                />

                <div className="contact-form-field">
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">What do you need?</label>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Services needed">
                    {services.map((s, i) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))}
                        className={`service-chip px-4 py-2.5 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 ${
                          selected.includes(s)
                            ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
                            : "border-gold/30 text-muted-foreground hover:text-gold hover:border-gold hover:bg-gold/5"
                        } magnetic`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.services && <p className="mt-2 text-sm text-destructive">{errors.services}</p>}
                </div>

                <div className="contact-form-field">
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">Budget</label>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Budget range">
                    {budgets.map((b, i) => (
                      <label key={b} className="budget-option cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          checked={budget === b}
                          onChange={() => setBudget(b)}
                          className="peer sr-only"
                        />
                        <span className={`block px-4 py-2.5 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 ${
                          budget === b
                            ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
                            : "border-gold/30 text-muted-foreground hover:text-gold hover:border-gold hover:bg-gold/5"
                        } magnetic`}>
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.budget && <p className="mt-2 text-sm text-destructive">{errors.budget}</p>}
                </div>

                <div className="contact-form-field">
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">The brief</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="What are you trying to build, change, or fix? The more specific, the sharper our reply."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`animated-textarea w-full rounded-xl border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                      focusedField === "message" ? "border-gold ring-2 ring-gold/20" : "border-gold/30 hover:border-gold"
                    }`}
                  />
                  {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="submit-btn btn-primary w-full magnetic relative overflow-hidden"
                >
                  <span className="relative z-10">Send Brief</span>
                  <span className="absolute inset-0 bg-gold-soft/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </form>
            )}
          </div>
        </div>

        <aside className="space-y-8">
          <ContactInfoItem icon="✉" label="Direct" value="support.oryntal@agency.org.in" href="mailto:support.oryntal@agency.org.in" />
          <ContactInfoItem icon="⚡" label="Response Time" value="Within 1 working day. Always." />
          <ContactInfoItem icon="🤝" label="Engagement Model" value="Fixed-scope projects, retainers, or fractional CTO arrangements. NDA available on request." />
          <ContactInfoItem icon="🌍" label="Time Zones" value="UTC −5 → UTC +8 covered" />
        </aside>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="success-content text-center py-16">
      <div className="success-icon inline-block h-20 w-20 rounded-full bg-gold-gradient mb-6 flex items-center justify-center">
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h2 className="success-text font-display text-3xl mb-3">Brief received.</h2>
      <p className="success-text text-muted-foreground mb-6">We'll reply from support.oryntal@agency.org.in within one working day.</p>
      <button
        onClick={() => window.location.reload()}
        className="btn-secondary magnetic"
      >
        Send Another
      </button>
    </div>
  );
}

function AnimatedField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  focused,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  error?: string;
  focused: boolean;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={`block text-xs uppercase tracking-widest text-gold mb-3 transition-colors ${focused ? "text-gold" : ""}`}>
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`animated-input w-full rounded-xl bg-background px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
            focused || value ? "border-gold ring-2 ring-gold/20" : "border-gold/30 hover:border-gold"
          } ${error ? "border-destructive" : ""}`}
        />
        {error && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-destructive">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
        )}
        <div className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${focused || value ? "w-full bg-gold" : "w-0 bg-gold/30"}`} />
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  return (
    <div className="contact-info-item group">
      <div className="text-xs uppercase tracking-widest text-gold mb-2">{label}</div>
      {href ? (
        <a href={href} className="font-display text-2xl hover:text-gold transition-colors duration-300 inline-block group-hover:translate-x-1 magnetic">
          {value}
        </a>
      ) : (
        <p className="text-foreground text-lg">{value}</p>
      )}
    </div>
  );
}

function InfoSection() {
  return (
    <section className="py-20 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard value="24h" label="Average Response" description="We reply within one working day" />
          <StatCard value="50+" label="Projects Delivered" description="AI, automation, and web systems shipped" />
          <StatCard value="100%" label="Founder-Led" description="Direct access to decision makers" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="rounded-2xl border border-gold/20 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-gold/50 hover:shadow-card-hover transition-all duration-500">
      <div className="font-display text-4xl md:text-5xl text-gold gradient-text-clamp mb-2">{value}</div>
      <h3 className="font-display text-xl mb-1">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}