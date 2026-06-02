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

const clientsLocal = [
  "Rahman Textiles Ltd.",
  "Dhaka Mart BD",
  "Bengal Foods",
  "Padma Logistics",
  "Nexus Pharma BD",
  "Aarong Crafts Co.",
];
const clientsForeign = [
  "Helix Networks — USA",
  "Northwind Goods — UK",
  "Atlas Energy — Canada",
  "Lumen Co. — Germany",
  "Crest Finance — Singapore",
  "Sentinel B2B — Australia",
];

function TrustedBy() {
  return (
    <section className="py-20 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">§ 01.5 — Trusted Partners</div>
            <h2 className="font-display text-3xl md:text-4xl">
              GST registered. <span className="text-gold italic">Globally engaged.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground border border-gold rounded-full px-4 py-1.5">
            GSTIN · Verified Entity
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold rounded-2xl overflow-hidden">
          <div className="bg-background p-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">Local — Bangladesh & India</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {clientsLocal.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">International</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {clientsForeign.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
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
        <div className="flex justify-center mb-8 animate-float-up">
          <img src={logoMark.url} alt="Oryntal" className="h-20 w-20 rounded-full ring-2 ring-gold glow-gold" />
        </div>
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 mb-8 animate-float-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Oryntal AI Labs</span>
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
          <div className="absolute inset-0 rounded-3xl border border-gold p-8 bg-card/50 backdrop-blur">
            <div className="h-full w-full rounded-2xl border border-gold/30 relative overflow-hidden">
              <div className="absolute inset-0 grid-noise opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-48 w-48 rounded-full border border-gold flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-gold-gradient/20 border border-gold flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-gold-gradient glow-gold" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 h-3 w-3 bg-gold rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -right-4 h-3 w-3 bg-gold rounded-full animate-pulse" />
                </div>
              </div>
              <div className="absolute top-4 left-4 font-mono text-[10px] text-gold tracking-wider">SYS.01 / CORE</div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-gold tracking-wider">v.2026</div>
            </div>
          </div>
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
        <div className="grid md:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <div key={w.t} className="group relative overflow-hidden rounded-2xl border border-gold bg-card p-8 hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gold-gradient opacity-5 blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">CASE {String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs uppercase tracking-widest text-gold border border-gold rounded-full px-3 py-1">{w.tag}</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{w.c}</div>
              <h3 className="font-display text-3xl mb-3">{w.t}</h3>
              <p className="text-muted-foreground">{w.d}</p>
              <div className="mt-8 h-px bg-gold/30 group-hover:bg-gold transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const milestones = [
  ["Week 0", "Kickoff", "Goals locked. Slack opened. Architecture sketched in 48 hours."],
  ["Week 1–2", "Foundations", "Repo, CI, design system, integrations scaffolded and demoed."],
  ["Week 3–6", "Build", "Feature sprints. Friday demos. Real users in staging by week four."],
  ["Week 7", "Hardening", "Performance, security, observability — production-grade polish."],
  ["Week 8", "Launch", "Coordinated rollout. We stay on call for two weeks post-ship."],
];

function Milestones() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 05 — Delivery Milestones</div>
          <h2 className="font-display text-4xl md:text-5xl">A linear process. <span className="text-gold italic">Zero theatre.</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={m[1]} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 ? "md:order-2 md:text-left" : "md:text-right"}>
                  <div className="font-mono text-xs text-gold uppercase tracking-widest mb-2">{m[0]}</div>
                  <h3 className="font-display text-3xl mb-2">{m[1]}</h3>
                  <p className="text-muted-foreground max-w-md md:inline-block">{m[2]}</p>
                </div>
                <div className={`relative ${i % 2 ? "md:order-1" : ""}`}>
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-gold-gradient glow-gold" />
                </div>
              </div>
            ))}
          </div>
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
