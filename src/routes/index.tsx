"use client";

import { assetUrl } from "@/lib/asset-url";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import logoMark from "@/assets/oryntal-mark.asset.json";
import meet2pro from "@/assets/meet2pro.png.asset.json";
import qr2review from "@/assets/qr2review.png.asset.json";
import whatsappRag from "@/assets/whatsapp-rag.jpg.asset.json";
import eshopwebStore from "@/assets/site-shots/eshopweb-store.asset.json";
import theKaftanCompany from "@/assets/site-shots/the-kaftan-company.asset.json";
import clouShot from "@/assets/site-shots/clou.asset.json";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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
const trustedBrands = [
  "Rahman Textiles", "Indigo Mart", "Bengal Foods", "Padma Logistics",
  "Nexus Pharma", "Aarong Crafts", "Helix Networks", "Northwind Goods",
  "Atlas Energy", "Lumen Co.", "Crest Finance", "Sentinel B2B",
];

const services = [
  { n: "01", t: "AI Engineering", d: "LLM agents, RAG systems, and fine-tuned models that answer questions, draft work, and take actions inside your existing tools.", icon: "🧠" },
  { n: "02", t: "Automation", d: "n8n and custom pipelines that move data between the apps your team already uses, so nobody copy-pastes anything again.", icon: "⚡" },
  { n: "03", t: "Full-Stack Web", d: "Production React, Node, and edge-ready web apps — built to scale, easy to maintain, and handed over cleanly.", icon: "🌐" },
  { n: "04", t: "Shopify", d: "Custom Shopify 2.0 storefronts, theme development, and headless builds tuned for real conversion, not vanity metrics.", icon: "🛍️" },
  { n: "05", t: "WordPress & WooCommerce", d: "Fast, secure builds with a clean editing experience — websites your marketing team can actually run.", icon: "📝" },
  { n: "06", t: "Mobile Apps", d: "React Native apps for iOS and Android from a single codebase, so you ship to both stores in one project.", icon: "📱" },
];

const differentiators = [
  { t: "Ship in weeks, not quarters", d: "Most projects go live in 3–8 weeks. We scope tight, cut waste, and get you into production while other agencies are still writing SOWs." },
  { t: "Founder-led on every project", d: "You talk to the people writing the code and shipping the models. No account managers, no discovery deck theatre, no ticket-forwarding." },
  { t: "One team, six disciplines", d: "AI, automation, full-stack, Shopify, WordPress, mobile — under one roof. You stop paying three agencies to argue in your Slack." },
  { t: "Systems you can actually own", d: "Clean code, real docs, boring stack choices where they matter. When we hand off, your team can extend the work without calling us back." },
];

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

const processSteps = [
  { n: "01", t: "Discovery call", d: "A 30-minute conversation. We ask the specific questions that surface what's actually slow, broken, or expensive in your operation." },
  { n: "02", t: "Written scope & estimate", d: "You get a fixed scope, a fixed price, and a real timeline within 3 working days — no proposal decks, no sales games." },
  { n: "03", t: "Build in the open", d: "Weekly demos, a shared Notion, and access to staging from day one. You see the work take shape, not just the invoice." },
  { n: "04", t: "Ship & hand over", d: "We deploy to production, hand over clean code and documentation, and stay on call for two weeks while your team gets comfortable." },
];

const faqs = [
  { q: "How fast can you actually ship?", a: "Most projects go live in 3–8 weeks. Complex AI or full-stack builds run 8–14 weeks. We give you a real timeline before you sign anything." },
  { q: "What does a project cost?", a: "Fixed-scope projects start around $6k. Retainers from $3k/month. Every quote is written down, itemised, and fixed — no surprise invoices." },
  { q: "We already have engineers. Why bring you in?", a: "Most engagements augment an in-house team with senior AI, automation, or e-commerce specialists for a fixed window. Extra capacity, no headcount." },
  { q: "Do you sign NDAs?", a: "Yes, before any commercial conversation. We can also work under your MSA." },
  { q: "Where are you based?", a: "India, remote-first, GST registered. We work with clients across Asia, Europe, and North America." },
  { q: "What happens after launch?", a: "Two weeks of included support while your team settles in, then an optional retainer for maintenance, monitoring, and new features." },
];

