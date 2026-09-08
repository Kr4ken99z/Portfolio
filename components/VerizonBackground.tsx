"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface PulseRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
  speed: number;
}

export default function VerizonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse tracker with soft easing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      isActive: false,
    };

    // Color palette inspired by Verizon security & DBIR telemetry (emerald green & cyber accents)
    const colors = [
      "rgba(16, 185, 129, ", // Emerald Green (Primary)
      "rgba(52, 211, 153, ", // Mint Green
      "rgba(6, 182, 212, ",  // Cyan
      "rgba(148, 163, 184, ", // Slate
    ];

    // Determine particle count based on screen width
    const nodeCount = Math.floor(Math.min(width * 0.05, 65));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Telemetry pulse rings
    const pulseRings: PulseRing[] = [];
    const spawnRing = (originX?: number, originY?: number) => {
      pulseRings.push({
        x: originX ?? Math.random() * width,
        y: originY ?? Math.random() * height,
        radius: 4,
        maxRadius: Math.random() * 120 + 80,
        alpha: 0.4,
        color: Math.random() > 0.4 ? "rgba(16, 185, 129, " : "rgba(6, 182, 212, ",
        speed: Math.random() * 0.4 + 0.35,
      });
    };

    // Initial rings
    for (let i = 0; i < 3; i++) {
      spawnRing();
    }

    let ringSpawnTimer = 0;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // 1. Draw Subtle Tech Grid Lines & Crosshairs (+)
      const gridSize = 80;
      ctx.lineWidth = 0.5;

      // Grid intersections with tiny subtle markers
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      for (let gx = 0; gx < width; gx += gridSize) {
        for (let gy = 0; gy < height; gy += gridSize) {
          // Subtle crosshair (+)
          ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
          ctx.beginPath();
          ctx.moveTo(gx - 3, gy);
          ctx.lineTo(gx + 3, gy);
          ctx.moveTo(gx, gy - 3);
          ctx.lineTo(gx, gy + 3);
          ctx.stroke();
        }
      }

      // 2. Animate & Draw Telemetry Pulse Rings
      ringSpawnTimer++;
      if (ringSpawnTimer > 240 && pulseRings.length < 5) {
        spawnRing();
        ringSpawnTimer = 0;
      }

      for (let i = pulseRings.length - 1; i >= 0; i--) {
        const ring = pulseRings[i];
        ring.radius += ring.speed;
        ring.alpha -= 0.0018;

        if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
          pulseRings.splice(i, 1);
          if (pulseRings.length < 3) spawnRing();
          continue;
        }

        ctx.strokeStyle = `${ring.color}${ring.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner secondary ring
        if (ring.radius > 20) {
          ctx.strokeStyle = `${ring.color}${ring.alpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(ring.x, ring.y, ring.radius * 0.6, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // 3. Update & Draw Connected Nodes (Wave Flow + Mouse Reaction)
      const connectionDistance = 120;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Harmonic organic wave drift (Verizon DBIR fluid wave motion)
        node.pulsePhase += node.pulseSpeed;
        const waveX = Math.sin(time * 0.8 + node.baseY * 0.01) * 18;
        const waveY = Math.cos(time * 0.6 + node.baseX * 0.01) * 18;

        node.baseX += node.vx;
        node.baseY += node.vy;

        // Wrap around viewport edges
        if (node.baseX < -40) node.baseX = width + 40;
        if (node.baseX > width + 40) node.baseX = -40;
        if (node.baseY < -40) node.baseY = height + 40;
        if (node.baseY > height + 40) node.baseY = -40;

        let targetX = node.baseX + waveX;
        let targetY = node.baseY + waveY;

        // Mouse interaction (tactile repulsion / glow)
        if (mouse.isActive) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 35;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        node.x += (targetX - node.x) * 0.1;
        node.y += (targetY - node.y) * 0.1;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.16;
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw individual glowing node
        const currentAlpha = node.alpha * (0.7 + Math.sin(node.pulsePhase) * 0.3);
        ctx.fillStyle = `${node.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow aura around node
        ctx.fillStyle = `${node.color}${currentAlpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep Obsidian Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Ambient Moving Gradient Blobs */}
      <div className="absolute -left-[15%] top-[-10%] w-[55vw] h-[50vh] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute -right-[15%] top-[40%] w-[50vw] h-[45vh] rounded-full bg-cyan-500/[0.035] blur-[130px] pointer-events-none" />
      <div className="absolute left-[20%] bottom-[-10%] w-[60vw] h-[40vh] rounded-full bg-primary/[0.03] blur-[140px] pointer-events-none" />

      {/* Interactive 60fps Telecom/Security Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85"
      />

      {/* Subtle Vignette Mask to ensure high readability */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
    </div>
  );
}
