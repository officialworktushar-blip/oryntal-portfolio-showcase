"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollTriggerOptions {
  trigger?: Element | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  onUpdate?: (progress: number) => void;
  once?: boolean;
}

export function useScrollTrigger(options: ScrollTriggerOptions = {}) {
  const {
    trigger,
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
    onUpdate,
    once = false,
  } = options;

  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const target = trigger
      ? typeof trigger === "string"
        ? document.querySelector(trigger)
        : trigger
      : elementRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          
          if (entry.isIntersecting) {
            if (!hasTriggered.current || !once) {
              hasTriggered.current = true;
              setIsVisible(true);
              onEnter?.();
            }
            if (onUpdate) {
              setProgress(ratio);
              onUpdate(ratio);
            }
          } else {
            if (!once) {
              setIsVisible(false);
              onLeave?.();
            }
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(target as Element);

    return () => observer.disconnect();
  }, [trigger, start, end, scrub, onEnter, onLeave, onEnterBack, onLeaveBack, onUpdate, once]);

  return { ref: elementRef, isVisible, progress, hasTriggered: hasTriggered.current };
}

export function useStaggeredReveal(itemCount: number, baseDelay = 0.1) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = Array.from(container.children) as HTMLElement[];
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, index]));
              }, index * baseDelay * 1000);
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [baseDelay]);

  return { containerRef, visibleItems };
}

export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return elementRef;
}

export function useMouseParallax(intensity = 20) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * intensity;
      const y = (clientY / innerHeight - 0.5) * intensity;
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return elementRef;
}

export function useTextReveal() {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.3, rootMargin: "50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref: elementRef, isVisible };
}

export function useCounter(end: number, duration = 2000, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnVisible) {
      startCounter();
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            startCounter();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startOnVisible]);

  const startCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + (end - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  return { ref: elementRef, count };
}

export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}