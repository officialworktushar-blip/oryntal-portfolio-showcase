import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoMark from "@/assets/oryntal-mark.asset.json";
import aiLabsLogo from "@/assets/oryntal-ai-labs-logo.asset.json";
import meet2pro from "@/assets/meet2pro.png.asset.json";
import qr2review from "@/assets/qr2review.png.asset.json";
import whatsappRag from "@/assets/whatsapp-rag.jpg.asset.json";
import eshopwebStore from "@/assets/site-shots/eshopweb-store.asset.json";
import theKaftanCompany from "@/assets/site-shots/the-kaftan-company.asset.json";
import clouShot from "@/assets/site-shots/clou.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oryntal AI Labs — Collapse Complexity into a Singularity" },
      { name: "description", content: "A gravitational studio for AI, automation, and full-stack systems. We pull scattered workflows into a single, inevitable point of truth." },
      { property: "og:title", content: "Oryntal AI Labs — Collapse Complexity" },
      { property: "og:description", content: "Raw operations are mere matter. We compress chaos into a single point of truth." },
    ],
  }),
  component: HomePage,
});

const phrases = ["Intelligent Systems.", "Autonomous Workflows.", "Full-Stack Gravity.", "Inevitable Outcomes."];

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
    <section className="py-14 md:py-20 border-t border-gold/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-6 md:gap-8 rounded-full border-2 border-gold bg-card/60 px-8 md:px-10 py-6 md:py-8 overflow-hidden shadow-gold">
          <div className="shrink-0 pr-6 md:pr-8 border-r-2 border-gold/40">
            <div className="leading-tight">
              <span className="block text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-bold">In Orbit</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-gold drop-shadow-sm leading-none mt-1">50+</span>
              <span className="block text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">Bodies of Work</span>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-5 md:gap-6 animate-marquee whitespace-nowrap">
              {loop.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-gold/50 bg-gradient-to-b from-gold/15 to-gold/5 px-5 py-2.5 font-display text-lg md:text-xl font-semibold text-gold tracking-wide shadow-[0_0_18px_-6px_rgba(217,185,120,0.45)] hover:from-gold/30 hover:to-gold/10 hover:text-foreground hover:border-gold transition-all"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
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
      {/* Gravitational lensing field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(217,176,101,0.14)_0%,rgba(217,176,101,0.04)_35%,transparent_70%)] blur-2xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full border border-gold/15" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-gold/25 shadow-[0_0_120px_rgba(217,176,101,0.08)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px] rounded-full border border-dashed border-gold/20 animate-spin-slow" />
        {/* The singularity — a dark core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[140px] w-[140px] rounded-full bg-background shadow-[inset_0_0_80px_rgba(0,0,0,0.9),0_0_60px_rgba(217,176,101,0.25)]" />
      </div>
      <div className="absolute inset-0 grid-noise opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-32 md:pt-40 md:pb-40">
        <div className="flex justify-center mb-10 animate-float-up">
          <img src={assetUrl(logoMark)} alt="Oryntal" className="h-24 w-24 rounded-full ring-[3px] ring-gold glow-gold shadow-[0_0_40px_rgba(217,185,120,0.35)]" />
        </div>
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 mb-8 animate-float-up backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Aurelius Intelligence · Est. 2026</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] animate-float-up">
            Collapse <span className="italic text-gold">complexity</span> <br />
            into a <span className="not-italic font-semibold bg-gradient-to-b from-foreground via-gold to-muted-foreground bg-clip-text text-transparent">singularity</span>.
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3 animate-float-up">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground italic">The gravity behind</span>
            <span className="font-display italic text-gold text-lg min-w-[220px] text-left transition-all duration-500" key={i}>
              {phrases[i]}
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-float-up">
            Your operations are scattered matter — dashboards, docs, decisions drifting apart. We compress that chaos into a single, inevitable point of truth. AI that pulls. Automation that holds. Systems that no competitor can escape.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-float-up">
            <Link to="/contact" className="group relative rounded-full bg-gold-gradient px-8 py-3.5 text-sm uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
              Cross the Event Horizon →
            </Link>
            <Link to="/projects" className="rounded-full border border-gold/60 px-8 py-3.5 text-sm uppercase tracking-[0.25em] text-gold hover:bg-secondary hover:border-gold transition-colors">
              Enter the Archive
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 opacity-70">
            <div className="h-px w-6 bg-gold/40" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground italic">The singularity awaits</span>
            <div className="h-px w-6 bg-gold/40" />
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20 border border-gold rounded-2xl overflow-hidden">
          {[
            ["120+", "Systems Compressed"],
            ["2025", "Agency Established"],
            ["6", "Fields of Gravity"],
            ["100%", "Founder-led Core"],
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
  { t: "AI Engineering", d: "LLM agents, RAG cores, and fine-tuned models — the gravitational mass that pulls decisions toward the right answer.", n: "01" },
  { t: "Automation", d: "n8n, custom pipelines, and event-driven flows that run silently in orbit — while you sleep, sell, and scale.", n: "02" },
  { t: "Full Stack", d: "Production React, Node, and edge-native systems engineered to hold under real gravitational load.", n: "03" },
  { t: "Shopify", d: "Headless storefronts and bespoke apps — commerce compressed into a single, frictionless conversion path.", n: "04" },
  { t: "WordPress", d: "Performant, secure builds with editorial control — a stable disc around your content, not a house of cards.", n: "05" },
  { t: "Mobile Apps", d: "iOS and Android on React Native — one codebase, two gravitational fields, zero drift.", n: "06" },
];

function InfrastructureGrid() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 02 — The Accretion Disc</div>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Six disciplines. <span className="text-gold italic">One gravitational core.</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every Oryntal engagement pulls from this disc. We hold the entire orbit so nothing drifts loose between strategy, engineering, and launch.
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
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 03 — The Gravitational Blueprint</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Software is <span className="text-gold italic">gravity.</span> We map the field before a single body enters orbit.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Most agencies begin at code. We begin at the field — the constraints, the dependencies, the second-order forces. By the time we ship, you can feel every line of pull, because you helped chart it.
          </p>
          <div className="mt-10 space-y-4">
            {[
              ["Observe", "We map the drift — where matter escapes, where the field is weak, where entropy is winning."],
              ["Compress", "We architect the singularity — one core, one contract, one flow that pulls the rest into alignment."],
              ["Release light", "We ship in weeks with telemetry baked in. The system runs. The signal shows. The compounding begins."],
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
                      src={assetUrl(aiLabsLogo)}
                      alt="Oryntal AI Labs"
                      className="relative h-36 w-36 md:h-44 md:w-44 rounded-full object-cover ring-2 ring-gold animate-ai-pulse"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-display text-base md:text-lg text-gold tracking-[0.25em] uppercase">Oryntal AI Labs</div>
                    <div className="mt-1 font-mono text-[10px] text-muted-foreground tracking-widest">R&D · THE SINGULARITY CORE</div>
                  </div>
                </div>
              </div>

              {/* data ticker */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-gold/80 tracking-widest">
                <span className="animate-flicker">◉ CORE.STABLE</span>
                <span className="animate-flicker" style={{ animationDelay: '0.4s' }}>ORBIT · LOCKED</span>
                <span className="animate-flicker" style={{ animationDelay: '0.8s' }}>v.2026</span>
              </div>

              <div className="absolute top-4 left-4 font-mono text-[10px] text-gold tracking-wider">SGR.01 / SINGULARITY</div>
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-gold animate-pulse" />
            </div>
          </div>

          {/* CTA below the panel */}
          <Link
            to="/contact"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold bg-background/90 backdrop-blur px-6 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold hover:bg-gold-gradient hover:text-primary-foreground transition-all shadow-gold"
          >
            Enter the Core — Explore the AI Models →
          </Link>
        </div>
      </div>
    </section>
  );
}

