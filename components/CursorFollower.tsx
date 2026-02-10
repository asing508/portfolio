"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
    const crosshairRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const ringPos = useRef({ x: -100, y: -100 });
    const glowPos = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const visible = useRef(false);

    useEffect(() => {
        // Hide on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        // Hide default cursor
        document.documentElement.style.cursor = "none";
        document.body.style.cursor = "none";

        // Also hide cursor on all interactive elements
        const style = document.createElement("style");
        style.textContent = "*, *::before, *::after { cursor: none !important; }";
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };

            // Crosshair follows INSTANTLY (no delay)
            if (crosshairRef.current) {
                crosshairRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }

            if (!visible.current) {
                visible.current = true;
                if (crosshairRef.current) crosshairRef.current.style.opacity = "1";
                if (ringRef.current) ringRef.current.style.opacity = "1";
                if (glowRef.current) glowRef.current.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            visible.current = false;
            if (crosshairRef.current) crosshairRef.current.style.opacity = "0";
            if (ringRef.current) ringRef.current.style.opacity = "0";
            if (glowRef.current) glowRef.current.style.opacity = "0";
        };

        let raf: number;
        const animate = () => {
            // Ring follows with slight delay
            ringPos.current.x += (target.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (target.current.y - ringPos.current.y) * 0.15;

            // Glow follows with more delay
            glowPos.current.x += (target.current.x - glowPos.current.x) * 0.08;
            glowPos.current.y += (target.current.y - glowPos.current.y) * 0.08;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
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
            document.documentElement.style.cursor = "";
            document.body.style.cursor = "";
            style.remove();
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Crosshair - follows instantly */}
            <div
                ref={crosshairRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            >
                {/* Top line */}
                <div
                    style={{
                        position: "absolute",
                        left: -0.75,
                        top: -10,
                        width: 1.5,
                        height: 6,
                        backgroundColor: "rgb(34, 211, 238)",
                        borderRadius: 1,
                        boxShadow: "0 0 4px rgba(34, 211, 238, 0.6)",
                    }}
                />
                {/* Bottom line */}
                <div
                    style={{
                        position: "absolute",
                        left: -0.75,
                        top: 4,
                        width: 1.5,
                        height: 6,
                        backgroundColor: "rgb(34, 211, 238)",
                        borderRadius: 1,
                        boxShadow: "0 0 4px rgba(34, 211, 238, 0.6)",
                    }}
                />
                {/* Left line */}
                <div
                    style={{
                        position: "absolute",
                        left: -10,
                        top: -0.75,
                        width: 6,
                        height: 1.5,
                        backgroundColor: "rgb(34, 211, 238)",
                        borderRadius: 1,
                        boxShadow: "0 0 4px rgba(34, 211, 238, 0.6)",
                    }}
                />
                {/* Right line */}
                <div
                    style={{
                        position: "absolute",
                        left: 4,
                        top: -0.75,
                        width: 6,
                        height: 1.5,
                        backgroundColor: "rgb(34, 211, 238)",
                        borderRadius: 1,
                        boxShadow: "0 0 4px rgba(34, 211, 238, 0.6)",
                    }}
                />
            </div>

            {/* Ring - follows with slight delay */}
            <div
                ref={ringRef}
                className="absolute will-change-transform"
                style={{
                    width: 40,
                    height: 40,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    border: "1.5px solid rgba(34, 211, 238, 0.25)",
                    borderRadius: "50%",
                    mixBlendMode: "screen",
                }}
            />

            {/* Soft glow - follows with more delay */}
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
