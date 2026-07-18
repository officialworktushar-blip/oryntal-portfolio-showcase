import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % rotatingCapabilities.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-10 animate-float-up">
            <img src={assetUrl(logoMark)} alt="Oryntal" className="h-10 w-10 rounded-full" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Oryntal — Est. 2025</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight animate-float-up">
            We build AI, automation, and full-stack systems for teams who are done wasting time on manual work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-float-up">
            From LLM agents to Shopify storefronts — Oryntal ships production systems in weeks, not quarters.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground animate-float-up">
            <span>We ship</span>
            <span key={i} className="font-display italic text-gold text-lg min-w-[220px]">{rotatingCapabilities[i]}</span>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 animate-float-up">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-none bg-[color:var(--gold)] px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-[color:var(--gold-soft)] transition-colors"
            >
              Get a Free Project Estimate →
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-none border border-[color:var(--gold)] px-8 py-4 text-sm font-medium text-gold hover:bg-[color:var(--gold)] hover:text-primary-foreground transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-gold pt-12">
          {[
            ["120+", "Systems shipped"],
            ["2025", "Agency established"],
            ["6", "Disciplines under one roof"],
            ["100%", "Founder-led delivery"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-4xl md:text-5xl text-gold">{k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
            </div>
          ))}
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
    <section className="py-16 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="shrink-0 md:pr-10 md:border-r md:border-[color:var(--gold)]/30">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Trusted by</div>
            <div className="font-display text-3xl md:text-4xl text-gold">50+ organisations</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">GST registered · India & global</div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {loop.map((b, idx) => (
                <span key={idx} className="text-sm md:text-base uppercase tracking-[0.15em] text-muted-foreground/80 hover:text-gold transition-colors">
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
  { n: "01", t: "AI Engineering", d: "LLM agents, RAG systems, and fine-tuned models that answer questions, draft work, and take actions inside your existing tools." },
  { n: "02", t: "Automation", d: "n8n and custom pipelines that move data between the apps your team already uses, so nobody copy-pastes anything again." },
  { n: "03", t: "Full-Stack Web", d: "Production React, Node, and edge-ready web apps — built to scale, easy to maintain, and handed over cleanly." },
  { n: "04", t: "Shopify", d: "Custom Shopify 2.0 storefronts, theme development, and headless builds tuned for real conversion, not vanity metrics." },
  { n: "05", t: "WordPress & WooCommerce", d: "Fast, secure builds with a clean editing experience — websites your marketing team can actually run." },
  { n: "06", t: "Mobile Apps", d: "React Native apps for iOS and Android from a single codebase, so you ship to both stores in one project." },
];

function Services() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What we do</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Six disciplines. <span className="text-gold italic">One team.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Instead of stitching together three agencies, you get strategy, engineering, and delivery from a single team that owns the outcome end-to-end.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--gold)]/30">
          {services.map((s) => (
            <div key={s.t} className="group border-r border-b border-[color:var(--gold)]/30 p-8 hover:bg-[color:var(--card)] transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-xs text-gold">{s.n}</span>
                <span className="h-px w-8 bg-[color:var(--gold)]/40 group-hover:w-14 transition-all" />
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

// ---------- DIFFERENTIATORS ----------
const differentiators = [
  { t: "Ship in weeks, not quarters", d: "Most projects go live in 3–8 weeks. We scope tight, cut waste, and get you into production while other agencies are still writing SOWs." },
  { t: "Founder-led on every project", d: "You talk to the people writing the code and shipping the models. No account managers, no discovery deck theatre, no ticket-forwarding." },
  { t: "One team, six disciplines", d: "AI, automation, full-stack, Shopify, WordPress, mobile — under one roof. You stop paying three agencies to argue in your Slack." },
  { t: "Systems you can actually own", d: "Clean code, real docs, boring stack choices where they matter. When we hand off, your team can extend the work without calling us back." },
];

function Differentiators() {
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Why Oryntal</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            The difference is <span className="text-gold italic">how we ship.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {differentiators.map((d, idx) => (
            <div key={d.t}>
              <div className="font-mono text-xs text-gold mb-4">0{idx + 1}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{d.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.d}</p>
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
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected work</div>
            <h2 className="font-display text-4xl md:text-6xl">A few we're <span className="text-gold italic">proud of.</span></h2>
          </div>
          <Link to="/projects" className="text-sm uppercase tracking-[0.2em] text-gold border-b border-[color:var(--gold)] pb-1 hover:border-[color:var(--gold-soft)]">See all work →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {works.map((w) => {
            const isExternal = w.href.startsWith("http");
            const Inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--card)] border border-[color:var(--gold)]/30">
                  <img
                    src={w.image}
                    alt={w.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-gold bg-background/80 backdrop-blur px-2.5 py-1 border border-[color:var(--gold)]/40">
                    {w.tag}
                  </div>
                </div>
                <div className="pt-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{w.c}</div>
                  <h3 className="font-display text-2xl mb-4 group-hover:text-gold transition-colors">{w.t}</h3>
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
            const cls = "group block";
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
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">How we work</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Four steps from <span className="text-gold italic">hello</span> to <span className="text-gold italic">shipped.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--gold)]/30">
          {processSteps.map((s) => (
            <div key={s.n} className="border-r border-b border-[color:var(--gold)]/30 p-8">
              <div className="font-mono text-4xl text-gold mb-6">{s.n}</div>
              <h3 className="font-display text-xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
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
  return (
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</div>
          <h2 className="font-display text-4xl md:text-6xl">Answered <span className="text-gold italic">before</span> you ask.</h2>
        </div>
        <div className="divide-y divide-[color:var(--gold)]/25 border-y border-[color:var(--gold)]/25">
          {faqs.map((f, i) => (
            <div key={f.q} className="grid md:grid-cols-[80px_1fr] gap-6 py-8">
              <div className="font-mono text-xs text-gold pt-1">Q.{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-display text-xl md:text-2xl mb-3">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
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
    <section className="py-32 border-t border-gold">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
          Have a project? <span className="text-gold italic">Let's talk.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Tell us what you're trying to build or fix. We reply within one working day with a real opinion — never a sales deck.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center rounded-none bg-[color:var(--gold)] px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-[color:var(--gold-soft)] transition-colors">
            Get a Free Project Estimate →
          </Link>
          <Link to="/projects" className="inline-flex items-center rounded-none border border-[color:var(--gold)] px-8 py-4 text-sm font-medium text-gold hover:bg-[color:var(--gold)] hover:text-primary-foreground transition-colors">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