const stats = [
  { value: 120, suffix: "+", label: "Systems shipped" },
  { value: 7, suffix: "+", label: "Countries delivered" },
  { value: 6, suffix: "", label: "Disciplines" },
  { value: 100, suffix: "%", label: "Founder-led" },
];

// SplitText-style utility for GSAP
class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
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
        if (type.includes("words")) {
          const words = line.split(" ");
          words.forEach((word, j) => {
            const wordEl = document.createElement("span");
            wordEl.style.display = "inline-block";
            wordEl.style.whiteSpace = "nowrap";
            if (type.includes("chars")) {
              const chars = word.split("");
              chars.forEach((char) => {
                const charEl = document.createElement("span");
                charEl.style.display = "inline-block";
                charEl.textContent = char;
                wordEl.appendChild(charEl);
                this.chars.push(charEl);
              });
            } else {
              wordEl.textContent = word;
            }
            lineEl.appendChild(wordEl);
            this.words.push(wordEl);
            if (j < words.length - 1) lineEl.appendChild(document.createTextNode(" "));
          });
        } else {
          lineEl.textContent = line;
        }
        this.element.appendChild(lineEl);
        this.lines.push(lineEl);
        if (i < lines.length - 1) this.element.appendChild(document.createElement("br"));
      });
    }
  }
}