const works = [
  {
    t: "Meet2Pro",
    c: "AI · LLM Product",
    image: assetUrl(meet2pro),
    pain: "Consultants and agency owners lose hours every week converting raw meeting notes into proposals and follow-ups — and critical commitments slip through the cracks.",
    fix: "An end-to-end meeting intelligence agent that transcribes calls, distils decisions, and auto-drafts proposals and follow-up emails ready to send.",
    tag: "AI",
    href: "/projects",
  },
  {
    t: "QR2Review",
    c: "AI · Local Growth",
    image: assetUrl(qr2review),
    pain: "Local businesses struggle to collect authentic Google reviews — customers forget, friction is high, and search visibility quietly erodes month after month.",
    fix: "A single QR scan generates a natural, AI-written review tuned to the customer's rating and posts it straight to the Google Business Profile.",
    tag: "AI",
    href: "/projects",
  },
  {
    t: "WhatsApp RAG Agent",
    c: "Automation · Conversational AI",
    image: assetUrl(whatsappRag),
    pain: "Support teams answer the same WhatsApp questions hundreds of times a day, while genuine product issues stall in an overloaded queue.",
    fix: "A retrieval-augmented WhatsApp agent grounded in your docs, SOPs, and CRM — resolves repetitive queries instantly and escalates only what truly needs a human.",
    tag: "Automation",
    href: "/projects",
  },
  {
    t: "eShop Web",
    c: "Full Stack · E-Commerce",
    image: assetUrl(eshopwebStore),
    pain: "A multi-category retailer was losing buyers to a slow, fragmented storefront with weak merchandising and a clunky checkout path.",
    fix: "A performance-tuned, conversion-led e-commerce build with promotional surfaces, category clarity, and a frictionless purchase journey.",
    tag: "Full Stack",
    href: "https://eshopweb.store/",
  },
  {
    t: "The Kaftan Company",
    c: "Shopify · Fashion DTC",
    image: assetUrl(theKaftanCompany),
    pain: "A premium fashion label needed a storefront worthy of its product — the existing theme flattened the brand and buried seasonal drops.",
    fix: "A bespoke Shopify 2.0 build engineered around collection storytelling, editorial visuals, and a checkout tuned for premium-segment conversion.",
    tag: "Shopify",
    href: "https://www.thekaftancompany.com/",
  },
  {
    t: "Clou",
    c: "WordPress · WooCommerce",
    image: assetUrl(clouShot),
    pain: "A design-led product brand needed an e-commerce experience as refined as its catalogue — the prior site diluted the brand and underperformed on conversion.",
    fix: "A WordPress + WooCommerce build with cinematic product presentation, structured catalogue depth, and a checkout architected for considered purchases.",
    tag: "WordPress",
    href: "https://clou.nl/",
  },
];

