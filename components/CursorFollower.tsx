"use client";

import { useEffect, useState, useRef } from "react";

interface OrbitDot {
    id: number;
    angle: number;
    distance: number;
    size: number;
    speed: number;
    opacity: number;
    color: string;
}

const COLORS = [
    "rgba(0, 212, 255, 0.6)",   // cyan
    "rgba(139, 92, 246, 0.6)",  // purple
    "rgba(255, 0, 170, 0.5)",   // magenta
    "rgba(59, 130, 246, 0.6)",  // blue
];

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [orbitDots] = useState<OrbitDot[]>(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            angle: (i * 360) / 8,
            distance: 35 + Math.random() * 20,
            size: 3 + Math.random() * 3,
            speed: 0.3 + Math.random() * 0.4,
            opacity: 0.4 + Math.random() * 0.4,
            color: COLORS[i % COLORS.length],
        }))
    );

    const animationRef = useRef<number>();
    const currentPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTargetPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // Smooth follow animation
    useEffect(() => {
        const animate = () => {
            // Smooth interpolation for cursor following
            const ease = 0.15;
            currentPos.current.x += (targetPosition.x - currentPos.current.x) * ease;
            currentPos.current.y += (targetPosition.y - currentPos.current.y) * ease;

            setMousePosition({
                x: currentPos.current.x,
                y: currentPos.current.y
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [targetPosition]);

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const rotateInterval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 30);

        return () => clearInterval(rotateInterval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Orbiting dots around cursor */}
            {orbitDots.map((dot) => {
                const currentAngle = (dot.angle + rotation * dot.speed) * (Math.PI / 180);
                const x = mousePosition.x + Math.cos(currentAngle) * dot.distance;
                const y = mousePosition.y + Math.sin(currentAngle) * dot.distance;

                return (
                    <div
                        key={dot.id}
                        className="absolute rounded-full transition-opacity duration-300"
                        style={{
                            left: x,
                            top: y,
                            width: dot.size,
                            height: dot.size,
                            backgroundColor: dot.color,
                            transform: "translate(-50%, -50%)",
                            opacity: dot.opacity,
                            boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
                        }}
                    />
                );
            })}
        </div>
    );
}
