"use client";

import { useEffect, useRef } from "react";

const RAY_COUNT = 8;

// Color palette to breathe through
const COLORS = [
    { r: 34, g: 211, b: 238 },   // cyan
    { r: 139, g: 92, b: 246 },   // purple
    { r: 236, g: 72, b: 153 },   // pink
    { r: 34, g: 211, b: 238 },   // back to cyan
];

function lerpColor(t: number) {
    // t goes from 0 to 1, cycle through all colors
    const totalSegments = COLORS.length - 1;
    const segment = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
    const segmentT = (t * totalSegments) - segment;

    const from = COLORS[segment];
    const to = COLORS[segment + 1];

    const r = Math.round(from.r + (to.r - from.r) * segmentT);
    const g = Math.round(from.g + (to.g - from.g) * segmentT);
    const b = Math.round(from.b + (to.b - from.b) * segmentT);

    return { r, g, b };
}

export default function CursorFollower() {
    const crosshairRef = useRef<HTMLDivElement>(null);
    const raysContainerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const crosshairLinesRef = useRef<HTMLDivElement[]>([]);
    const rayLinesRef = useRef<HTMLDivElement[]>([]);
    const raysPos = useRef({ x: -100, y: -100 });
    const glowPos = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const rotation = useRef(0);
    const colorTime = useRef(0);
    const visible = useRef(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const style = document.createElement("style");
        style.textContent = "*, *::before, *::after { cursor: none !important; }";
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x: e.clientX, y: e.clientY };

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
            raysPos.current.x += (target.current.x - raysPos.current.x) * 0.12;
            raysPos.current.y += (target.current.y - raysPos.current.y) * 0.12;
            glowPos.current.x += (target.current.x - glowPos.current.x) * 0.06;
            glowPos.current.y += (target.current.y - glowPos.current.y) * 0.06;

            rotation.current += 0.3;

            // Slow breathing color cycle (~6 seconds per full cycle)
            colorTime.current += 0.003;
            if (colorTime.current >= 1) colorTime.current = 0;

            const color = lerpColor(colorTime.current);
            const rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
            const rgbGlow = `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`;

            // Update crosshair line colors
            crosshairLinesRef.current.forEach((el) => {
                if (el) {
                    el.style.backgroundColor = rgb;
                    el.style.boxShadow = `0 0 3px ${rgbGlow}`;
                }
            });

            // Update ray colors
            rayLinesRef.current.forEach((el, i) => {
                if (el) {
                    const alpha = 0.15 + (i % 2) * 0.1;
                    el.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
                    el.style.boxShadow = `0 0 3px rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.5})`;
                }
            });

            // Update glow
            if (glowRef.current) {
                glowRef.current.style.background = `radial-gradient(circle, rgba(${color.r},${color.g},${color.b},0.06) 0%, rgba(${color.r},${color.g},${color.b},0.02) 40%, transparent 70%)`;
            }

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

    const rays = Array.from({ length: RAY_COUNT }, (_, i) => ({
        angle: (i * 360) / RAY_COUNT,
    }));

    const setCrosshairRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) crosshairLinesRef.current[i] = el;
    };

    const setRayRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) rayLinesRef.current[i] = el;
    };

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Crosshair */}
            <div
                ref={crosshairRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            >
                {/* Top */}
                <div ref={setCrosshairRef(0)} style={{
                    position: "absolute", left: -1, top: -7,
                    width: 2, height: 4, borderRadius: 1,
                }} />
                {/* Bottom */}
                <div ref={setCrosshairRef(1)} style={{
                    position: "absolute", left: -1, top: 3,
                    width: 2, height: 4, borderRadius: 1,
                }} />
                {/* Left */}
                <div ref={setCrosshairRef(2)} style={{
                    position: "absolute", left: -7, top: -1,
                    width: 4, height: 2, borderRadius: 1,
                }} />
                {/* Right */}
                <div ref={setCrosshairRef(3)} style={{
                    position: "absolute", left: 3, top: -1,
                    width: 4, height: 2, borderRadius: 1,
                }} />
            </div>

            {/* Sun rays */}
            <div
                ref={raysContainerRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ opacity: 0, transition: "opacity 0.4s ease" }}
            >
                {rays.map((ray, i) => (
                    <div
                        key={i}
                        ref={setRayRef(i)}
                        style={{
                            position: "absolute",
                            width: 1.2,
                            height: 7,
                            borderRadius: 1,
                            transformOrigin: "50% 0%",
                            transform: `rotate(${ray.angle}deg) translateY(-18px)`,
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
                    transition: "opacity 0.7s ease",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
}
