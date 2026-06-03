import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import meet2pro from "@/assets/meet2pro.png.asset.json";
import qr2review from "@/assets/qr2review.png.asset.json";
import aiSos from "@/assets/ai-sos.png.asset.json";

interface LLMModel {
  name: string;
  tagline: string;
  image: string;
  painPoint: string;
  solution: string;
}

const llmModels: LLMModel[] = [
  {
    name: "Meet2Pro",
    tagline: "From Conversation to Action",
    image: meet2pro.url,
    painPoint: "Consultants and agency owners lose hours every week turning meeting notes into proposals and follow-up emails — and critical details slip through the cracks.",
    solution: "Transcribes any meeting, extracts key points and decisions, then instantly generates professional proposals and follow-up emails ready to send.",
  },
  {
    name: "QR2Review",
    tagline: "Smart Reviews. Better Ranking.",
    image: qr2review.url,
    painPoint: "Local businesses struggle to collect genuine Google reviews — customers forget, the process is friction-heavy, and search ranking suffers as a result.",
    solution: "One QR scan, pick a star rating, and AI writes a natural, genuine review posted directly to your Google Business Profile in a single click.",
  },
  {
    name: "AI SOS",
    tagline: "Your safety. Our priority.",
    image: aiSos.url,
    painPoint: "In an emergency, every second counts — but people can't always reach a phone, dial a number, or type a message when they need help most.",
    solution: "Listens in real time for distress sounds, then instantly shares your live location with trusted contacts or emergency services. Silent. Automatic. Always on.",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Oryntal AI Labs" },
      { name: "description", content: "Selected work across AI, automation, full-stack, Shopify, WordPress, and mobile applications." },
      { property: "og:title", content: "Projects — Oryntal AI Labs" },
      { property: "og:description", content: "Selected work across AI, automation, full-stack, Shopify, WordPress, and mobile applications." },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "AI", "Automation", "Full Stack", "Shopify", "WordPress", "App"] as const;
type Cat = (typeof categories)[number];

interface Project {
  title: string;
  client: string;
  category: Exclude<Cat, "All">;
  year: string;
  description: string;
  metrics: string;
}

const projects: Project[] = [
  { title: "Helix AI Concierge", client: "Helix Networks", category: "AI", year: "2026", description: "Multi-tenant LLM agent platform with custom RAG, handling support across 14 enterprise accounts.", metrics: "12k tickets/wk" },
  { title: "Northwind Commerce", client: "Northwind Goods", category: "Shopify", year: "2026", description: "Headless Shopify Plus replatform with custom checkout and subscription engine.", metrics: "+47% CVR" },
  { title: "Pulse Ops Engine", client: "Pulse Logistics", category: "Automation", year: "2025", description: "n8n-orchestrated automation replacing four SaaS tools with one unified pipeline.", metrics: "$180k/yr saved" },
  { title: "Atlas Field", client: "Atlas Energy", category: "App", year: "2025", description: "Offline-first React Native inspection app deployed to 1,200 field engineers.", metrics: "4.8★ rating" },
  { title: "Vantage Editorial", client: "Vantage Media", category: "WordPress", year: "2025", description: "Custom Gutenberg blocks and headless WordPress with Next.js frontend.", metrics: "92 PageSpeed" },
  { title: "Sentinel Lead Scoring", client: "Sentinel B2B", category: "AI", year: "2025", description: "Fine-tuned classification model integrated into HubSpot for predictive lead scoring.", metrics: "3.2x SQL volume" },
  { title: "Crest Analytics", client: "Crest Finance", category: "Full Stack", year: "2025", description: "Real-time analytics dashboard on Cloudflare edge with sub-100ms global latency.", metrics: "<100ms P95" },
  { title: "Lumen Studio", client: "Lumen Co.", category: "Shopify", year: "2024", description: "Conversion-tuned Shopify theme with custom product configurator.", metrics: "+38% AOV" },
  { title: "Forge Sync", client: "Forge Manufacturing", category: "Automation", year: "2024", description: "ERP-to-Slack pipeline alerting ops teams in real time on production anomalies.", metrics: "11 min → 30s" },
  { title: "Bloom Mobile", client: "Bloom Health", category: "App", year: "2024", description: "Patient-facing iOS and Android app with biometric auth and HealthKit sync.", metrics: "50k installs" },
  { title: "Quartz CRM", client: "Quartz Realty", category: "Full Stack", year: "2024", description: "Custom CRM on TanStack Start with property syndication APIs.", metrics: "12-team rollout" },
  { title: "Meridian Publishing", client: "Meridian Press", category: "WordPress", year: "2024", description: "Multisite WordPress with paid memberships and Stripe billing.", metrics: "8k subscribers" },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative border-b border-gold overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Portfolio · 2024 – 2026</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-tight">
            Twelve recent <span className="text-gold italic">commissions.</span><br />
            Each one shipped, measured, and still running.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Filter by discipline. Every project is a real engagement — no concept work, no unreleased mocks.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-gold sticky top-16 bg-background/90 backdrop-blur-xl z-40">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border transition-all ${
                filter === c
                  ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
                  : "border-gold text-muted-foreground hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-gold bg-card p-7 hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gold-gradient opacity-5 blur-3xl group-hover:opacity-20 transition-opacity" />
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">№ {String(i + 1).padStart(3, "0")}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">{p.category}</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">{p.client} · {p.year}</div>
                <h2 className="font-display text-2xl mb-3">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-6 pt-6 border-t border-gold/30 flex items-center justify-between">
                  <span className="text-gold font-mono text-sm">{p.metrics}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-gold transition-colors">Case →</span>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
