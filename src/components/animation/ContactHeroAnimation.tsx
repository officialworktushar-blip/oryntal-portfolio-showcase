"use client";

import { useEffect, useRef, useState } from "react";

interface ContactHeroAnimationProps {
  prefersReduced?: boolean;
}

export function ContactHeroAnimation({ prefersReduced = false }: ContactHeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 400, height: 500 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (prefersReduced || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const envelope = {
      x: dimensions.width / 2,
      y: dimensions.height / 2,
      width: Math.min(dimensions.width * 0.6, 280),
      height: Math.min(dimensions.height * 0.45, 200),
      flapHeight: 0,
      sealGlow: 0,
      floatOffset: 0,
      rotationY: 0,
      rotationX: 0,
    };

    // Particle system for data particles
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      delay: number;
    }[] = [];

    function createParticles() {
      if (Math.random() < 0.15) {
        const side = Math.random() < 0.5 ? -1 : 1;
        particles.push({
          x: envelope.x + side * (envelope.width / 2 + 20),
          y: envelope.y + (Math.random() - 0.5) * envelope.height * 0.6,
          vx: -side * (0.5 + Math.random() * 1.5),
          vy: (Math.random() - 0.5) * 0.5,
          life: 1,
          maxLife: 1,
          size: 2 + Math.random() * 3,
          color: Math.random() < 0.5 ? "#C9A24B" : "#D9B87A",
          delay: 0,
        });
      }
    }

    function drawEnvelope() {
      const { x, y, width, height, flapHeight, sealGlow, floatOffset, rotationY, rotationX } = envelope;
      const halfW = width / 2;
      const halfH = height / 2;

      ctx.save();
      ctx.translate(x, y + floatOffset);
      
      // Apply 3D rotation transforms
      ctx.scale(1 - Math.abs(rotationY) * 0.3, 1);
      
      // Envelope body shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 30;
      ctx.shadowOffsetY = 15;
      ctx.shadowOffsetX = rotationY * 10;

      // Envelope body
      const gradient = ctx.createLinearGradient(-halfW, -halfH, halfW, halfH);
      gradient.addColorStop(0, "#1a1a1a");
      gradient.addColorStop(0.5, "#141414");
      gradient.addColorStop(1, "#0d0d0d");
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = "#C9A24B";
      ctx.lineWidth = 1.5;
      
      // Body path with rounded corners
      const radius = 8;
      ctx.beginPath();
      ctx.moveTo(-halfW + radius, -halfH);
      ctx.lineTo(halfW - radius, -halfH);
      ctx.quadraticCurveTo(halfW, -halfH, halfW, -halfH + radius);
      ctx.lineTo(halfW, halfH - radius);
      ctx.quadraticCurveTo(halfW, halfH, halfW - radius, halfH);
      ctx.lineTo(-halfW + radius, halfH);
      ctx.quadraticCurveTo(-halfW, halfH, -halfW, halfH - radius);
      ctx.lineTo(-halfW, -halfH + radius);
      ctx.quadraticCurveTo(-halfW, -halfH, -halfW + radius, -halfH);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Gold accent lines on envelope
      ctx.strokeStyle = "rgba(201, 162, 75, 0.3)";
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(-halfW + 15, -halfH + 15);
      ctx.lineTo(halfW - 15, -halfH + 15);
      ctx.moveTo(-halfW + 15, halfH - 15);
      ctx.lineTo(halfW - 15, halfH - 15);
      ctx.stroke();
      ctx.setLineDash([]);

      // Flap
      const flapGradient = ctx.createLinearGradient(-halfW, -halfH - flapHeight, halfW, -halfH);
      flapGradient.addColorStop(0, "#1f1f1f");
      flapGradient.addColorStop(0.5, "#161616");
      flapGradient.addColorStop(1, "#111111");

      ctx.fillStyle = flapGradient;
      ctx.strokeStyle = "#C9A24B";
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.moveTo(-halfW + radius, -halfH);
      ctx.lineTo(halfW - radius, -halfH);
      ctx.lineTo(halfW - radius * 0.5, -halfH - flapHeight);
      ctx.lineTo(-halfW + radius * 0.5, -halfH - flapHeight);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Flap fold line
      ctx.strokeStyle = "rgba(201, 162, 75, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-halfW + 20, -halfH - flapHeight * 0.6);
      ctx.lineTo(halfW - 20, -halfH - flapHeight * 0.6);
      ctx.stroke();

      // Seal / Wax stamp
      const sealX = 0;
      const sealY = -halfH - flapHeight * 0.3;
      const sealR = 18;

      // Seal glow
      if (sealGlow > 0) {
        const glowGradient = ctx.createRadialGradient(sealX, sealY, 0, sealX, sealY, sealR + 15);
        glowGradient.addColorStop(0, `rgba(201, 162, 75, ${0.4 * sealGlow})`);
        glowGradient.addColorStop(1, "rgba(201, 162, 75, 0)");
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(sealX, sealY, sealR + 15, 0, Math.PI * 2);
        ctx.fill();
      }

      // Seal base
      const sealGradient = ctx.createRadialGradient(sealX - 4, sealY - 4, 0, sealX, sealY, sealR);
      sealGradient.addColorStop(0, "#E5C07A");
      sealGradient.addColorStop(0.5, "#C9A24B");
      sealGradient.addColorStop(1, "#8B6B2A");

      ctx.fillStyle = sealGradient;
      ctx.beginPath();
      ctx.arc(sealX, sealY, sealR, 0, Math.PI * 2);
      ctx.fill();

      // Seal ring
      ctx.strokeStyle = "#D9B87A";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(sealX, sealY, sealR - 2, 0, Math.PI * 2);
      ctx.stroke();

      // Oryntal mark in seal (simplified)
      ctx.fillStyle = "#0A0A0A";
      ctx.font = "bold 14px 'Fraunces', serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("O", sealX, sealY + 1);

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowOffsetX = 0;
      
      ctx.restore();
    }

    function drawParticles() {
      particles.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    function update() {
      time += 1/60;
      
      // Envelope idle animation
      envelope.floatOffset = Math.sin(time * 0.8) * 4;
      envelope.rotationY = Math.sin(time * 0.5) * 0.08;
      envelope.rotationX = Math.sin(time * 0.7) * 0.04;
      envelope.flapHeight = envelope.height * 0.35 + Math.sin(time * 1.2) * 3;
      envelope.sealGlow = 0.5 + Math.sin(time * 2) * 0.3;

      // Update particles
      createParticles();
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015;
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
    }

    function render() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw particles first (behind envelope)
      drawParticles();
      
      // Draw envelope
      drawEnvelope();
    }

    function animate() {
      update();
      render();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [prefersReduced, dimensions]);

  return (
    <div
      className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[45%] max-w-[420px] h-[70vh] max-h-[550px] pointer-events-none"
      style={{ opacity: 0.9 }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
        style={{ 
          filter: "drop-shadow(0 0 80px rgba(201, 162, 75, 0.120))",
          transformStyle: "preserve-3d",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default ContactHeroAnimation;