import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oryntal AI Labs — We Architect Intelligent Systems" },
      { name: "description", content: "AI, automation, and full-stack engineering. Oryntal ships products that compound value for ambitious teams." },
      { property: "og:title", content: "Oryntal AI Labs" },
      { property: "og:description", content: "We architect intelligent systems that ship." },
    ],
  }),
  component: HomePage,
});

const phrases = ["Intelligent Systems.", "Automated Workflows.", "Full-Stack Craft.", "Shipped Products."];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <InfrastructureGrid />
      <Blueprint />
      <SelectedWorks />
      <Method />
      <FAQGrid />
      <CTA />
    </>
  );
}

const trustedBrands = [
  "Rahman Textiles",
  "Indigo Mart",
  "Bengal Foods",
  "Padma Logistics",
  "Nexus Pharma",
  "Aarong Crafts",
  "Helix Networks",
  "Northwind Goods",
  "Atlas Energy",
  "Lumen Co.",
  "Crest Finance",
  "Sentinel B2B",
];

function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];
  return (
    <section className="py-10 border-t border-gold/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-6 rounded-full border border-gold/40 bg-card/40 px-6 py-4 overflow-hidden">
          <div className="shrink-0 pr-6 border-r border-gold/30">
            <div className="font-display leading-tight">
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Trusted by</span>
              <br />
              <span className="text-3xl md:text-4xl font-bold text-gold drop-shadow-sm">50+</span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold ml-2">Organisations</span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {loop.map((b, i) => (
                <span key={i} className="font-display text-base md:text-lg text-foreground/70 hover:text-gold transition-colors">
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

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold-gradient opacity-[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-32 md:pt-40 md:pb-40">
        <div className="flex justify-center mb-10 animate-float-up">
          <img src={logoMark.url} alt="Oryntal" className="h-32 w-32 rounded-full ring-[3px] ring-gold glow-gold shadow-[0_0_40px_rgba(217,185,120,0.35)]" />
        </div>
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 mb-8 animate-float-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Oryntal Portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] animate-float-up">
            We architect <br />
            <span className="text-gold inline-block min-h-[1.2em] transition-all duration-500" key={i}>
              {phrases[i]}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-float-up">
            A boutique studio engineering AI products, automations, and digital infrastructure for founders who refuse to ship average.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-float-up">
            <Link to="/contact" className="rounded-full bg-gold-gradient px-8 py-3.5 text-sm uppercase tracking-widest text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
              Commission Work
            </Link>
            <Link to="/projects" className="rounded-full border border-gold px-8 py-3.5 text-sm uppercase tracking-widest text-gold hover:bg-secondary transition-colors">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20 border border-gold rounded-2xl overflow-hidden">
          {[
            ["120+", "Systems Shipped"],
            ["38", "Global Clients"],
            ["6", "Practice Areas"],
            ["100%", "Founder-led"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background p-6 text-center">
              <div className="font-display text-3xl text-gold">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { t: "AI Engineering", d: "LLM agents, RAG systems, fine-tuned models that solve real workflows.", n: "01" },
  { t: "Automation", d: "n8n, Zapier, custom pipelines — your business running while you sleep.", n: "02" },
  { t: "Full Stack", d: "Production React, Node, edge-native apps built for scale.", n: "03" },
  { t: "Shopify", d: "Headless storefronts, custom apps, and conversion-tuned themes.", n: "04" },
  { t: "WordPress", d: "Performant, secure builds with bespoke admin experiences.", n: "05" },
  { t: "Mobile Apps", d: "iOS & Android with React Native — ship once, ship everywhere.", n: "06" },
];

function InfrastructureGrid() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 02 — The Infrastructure Grid</div>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Six disciplines. <span className="text-gold italic">One studio.</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every Oryntal engagement composes from this stack. We build the entire surface so nothing is lost in handoff.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div key={s.t} className="group bg-background p-8 hover:bg-secondary transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-gold">{s.n}</span>
                <span className="h-px w-12 bg-gold/40 mt-2 group-hover:w-20 transition-all" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blueprint() {
  return (
    <section className="py-32 border-t border-gold relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 03 — The Architectural Blueprint</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Software is <span className="text-gold italic">architecture.</span> We draw the plans before we pour the foundation.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Most agencies start with code. We start with constraints, dependencies, and second-order effects. By the time we ship, you understand every line — because you helped specify it.
          </p>
          <div className="mt-10 space-y-4">
            {[
              ["Discovery", "Maps the problem space, stakeholders, and success criteria."],
              ["Architecture", "Documents systems, data flows, and integration contracts."],
              ["Build & Ship", "Weekly demos, continuous deploy, zero surprise launches."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-5">
                <div className="font-display text-lg text-gold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 rounded-3xl border border-gold p-6 bg-card/50 backdrop-blur">
            <div className="h-full w-full rounded-2xl border border-gold/30 relative overflow-hidden">
              <div className="absolute inset-0 grid-noise opacity-60" />

              {/* scanline */}
              <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-scanline" />

              {/* orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[88%] w-[88%] rounded-full border border-gold/15 animate-spin-slow">
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-gold" />
                </div>
                <div className="absolute h-[70%] w-[70%] rounded-full border border-gold/25 animate-spin-reverse">
                  <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold-soft" />
                </div>
                <div className="absolute h-[54%] w-[54%] rounded-full border border-dashed border-gold/30 animate-spin-slow" style={{ animationDuration: '12s' }} />

                {/* Logo core */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-2xl animate-ai-pulse" />
                    <img
                      src={aiLabsLogo.url}
                      alt="Oryntal AI Labs"
                      className="relative h-36 w-36 md:h-44 md:w-44 rounded-full object-cover ring-2 ring-gold animate-ai-pulse"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-display text-base md:text-lg text-gold tracking-[0.25em] uppercase">Oryntal AI Labs</div>
                    <div className="mt-1 font-mono text-[10px] text-muted-foreground tracking-widest">R&D · NEURAL SYSTEMS</div>
                  </div>
                </div>
              </div>

              {/* data ticker */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-gold/80 tracking-widest">
                <span className="animate-flicker">◉ MODEL.SYNC</span>
                <span className="animate-flicker" style={{ animationDelay: '0.4s' }}>LLM · ACTIVE</span>
                <span className="animate-flicker" style={{ animationDelay: '0.8s' }}>v.2026</span>
              </div>

              <div className="absolute top-4 left-4 font-mono text-[10px] text-gold tracking-wider">SYS.01 / CORE</div>
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-gold animate-pulse" />
            </div>
          </div>

          {/* CTA below the panel */}
          <Link
            to="/contact"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold bg-background/90 backdrop-blur px-6 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold hover:bg-gold-gradient hover:text-primary-foreground transition-all shadow-gold"
          >
            For More AI Business LLM Models →
          </Link>
        </div>
      </div>
    </section>
  );
}

const works = [
  {
    t: "Helix AI Concierge",
    c: "AI · SaaS",
    pain: "Support team drowning in 12k weekly tickets, 36-hour reply times.",
    fix: "Built a multi-tenant LLM agent with RAG over their docs — now answers 78% of tickets in under 4 seconds.",
    tag: "AI",
  },
  {
    t: "Northwind Commerce",
    c: "Shopify · Plus",
    pain: "Legacy theme killed mobile conversion; checkout abandoned at 71%.",
    fix: "Headless Shopify replatform with one-page checkout — conversion lifted 47% in 90 days.",
    tag: "Shopify",
  },
  {
    t: "Pulse Ops Engine",
    c: "Automation",
    pain: "Ops team paying for 4 SaaS tools and still copy-pasting between them.",
    fix: "Consolidated into one n8n pipeline. $180k/yr saved, zero manual data entry.",
    tag: "Automation",
  },
  {
    t: "Atlas Field App",
    c: "Mobile · iOS / Android",
    pain: "1,200 field engineers losing inspection data when signal dropped.",
    fix: "Offline-first React Native app with conflict-free sync — 4.8★ store rating in 6 months.",
    tag: "App",
  },
  {
    t: "Rahman Textiles Portal",
    c: "Full Stack · ERP",
    pain: "Order tracking lived in WhatsApp and Excel; nothing reconciled at month-end.",
    fix: "Custom portal with live production tracking and GST-ready invoicing — closing books in 2 days, not 2 weeks.",
    tag: "Full Stack",
  },
  {
    t: "Bengal Foods Storefront",
    c: "WordPress · WooCommerce",
    pain: "Site loading in 8+ seconds; Google ads burning budget on bouncing traffic.",
    fix: "Rebuilt on a performance-tuned WordPress stack — 1.4s LCP, ROAS up 2.3x.",
    tag: "WordPress",
  },
];

function SelectedWorks() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 04 — Selected Works</div>
            <h2 className="font-display text-4xl md:text-5xl">A few we're <span className="text-gold italic">proud of.</span></h2>
          </div>
          <Link to="/projects" className="text-sm uppercase tracking-widest text-gold border-b border-gold pb-1">All Projects →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <div key={w.t} className="group relative overflow-hidden rounded-2xl border border-gold bg-card p-7 hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gold-gradient opacity-5 blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground">CASE {String(i + 1).padStart(2, "0")}</span>
                <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">{w.tag}</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{w.c}</div>
              <h3 className="font-display text-2xl mb-4">{w.t}</h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-destructive/80 mb-1">Pain Point</div>
                  <p className="text-sm font-semibold text-foreground leading-relaxed">{w.pain}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-1">What We Built</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{w.fix}</p>
                </div>
              </div>
              <div className="mt-6 h-px bg-gold/30 group-hover:bg-gold transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const methodSteps = [
  {
    n: "01",
    t: "Listen for the friction",
    d: "Every business hides its pain points inside tiny phrases — 'we usually copy-paste this', 'the team waits until Friday', 'the spreadsheet always breaks'. We sit with founders and operators, watch real workflows, and write down every place time, money, or attention leaks.",
  },
  {
    n: "02",
    t: "Measure the cost",
    d: "A pain point only matters if it costs something — hours, revenue, retention, or sanity. We attach a number to every issue we find, then rank them by ROI. We don't build what's interesting; we build what moves the metric.",
  },
  {
    n: "03",
    t: "Architect the system",
    d: "This is where Oryntal AI Labs comes in. Our R&D arm prototypes the AI agents, automations, and integrations that will absorb the work. We sketch the system on paper before a single line of code — so you see the solution before you fund it.",
  },
  {
    n: "04",
    t: "Ship, measure, compound",
    d: "We deploy in weeks, not quarters. Every system ships with telemetry baked in, so the impact is visible from day one. Then we compound — each automation becomes the foundation for the next.",
  },
];

function Method() {
  return (
    <section className="py-32 border-t border-gold relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 05 — How We Work</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              We don't sell software. <br />
              We find the <span className="text-gold italic">pain</span>, then build the <span className="text-gold italic">cure.</span>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-gold font-medium">Oryntal</span> is the studio — strategy, engineering, and delivery for clients who need a system shipped.
            </p>
            <p>
              <span className="text-gold font-medium">Oryntal AI Labs</span> is our research arm — where we prototype the AI agents and automation patterns that later power those systems in production.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold rounded-2xl overflow-hidden">
          {methodSteps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-3xl text-gold">{s.n}</span>
                <h3 className="font-display text-2xl">{s.t}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "We already have a team. Why bring you in?", a: "We integrate. Most engagements augment in-house teams with senior AI/automation specialists for a fixed window." },
  { q: "Are you fast or are you careful?", a: "Both. Our process is built so speed and rigour aren't trade-offs — they're side effects of clear architecture." },
  { q: "What does an engagement cost?", a: "Fixed-scope projects start around $12k. Retainers from $5k/mo. Every quote is itemized — no agency math." },
  { q: "Do you sign NDAs?", a: "Yes, before any commercial discussion. We also offer reverse-NDAs to protect your IP from our shared learnings." },
  { q: "Where are you based?", a: "Distributed across three continents. Founder-led from a single time zone you'll always reach." },
  { q: "What happens after launch?", a: "Two weeks of included hypercare, then optional retainer for evolution, monitoring, and on-call response." },
];

function FAQGrid() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 06 — Strategic Objections</div>
          <h2 className="font-display text-4xl md:text-5xl">Answered <span className="text-gold italic">before</span> you ask.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold rounded-2xl overflow-hidden">
          {faqs.map((f, i) => (
            <div key={f.q} className="bg-background p-8">
              <div className="font-mono text-xs text-gold mb-3">Q.{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-xl mb-3">{f.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl leading-tight">
          Have a system worth <span className="text-gold italic">architecting?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell us where you're stuck. We'll respond within one working day with a real opinion — not a sales deck.
        </p>
        <Link to="/contact" className="mt-10 inline-block rounded-full bg-gold-gradient px-10 py-4 text-sm uppercase tracking-widest text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}
