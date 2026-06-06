import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import meet2pro from "@/assets/meet2pro.png.asset.json";
import qr2review from "@/assets/qr2review.png.asset.json";
import aiSos from "@/assets/ai-sos.png.asset.json";
import bulkSpamFree from "@/assets/bulk-spam-free.jpg.asset.json";
import whatsappRag from "@/assets/whatsapp-rag.jpg.asset.json";
import ragVoice from "@/assets/rag-voice.jpg.asset.json";
import telegramAgent from "@/assets/telegram-agent.jpg.asset.json";
import linkedinAutomation from "@/assets/linkedin-automation.jpg.asset.json";
import socialMediaManager from "@/assets/social-media-manager.jpg.asset.json";

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

interface AutomationItem {
  name: string;
  tagline: string;
  image: string;
  painPoint: string;
  solution: string;
}

const automations: AutomationItem[] = [
  {
    name: "Bulk Spam-Free Automation",
    tagline: "Send at scale. Land in the inbox.",
    image: bulkSpamFree.url,
    painPoint: "Cold outreach blasts trigger spam filters, burn sender domains, and tank reply rates within a week of going live.",
    solution: "Warm-up rotation, inbox-aware throttling, and AI-personalised copy that keeps deliverability above 95% across thousands of sends per day.",
  },
  {
    name: "WhatsApp RAG Agent",
    tagline: "Your knowledge base, on WhatsApp.",
    image: whatsappRag.url,
    painPoint: "Support teams answer the same WhatsApp questions hundreds of times a day while real product issues sit in the queue.",
    solution: "A retrieval-augmented agent connected to your docs, SOPs, and CRM — replies on WhatsApp with grounded answers and hands off to humans only when needed.",
  },
  {
    name: "RAG Voice Agent",
    tagline: "Answers the phone. Knows your business.",
    image: ragVoice.url,
    painPoint: "Missed calls = lost revenue, but hiring a 24/7 receptionist is expensive and inconsistent at answering product questions.",
    solution: "A natural-sounding voice agent that retrieves from your knowledge base in real time, books appointments, and forwards qualified calls to your team.",
  },
  {
    name: "Telegram Agent",
    tagline: "Automate your community, not just replies.",
    image: telegramAgent.url,
    painPoint: "Telegram groups and channels need constant moderation, onboarding, and content — and admins burn out within months.",
    solution: "An always-on Telegram agent that onboards members, moderates, broadcasts updates, and answers FAQs with context from your private knowledge base.",
  },
  {
    name: "LinkedIn Post Automation",
    tagline: "Show up every day. Without showing up.",
    image: linkedinAutomation.url,
    painPoint: "Founders know LinkedIn drives inbound, but writing and scheduling posts consistently is the first thing that slips when work gets busy.",
    solution: "AI generates posts in your voice from your blog, podcasts, and meetings — then queues, schedules, and publishes them on autopilot.",
  },
  {
    name: "Social Media Manager",
    tagline: "One brain. Every platform.",
    image: socialMediaManager.url,
    painPoint: "Juggling Instagram, X, TikTok, LinkedIn, and Facebook means five tools, five calendars, and five tones of voice — and nothing actually gets posted.",
    solution: "One AI manager plans, writes, repurposes, schedules, and reports across every channel — keeping brand voice consistent and your calendar full.",
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

      {(filter === "All" || filter === "AI") && (
        <section className="py-20 border-b border-gold/40 relative overflow-hidden">
          <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Oryntal AI Labs · LLM Models</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  Production-grade <span className="text-gold italic">AI products.</span>
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                A growing family of business-ready LLM models built in-house. <span className="text-gold">More models coming soon.</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {llmModels.map((m) => (
                <article key={m.name} className="group relative overflow-hidden rounded-2xl border border-gold bg-card hover:-translate-y-1 transition-transform flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden border-b border-gold/40 bg-background">
                    <img
                      src={m.image}
                      alt={`${m.name} — ${m.tagline}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">LLM Model</span>
                      <span className="font-mono text-xs text-muted-foreground">2026</span>
                    </div>
                    <h3 className="font-display text-2xl mb-1">{m.name}</h3>
                    <p className="text-sm text-gold mb-5">{m.tagline}</p>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">The Pain</div>
                        <p className="text-foreground/80">{m.painPoint}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-gold mb-1">The Fix</div>
                        <p className="text-foreground/80">{m.solution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <article className="group relative overflow-hidden rounded-2xl border border-dashed border-gold/60 bg-gradient-to-br from-gold/5 to-transparent p-8 flex flex-col items-center justify-center text-center min-h-[280px] lg:col-span-3">
                <div className="text-5xl mb-4 animate-ai-pulse">✦</div>
                <h3 className="font-display text-2xl md:text-3xl mb-2">More AI Models Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  We're shipping new business-ready LLM models every quarter. Have a workflow you want automated? <a href="/contact" className="text-gold hover:underline">Tell us about it →</a>
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

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
