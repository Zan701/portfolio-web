"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundY2K() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. MOUSE SPOTLIGHT */}
      <div 
        className="absolute inset-0 z-[4]"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 61, 46, 0.08), transparent 40%)`
        }}
      />

      {/* 2. AURORA GRADIENTS (Dibuat lebih gelap dan redup) */}
      {/* Aurora Flame */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="hidden md:block absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-flame/10 blur-[140px] z-[1]"
      />
      {/* Aurora Spark */}
      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="hidden md:block absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-spark/5 blur-[120px] z-[1]"
      />

      {/* 3. SVG Y2K LINES (Wireframe & Crosshairs) */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5F5F0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Target / Crosshair center */}
          <circle cx="50%" cy="50%" r="300" stroke="#F5F5F0" strokeWidth="1" fill="none" strokeDasharray="4 8" />
          <circle cx="50%" cy="50%" r="450" stroke="#FF3D2E" strokeWidth="0.5" fill="none" />
          
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#F5F5F0" strokeWidth="1" strokeDasharray="20 20" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#F5F5F0" strokeWidth="1" strokeDasharray="20 20" />
        </svg>
      </div>

      {/* 4. TINY SPARKLES */}
      <div className="absolute inset-0 z-[3]">
        {[...Array(35)].map((_, i) => {
          const size = (i % 3) + 2;
          const top = `${(i * 17) % 100}%`;
          const left = `${(i * 23) % 100}%`;
          const delay = (i % 5) * 0.5;
          const mobileHidden = i > 15 ? "hidden md:block" : "";
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-spark ${mobileHidden} md:shadow-[0_0_10px_2px_rgba(255,201,60,0.8)]`}
              style={{
                width: size,
                height: size,
                top,
                left,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: (i % 3) + 4,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* 5. NOISE TEXTURE (Opacity diturunkan agar lebih subtle dan tidak mendominasi) */}
      <div 
        className="hidden md:block absolute inset-0 z-[5] opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