function SelectedWorks() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 04 — Matter in Orbit</div>
            <h2 className="font-display text-4xl md:text-5xl">Systems the field <span className="text-gold italic">refuses to release.</span></h2>
          </div>
          <Link to="/projects" className="text-sm uppercase tracking-widest text-gold border-b border-gold pb-1">Enter the Archive →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => {
            const isExternal = w.href.startsWith("http");
            const CardInner = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/40 bg-background">
                  <img
                    src={w.image}
                    alt={w.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-gold border border-gold bg-background/80 backdrop-blur rounded-full px-2.5 py-0.5">
                    {w.tag}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-muted-foreground">BODY {String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold/80">{w.c}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-4">{w.t}</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-destructive/80 mb-1">The Entropy</div>
                      <p className="text-sm font-semibold text-foreground leading-relaxed">{w.pain}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-1">The Collapse</div>
                      <p className="text-sm text-foreground/90 leading-relaxed">{w.fix}</p>
                    </div>
                  </div>
                  <div className="mt-6 h-px bg-gold/30 group-hover:bg-gold transition-colors" />
                </div>
              </>
            );
            const cls =
              "group relative block overflow-hidden rounded-2xl border border-gold bg-card hover:-translate-y-1 transition-transform";
            return isExternal ? (
              <a key={w.t} href={w.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {CardInner}
              </a>
            ) : (
              <Link key={w.t} to={w.href} className={cls}>
                {CardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const methodSteps = [
  {
    n: "01",
    t: "Detect the drift",
    d: "Every business leaks matter through small phrases — 'we usually copy-paste this', 'the team waits until Friday', 'the spreadsheet always breaks'. We sit with founders and operators, watch real workflows, and chart every place time, money, or attention is escaping the field.",
  },
  {
    n: "02",
    t: "Weigh the mass",
    d: "A leak only matters if it has mass — hours, revenue, retention, or sanity. We attach a number to every escape point, then rank by gravitational return. We don't build what's interesting; we build what bends the metric.",
  },
  {
    n: "03",
    t: "Design the core",
    d: "This is where Oryntal AI Labs enters. Our R&D arm prototypes the agents, automations, and integrations that will absorb the work. We diagram the field on paper before a single line of code — so you see the singularity form before you fund it.",
  },
  {
    n: "04",
    t: "Release light",
    d: "We deploy in weeks, not quarters. Every system ships with telemetry baked in, so the pull is visible from day one. Then the compounding begins — each system becomes gravitational mass for the next.",
  },
];

function Method() {
  return (
    <section className="py-32 border-t border-gold relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 05 — The Method of Gravity</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              We don't sell software. <br />
              We find the <span className="text-gold italic">leak</span>, then build the <span className="text-gold italic">core.</span>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-gold font-medium">Oryntal</span> is the studio — the gravitational discipline of strategy, engineering, and delivery for teams who need a system that actually holds.
            </p>
            <p>
              <span className="text-gold font-medium">Oryntal AI Labs</span> is our research core — where we prototype the agents and automation patterns that later become the mass inside every production system we ship.
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
  { q: "We already have a team. Why bring you in?", a: "We enter orbit around it. Most engagements augment in-house teams with senior AI and automation specialists for a fixed window — added mass, not replaced mass." },
  { q: "Are you fast, or are you careful?", a: "Both. Our method is built so speed and rigour aren't trade-offs — they're the natural side-effects of a well-mapped field." },
  { q: "What does an engagement cost?", a: "Fixed-scope projects start around $12k. Retainers from $5k/mo. Every quote is itemised down to the hour — no agency gravity wells." },
  { q: "Do you sign NDAs?", a: "Yes, before any commercial discussion. We also offer reverse-NDAs so your IP never drifts back through our shared learnings." },
  { q: "Where are you based?", a: "Distributed across three continents. Founder-led from a single time zone you will always reach." },
  { q: "What happens after launch?", a: "Two weeks of included hypercare while the system stabilises, then an optional retainer for evolution, monitoring, and on-call response." },
];

function FAQGrid() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">§ 06 — Before You Enter Orbit</div>
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
    <section className="relative py-32 border-t border-gold overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,176,101,0.14),transparent_70%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full border border-gold/20" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl leading-tight">
          Have a system worth <span className="text-gold italic">collapsing?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell us where the matter is drifting. Within one working day, you get a real opinion from a founder — never a sales deck, never a bot.
        </p>
        <Link to="/contact" className="mt-10 inline-block rounded-full bg-gold-gradient px-10 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform">
          Cross the Event Horizon
        </Link>
        <div className="mt-4 flex items-center justify-center gap-2 opacity-70">
          <div className="h-px w-6 bg-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground italic">The singularity awaits</span>
          <div className="h-px w-6 bg-gold/40" />
        </div>
      </div>
    </section>
  );
}
