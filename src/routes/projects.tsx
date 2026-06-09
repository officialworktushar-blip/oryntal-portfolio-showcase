import { assetUrl } from "@/lib/asset-url";
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
import eshopwebStore from "@/assets/site-shots/eshopweb-store.asset.json";
import freezeAndFeast from "@/assets/site-shots/freeze-and-feast.asset.json";
import vanSeatCoversUk from "@/assets/site-shots/van-seat-covers-uk.asset.json";
import varmaSteels from "@/assets/site-shots/varma-steels.asset.json";
import jaanisesConstruction from "@/assets/site-shots/jaanises-construction.asset.json";
import oneMedicalAesthetics from "@/assets/site-shots/one-medical-aesthetics.asset.json";
import ascentioShot from "@/assets/site-shots/ascentio.asset.json";
import kilkennyCycleClinic from "@/assets/site-shots/kilkenny-cycle-clinic.asset.json";
import theKaftanCompany from "@/assets/site-shots/the-kaftan-company.asset.json";
import netoseShot from "@/assets/site-shots/netose.asset.json";
import sacredSpaceWithArushi from "@/assets/site-shots/sacred-space-with-arushi.asset.json";
import bhrcDominion from "@/assets/site-shots/bhrc-dominion.asset.json";
import zenSupplyChain from "@/assets/site-shots/zen-supply-chain.asset.json";
import eleganceUniverse from "@/assets/site-shots/elegance-universe.asset.json";
import annaJanelleJewelry from "@/assets/site-shots/anna-janelle-jewelry.asset.json";
import clouShot from "@/assets/site-shots/clou.asset.json";
import bonusBank from "@/assets/site-shots/bonus-bank.asset.json";
import britishRacingHallOfFame from "@/assets/site-shots/british-racing-hall-of-fame.asset.json";
import antoineLours from "@/assets/site-shots/antoine-lours.asset.json";
import nightfallGroup from "@/assets/site-shots/nightfall-group.asset.json";
import hiltonHyland from "@/assets/site-shots/hilton-hyland.asset.json";
import blueMarineFoundation from "@/assets/site-shots/blue-marine-foundation.asset.json";

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
    image: assetUrl(meet2pro),
    painPoint:
      "Consultants and agency owners lose hours every week turning meeting notes into proposals and follow-up emails — and critical details slip through the cracks.",
    solution:
      "Transcribes any meeting, extracts key points and decisions, then instantly generates professional proposals and follow-up emails ready to send.",
  },
  {
    name: "QR2Review",
    tagline: "Smart Reviews. Better Ranking.",
    image: assetUrl(qr2review),
    painPoint:
      "Local businesses struggle to collect genuine Google reviews — customers forget, the process is friction-heavy, and search ranking suffers as a result.",
    solution:
      "One QR scan, pick a star rating, and AI writes a natural, genuine review posted directly to your Google Business Profile in a single click.",
  },
  {
    name: "AI SOS",
    tagline: "Your safety. Our priority.",
    image: assetUrl(aiSos),
    painPoint:
      "In an emergency, every second counts — but people can't always reach a phone, dial a number, or type a message when they need help most.",
    solution:
      "Listens in real time for distress sounds, then instantly shares your live location with trusted contacts or emergency services. Silent. Automatic. Always on.",
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
    image: assetUrl(bulkSpamFree),
    painPoint:
      "Cold outreach blasts trigger spam filters, burn sender domains, and tank reply rates within a week of going live.",
    solution:
      "Warm-up rotation, inbox-aware throttling, and AI-personalised copy that keeps deliverability above 95% across thousands of sends per day.",
  },
  {
    name: "WhatsApp RAG Agent",
    tagline: "Your knowledge base, on WhatsApp.",
    image: assetUrl(whatsappRag),
    painPoint:
      "Support teams answer the same WhatsApp questions hundreds of times a day while real product issues sit in the queue.",
    solution:
      "A retrieval-augmented agent connected to your docs, SOPs, and CRM — replies on WhatsApp with grounded answers and hands off to humans only when needed.",
  },
  {
    name: "RAG Voice Agent",
    tagline: "Answers the phone. Knows your business.",
    image: assetUrl(ragVoice),
    painPoint:
      "Missed calls = lost revenue, but hiring a 24/7 receptionist is expensive and inconsistent at answering product questions.",
    solution:
      "A natural-sounding voice agent that retrieves from your knowledge base in real time, books appointments, and forwards qualified calls to your team.",
  },
  {
    name: "Telegram Agent",
    tagline: "Automate your community, not just replies.",
    image: assetUrl(telegramAgent),
    painPoint:
      "Telegram groups and channels need constant moderation, onboarding, and content — and admins burn out within months.",
    solution:
      "An always-on Telegram agent that onboards members, moderates, broadcasts updates, and answers FAQs with context from your private knowledge base.",
  },
  {
    name: "LinkedIn Post Automation",
    tagline: "Show up every day. Without showing up.",
    image: assetUrl(linkedinAutomation),
    painPoint:
      "Founders know LinkedIn drives inbound, but writing and scheduling posts consistently is the first thing that slips when work gets busy.",
    solution:
      "AI generates posts in your voice from your blog, podcasts, and meetings — then queues, schedules, and publishes them on autopilot.",
  },
  {
    name: "Social Media Manager",
    tagline: "One brain. Every platform.",
    image: assetUrl(socialMediaManager),
    painPoint:
      "Juggling Instagram, X, TikTok, LinkedIn, and Facebook means five tools, five calendars, and five tones of voice — and nothing actually gets posted.",
    solution:
      "One AI manager plans, writes, repurposes, schedules, and reports across every channel — keeping brand voice consistent and your calendar full.",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Oryntal AI Labs" },
      {
        name: "description",
        content:
          "Selected work across AI, automation, full-stack, Shopify, WordPress, and mobile applications.",
      },
      { property: "og:title", content: "Projects — Oryntal AI Labs" },
      {
        property: "og:description",
        content:
          "Selected work across AI, automation, full-stack, Shopify, WordPress, and mobile applications.",
      },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "AI", "Automation", "Full Stack", "Shopify", "WordPress", "App"] as const;
