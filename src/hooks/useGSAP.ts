"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  selector: string,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    y?: number;
    opacity?: number;
    stagger?: number;
    duration?: number;
    ease?: string;
    onEnter?: () => void;
    onLeave?: () => void;
  } = {}
) {
  const {
    start = "top 85%",
    end = "bottom 15%",
    scrub = false,
    y = 60,
    opacity = 0,
    stagger = 0.1,
    duration = 1,
    ease = "power3.out",
    onEnter,
    onLeave,
  } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { y, opacity, willChange: "transform, opacity" },
          {
            y: 0,
            opacity: 1,
            duration,
            ease,
            delay: index * stagger,
            scrollTrigger: {
              trigger: el,
              start,
              end,
              scrub,
              toggleActions: scrub ? undefined : "play none none reverse",
              onEnter: () => onEnter?.(),
              onLeave: () => onLeave?.(),
              onEnterBack: () => onEnter?.(),
              onLeaveBack: () => onLeave?.(),
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector, start, end, scrub, y, opacity, stagger, duration, ease, onEnter, onLeave]);
}

export function useTextReveal(
  selector: string,
  options: {
    start?: string;
    stagger?: number;
    duration?: number;
    ease?: string;
  } = {}
) {
  const { start = "top 85%", stagger = 0.05, duration = 1, ease = "power3.out" } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const text = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });
        gsap.from(text.chars, {
          y: 100,
          opacity: 0,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, [selector, start, stagger, duration, ease]);
}

export function usePinSection(
  selector: string,
  options: {
    start?: string;
    end?: string;
    pinSpacing?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
  } = {}
) {
  const { start = "top top", end = "bottom bottom", pinSpacing = true, onEnter, onLeave } = options;

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start,
        end,
        pin: true,
        pinSpacing,
        onEnter: () => onEnter?.(),
        onLeave: () => onLeave?.(),
        onEnterBack: () => onEnter?.(),
        onLeaveBack: () => onLeave?.(),
      });
    });

    return () => ctx.revert();
  }, [selector, start, end, pinSpacing, onEnter, onLeave]);
}

export function useHorizontalScroll(
  selector: string,
  options: {
    start?: string;
    end?: string;
    ease?: string;
  } = {}
) {
  const { start = "top top", end = "bottom bottom", ease = "none" } = options;

  useEffect(() => {
    const container = document.querySelector(selector);
    if (!container) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(`${selector} > *`);
      const totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0);

      gsap.to(sections, {
        x: () => -(totalWidth - window.innerWidth),
        ease,
        scrollTrigger: {
          trigger: container,
          start,
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [selector, start, end, ease]);
}

export function useCounter(
  selector: string,
  options: {
    start?: number;
    end?: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
  } = {}
) {
  const { start = 0, end = 100, duration = 2, decimals = 0, prefix = "", suffix = "" } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const obj = { value: start };
        gsap.to(obj, {
          value: end,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
          },
        });
      });
    });

    return () => ctx.revert();
  }, [selector, start, end, duration, decimals, prefix, suffix]);
}

export function useParallax(
  selector: string,
  options: {
    speed?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const { speed = 0.3, start = "top bottom", end = "bottom top" } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.to(el, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [selector, speed, start, end]);
}

export function useScaleReveal(
  selector: string,
  options: {
    start?: string;
    scale?: number;
    duration?: number;
    stagger?: number;
  } = {}
) {
  const { start = "top 85%", scale = 0.8, duration = 1, stagger = 0.1 } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { scale, opacity: 0, willChange: "transform, opacity" },
        {
          scale: 1,
          opacity: 1,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: elements[0],
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector, start, scale, duration, stagger]);
}

export function useClipPathReveal(
  selector: string,
  options: {
    start?: string;
    direction?: "vertical" | "horizontal";
    duration?: number;
    stagger?: number;
  } = {}
) {
  const { start = "top 85%", direction = "vertical", duration = 1.2, stagger = 0.1 } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el, index) => {
        const clipStart = direction === "vertical" ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)";
        const clipEnd = direction === "vertical" ? "inset(0 0 0 0)" : "inset(0 0 0 0)";

        gsap.fromTo(
          el,
          { clipPath: clipStart, willChange: "clip-path" },
          {
            clipPath: clipEnd,
            duration,
            ease: "power4.out",
            delay: index * stagger,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector, start, direction, duration, stagger]);
}

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
    } else if (type.includes("words")) {
      // words only
    } else if (type.includes("chars")) {
      // chars only
    }
  }
}