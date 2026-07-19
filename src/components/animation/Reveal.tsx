"use client";

import { forwardRef } from "react";
import { useScrollTrigger, useReducedMotion } from "@/hooks/animation/useScrollTrigger";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className = "", direction = "up", delay = 0, duration = 0.8, once = true, threshold = 0.1, rootMargin = "50px" }, ref) => {
    const prefersReduced = useReducedMotion();
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (prefersReduced) {
        setIsVisible(true);
        return;
      }

      const element = elementRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => setIsVisible(true), delay * 1000);
              if (once) observer.unobserve(element);
            } else if (!once) {
              setIsVisible(false);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [delay, duration, once, threshold, rootMargin, prefersReduced, once]);

    const getTransform = () => {
      if (isVisible || prefersReduced) return "translate(0, 0) scale(1)";
      
      switch (direction) {
        case "up": return "translate(0, 40px) scale(0.98)";
        case "down": return "translate(0, -40px) scale(0.98)";
        case "left": return "translate(40px, 0) scale(0.98)";
        case "right": return "translate(-40px, 0) scale(0.98)";
        case "scale": return "scale(0.9)";
        default: return "translate(0, 0) scale(1)";
      }
    };

    const getOpacity = () => (isVisible || prefersReduced) ? 1 : 0;

    return (
      <div
        ref={(el) => { elementRef.current = el; if (ref) ref.current = el; }}
        className={className}
        style={{
          opacity: getOpacity(),
          transform: getTransform(),
          transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    );
  }
);

Reveal.displayName = "Reveal";

import { useEffect, useRef, useState } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  duration?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, className = "", staggerDelay = 0.1, direction = "up", duration = 0.6 }, ref) => {
    const prefersReduced = useReducedMotion();
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
      if (prefersReduced) {
        setVisibleItems(new Set(Array.from({ length: itemsRef.current.length }, (_, i) => i)));
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              itemsRef.current.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems((prev) => new Set([...prev, index]));
                }, index * staggerDelay * 1000);
              });
              observer.unobserve(container);
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );

      observer.observe(container);
      return () => observer.disconnect();
    }, [staggerDelay, prefersReduced]);

    return (
      <div ref={(el) => { containerRef.current = el; if (ref) ref.current = el; }} className={className}>
        {typeof children === "function" ? children({ visibleItems, registerItem: (el: HTMLDivElement, index: number) => { itemsRef.current[index] = el; } }) : 
          React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;
            const isVisible = visibleItems.has(index) || prefersReduced;
            const getTransform = () => {
              if (isVisible) return "translate(0, 0) scale(1)";
              switch (direction) {
                case "up": return "translate(0, 30px)";
                case "down": return "translate(0, -30px)";
                case "left": return "translate(30px, 0)";
                case "right": return "translate(-30px, 0)";
                case "scale": return "scale(0.9)";
                default: return "translate(0, 0)";
              }
            };
            return React.cloneElement(child as React.ReactElement, {
              style: {
                ...(child.props.style || {}),
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${index * staggerDelay}s`,
                willChange: "opacity, transform",
              },
            });
          })}
      </div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";

import React from "react";

interface TextRevealProps {
  children: string | React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "words" | "chars" | "lines";
}

export const TextReveal = forwardRef<HTMLDivElement, TextRevealProps>(
  ({ children, className = "", delay = 0, duration = 0.8, splitBy = "words" }, ref) => {
    const prefersReduced = useReducedMotion();
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (prefersReduced) {
        setIsVisible(true);
        return;
      }

      const element = elementRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => setIsVisible(true), delay * 1000);
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.3, rootMargin: "50px" }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [delay, prefersReduced]);

    const text = typeof children === "string" ? children : String(children);
    const splitText = splitBy === "chars" ? text.split("") : splitBy === "words" ? text.split(" ") : [text];
    const joiner = splitBy === "chars" ? "" : splitBy === "words" ? " " : "";

    return (
      <div
        ref={(el) => { elementRef.current = el; if (ref) ref.current = el; }}
        className={className}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {splitText.map((part, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: isVisible || prefersReduced ? 1 : 0,
              transform: isVisible || prefersReduced ? "translateY(0)" : "translateY(100%)",
              transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${delay + index * 0.05}s`,
              willChange: "opacity, transform",
            }}
          >
            {part}{index < splitText.length - 1 ? joiner : ""}
          </span>
        ))}
      </div>
    );
  }
);

TextReveal.displayName = "TextReveal";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  className?: string;
}

export const Magnetic = ({ children, strength = 0.3, className = "" }: MagneticProps) => {
  const elementRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const element = elementRef.current;
    if (element) {
      element.style.transform = "translate(0, 0)";
      element.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  };

  const handleMouseEnter = () => {
    const element = elementRef.current;
    if (element) {
      element.style.transition = "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  };

  return React.cloneElement(children, {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    className: `${children.props.className || ""} ${className}`,
    style: {
      ...children.props.style,
      willChange: "transform",
    },
  });
};

interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  angle?: number;
}

export const Shimmer = ({ children, className = "", speed = 2, angle = 90 }: ShimmerProps) => {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${angle}deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
        backgroundSize: "200% 100%",
        backgroundPosition: "-200% 0",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: prefersReduced ? "none" : `shimmer ${speed}s infinite`,
      }}
    >
      {children}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
}

export const Counter = ({ end, start = 0, duration = 2000, decimals = 0, prefix = "", suffix = "", className = "", onComplete }: CounterProps) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            animateCounter();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };
    animate();
  };

  return <div ref={elementRef} className={className}>{prefix}{count}{suffix}</div>;
};

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.3, className = "" }: ParallaxProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = (rect.top - window.innerHeight) * speed;
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

interface FloatingProps {
  children: React.ReactNode;
  amplitude?: number;
  period?: number;
  className?: string;
}

export const Floating = ({ children, amplitude = 10, period = 6, className = "" }: FloatingProps) => {
  const prefersReduced = useReducedMotion();
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    let frame: number;
    const animate = () => {
      setTime((t) => t + 0.016);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [prefersReduced]);

  const y = Math.sin(time * (2 * Math.PI / period)) * amplitude;
  const rotation = Math.sin(time * (2 * Math.PI / (period * 2))) * 1;

  return (
    <div
      className={className}
      style={{
        transform: prefersReduced ? "none" : `translateY(${y}px) rotate(${rotation}deg)`,
        transition: prefersReduced ? "none" : "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};