type Cat = (typeof categories)[number];

interface WebsiteShowcase {
  name: string;
  category: Extract<Cat, "Full Stack" | "Shopify" | "WordPress">;
  type: string;
  image: string;
  url: string;
  description: string;
}

const websiteShowcases: WebsiteShowcase[] = [
  {
    name: "Mercury Embroidery",
    category: "Full Stack",
    type: "Modern React Website",
    image: assetUrl(eshopwebStore),
    url: "http://mercuryembroidery.com/",
    description:
      "A modern business website for custom embroidery services, built to present products clearly and support a smooth enquiry journey.",
  },
  {
    name: "eShop Web",
    category: "Full Stack",
    type: "E-Commerce Website",
    image: assetUrl(eshopwebStore),
    url: "https://eshopweb.store/",
    description:
      "A multi-category online store with promotional banners, category browsing, and a shopping-focused layout designed for conversion.",
  },
  {
    name: "Freeze & Feast",
    category: "Full Stack",
    type: "Restaurant Website",
    image: assetUrl(freezeAndFeast),
    url: "https://freezeandfeast.com/en",
    description:
      "A restaurant and meal-delivery website that highlights ready-to-heat meals, app downloads, and fast ordering actions.",
  },
  {
    name: "Van Seat Covers UK",
    category: "Full Stack",
    type: "Car Seat Website",
    image: assetUrl(vanSeatCoversUk),
    url: "https://www.vanseatcoversuk.co.uk/",
    description:
      "A product-led automotive website focused on custom-fit van seat covers with strong catalog visibility and easy shopping paths.",
  },
  {
    name: "Varma Steels",
    category: "Full Stack",
    type: "Industrial Website",
    image: assetUrl(varmaSteels),
    url: "https://varmasteels.com/",
    description:
      "A polished industrial website for steel and construction materials, built to communicate trust, scale, and product depth.",
  },
  {
    name: "Jaanises Construction",
    category: "Full Stack",
    type: "Real Estate Website",
    image: assetUrl(jaanisesConstruction),
    url: "https://jaanisesconsturction.com/",
    description:
      "A construction and property-focused website showcasing services, project credibility, and strong lead-generation call-to-actions.",
  },
  {
    name: "One Medical Aesthetics",
    category: "Full Stack",
    type: "Healthcare Website",
    image: assetUrl(oneMedicalAesthetics),
    url: "https://oneaesthetics.ca/",
    description:
      "A healthcare aesthetics website with a clean clinic presentation, service navigation, and an appointment-first user experience.",
  },
  {
    name: "Ascentio",
    category: "Full Stack",
    type: "Sports Website",
    image: assetUrl(ascentioShot),
    url: "https://www.ascentio.eu/",
    description:
      "A premium sports and training website crafted to position camps, memberships, and coaching as a high-value experience.",
  },
  {
    name: "Kilkenny Cycle Clinic",
    category: "Full Stack",
    type: "Cycle Store Website",
    image: assetUrl(kilkennyCycleClinic),
    url: "https://kilkennycycleclinic.ie/",
    description:
      "A bike retail website with a clean product showcase, category browsing, and a streamlined storefront for cycling enthusiasts.",
  },
  {
    name: "The Kaftan Company",
    category: "Shopify",
    type: "E-Commerce 2.0",
    image: assetUrl(theKaftanCompany),
    url: "https://www.thekaftancompany.com/?srsltid=AfmBOooNagH4Cb7bkBYtWpPFaI6aI-JyAdSmshZ9iXNz2sk1zKDvARSs",
    description:
      "A fashion-forward Shopify storefront built to highlight seasonal collections, category discovery, and a premium shopping journey.",
  },
  {
    name: "Netose",
    category: "Shopify",
    type: "E-Commerce Business",
    image: assetUrl(netoseShot),
    url: "https://netose.in/",
    description:
      "A beauty-focused Shopify store featuring product storytelling, collection navigation, and strong promotional merchandising.",
  },
  {
    name: "Sacred Space with Arushi",
    category: "Shopify",
    type: "Yoga Classes Website",
    image: assetUrl(sacredSpaceWithArushi),
    url: "https://sacredspacewitharushi.com/sacred-space-with-arushi/",
    description:
      "A wellness website for yoga and healing sessions, designed around calm visuals, trust-building copy, and consultation bookings.",
  },
  {
    name: "BHRC Dominion",
    category: "Shopify",
    type: "Cosmetic Website",
    image: assetUrl(bhrcDominion),
    url: "https://bhrcdominion.com/",
    description:
      "A cosmetic and aesthetics website built to present treatments, locations, and luxury beauty branding with clarity.",
  },
  {
    name: "Zen Supply Chain",
    category: "Shopify",
    type: "Manufacturing Website",
    image: assetUrl(zenSupplyChain),
    url: "https://zensupplychain.co.uk/",
    description:
      "A logistics and manufacturing website focused on operational credibility, service positioning, and quote-driven lead capture.",
  },
  {
    name: "Elegance Universe",
    category: "Shopify",
    type: "Boutique Website",
    image: assetUrl(eleganceUniverse),
    url: "https://eleganceuniverse.com/",
    description:
      "A boutique storefront designed to elevate beauty products with a clean shopping flow and collection-first presentation.",
  },
  {
    name: "Anna Janelle Jewelry",
    category: "Shopify",
    type: "Jewelry Website",
    image: assetUrl(annaJanelleJewelry),
    url: "https://annajanellejewelry.com/",
    description:
      "A refined jewelry storefront that pairs elegant branding with collection browsing and premium product presentation.",
  },
  {
    name: "Clou",
    category: "WordPress",
    type: "Design Brand Website",
    image: assetUrl(clouShot),
    url: "https://clou.nl/",
    description:
      "A visually rich brand website for interior and bathroom products, built with strong imagery and a sophisticated product-led experience.",
  },
  {
    name: "Bonus Bank",
    category: "WordPress",
    type: "Bank Website",
    image: assetUrl(bonusBank),
    url: "https://bonusbank.com.br/",
    description:
      "A banking website structured to communicate financial offers, account access, and product benefits in a clear digital experience.",
  },
  {
    name: "British Racing Hall of Fame",
    category: "WordPress",
    type: "Heritage Website",
    image: assetUrl(britishRacingHallOfFame),
    url: "https://horseracinghof.com/",
    description:
      "A heritage-driven website with a cinematic presentation, created to celebrate racing history, honourees, and event features.",
  },
  {
    name: "Antoine Lours",
    category: "WordPress",
    type: "Chef Website",
    image: assetUrl(antoineLours),
    url: "https://antoinelours.com/",
    description:
      "An editorial chef website with bold typography and immersive imagery, built to express culinary identity and personal brand.",
  },
  {
    name: "Nightfall Group",
    category: "WordPress",
    type: "Hotel Website",
    image: assetUrl(nightfallGroup),
    url: "https://nightfallgroup.com/",
    description:
      "A luxury hospitality and villa-booking website designed for premium lead capture, high-end visuals, and concierge-led conversion.",
  },
  {
    name: "Hilton & Hyland",
    category: "WordPress",
    type: "Real Estate Property Website",
    image: assetUrl(hiltonHyland),
    url: "https://hiltonhyland.com/",
    description:
      "A luxury real estate website built to showcase prestige properties, strong brand positioning, and high-value property discovery.",
  },
  {
    name: "Blue Marine Foundation",
    category: "WordPress",
    type: "Ocean Conservation Website",
    image: assetUrl(blueMarineFoundation),
    url: "https://www.bluemarinefoundation.com/",
    description:
      "A purpose-driven nonprofit website using immersive ocean visuals to support awareness, resources, and public engagement.",
  },
];

