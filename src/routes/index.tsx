import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";
import meet2pro from "@/assets/meet2pro.png.asset.json";
import qr2review from "@/assets/qr2review.png.asset.json";
import whatsappRag from "@/assets/whatsapp-rag.jpg.asset.json";
import eshopwebStore from "@/assets/site-shots/eshopweb-store.asset.json";
import theKaftanCompany from "@/assets/site-shots/the-kaftan-company.asset.json";
import clouShot from "@/assets/site-shots/clou.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oryntal — AI, automation & full-stack systems for teams done wasting time" },
      { name: "description", content: "From LLM agents to Shopify storefronts, Oryntal ships production systems in weeks, not quarters." },
      { property: "og:title", content: "Oryntal — Production systems in weeks, not quarters" },
      { property: "og:description", content: "AI, automation, and full-stack systems for founders and operators who are done wasting time on manual work." },
    ],
  }),
  component: HomePage,
});

const rotatingCapabilities = ["LLM agents.", "Automated workflows.", "Full-stack apps.", "Shopify storefronts."];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Differentiators />
      <SelectedWorks />
      <Process />
      <FAQGrid />
      <CTA />
    </>
  );
}

// ---------- HERO ----------
function Hero() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % rotatingCapabilities.length), 3000);
    const v = setTimeout(() => setVisible(true), 100);
    return () => { clearInterval(t); clearTimeout(v); };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 grid-noise" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-10 animate-fade-in-down">
            <img src={assetUrl(logoMark)} alt="Oryntal" className="h-10 w-10 rounded-full ring-1 ring-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Oryntal — Est. 2025</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight animate-slide-up-reveal">
            We build AI, automation, and full-stack systems for teams who are done wasting time on manual work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
            From LLM agents to Shopify storefronts — Oryntal ships production systems in weeks, not quarters.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground animate-fade-in-up delay-300">
            <span>We ship</span>
            <span key={i} className="font-display italic text-gold text-lg min-w-[220px] animate-text-reveal">{rotatingCapabilities[i]}</span>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <Link to="/contact" className="btn-primary">
              Get a Free Project Estimate
            </Link>
            <Link to="/projects" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-gold/30 pt-12 animate-fade-in-up delay-500">
          {[
            ["120+", "Systems shipped"],
            ["2025", "Agency established"],
            ["6", "Disciplines under one roof"],
            ["100%", "Founder-led delivery"],
          ].map(([k, v]) => (
            <div key={v} className="relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display text-4xl md:text-5xl text-gold gradient-text-clamp">{k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-gentle animate-fade-in-up delay-1000">
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <span className="uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-gold/50 animate-float-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}

// ---------- TRUSTED BY ----------
const trustedBrands = [
  "Rahman Textiles", "Indigo Mart", "Bengal Foods", "Padma Logistics",
  "Nexus Pharma", "Aarong Crafts", "Helix Networks", "Northwind Goods",
  "Atlas Energy", "Lumen Co.", "Crest Finance", "Sentinel B2B",
];

function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];
  return (
    <section className="py-16 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="shrink-0 md:pr-10 md:border-r md:border-gold/20 animate-fade-in-left">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Trusted by</div>
            <div className="font-display text-3xl md:text-4xl text-gold gradient-text-clamp">50+ organisations</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">GST registered · India & global</div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] animate-fade-in-right">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {loop.map((b, idx) => (
                <span key={idx} className="text-sm md:text-base uppercase tracking-[0.15em] text-muted-foreground/80 hover:text-gold transition-colors duration-300 whitespace-nowrap px-2">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const services = [
  { n: "01", t: "AI Engineering", d: "LLM agents, RAG systems, and fine-tuned models that answer questions, draft work, and take actions inside your existing tools.", icon: "🧠" },
  { n: "02", t: "Automation", d: "n8n and custom pipelines that move data between the apps your team already uses, so nobody copy-pastes anything again.", icon: "⚡" },
  { n: "03", t: "Full-Stack Web", d: "Production React, Node, and edge-ready web apps — built to scale, easy to maintain, and handed over cleanly.", icon: "🌐" },
  { n: "04", t: "Shopify", d: "Custom Shopify 2.0 storefronts, theme development, and headless builds tuned for real conversion, not vanity metrics.", icon: "🛍️" },
  { n: "05", t: "WordPress & WooCommerce", d: "Fast, secure builds with a clean editing experience — websites your marketing team can actually run.", icon: "📝" },
  { n: "06", t: "Mobile Apps", d: "React Native apps for iOS and Android from a single codebase, so you ship to both stores in one project.", icon: "📱" },
];

function Services() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What we do</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Six disciplines. <span className="text-gold italic gradient-text-clamp">One team.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Instead of stitching together three agencies, you get strategy, engineering, and delivery from a single team that owns the outcome end-to-end.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gold/20">
          {services.map((s, idx) => (
            <div
              key={s.t}
              className="group card-hover relative border-r border-b border-gold/20 p-8 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-xs text-gold">{s.n}</span>
                <div className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-[-4px]">{s.icon}</div>
              </div>
              <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors duration-300">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- DIFFERENTIATORS ----------
const differentiators = [
  { t: "Ship in weeks, not quarters", d: "Most projects go live in 3–8 weeks. We scope tight, cut waste, and get you into production while other agencies are still writing SOWs." },
  { t: "Founder-led on every project", d: "You talk to the people writing the code and shipping the models. No account managers, no discovery deck theatre, no ticket-forwarding." },
  { t: "One team, six disciplines", d: "AI, automation, full-stack, Shopify, WordPress, mobile — under one roof. You stop paying three agencies to argue in your Slack." },
  { t: "Systems you can actually own", d: "Clean code, real docs, boring stack choices where they matter. When we hand off, your team can extend the work without calling us back." },
];

function Differentiators() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Why Oryntal</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            The difference is <span className="text-gold italic gradient-text-clamp">how we ship.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {differentiators.map((d, idx) => (
            <div key={d.t} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="absolute -left-8 top-4 font-mono text-6xl text-gold/10 font-display">{String(idx + 1).padStart(2, '0')}</div>
              <div className="font-mono text-xs text-gold mb-4 relative z-10">0{idx + 1}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 relative z-10">{d.t}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SELECTED WORKS ----------
const works = [
  {
    t: "Meet2Pro",
    c: "AI · LLM Product",
    image: assetUrl(meet2pro),
    pain: "Consultants and agency owners lose hours every week converting meeting notes into proposals and follow-ups — and critical commitments slip through the cracks.",
    fix: "A meeting intelligence agent that transcribes calls, extracts decisions, and drafts proposals and follow-up emails ready to send.",
    tag: "AI",
    href: "/projects",
  },
  {
    t: "QR2Review",
    c: "AI · Local Growth",
    image: assetUrl(qr2review),
    pain: "Local businesses struggle to collect real Google reviews — customers forget, the form is friction-heavy, and search visibility quietly erodes.",
    fix: "One QR scan, one star rating, one AI-written review posted straight to the Google Business Profile.",
    tag: "AI",
    href: "/projects",
  },
  {
    t: "WhatsApp RAG Agent",
    c: "Automation · Conversational AI",
    image: assetUrl(whatsappRag),
    pain: "Support teams answer the same WhatsApp questions hundreds of times a day while real product issues stall in the queue.",
    fix: "A retrieval-augmented WhatsApp agent grounded in your docs, SOPs, and CRM — replies instantly and escalates only what actually needs a human.",
    tag: "Automation",
    href: "/projects",
  },
  {
    t: "eShop Web",
    c: "Full Stack · E-Commerce",
    image: assetUrl(eshopwebStore),
    pain: "A multi-category retailer was losing buyers to a slow, fragmented storefront with weak merchandising and a clunky checkout.",
    fix: "A conversion-led e-commerce build with clear category structure, promotional surfaces, and a fast, mobile-first checkout.",
    tag: "Full Stack",
    href: "https://eshopweb.store/",
  },
  {
    t: "The Kaftan Company",
    c: "Shopify · Fashion DTC",
    image: assetUrl(theKaftanCompany),
    pain: "A premium fashion label needed a storefront worthy of its product — the previous theme flattened the brand and buried seasonal drops.",
    fix: "A custom Shopify 2.0 build organised around collection storytelling and a checkout tuned for a premium fashion buyer.",
    tag: "Shopify",
    href: "https://www.thekaftancompany.com/",
  },
  {
    t: "Clou",
    c: "WordPress · WooCommerce",
    image: assetUrl(clouShot),
    pain: "A design-led product brand needed an e-commerce experience as refined as its catalogue — the previous site diluted the brand and hurt conversion.",
    fix: "A WordPress + WooCommerce build with cinematic product presentation, clean catalogue depth, and a checkout designed for considered purchases.",
    tag: "WordPress",
    href: "https://clou.nl/",
  },
];

function SelectedWorks() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setVisibleCards((prev) => new Set([...prev, idx]));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 animate-fade-in-up">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected work</div>
            <h2 className="font-display text-4xl md:text-6xl">
              A few we're <span className="text-gold italic gradient-text-clamp">proud of.</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost self-end">
            See all work
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {works.map((w, idx) => {
            const isExternal = w.href.startsWith("http");
            const Inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-card border border-gold/20 image-reveal" data-idx={idx} ref={(el) => observerRef.current?.observe(el)}>
                  <img
                    src={w.image}
                    alt={w.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-gold bg-background/80 backdrop-blur px-2.5 py-1 border border-gold/40">
                    {w.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{w.c}</div>
                  <h3 className="font-display text-2xl mb-4 group-hover:text-gold transition-colors duration-300">{w.t}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">The problem</div>
                      <p className="text-sm text-foreground/85 leading-relaxed">{w.pain}</p>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">What we built</div>
                      <p className="text-sm text-foreground/85 leading-relaxed">{w.fix}</p>
                    </div>
                  </div>
                </div>
              </>
            );
            const cls = "group block card-hover bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20";
            return isExternal ? (
              <a key={w.t} href={w.href} target="_blank" rel="noopener noreferrer" className={cls}>{Inner}</a>
            ) : (
              <Link key={w.t} to={w.href} className={cls}>{Inner}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- PROCESS ----------
const processSteps = [
  { n: "01", t: "Discovery call", d: "A 30-minute conversation. We ask the specific questions that surface what's actually slow, broken, or expensive in your operation." },
  { n: "02", t: "Written scope & estimate", d: "You get a fixed scope, a fixed price, and a real timeline within 3 working days — no proposal decks, no sales games." },
  { n: "03", t: "Build in the open", d: "Weekly demos, a shared Notion, and access to staging from day one. You see the work take shape, not just the invoice." },
  { n: "04", t: "Ship & hand over", d: "We deploy to production, hand over clean code and documentation, and stay on call for two weeks while your team gets comfortable." },
];

function Process() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">How we work</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Four steps from <span className="text-gold italic gradient-text-clamp">hello</span> to <span className="text-gold italic gradient-text-clamp">shipped.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gold/20">
          {processSteps.map((s, idx) => (
            <div
              key={s.n}
              className="relative border-r border-b border-gold/20 p-8 bg-card/30 backdrop-blur-sm group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="font-mono text-4xl text-gold/30 mb-6 group-hover:text-gold transition-colors duration-300">{s.n}</div>
              <h3 className="font-display text-xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const faqs = [
  { q: "How fast can you actually ship?", a: "Most projects go live in 3–8 weeks. Complex AI or full-stack builds run 8–14 weeks. We give you a real timeline before you sign anything." },
  { q: "What does a project cost?", a: "Fixed-scope projects start around $6k. Retainers from $3k/month. Every quote is written down, itemised, and fixed — no surprise invoices." },
  { q: "We already have engineers. Why bring you in?", a: "Most engagements augment an in-house team with senior AI, automation, or e-commerce specialists for a fixed window. Extra capacity, no headcount." },
  { q: "Do you sign NDAs?", a: "Yes, before any commercial conversation. We can also work under your MSA." },
  { q: "Where are you based?", a: "India, remote-first, GST registered. We work with clients across Asia, Europe, and North America." },
  { q: "What happens after launch?", a: "Two weeks of included support while your team settles in, then an optional retainer for maintenance, monitoring, and new features." },
];

function FAQGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-16 animate-fade-in-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</div>
          <h2 className="font-display text-4xl md:text-6xl">
            Answered <span className="text-gold italic gradient-text-clamp">before</span> you ask.
          </h2>
        </div>
        <div className="divide-y divide-gold/20 border-y border-gold/20">
          {faqs.map((f, i) => (
            <div key={f.q} className="group animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="grid md:grid-cols-[80px_1fr] gap-6 py-8 w-full text-left"
                aria-expanded={openIndex === i}
              >
                <div className="font-mono text-xs text-gold pt-1">Q.{String(i + 1).padStart(2, "0")}</div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl mb-3 pr-8">{f.q}</h3>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === i ? "animate-accordion-down" : "animate-accordion-up"}`}
                style={{ maxHeight: openIndex === i ? "500px" : "0" }}
              >
                <div className="pb-8 md:col-start-2">
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CTA() {
  return (
    <section className="py-32 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl mx-auto">
            Have a project? <span className="text-gold italic gradient-text-clamp">Let's talk.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground mx-auto">
            Tell us what you're trying to build or fix. We reply within one working day with a real opinion — never a sales deck.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Project Estimate
            </Link>
            <Link to="/projects" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
