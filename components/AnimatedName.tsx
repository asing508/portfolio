"use client";

import { motion } from "framer-motion";

// Global Gradient Definition - rendered once
const GlobalGradientDefs = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
            <linearGradient id="name-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ff00aa" />
            </linearGradient>
        </defs>
    </svg>
);

// All letters now use <path> instead of <line> for proper gradient animation support
const LetterA = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 50 70" className="w-8 sm:w-12 md:w-14 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 5 65 L 25 5 M 45 65 L 25 5 M 12 45 L 38 45"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

const LetterD = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 45 70" className="w-7 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 8 5 L 8 65 M 8 5 Q 42 5, 42 35 Q 42 65, 8 65"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

const LetterI = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 25 70" className="w-4 sm:w-6 md:w-7 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 4 5 L 21 5 M 12.5 5 L 12.5 65 M 4 65 L 21 65"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        />
    </motion.svg>
);

const LetterT = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 40 70" className="w-6 sm:w-9 md:w-11 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 4 5 L 36 5 M 20 5 L 20 65"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        />
    </motion.svg>
);

const LetterY = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 45 70" className="w-7 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 5 5 L 22.5 35 M 40 5 L 22.5 35 L 22.5 65"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

const LetterS = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 40 70" className="w-6 sm:w-9 md:w-11 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 34 12 Q 34 5, 20 5 Q 6 5, 6 18 Q 6 31, 20 35 Q 34 39, 34 52 Q 34 65, 20 65 Q 6 65, 6 58"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

const LetterN = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 45 70" className="w-7 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 8 65 L 8 5 L 37 65 L 37 5"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

const LetterG = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 45 70" className="w-7 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 38 18 Q 38 5, 22 5 Q 6 5, 6 35 Q 6 65, 22 65 Q 38 65, 38 50 L 38 40 L 24 40"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay }}
        />
    </motion.svg>
);

const LetterH = ({ delay = 0, gradient = false }: { delay?: number; gradient?: boolean }) => (
    <motion.svg viewBox="0 0 45 70" className="w-7 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20">
        <motion.path
            d="M 8 5 L 8 65 M 8 35 L 37 35 M 37 5 L 37 65"
            fill="none"
            stroke={gradient ? "url(#name-gradient)" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
        />
    </motion.svg>
);

export default function AnimatedName() {
    const baseDelay = 0.3;

    return (
        <div className="relative flex flex-col items-center gap-2 sm:gap-3">
            {/* Global gradient definition */}
            <GlobalGradientDefs />

            {/* ADITYA - white letters */}
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                <LetterA delay={baseDelay} />
                <LetterD delay={baseDelay + 0.08} />
                <LetterI delay={baseDelay + 0.16} />
                <LetterT delay={baseDelay + 0.24} />
                <LetterY delay={baseDelay + 0.32} />
                <LetterA delay={baseDelay + 0.4} />
            </div>

            {/* SINGH - gradient letters */}
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                <LetterS delay={baseDelay + 0.5} gradient />
                <LetterI delay={baseDelay + 0.58} gradient />
                <LetterN delay={baseDelay + 0.66} gradient />
                <LetterG delay={baseDelay + 0.74} gradient />
                <LetterH delay={baseDelay + 0.82} gradient />
            </div>
        </div>
    );
}