function showcaseCardLabel(category: WebsiteShowcase["category"]) {
  if (category === "Shopify") return "Shopify Website";
  if (category === "WordPress") return "WordPress Website";
  return "Full Stack Website";
}

function ProjectsPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const visibleWebsiteShowcases =
    filter === "All"
      ? websiteShowcases
      : websiteShowcases.filter((site) => site.category === filter);

  return (
    <>
      <section className="relative border-b border-gold overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Portfolio · 2024 – 2026</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-tight">
            Real websites, <span className="text-gold italic">live projects.</span>
            <br />
            Built across AI, automation, Shopify, WordPress, and full stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse live client work by category. Each card links directly to the website and shows a real screenshot.
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
                <article
                  key={m.name}
                  className="group relative overflow-hidden rounded-2xl border border-gold bg-card hover:-translate-y-1 transition-transform flex flex-col"
                >
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
                      <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">
                        LLM Model
                      </span>
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
                  We&apos;re shipping new business-ready LLM models every quarter. Have a workflow you want automated?{" "}
                  <a href="/contact" className="text-gold hover:underline">
                    Tell us about it →
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {(filter === "All" || filter === "Automation") && (
        <section className="py-20 border-b border-gold/40 relative overflow-hidden">
          <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Oryntal · Automation Suite</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  Workflows that <span className="text-gold italic">run themselves.</span>
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Production automations we deploy for clients. <span className="text-gold">More agents shipping every month.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automations.map((a) => (
                <article
                  key={a.name}
                  className="group relative overflow-hidden rounded-2xl border border-gold bg-card hover:-translate-y-1 transition-transform flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/40 bg-background">
                    <img
                      src={a.image}
                      alt={`${a.name} — ${a.tagline}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">
                        Automation
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">2026</span>
                    </div>
                    <h3 className="font-display text-2xl mb-1">{a.name}</h3>
                    <p className="text-sm text-gold mb-5">{a.tagline}</p>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">The Pain</div>
                        <p className="text-foreground/80">{a.painPoint}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-gold mb-1">The Fix</div>
                        <p className="text-foreground/80">{a.solution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <article className="group relative overflow-hidden rounded-2xl border border-dashed border-gold/60 bg-gradient-to-br from-gold/5 to-transparent p-8 flex flex-col items-center justify-center text-center min-h-[240px] md:col-span-2 lg:col-span-3">
                <div className="text-5xl mb-4 animate-ai-pulse">⚙</div>
                <h3 className="font-display text-2xl md:text-3xl mb-2">More Automations Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  Have a repetitive workflow eating your week?{" "}
                  <a href="/contact" className="text-gold hover:underline">
                    Let&apos;s automate it →
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {(filter === "All" || filter === "Full Stack" || filter === "Shopify" || filter === "WordPress") && (
        <section className="py-20 border-b border-gold/40 relative overflow-hidden">
          <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Live Website Portfolio</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  Pixels become <span className="text-gold italic">businesses.</span>
                  <br />
                  Designs become <span className="text-gold italic">revenue.</span>
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                Every brand below trusted us to ship the website their customers actually buy from. Click any card to see it live.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleWebsiteShowcases.map((site) => (
                <article
                  key={site.name}
                  className="group overflow-hidden rounded-2xl border border-gold bg-card transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/40 bg-background">
                    <img
                      src={site.image}
                      alt={`${site.name} homepage screenshot`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="text-[10px] uppercase tracking-widest text-gold border border-gold rounded-full px-2.5 py-0.5">
                        {showcaseCardLabel(site.category)}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{site.type}</span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl mb-2">{site.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{site.description}</p>
                    </div>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-gold bg-gold/10 px-4 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
