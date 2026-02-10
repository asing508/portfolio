"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
    const glowRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const visible = useRef(false);

    useEffect(() => {
        // Hide on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };
            if (!visible.current) {
                visible.current = true;
                if (glowRef.current) glowRef.current.style.opacity = "1";
                if (ringRef.current) ringRef.current.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            visible.current = false;
            if (glowRef.current) glowRef.current.style.opacity = "0";
            if (ringRef.current) ringRef.current.style.opacity = "0";
        };

        let raf: number;
        const animate = () => {
            // Smooth follow with easing
            pos.current.x += (target.current.x - pos.current.x) * 0.12;
            pos.current.y += (target.current.y - pos.current.y) * 0.12;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
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
        };
    }, []);

    return (
        <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
            {/* Soft glow that follows cursor */}
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
            {/* Small ring cursor */}
            <div
                ref={ringRef}
                className="absolute will-change-transform"
                style={{
                    width: 40,
                    height: 40,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    border: "1.5px solid rgba(0, 212, 255, 0.3)",
                    borderRadius: "50%",
                    mixBlendMode: "screen",
                }}
            />
        </div>
    );
}
