"use client";

import { useEffect, useRef, useState } from "react";

const NUM_WIRES = 12;
const NUM_PULSES = 4;

function generateWirePath(
  index: number,
  total: number,
  width: number,
  height: number,
  time: number = 0
): string {
  const startX = 0;
  const endX = width;
  const centerY = height / 2;
  const spread = height * 0.45;
  const startY = centerY - spread + (spread * 2 * index) / (total - 1);

  const midX1 = width * 0.25;
  const midX2 = width * 0.55;
  const midX3 = width * 0.75;

  const amplitude = height * 0.06;
  const frequency = 0.015;

  const y1 = startY + Math.sin(time * 0.001 + index) * amplitude;
  const y2 = centerY + Math.sin(time * 0.001 + index + 1) * amplitude * 1.5;
  const y3 = centerY + Math.sin(time * 0.001 + index + 2) * amplitude;
  const y4 = centerY + Math.sin(time * 0.001 + index + 3) * amplitude * 0.8;

  return `M ${startX} ${startY}
          C ${midX1} ${y1}, ${midX2} ${y2}, ${midX3} ${y3}
          C ${width * 0.88} ${y4}, ${width * 0.94} ${centerY}, ${endX} ${centerY}`;
}

function generateWirePaths(width: number, height: number, time: number): string[] {
  return Array.from({ length: NUM_WIRES }, (_, i) =>
    generateWirePath(i, NUM_WIRES, width, height, time)
  );
}

function generatePulsePositions(
  paths: string[],
  progress: number
): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];

  for (let i = 0; i < NUM_PULSES; i++) {
    const wireIndex = Math.floor((i / NUM_PULSES) * paths.length);
    const path = paths[wireIndex];

    const points = path
      .replace(/[MC]/g, "")
      .trim()
      .split(/\s+/)
      .map(Number);

    if (points.length >= 8) {
      const t = (progress + i / NUM_PULSES) % 1;
      const x = points[0] + (points[points.length - 2] - points[0]) * t;
      const y =
        points[1] + (points[points.length - 1] - points[1]) * t * 0.5 +
        Math.sin(t * Math.PI * 2) * 4;

      positions.push({ x, y });
    }
  }

  return positions;
}

export function HeroNeuralAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });
  const [prefersReduced, setPrefersReduced] = useState(false);
  const animationRef = useRef<number>();
  const pathsRef = useRef<string[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    let startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        if (rect.width !== dimensions.width || rect.height !== dimensions.height) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }

      const paths = generateWirePaths(dimensions.width, dimensions.height, elapsed);
      pathsRef.current = paths;

      const pulsePositions = generatePulsePositions(paths, (elapsed / 3000) % 1);

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
  }, [prefersReduced, dimensions]);

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

  const initialPaths = generateWirePaths(dimensions.width, dimensions.height, 0);
  const initialPulses = generatePulsePositions(initialPaths, 0);

  return (
    <div
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[500px] h-[60vh] max-h-[500px] pointer-events-none"
      style={{ opacity: 0.85 }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 0 60px rgba(201, 162, 75, 0.15))" }}
      >
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(201, 162, 75, 0)" />
            <stop offset="30%" stopColor="rgba(201, 162, 75, 0.15)" />
            <stop offset="60%" stopColor="rgba(201, 162, 75, 0.4)" />
            <stop offset="85%" stopColor="rgba(217, 184, 122, 0.7)" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
            <stop offset="30%" stopColor="#D9B87A" stopOpacity={0.8} />
            <stop offset="70%" stopColor="#C9A24B" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#C9A24B" stopOpacity={0} />
          </radialGradient>

          <filter id="glowBlur">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="wireGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {initialPaths.map((path, i) => (
          <path
            key={`wire-${i}`}
            className="wire-path"
            d={path}
            stroke="url(#wireGradient)"
            strokeWidth={i < 3 ? 2 : i < 6 ? 1.5 : 1}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "url(#wireGlow)",
              opacity: i < 3 ? 0.9 : i < 6 ? 0.7 : 0.5,
            }}
          />
        ))}

        <circle
          className="convergence-node"
          cx={dimensions.width}
          cy={dimensions.height / 2}
          r={10}
          fill="url(#nodeGlow)"
          filter="url(#glowBlur)"
          style={{
            animation: prefersReduced ? "none" : "pulse-node 3s ease-in-out infinite",
          }}
        />

        <circle
          className="convergence-core"
          cx={dimensions.width}
          cy={dimensions.height / 2}
          r={3}
          fill="#ffffff"
          style={{
            animation: prefersReduced ? "none" : "pulse-core 2s ease-in-out infinite",
          }}
        />

        {initialPulses.map((pos, i) => (
          <circle
            key={`pulse-${i}`}
            className="pulse-dot"
            cx={pos.x}
            cy={pos.y}
            r={2.5}
            fill="#D9B87A"
            style={{
              filter: "drop-shadow(0 0 6px #C9A24B) drop-shadow(0 0 12px #C9A24B)",
              animation: prefersReduced
                ? "none"
                : `pulse-dot-anim 2.5s ease-in-out infinite ${i * 0.6}s`,
              opacity: 0.9,
            }}
          />
        ))}
      </svg>

      <style jsx>{`
        @keyframes pulse-node {
          0%, 100% {
            r: 10;
            opacity: 0.6;
          }
          50% {
            r: 14;
            opacity: 1;
          }
        }

        @keyframes pulse-core {
          0%, 100% {
            r: 3;
            opacity: 1;
          }
          50% {
            r: 5;
            opacity: 0.8;
          }
        }

        @keyframes pulse-dot-anim {
          0% {
            r: 1.5;
            opacity: 0;
            filter: drop-shadow(0 0 2px #C9A24B);
          }
          15% {
            r: 3;
            opacity: 1;
            filter: drop-shadow(0 0 8px #C9A24B) drop-shadow(0 0 16px #C9A24B);
          }
          100% {
            r: 1.5;
            opacity: 0;
            filter: drop-shadow(0 0 2px #C9A24B);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .convergence-node,
          .convergence-core,
          .pulse-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroNeuralAnimation;