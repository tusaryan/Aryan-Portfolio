"use client";

import { useEffect, useRef, useState } from "react";

interface Blob {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  baseAngle: number;
  color: string;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // use refs to avoid re-running the effect on every scroll/click
  const scrollRef = useRef<number>(0);
  const clickRef = useRef<{ x: number; y: number } | null>(null);
  const blobsRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number>();
  const clickTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Only initialize blobs on first load, not on resize
      if (blobsRef.current.length === 0) {
        initializeBlobs();
      }
    };

    // Initialize blobs in circular formation
    const initializeBlobs = () => {
      blobsRef.current = [];
      const blobCount = 6;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < blobCount; i++) {
        const angle = (i / blobCount) * Math.PI * 2;
        const distance = 250;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        blobsRef.current.push({
          x,
          y,
          radius: 80 + Math.random() * 50,
          vx: 0,
          vy: 0,
          targetX: x,
          targetY: y,
          baseAngle: angle,
          color: `hsl(${210 + i * 5}, 100%, 50%)`,
          opacity: 0.15 + Math.random() * 0.1,
        });
      }
    };

    // Click handler: update ref only (prevents effect re-run)
    const handleClick = (e: MouseEvent) => {
      clickRef.current = { x: e.clientX, y: e.clientY };

      // Clear previous timeout
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      // Reset click position after animation completes (1.5 seconds)
      clickTimeoutRef.current = setTimeout(() => {
        clickRef.current = null;
      }, 1500);
    };

    // Scroll handler: update ref only
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Draw gradient background (IntelliJ-inspired dark theme)
    const drawBackground = () => {
      const isDark = document.documentElement.classList.contains("dark");

      if (isDark) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#1a1f2e");
        gradient.addColorStop(0.5, "#0f1419");
        gradient.addColorStop(1, "#1a1f2e");
        ctx.fillStyle = gradient;
      } else {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#f5f5f5");
        gradient.addColorStop(0.5, "#ffffff");
        gradient.addColorStop(1, "#f5f5f5");
        ctx.fillStyle = gradient;
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw blob with glow
    const drawBlob = (blob: Blob) => {
      const isDark = document.documentElement.classList.contains("dark");

      // Outer glow
      const glowGradient = ctx.createRadialGradient(
        blob.x,
        blob.y,
        0,
        blob.x,
        blob.y,
        blob.radius * 1.5
      );

      const glowColor = blob.color.replace("hsl(", "hsla(").replace(")", `, ${blob.opacity * (isDark ? 0.6 : 0.3)})`);
      const glowColorTransparent = blob.color.replace("hsl(", "hsla(").replace(")", ", 0)");

      glowGradient.addColorStop(0, glowColor);
      glowGradient.addColorStop(1, glowColorTransparent);

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Main blob
      const blobGradient = ctx.createRadialGradient(
        blob.x,
        blob.y,
        0,
        blob.x,
        blob.y,
        blob.radius
      );

      const mainColor = blob.color.replace("hsl(", "hsla(").replace(")", `, ${blob.opacity * (isDark ? 1 : 0.7)})`);
      const mainColorFade = blob.color.replace("hsl(", "hsla(").replace(")", `, ${blob.opacity * 0.2})`);

      blobGradient.addColorStop(0, mainColor);
      blobGradient.addColorStop(1, mainColorFade);

      ctx.fillStyle = blobGradient;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      drawBackground();

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const currentScroll = scrollRef.current || 0;
      const scrollInfluence = (currentScroll / window.innerHeight) * 80;
      const time = Date.now() * 0.0002;

      blobsRef.current.forEach((blob) => {
        // Click-based attraction (if clicked, pull blob towards click)
        const currentClick = clickRef.current;
        if (currentClick) {
          const angle = blob.baseAngle;
          blob.targetX = currentClick.x + Math.cos(angle) * 50;
          blob.targetY = currentClick.y + Math.sin(angle) * 50;
        } else {
          // Static position based on base angle + scroll offset only
          const baseDistance = 250;
          blob.targetX = centerX + Math.cos(blob.baseAngle) * baseDistance;
          blob.targetY = centerY + Math.sin(blob.baseAngle) * baseDistance + scrollInfluence;
        }

        // Smooth movement towards target
        const dx = blob.targetX - blob.x;
        const dy = blob.targetY - blob.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only apply force if blob is far from target (prevents oscillation)
        if (distance > 1) {
          blob.vx += dx * 0.005;
          blob.vy += dy * 0.005;
        }

        // Apply friction
        blob.vx *= 0.95;
        blob.vy *= 0.95;

        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Smooth opacity animation (slow pulsing)
        blob.opacity = 0.12 + Math.sin(time + blob.baseAngle) * 0.06;

        drawBlob(blob);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 cursor-pointer"
    />
  );
}