function HomePage() {
  const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [capabilityIndex, setCapabilityIndex] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

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

    const interval = setInterval(() => setCapabilityIndex((p) => (p + 1) % rotatingCapabilities.length), 3000);

    return () => {
      lenisRef.current?.destroy();
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    
    const ctx = gsap.context(() => {
      // Hero logo
      gsap.set(".hero-logo", { scale: 0.8, opacity: 0 });

      // Hero heading words - animate each word
      gsap.set(".hero-title .word", { y: 40, opacity: 0 });

      gsap.set(".hero-subtitle", { y: 20, opacity: 0 });
      gsap.set(".hero-capability", { y: 20, opacity: 0 });
      gsap.set(".hero-cta", { scale: 0.95, opacity: 0 });
      gsap.set(".hero-stats", { y: 30, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.to(".hero-logo", { scale: 1, opacity: 1, duration: 1, ease: "expo.out" })
        .to(".hero-title .word", { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".hero-subtitle", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(".hero-capability", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(".hero-cta", { scale: 1, opacity: 1, stagger: 0.08, duration: 0.8, ease: "expo.out" }, "-=0.2")
        .to(".hero-stats", { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=0.2");
    }, scrollRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Reveal animations for sections
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".reveal-left").forEach((el: any) => {
        gsap.fromTo(el, { x: -60, opacity: 0 }, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".reveal-right").forEach((el: any) => {
        gsap.fromTo(el, { x: 60, opacity: 0 }, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".reveal-scale").forEach((el: any) => {
        gsap.fromTo(el, { scale: 0.9, opacity: 0 }, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Stat counters - count up on scroll
      gsap.utils.toArray(".stat-counter").forEach((el: any) => {
        const target = parseInt(el.dataset.value || "0");
        const suffix = el.dataset.suffix || "";
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function() {
            el.textContent = Math.round(this.targets()[0].val).toLocaleString() + suffix;
          },
        });
      });

      // Service cards staggered
      gsap.utils.toArray(".service-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Differentiator cards
      gsap.utils.toArray(".differentiator-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Work cards
      gsap.utils.toArray(".work-card").forEach((card: any, i) => {
        gsap.fromTo(card, { y: 50, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Process steps
      gsap.utils.toArray(".process-step").forEach((step: any, i) => {
        gsap.fromTo(step, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // FAQ items
      gsap.utils.toArray(".faq-item").forEach((item: any, i) => {
        gsap.fromTo(item, { y: 30, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Marquee infinite scroll
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });

      // Parallax backgrounds
      gsap.utils.toArray(".parallax-bg").forEach((el: any) => {
        gsap.to(el, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Trusted by marquee - subtle parallax/fade on scroll
      gsap.fromTo(".trusted-marquee", 
        { opacity: 0.6, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trusted-by-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, scrollRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div ref={scrollRef} className="relative">
      <Hero capabilityIndex={capabilityIndex} prefersReduced={prefersReduced} />
      <TrustedBy />
      <Services />
      <SelectedWorks />
      <Differentiators />
      <Process />
      <FAQGrid />
      <CTA />
    </div>
  );
}

function AIHeroVisual({ prefersReduced }: { prefersReduced: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const rings = containerRef.current?.querySelectorAll(".ai-ring");
      const particles = containerRef.current?.querySelectorAll(".ai-particle");
      const center = containerRef.current?.querySelector(".ai-center");

      if (!rings || !particles || !center) return;

      gsap.set(rings, { scale: 0.8, opacity: 0 });
      gsap.set(particles, { scale: 0, opacity: 0 });
      gsap.set(center, { scale: 0.5, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(center, { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" })
        .to(rings, { scale: 1, opacity: 0.4, duration: 1, stagger: 0.15, ease: "power3.out" }, "-=0.6")
        .to(particles, { scale: 1, opacity: 0.6, duration: 0.8, stagger: 0.05, ease: "expo.out" }, "-=0.4");

      // Continuous animation
      rings.forEach((ring, i) => {
        gsap.to(ring, {
          rotation: 360,
          duration: 20 + i * 5,
          ease: "none",
          repeat: -1,
        });
      });

      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: `+=${15 + i * 5}`,
          x: `+=${(i % 2 === 0 ? 10 : -10)}`,
          opacity: 0.2,
          duration: 3 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      gsap.to(center, {
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] mx-auto"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer rings */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="ai-ring absolute border-gold/20 rounded-full transition-opacity"
            style={{
              width: `${200 + i * 60}px`,
              height: `${200 + i * 60}px`,
              borderWidth: `${1 + i * 0.5}px`,
            }}
          />
        ))}
        {/* Center core */}
        <div className="ai-center relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-gold/30 shadow-[0_0_60px_rgba(201,162,75,0.4)] flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 blur-xl" />
        </div>
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="ai-particle absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold/50 blur-sm"
            style={{
              top: `${45 + Math.random() * 10}%`,
              left: `${45 + Math.random() * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const serviceCards = [
  {
    title: "AI Engineering",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11l1 3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 11l-1 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="2" y="9" width="20" height="7" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12v6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full-Stack Web",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21h8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9h12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 13h8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M21 8V6a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 6v2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8v10a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 18v-2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8l7 4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12l7 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "WordPress & WooCommerce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6a6 6 0 0 1 0 12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6a6 6 0 0 0 0 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// Phone-frame card dimensions - increased by 73% height, 30% width + 30% more
const CARD_WIDTH = 169;   // 130 * 1.3 = 169
const CARD_HEIGHT = 311;  // 180 * 1.73 = 311
const CARD_RADIUS = 28;

// Orbit radius - large enough to clear center text block
const ORBIT_RADIUS_DESKTOP = 440;
const ORBIT_RADIUS_TABLET = 380;

// 3D Carousel - cards orbit around tilted Y-axis (cylinder at 45 degrees)
const CARDS_COUNT = 6;
const ANGLE_STEP = 360 / CARDS_COUNT; // 60 degrees
const ORBIT_TILT = 45; // degrees - tilt the orbit axis

function GlassCard({ index, service, prefersReduced, isMobile, radius, initialAngle, rotationRef, floatOffset, orbitRotation }) {
  const currentOrbitAngle = rotationRef.current || 0;
  const cardAngle = initialAngle + currentOrbitAngle;
  
  // Float animation - independent per card
  const floatY = prefersReduced ? 0 : Math.sin((Date.now() * 0.001 + floatOffset) * 1.8) * 6;

  if (isMobile) {
    return (
      <motion.div
        className="relative flex flex-col items-center p-5 min-w-[160px] max-w-[180px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(201,162,75,0.15)]"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, y: -4 }}
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      >
        <div className="flex flex-col items-center h-full justify-start pt-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-3 text-gold">
            {service.icon}
          </div>
          <span className="font-display text-sm text-center text-foreground leading-snug px-2">{service.title}</span>
        </div>
      </motion.div>
    );
  }

  // Each card's position on the tilted cylinder
  // Cards are placed at 60-degree intervals around the cylinder
  const cardRotationY = -initialAngle; // Face inward toward center
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translateX(${Math.sin(initialAngle * Math.PI / 180) * radius}px) translateZ(${Math.cos(initialAngle * Math.PI / 180) * radius}px) rotateY(${cardRotationY}deg)`,
        transformOrigin: 'center center',
        willChange: 'transform',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
      initial={{ opacity: 0, scale: 0.8, rotateY: cardRotationY - 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: cardRotationY }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto"
      whileHover={{ scale: 1.06, zIndex: 10 }}
    >
      <div className="flex flex-col items-center h-full justify-start pt-8">
        <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 text-gold">
          {service.icon}
        </div>
        <span className="font-display text-sm text-center text-foreground leading-snug px-3">{service.title}</span>
      </div>
    </motion.div>
  );
}

// Fan carousel panel data
const fanPanels = [
  {
    id: 'ai',
    title: 'AI Engineering',
    rotation: -20,
    heightPercent: 0.85,
    zIndex: 20,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    color: 'from-purple-600/30 via-purple-900/20 to-transparent',
  },
  {
    id: 'automation',
    title: 'Automation',
    rotation: -35,
    heightPercent: 0.7,
    zIndex: 10,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    color: 'from-blue-600/30 via-blue-900/20 to-transparent',
  },
  {
    id: 'center',
    title: 'Full-Stack',
    rotation: 0,
    heightPercent: 1,
    zIndex: 30,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop',
    color: 'from-emerald-600/30 via-emerald-900/20 to-transparent',
    isPhoneFrame: true,
  },
  {
    id: 'shopify',
    title: 'Shopify',
    rotation: 35,
    heightPercent: 0.7,
    zIndex: 10,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    color: 'from-pink-600/30 via-pink-900/20 to-transparent',
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    rotation: 20,
    heightPercent: 0.85,
    zIndex: 20,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    color: 'from-orange-600/30 via-orange-900/20 to-transparent',
  },
];

function PhoneNotch({ className = '' }) {
  return (
    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 md:w-32 md:h-5 bg-black/80 rounded-b-[20px] ${className}`} />
  );
}

// Phone-frame marquee — auto-scrolling infinite horizontal loop
function InfinityLoopCarousel({ prefersReduced }) {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(0);

  // Services data - 6 distinct frames for the marquee
  const marqueeFrames = [
    {
      id: 'ai',
      title: 'AI Engineering',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=1200&fit=crop',
    },
    {
      id: 'automation',
      title: 'Automation',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1200&fit=crop',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop',
    },
    {
      id: 'shopify',
      title: 'Shopify',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop',
    },
    {
      id: 'wordpress',
      title: 'WordPress & WooCommerce',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1200&fit=crop',
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1200&fit=crop',
    },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Auto-scroll animation using CSS transform
  useEffect(() => {
    if (prefersReduced) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const track = carousel.querySelector('.marquee-track');
    if (!track) return;

    // Calculate total width of one set of frames dynamically based on viewport
    const getFrameWidth = () => {
      if (isMobile) return 180;
      if (isTablet) return 220;
      return 200;
    };
    
    const getGap = () => 24;
    
    const frameWidth = getFrameWidth();
    const gap = getGap();
    const frameCount = marqueeFrames.length;
    const singleSetWidth = frameCount * (frameWidth + gap);
    
    // Duration for one full loop of duplicated set (30-40 seconds)
    const loopDuration = 35000; // 35 seconds

    let startTime = performance.now();
    let animationId;

    const animate = (currentTime) => {
      if (isPaused) {
        startTimeRef.current = currentTime;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = (elapsed % loopDuration) / loopDuration;
      const totalWidth = marqueeFrames.length * (isMobile ? 200 : 220) + marqueeFrames.length * 24; // width of one set
      const translateX = -(progress * totalWidth); // move from 0 to -totalWidth
      
      track.style.transform = `translateX(${translateX}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [prefersReduced, isMobile, isTablet]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.marquee-frame',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [prefersReduced]);

  // Frame dimensions
  const frameWidth = isMobile ? 180 : 220;
  const frameHeight = isMobile ? 300 : 340;

  // Render 2x the items for infinite loop
  const items = [...marqueeFrames, ...marqueeFrames];

  return (
    <section className="relative py-12 w-full overflow-hidden" aria-label="Service showcase marquee" style={{ background: 'transparent' }}>
      {/* No container max-width - full viewport width */}
      <div 
        ref={carouselRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Service showcase marquee"
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        
        <div 
          className="marquee-track flex gap-6 pb-8" 
          style={{ 
            minWidth: 'max-content',
            willChange: 'transform',
          }}
        >
          {marqueeFrames.map((frame, i) => (
            <div
              key={frame.id}
              className="marquee-frame flex-shrink-0 flex flex-col items-center"
              style={{ width: isMobile ? 180 : 220 }}
            >
              {/* Phone frame */}
              <div 
                className="relative flex flex-col items-center pointer-events-auto"
                style={{ width: isMobile ? 180 : 220, height: isMobile ? 300 : 340 }}
              >
                {/* Phone frame */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-[32px] bg-black border-4 border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_2px_rgba(201,162,75,0.3),inset_0_0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(201,162,75,0.3), inset 0 0 0 10px rgba(0,0,0,0.5)' }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 md:w-32 md:h-5 bg-black/80 rounded-b-[20px]" />
                  
                  {/* Screen content */}
                  <div className="absolute inset-[14px] overflow-hidden rounded-[26px]">
                    <img
                      src={frame.image}
                      alt={frame.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <span className="mt-3 font-display text-sm text-center text-foreground">{frame.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Animated stats section for hero
function AnimatedStats({ prefersReduced }: { prefersReduced: boolean }) {
  const stats = [
    { value: 157, suffix: '+', label: 'Projects Delivered' },
    { value: 100, suffix: '+', label: 'Work With Customer Trust' },
    { value: 8, suffix: '+', label: 'Across Countries Customers' },
    { value: 50, suffix: '+', label: 'Brand Trust' },
  ];

  const refs = stats.map(() => useRef<HTMLDivElement>(null));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const container = document.querySelector('.animated-stats-container');
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, [prefersReduced]);

  useEffect(() => {
    if (!visible || prefersReduced) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = refs[i].current;
        if (!el) return;

        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: 'power3.out',
          }
        );

        const counterEl = el.querySelector('.stat-counter');
        if (counterEl) {
          gsap.to({ val: 0 }, {
            val: stat.value,
            duration: 2,
            delay: i * 0.12 + 0.3,
            ease: 'power3.out',
            onUpdate: function() {
              counterEl.textContent = Math.round(this.targets()[0].val).toLocaleString() + stat.suffix;
            },
          });
        }
      });
    }, refs[0]);

    return () => ctx.revert();
  }, [visible, prefersReduced]);

  return (
    <div className="animated-stats-container w-full px-6 mt-10 mb-4" aria-label="Key statistics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <div key={stat.label} ref={refs[i]} className="text-center">
            <div className="font-display text-3xl md:text-4xl lg:text-5xl text-gold gradient-text-clamp stat-counter" style={{ opacity: 0 }}>
              0{stat.suffix}
            </div>
            <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
  // Hero function - properly wrapped
  function Hero({ capabilityIndex, prefersReduced }: { capabilityIndex: number; prefersReduced: boolean }) {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // GSAP entrance animation for center text
  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const title = heroTitleRef.current;
      const subtitle = heroSubtitleRef.current;
      const cta = heroCtaRef.current;

      if (!title || !subtitle || !cta) return;

      // Split headline into words - "Powered by AI." should be gold
      const words = ["Your team,", "minus the", "busywork.", "Powered by AI."];
      title.innerHTML = words.map((word, i) => 
        `<span class="hero-word" style="display:inline-block; overflow:hidden;"><span style="display:inline-block;">${word}</span><span style="display:inline-block;">${i < words.length - 1 ? "\u00A0" : ""}</span></span>`
      ).join("");

      const wordSpans = title.querySelectorAll(".hero-word > span:first-child");
      const ctaButtons = cta.querySelectorAll("a");

      // Mark "Powered by AI." for gold color
      const poweredByAISpan = title.querySelector(".hero-word:last-child > span:first-child");
      if (poweredByAISpan) {
        poweredByAISpan.classList.add("text-gold");
        poweredByAISpan.style.fontStyle = "italic";
      }

      gsap.set([...wordSpans], { y: 40, opacity: 0 });
      gsap.set(subtitle, { y: 20, opacity: 0 });
      gsap.set(ctaButtons, { scale: 0.95, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(wordSpans, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0)
        .to(subtitle, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(ctaButtons, { scale: 1, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out" }, "-=0.2");
    }, heroTitleRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Continuous 3D tilted-axis orbit rotation
  useEffect(() => {
    if (prefersReduced || isMobile) return;

    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      rotationRef.current = (elapsed / 80) * 360; // 80s per full rotation
      if (orbitRef.current) {
        // Rotate around tilted axis: tilt 45deg on X, then rotate on Z
        orbitRef.current.style.transform = `rotateX(${ORBIT_TILT}deg) rotateZ(${rotationRef.current}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [prefersReduced, isMobile]);

  const radius = isMobile ? 0 : (isTablet ? ORBIT_RADIUS_TABLET : ORBIT_RADIUS_DESKTOP);
  const centerX = 0;
  const centerY = 0;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Rich gradient background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201, 162, 75, 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 60% at 20% 30%, rgba(201, 162, 75, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 60% 60% at 80% 70%, rgba(201, 162, 75, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(201, 162, 75, 0.04) 0%, transparent 70%),
          #0A0A0A
        `
      }} />
      <div className="absolute inset-0 grid-noise opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Center text block */}
        <div className="text-center z-20 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-8 hero-logo">
            <img src={assetUrl(logoMark)} alt="Oryntal" className="h-10 w-10 rounded-full ring-1 ring-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">ORYNTAL — Est. 2025</span>
          </div>

          <h1 ref={heroTitleRef} className="font-display text-3xl md:text-5xl lg:text-[4.75rem] leading-[1.02] tracking-tight hero-title">
            Your team, minus the busywork. Powered by AI.
          </h1>

          {/* Phone-frame marquee — full-width auto-scrolling strip */}
          <InfinityLoopCarousel prefersReduced={prefersReduced} />

          {/* Animated number stats */}
          <AnimatedStats prefersReduced={prefersReduced} />

          <p ref={heroSubtitleRef} className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed hero-subtitle max-w-xl mx-auto">
            AI agents, automation, and full-stack systems — from Oryntal, in weeks not quarters.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground hero-capability">
            <span>We ship</span>
            <span className="font-display italic text-gold text-lg min-w-[220px] transition-all duration-500">{rotatingCapabilities[capabilityIndex]}</span>
          </div>

          <div ref={heroCtaRef} className="mt-10 flex flex-wrap justify-center gap-4 hero-cta">
            <Link to="/contact" className="btn-primary magnetic">
              Get a Free Project Estimate
            </Link>
            <Link to="/projects" className="btn-secondary magnetic">
              See Our Work
            </Link>
          </div>
        </div>

        {/* 3D Y-axis orbital carousel */}
        <div ref={orbitRef} className="relative w-full h-[700px] md:h-[780px] lg:h-[850px] -mt-24 md:-mt-28 lg:-mt-32 flex items-center justify-center pointer-events-none" style={{ position: 'relative', perspective: '1200px' }}>
          {!isMobile && serviceCards.map((service, i) => {
            const initialAngle = i * ANGLE_STEP; // 0, 60, 120, 180, 240, 300
            const floatOffset = i * 0.5;
            return (
              <GlassCard
                key={i}
                index={i}
                service={service}
                prefersReduced={prefersReduced}
                isMobile={isMobile}
                centerX={centerX}
                centerY={centerY}
                radius={radius}
                initialAngle={initialAngle}
                rotationRef={rotationRef}
                floatOffset={floatOffset}
                orbitRotation={rotationRef.current}
              />
            );
          })}
          {isMobile && (
            <div className="flex gap-4 p-4 md:gap-6 pointer-events-auto max-w-5xl overflow-x-auto pb-4 flex-nowrap" style={{ scrollbarWidth: 'none' }}>
              {serviceCards.map((service, i) => (
                <GlassCard
                  key={i}
                  index={i}
                  service={service}
                  prefersReduced={prefersReduced}
                  isMobile={true}
                  centerX={0}
                  centerY={0}
                  radius={0}
                  initialAngle={0}
                  rotationRef={rotationRef}
                  floatOffset={0}
                  orbitRotation={0}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-gentle z-20">
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <span className="uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-gold/50 animate-float-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];
  return (
    <section className="py-16 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden trusted-by-section">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="shrink-0 md:pr-10 md:border-r md:border-gold/20 reveal-left">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Trusted by</div>
            <div className="font-display text-3xl md:text-4xl text-gold gradient-text-clamp">50+ organisations</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">GST registered — India & global</div>
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] reveal-right trusted-marquee">
            <div className="marquee-inner flex gap-10 whitespace-nowrap">
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

function Services() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 reveal-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What we do</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Six disciplines. <span className="text-gold italic gradient-text-clamp">One team.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Instead of stitching together three agencies, you get strategy, engineering, and delivery from a single team that owns the outcome end-to-end.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {services.map((s, idx) => (
            <div
              key={s.t}
              className="service-card group card-hover relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 p-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-xs text-gold">{s.n}</span>
                <div className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-1 group-hover:rotate-3">{s.icon}</div>
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

function Differentiators() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 reveal-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Why Oryntal</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            The difference is <span className="text-gold italic gradient-text-clamp">how we ship.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {differentiators.map((d, idx) => (
            <div key={d.t} className="differentiator-card relative p-8">
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

function SelectedWorks() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 reveal-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected work</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              A few we're <span className="text-gold italic gradient-text-clamp">proud of.</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost self-end magnetic shrink-0">
            See all work
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {works.map((w, idx) => {
            const isExternal = w.href.startsWith("http");
            const Inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-card border border-gold/20">
                  <img
                    src={w.image}
                    alt={w.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.05]"
                  />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-gold bg-background/80 backdrop-blur px-2.5 py-1 border border-gold/40 rounded-full">
                    {w.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 pt-8">
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
            const cls = "work-card group block card-hover bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20";
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

function Process() {
  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 reveal-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">How we work</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Four steps from <span className="text-gold italic gradient-text-clamp">hello</span> to <span className="text-gold italic gradient-text-clamp">shipped.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {processSteps.map((s, idx) => (
            <div
              key={s.n}
              className="process-step relative bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 p-8 group"
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

function FAQGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 border-t border-gold/20 border-b border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-16 reveal-up">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQ</div>
          <h2 className="font-display text-4xl md:text-6xl">
            Answered <span className="text-gold italic gradient-text-clamp">before</span> you ask.
          </h2>
        </div>
        <div className="divide-y divide-gold/20 border-y border-gold/20">
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item group">
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

function CTA() {
  return (
    <section className="py-32 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center reveal-up">
          <h2 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl mx-auto">
            Have a project? <span className="text-gold italic gradient-text-clamp">Let's talk.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground mx-auto">
            Tell us what you're trying to build or fix. We reply within one working day with a real opinion — never a sales deck.
          </p>
<div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary magnetic">
              Get a Free Project Estimate
            </Link>
            <Link to="/projects" className="btn-secondary magnetic">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}