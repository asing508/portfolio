"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Single subtle gradient that follows mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[150px] transition-all duration-[2000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, transparent 70%)",
          left: `calc(${mousePosition.x}% - 300px)`,
          top: `calc(${mousePosition.y}% - 300px)`,
        }}
      />

      {/* Minimal ambient accent - top right */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
          top: "-5%",
          right: "-5%",
        }}
      />

      {/* Minimal ambient accent - bottom left */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-8"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 0, 170, 0.4) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
    </div>
  );
}
