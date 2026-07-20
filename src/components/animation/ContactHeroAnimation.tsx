"use client";

import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/asset-url";
import logoMark from "@/assets/oryntal-mark.asset.json";

interface ContactHeroAnimationProps {
  prefersReduced?: boolean;
}

export function ContactHeroAnimation({ prefersReduced = false }: ContactHeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 400, height: 500 });
  const logoImgRef = useRef<HTMLImageElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

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

  // Preload logo image
  useEffect(() => {
    const img = new Image();
    img.src = assetUrl(logoMark);
    img.onload = () => {
      logoImgRef.current = img;
      setLogoLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (prefersReduced || !canvasRef.current || !logoLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    
    // 3D rotation state
    const rotation = {
      x: 0,
      y: 0,
      z: 0,
      targetX: 0,
      targetY: 0,
      targetZ: 0,
    };

    // Floating particles around logo
    const particles: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
      angle: number;
      radius: number;
    }[] = [];

    function createParticles() {
      if (particles.length < 80 && Math.random() < 0.4) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 120 + Math.random() * 80;
        const z = (Math.random() - 0.5) * 100;
        particles.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius * 0.6,
          z: z,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.2,
          life: 1,
          maxLife: 1,
          size: 1.5 + Math.random() * 2.5,
          color: Math.random() < 0.6 ? "#C9A24B" : "#D9B87A",
          angle: angle,
          radius: radius,
        });
      }
    }

    function drawLogo() {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const logoSize = Math.min(dimensions.width, dimensions.height) * 0.35;
      
      if (!logoImgRef.current) return;

      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Apply 3D rotation using canvas transforms
      // Rotate around Y axis (horizontal rotation)
      const scaleX = Math.cos(rotation.y);
      ctx.scale(scaleX, 1);
      
      // Rotate around X axis (vertical tilt) - simulate with vertical scaling
      const scaleY = Math.cos(rotation.x * 0.5);
      
      // Draw logo with glow
      const glowRadius = logoSize * 0.7;
      const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
      glowGradient.addColorStop(0, "rgba(201, 162, 75, 0.35)");
      glowGradient.addColorStop(0.5, "rgba(217, 184, 122, 0.15)");
      glowGradient.addColorStop(1, "rgba(201, 162, 75, 0)");
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, glowRadius, glowRadius * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer rotating ring
      ctx.strokeStyle = "rgba(201, 162, 75, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, logoSize * 0.75, logoSize * 0.5, rotation.z, 0, Math.PI * 2);
      ctx.stroke();

      // Second ring opposite direction
      ctx.strokeStyle = "rgba(217, 184, 122, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, logoSize * 0.65, logoSize * 0.45, -rotation.z, 0, Math.PI * 2);
      ctx.stroke();

      // Logo image
      ctx.drawImage(
        logoImgRef.current,
        -logoSize / 2,
        -logoSize / 2 * 0.9,
        logoSize,
        logoSize * 0.9
      );

      // Center core glow
      const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, logoSize * 0.3);
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      coreGradient.addColorStop(0.5, "rgba(217, 184, 122, 0.2)");
      coreGradient.addColorStop(1, "rgba(201, 162, 75, 0)");
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(0, 0, logoSize * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function drawParticles() {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      particles.forEach((p) => {
        // Project 3D to 2D with perspective
        const perspective = 400 / (400 + p.z);
        const screenX = centerX + p.x * perspective;
        const screenY = centerY + p.y * perspective;
        const alpha = p.life * perspective * 0.8;

        if (alpha > 0.05) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8 * perspective;
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * perspective, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });
    }

    function update() {
      time += 1/60;

      // Smooth rotation animation - slow continuous rotation
      rotation.y += 0.003;  // Horizontal rotation
      rotation.x = Math.sin(time * 0.4) * 0.15;  // Gentle nod
      rotation.z = Math.sin(time * 0.3) * 0.08;  // Slight tilt

      // Subtle float
      const floatY = Math.sin(time * 0.6) * 8;

      // Update particles
      createParticles();
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Orbit around center
        p.angle += 0.002 + (p.radius / 1000);
        const targetX = Math.cos(p.angle) * p.radius;
        const targetY = Math.sin(p.angle) * p.radius * 0.6;
        
        p.x += (targetX - p.x) * 0.02 + p.vx;
        p.y += (targetY - p.y) * 0.02 + p.vy;
        p.z += p.vz;
        
        // Keep particles in orbit
        if (p.z > 150) p.z = -150;
        if (p.z < -150) p.z = 150;
        
        p.life -= 0.0008;
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
    }

    function render() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw subtle background grid/noise
      ctx.fillStyle = "rgba(10, 10, 10, 0.02)";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw particles first (behind logo)
      drawParticles();
      
      // Draw logo
      drawLogo();
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
  }, [prefersReduced, dimensions, logoLoaded]);

  return (
    <div
      className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[45%] max-w-[420px] h-[70vh] max-h-[550px] pointer-events-none"
      style={{ opacity: 0.95 }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
        style={{ 
          filter: "drop-shadow(0 0 100px rgba(201, 162, 75, 0.15))",
          transformStyle: "preserve-3d",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default ContactHeroAnimation;