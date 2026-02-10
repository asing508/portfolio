"use client";

import { useEffect, useRef } from "react";

const RAY_COUNT = 8;

export default function CursorFollower() {
    const crosshairRef = useRef<HTMLDivElement>(null);
    const raysContainerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const raysPos = useRef({ x: -100, y: -100 });
    const glowPos = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const rotation = useRef(0);
    const visible = useRef(false);

    useEffect(() => {
        // Hide on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        // Hide default cursor
        const style = document.createElement("style");
        style.textContent = "*, *::before, *::after { cursor: none !important; }";
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };

            // Crosshair follows INSTANTLY
            if (crosshairRef.current) {
                crosshairRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }

            if (!visible.current) {
                visible.current = true;
                if (crosshairRef.current) crosshairRef.current.style.opacity = "1";
                if (raysContainerRef.current) raysContainerRef.current.style.opacity = "1";
                if (glowRef.current) glowRef.current.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            visible.current = false;
            if (crosshairRef.current) crosshairRef.current.style.opacity = "0";
            if (raysContainerRef.current) raysContainerRef.current.style.opacity = "0";
            if (glowRef.current) glowRef.current.style.opacity = "0";
        };

        let raf: number;
        const animate = () => {
            // Rays follow with slight delay
            raysPos.current.x += (target.current.x - raysPos.current.x) * 0.12;
            raysPos.current.y += (target.current.y - raysPos.current.y) * 0.12;

            // Glow follows with more delay
            glowPos.current.x += (target.current.x - glowPos.current.x) * 0.06;
            glowPos.current.y += (target.current.y - glowPos.current.y) * 0.06;

            // Slowly spin the rays
            rotation.current += 0.3;

            if (raysContainerRef.current) {
                raysContainerRef.current.style.transform = `translate(${raysPos.current.x}px, ${raysPos.current.y}px) rotate(${rotation.current}deg)`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px)`;
            }

            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(raf);
            style.remove();
        };
    }, []);

    // Generate ray positions (evenly spaced around circle)
    const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
        const angle = (i * 360) / RAY_COUNT;
        return { angle };
    });

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Crosshair - follows instantly, no delay */}
            <div
                ref={crosshairRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            >
                {/* Top */}
                <div style={{
                    position: "absolute", left: -0.5, top: -6,
                    width: 1, height: 3.5,
                    backgroundColor: "rgb(34, 211, 238)",
                    borderRadius: 0.5,
                    boxShadow: "0 0 3px rgba(34, 211, 238, 0.5)",
                }} />
                {/* Bottom */}
                <div style={{
                    position: "absolute", left: -0.5, top: 2.5,
                    width: 1, height: 3.5,
                    backgroundColor: "rgb(34, 211, 238)",
                    borderRadius: 0.5,
                    boxShadow: "0 0 3px rgba(34, 211, 238, 0.5)",
                }} />
                {/* Left */}
                <div style={{
                    position: "absolute", left: -6, top: -0.5,
                    width: 3.5, height: 1,
                    backgroundColor: "rgb(34, 211, 238)",
                    borderRadius: 0.5,
                    boxShadow: "0 0 3px rgba(34, 211, 238, 0.5)",
                }} />
                {/* Right */}
                <div style={{
                    position: "absolute", left: 2.5, top: -0.5,
                    width: 3.5, height: 1,
                    backgroundColor: "rgb(34, 211, 238)",
                    borderRadius: 0.5,
                    boxShadow: "0 0 3px rgba(34, 211, 238, 0.5)",
                }} />
            </div>

            {/* Sun rays - spinning, follows with slight delay */}
            <div
                ref={raysContainerRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ opacity: 0, transition: "opacity 0.4s ease" }}
            >
                {rays.map((ray, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: 1.2,
                            height: 7,
                            backgroundColor: `rgba(34, 211, 238, ${0.15 + (i % 2) * 0.1})`,
                            borderRadius: 1,
                            transformOrigin: "50% 0%",
                            transform: `rotate(${ray.angle}deg) translateY(-18px)`,
                            boxShadow: `0 0 3px rgba(34, 211, 238, ${0.15 + (i % 2) * 0.05})`,
                        }}
                    />
                ))}
            </div>

            {/* Soft glow */}
            <div
                ref={glowRef}
                className="absolute will-change-transform"
                style={{
                    width: 400,
                    height: 400,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    background:
                        "radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
}
