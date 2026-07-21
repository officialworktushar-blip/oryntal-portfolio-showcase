"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroNeuralAnimationProps {
  logoSrc: string;
}

const NUM_WIRES = 14;
const NUM_PULSES = 5;

interface ServiceIcon {
  id: string;
  label: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  delay: number;
  floatDuration: number;
  glowDuration: number;
}

const serviceIcons: ServiceIcon[] = [
  {
    id: "ai-automation",
    label: "AI Automation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M6 8h12" />
        <path d="M10 12h4" />
      </svg>
    ),
    position: { x: 0.15, y: 0.25 },
    delay: 0.1,
    floatDuration: 4.2,
    glowDuration: 4.8,
  },
  {
    id: "chatbot",
    label: "Chatbot",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    ),
    position: { x: 0.85, y: 0.15 },
    delay: 0.25,
    floatDuration: 3.8,
    glowDuration: 5.2,
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    position: { x: 0.2, y: 0.75 },
    delay: 0.4,
    floatDuration: 4.5,
    glowDuration: 5.5,
  },
  {
    id: "coding",
    label: "Coding",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    position: { x: 0.8, y: 0.8 },
    delay: 0.55,
    floatDuration: 3.5,
    glowDuration: 4.5,
  },
  {
    id: "business",
    label: "Business",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    position: { x: 0.5, y: 0.5 },
    delay: 0.7,
    floatDuration: 4.8,
    glowDuration: 5.8,
  },
];

function generateWirePath(
  index: number,
  total: number,
  width: number,
  height: number,
  time: number = 0,
  centerBox: { x: number; y: number; width: number; height: number },
): string {
  const startX = 0;
  const centerY = height / 2;
  const spread = height * 0.4;
  const startY = centerY - spread + (spread * 2 * index) / Math.max(1, total - 1);

  const midX1 = width * 0.18;
  const midX2 = width * 0.35;
  const midX3 = width * 0.5;

  const amplitude = height * 0.05;
  const frequency = 0.012;

  const y1 = startY + Math.sin(time * 0.001 + index) * amplitude;
  const y2 = centerY + Math.sin(time * 0.001 + index + 1.5) * amplitude * 1.3;
  const y3 = centerY + Math.sin(time * 0.001 + index + 2.5) * amplitude * 0.9;
  const y4 =
    centerBox.y + centerBox.height / 2 + Math.sin(time * 0.001 + index + 3.5) * amplitude * 0.6;

  const boxLeft = centerBox.x;
  const boxRight = centerBox.x + centerBox.width;
  const boxCenterY = centerBox.y + centerBox.height / 2;

  return `M ${startX} ${startY}
          C ${midX1} ${y1}, ${midX2} ${y2}, ${midX3} ${y3}
          C ${width * 0.6} ${y4}, ${boxLeft} ${boxCenterY}, ${boxLeft} ${boxCenterY}
          C ${boxRight} ${boxCenterY}, ${width * 0.92} ${boxCenterY + Math.sin(time * 0.001 + index + 4.5) * amplitude * 0.4}, ${width} ${centerY}`;
}

function generateWirePaths(
  width: number,
  height: number,
  time: number,
  centerBox: { x: number; y: number; width: number; height: number },
): string[] {
  return Array.from({ length: NUM_WIRES }, (_, i) =>
    generateWirePath(i, NUM_WIRES, width, height, time, centerBox),
  );
}

function getPointOnPath(path: string, t: number): { x: number; y: number } {
  const points = path.replace(/[MC]/g, "").trim().split(/\s+/).map(Number);
  if (points.length < 8) return { x: points[0] || 0, y: points[1] || 0 };

  const x0 = points[0],
    y0 = points[1];
  const x1 = points[2],
    y1 = points[3];
  const x2 = points[4],
    y2 = points[5];
  const x3 = points[6],
    y3 = points[7];
  const x4 = points[8],
    y4 = points[9];
  const x5 = points[10],
    y5 = points[11];
  const x6 = points[12],
    y6 = points[13];
  const x7 = points[14],
    y7 = points[15];

  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;

  const x = mt3 * x0 + 3 * mt2 * t * x1 + 3 * mt * t2 * x2 + t3 * x3;
  const y = mt3 * y0 + 3 * mt2 * t * y1 + 3 * mt * t2 * y2 + t3 * y3;

  return { x, y };
}

