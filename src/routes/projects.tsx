"use client";

import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
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

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work — AI, Automation, Web, Shopify & WordPress | Oryntal" },
      {
        name: "description",
        content:
          "Selected client work across AI, automation, full-stack, Shopify, WordPress, and mobile — real production systems, real live sites.",
      },
      { property: "og:title", content: "Our Work | Oryntal" },
      {
        property: "og:description",
        content: "Selected client work across AI, automation, full-stack, Shopify, WordPress, and mobile.",
      },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "AI", "Automation", "Full Stack", "Shopify", "WordPress", "App"] as const;
type Cat = (typeof categories)[number];

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [filter, setFilter] = useState<Cat>("All");
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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

  const visibleWebsiteShowcases =
    filter === "All"
      ? websiteShowcases
      : websiteShowcases.filter((site) => site.category === filter);

  const handleFilterChange = (newFilter: Cat) => {
    if (newFilter === filter || isFiltering) return;
    
    if (!prefersReduced) {
      setIsFiltering(true);
      const cards = cardsContainerRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.to(cards, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power3.inOut",
          stagger: 0.03,
          onComplete: () => {
            setFilter(newFilter);
            requestAnimationFrame(() => {
              const newCards = cardsContainerRef.current?.children;
              if (newCards && newCards.length > 0) {
                gsap.fromTo(newCards, 
                  { opacity: 0, y: -20 },
                  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.05, onComplete: () => setIsFiltering(false) }
                );
              } else {
                setIsFiltering(false);
              }
            });
          }
        });
      } else {
        setFilter(newFilter);
        setIsFiltering(false);
      }
    } else {
      setFilter(newFilter);
    }
  };

  // Hero and section animations
  useEffect(() => {
    if (prefersReduced) return;
    
    const ctx = gsap.context(() => {
      gsap.set(".projects-hero-title .line", { y: "100%", opacity: 0 });
      gsap.set(".projects-hero-subtitle", { y: 30, opacity: 0 });
      gsap.set(".filter-btn", { y: 20, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });
      tl.to(".projects-hero-title .line", { y: 0, opacity: 1, stagger: 0.1, duration: 1.2 }, 0)
        .to(".projects-hero-subtitle", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
        .to(".filter-btn", { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "expo.out" }, "-=0.5");

      gsap.utils.toArray(".section-title").forEach((title: any) => {
        gsap.fromTo(title, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });
    }, scrollRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Card reveal animations - run when filter changes
  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // AI Model cards
      gsap.utils.toArray(".ai-model-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 50, opacity: 0, rotateX: -5 }, {
          y: 0, opacity: 1, rotateX: 0, duration: 1, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      // Automation cards
      gsap.utils.toArray(".automation-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 50, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 1, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      // Website cards - staggered reveal
      gsap.utils.toArray(".website-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      // Coming soon cards
      gsap.utils.toArray(".coming-soon-card").forEach((card: any) => {
        gsap.fromTo(card, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });
    }, scrollRef);

    return () => ctx.revert();
  }, [filter, prefersReduced]);

  // Hover animations for cards - subtle scale/zoom
  useEffect(() => {
    if (prefersReduced) return;
    
    const cards = document.querySelectorAll(".website-card, .ai-model-card, .automation-card");
    cards.forEach((card) => {
      const img = card.querySelector("img");
      const handleEnter = () => {
        gsap.to(card, { y: -8, scale: 1.01, duration: 0.4, ease: "power3.out" });
        if (img) gsap.to(img, { scale: 1.05, duration: 0.6, ease: "power3.out" });
      };
      const handleLeave = () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
        if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
      };
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, [prefersReduced, filter]);

  return (
    <div ref={scrollRef} className="relative">
      <Hero />
      <FilterBar filter={filter} setFilter={handleFilterChange} isFiltering={isFiltering} />
      {(filter === "All" || filter === "AI") && <AIModelsSection />}
      {(filter === "All" || filter === "Automation") && <AutomationSection />}
      {(filter === "All" || filter === "Full Stack" || filter === "Shopify" || filter === "WordPress") && (
        <WebsitesSection sites={visibleWebsiteShowcases} cardsContainerRef={cardsContainerRef} />
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-gold/20 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our work · 2024 – 2026</div>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-[1.05] projects-hero-title">
          <span className="line block">Real projects.</span>
          <span className="line block"><span className="text-gold italic gradient-text-clamp">Real live sites.</span></span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground projects-hero-subtitle">
          Browse client work by discipline. Every card links directly to the production site with a real screenshot — no mockups, no stock imagery.
        </p>
      </div>
    </section>
  );
}

function FilterBar({ filter, setFilter, isFiltering }: { filter: Cat; setFilter: (f: Cat) => void; isFiltering: boolean }) {
  return (
    <section className="py-10 border-b border-gold/20 sticky top-0 bg-background/95 backdrop-blur-xl z-40 transition-opacity duration-300" style={{ opacity: isFiltering ? 0.6 : 1 }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-3 justify-center" role="group" aria-label="Filter projects by category">
          {categories.map((c, i) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              disabled={isFiltering}
              className={`filter-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 ${
                filter === c
                  ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
                  : "border-gold/30 text-muted-foreground hover:text-gold hover:border-gold hover:bg-gold/5"
              } magnetic`}
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIModelsSection() {
  return (
    <section className="py-20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="section-title">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">AI · LLM Products</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Production-ready <span className="text-gold italic gradient-text-clamp">AI products.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A growing family of business-ready LLM tools we build in-house. <span className="text-gold">More coming every quarter.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {llmModels.map((m) => (
            <article
              key={m.name}
              className="ai-model-card group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-card-hover transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b border-gold/20 bg-background">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.tagline}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/30 rounded-full px-2.5 py-0.5">
                    LLM Model
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">2026</span>
                </div>
                <h3 className="font-display text-2xl mb-1 group-hover:text-gold transition-colors duration-300">{m.name}</h3>
                <p className="text-sm text-gold mb-5">{m.tagline}</p>
                <div className="space-y-4 text-sm leading-relaxed flex-1">
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

          <article className="coming-soon-card group relative overflow-hidden rounded-2xl border border-dashed border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8 flex flex-col items-center justify-center text-center min-h-[280px] lg:col-span-3">
            <div className="text-5xl mb-4 animate-float-gentle">✦</div>
            <h3 className="font-display text-2xl md:text-3xl mb-2">More AI Models Coming Soon</h3>
            <p className="text-muted-foreground max-w-md">
              We&apos;re shipping new business-ready LLM models every quarter. Have a workflow you want automated?{" "}
              <Link to="/contact" className="text-gold hover:underline font-medium">
                Tell us about it →
              </Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function AutomationSection() {
  return (
    <section className="py-20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="section-title">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Automation</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Workflows that <span className="text-gold italic gradient-text-clamp">run themselves.</span>
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
              className="automation-card group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-card-hover transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/20 bg-background">
                <img
                  src={a.image}
                  alt={`${a.name} — ${a.tagline}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/30 rounded-full px-2.5 py-0.5">
                    Automation
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">2026</span>
                </div>
                <h3 className="font-display text-2xl mb-1 group-hover:text-gold transition-colors duration-300">{a.name}</h3>
                <p className="text-sm text-gold mb-5">{a.tagline}</p>
                <div className="space-y-4 text-sm leading-relaxed flex-1">
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

          <article className="coming-soon-card group relative overflow-hidden rounded-2xl border border-dashed border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-8 flex flex-col items-center justify-center text-center min-h-[240px] md:col-span-2 lg:col-span-3">
            <div className="text-5xl mb-4 animate-float-gentle">⚙</div>
            <h3 className="font-display text-2xl md:text-3xl mb-2">More Automations Coming Soon</h3>
            <p className="text-muted-foreground max-w-md">
              Have a repetitive workflow eating your week?{" "}
              <Link to="/contact" className="text-gold hover:underline font-medium">
                Let&apos;s automate it →
              </Link>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function WebsitesSection({ sites, cardsContainerRef }: { sites: WebsiteShowcase[]; cardsContainerRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="section-title">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Web · Shopify · WordPress</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Pixels become <span className="text-gold italic gradient-text-clamp">businesses.</span>
              <br />
              Designs become <span className="text-gold italic gradient-text-clamp">revenue.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Every brand below trusted us to ship the website their customers actually buy from. Click any card to see it live.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sites.map((site) => (
            <article
              key={site.name}
              className="website-card group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/50 backdrop-blur-sm transition-all duration-500 will-change-transform"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/20 bg-background">
                <img
                  src={site.image}
                  alt={`${site.name} homepage screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-1000 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-gold border border-gold/30 bg-background/80 backdrop-blur px-2.5 py-1 rounded-full">
                  {showcaseCardLabel(site.category)}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <span className="font-mono text-xs text-muted-foreground">{site.type}</span>

                <div>
                  <h3 className="font-display text-2xl mb-2 group-hover:text-gold transition-colors duration-300">{site.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{site.description}</p>
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:border-gold group-hover:translate-x-1 magnetic"
                >
                  Visit Website
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}