function generatePulsePositions(paths: string[], progress: number): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];

  for (let i = 0; i < NUM_PULSES; i++) {
    const wireIndex = Math.floor((i / NUM_PULSES) * paths.length);
    const path = paths[wireIndex];
    const t = (progress + i / NUM_PULSES) % 1;
    const pos = getPointOnPath(path, t);
    positions.push(pos);
  }

  return positions;
}

export function HeroNeuralAnimation({ logoSrc }: HeroNeuralAnimationProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 350 });
  const [prefersReduced, setPrefersReduced] = useState(false);
  const animationRef = useRef<number>();
  const pathsRef = useRef<string[]>([]);
  const centerBoxRef = useRef({ x: 0, y: 0, width: 0, height: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced || reducedMotion) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        if (rect.width !== dimensions.width || rect.height !== dimensions.height) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }

      const centerBox = centerBoxRef.current;
      const paths = generateWirePaths(dimensions.width, dimensions.height, elapsed, centerBox);
      pathsRef.current = paths;

      const pulsePositions = generatePulsePositions(paths, (elapsed / 3500) % 1);

      svgRef.current?.querySelectorAll(".wire-path").forEach((path, i) => {
        if (paths[i]) {
          path.setAttribute("d", paths[i]);
        }
      });

      svgRef.current?.querySelectorAll(".pulse-dot").forEach((dot, i) => {
        const pos = pulsePositions[i];
        if (pos) {
          dot.setAttribute("cx", pos.x.toString());
          dot.setAttribute("cy", pos.y.toString());
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [prefersReduced, reducedMotion, dimensions]);

  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialCenterBox = {
    x: dimensions.width * 0.55,
    y: dimensions.height * 0.22,
    width: dimensions.width * 0.28,
    height: dimensions.height * 0.5,
  };
  centerBoxRef.current = initialCenterBox;

  const initialPaths = generateWirePaths(dimensions.width, dimensions.height, 0, initialCenterBox);
  const initialPulses = generatePulsePositions(initialPaths, 0);

  const isMobile = dimensions.width < 640;
  const isTablet = dimensions.width >= 640 && dimensions.width < 1024;

  if (isMobile) return null;

  return (
    <div
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[50%] max-w-[580px] h-[65vh] max-h-[580px] pointer-events-none"
      style={{ opacity: 0.9 }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 0 80px rgba(201, 162, 75, 0.12))" }}
      >
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(201, 162, 75, 0)" />
            <stop offset="25%" stopColor="rgba(201, 162, 75, 0.12)" />
            <stop offset="50%" stopColor="rgba(201, 162, 75, 0.35)" />
            <stop offset="70%" stopColor="rgba(217, 184, 122, 0.6)" />
            <stop offset="85%" stopColor="rgba(217, 184, 122, 0.85)" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="wireGradientExit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="15%" stopColor="rgba(217, 184, 122, 0.85)" />
            <stop offset="30%" stopColor="rgba(217, 184, 122, 0.6)" />
            <stop offset="50%" stopColor="rgba(201, 162, 75, 0.35)" />
            <stop offset="75%" stopColor="rgba(201, 162, 75, 0.12)" />
            <stop offset="100%" stopColor="rgba(201, 162, 75, 0)" />
          </linearGradient>

          <radialGradient id="boxGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(201, 162, 75, 0)" />
            <stop offset="50%" stopColor="rgba(217, 184, 122, 0.15)" />
            <stop offset="100%" stopColor="rgba(201, 162, 75, 0.05)" />
          </radialGradient>

          <filter id="wireGlow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="pulseGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="boxGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {initialPaths.map((path, i) => (
          <motion.path
            key={`wire-${i}`}
            className="wire-path"
            d={path}
            stroke={i < 7 ? "url(#wireGradient)" : "url(#wireGradientExit)"}
            strokeWidth={i < 3 ? 2 : i < 7 ? 1.5 : 1}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "url(#wireGlow)",
              opacity: i < 3 ? 0.9 : i < 7 ? 0.7 : 0.55,
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: i < 3 ? 0.9 : i < 7 ? 0.7 : 0.55 }}
            transition={{
              duration: 1.2,
              delay: 0.15 + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}

        <g
          transform={`translate(${initialCenterBox.x}, ${initialCenterBox.y})`}
          style={{ filter: "url(#boxGlow)" }}
        >
          <motion.rect
            key="center-box"
            x={0}
            y={0}
            width={initialCenterBox.width}
            height={initialCenterBox.height}
            rx={initialCenterBox.height * 0.5}
            fill="rgba(17, 17, 17, 0.7)"
            stroke="rgba(201, 162, 75, 0.35)"
            strokeWidth={1}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.text
            key="center-text"
            x={initialCenterBox.width / 2}
            y={initialCenterBox.height / 2 + 6}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#D9B87A"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize={Math.min(initialCenterBox.width * 0.11, 22)}
            fontWeight={500}
            letterSpacing="0.18em"
            textTransform="uppercase"
            style={{
              filter:
                "drop-shadow(0 0 8px rgba(217, 184, 122, 0.6)) drop-shadow(0 0 16px rgba(201, 162, 75, 0.4))",
              userSelect: "none",
            }}
            initial={{ scale: 0.8, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            ORYNTAL
          </motion.text>
        </g>

        {serviceIcons.map((icon, idx) => {
          const cx = initialCenterBox.x + initialCenterBox.width * icon.position.x;
          const cy = initialCenterBox.y + initialCenterBox.height * icon.position.y;
          const badgeSize = isTablet ? 44 : 52;

          return (
            <motion.g
              key={icon.id}
              transform={`translate(${cx - badgeSize / 2}, ${cy - badgeSize / 2})`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                scale: { duration: 0.6, delay: 0.9 + icon.delay, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.5, delay: 0.9 + icon.delay },
                y: {
                  duration: icon.floatDuration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: icon.delay,
                },
              }}
              style={{
                filter:
                  prefersReduced || reducedMotion
                    ? "none"
                    : "drop-shadow(0 0 12px rgba(201, 162, 75, 0.3))",
              }}
            >
              <motion.rect
                x={0}
                y={0}
                width={badgeSize}
                height={badgeSize}
                rx={badgeSize * 0.25}
                fill="rgba(17, 17, 17, 0.65)"
                stroke="rgba(201, 162, 75, 0.4)"
                strokeWidth={1}
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(201, 162, 75, 0)",
                    "0 0 16px rgba(201, 162, 75, 0.4), 0 0 32px rgba(201, 162, 75, 0.2)",
                    "0 0 0 rgba(201, 162, 75, 0)",
                  ],
                }}
                transition={{
                  duration: icon.glowDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: icon.delay,
                }}
                style={{
                  filter:
                    prefersReduced || reducedMotion
                      ? "none"
                      : "drop-shadow(0 0 12px rgba(201, 162, 75, 0.3))",
                }}
              />

              <svg
                width={badgeSize * 0.45}
                height={badgeSize * 0.45}
                x={badgeSize * 0.275}
                y={badgeSize * 0.275}
                fill="none"
                stroke="#D9B87A"
              >
                {icon.icon}
              </svg>

              <title>{icon.label}</title>
            </motion.g>
          );
        })}

        {initialPulses.map((pos, i) => (
          <motion.circle
            key={`pulse-${i}`}
            className="pulse-dot"
            cx={pos.x}
            cy={pos.y}
            r={2.8}
            fill="#D9B87A"
            style={{
              filter: "url(#pulseGlow)",
              opacity: 0.95,
            }}
            initial={{ r: 1, opacity: 0 }}
            animate={{
              r: [1.5, 3.5, 1.5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.55,
            }}
            style={{
              filter: prefersReduced || reducedMotion ? "none" : "url(#pulseGlow)",
            }}
          />
        ))}
      </svg>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .wire-path,
          .pulse-dot,
          [style*="animation"] {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 1024px) {
          .wire-path {
            stroke-width: 1.2 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroNeuralAnimation;
