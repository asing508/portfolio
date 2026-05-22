"use client";

import { motion } from "framer-motion";
import HoverButton from "@/components/ui/HoverButton";
import BackButton from "@/components/ui/BackButton";
import SpiralStaircase from "@/components/ui/SpiralStaircase";

type Props = {
  onTerrace: () => void;
  onTV: () => void;
  onDownstairs: () => void;
};

export default function Upstairs({ onTerrace, onTV, onDownstairs }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.18 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative h-full w-full overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #1f1f1f 0%, #0c0c0c 75%)" }}
    >
      <BackButton onClick={onDownstairs} label="Downstairs" />

      <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect x="0" y="0" width="1000" height="520" fill="#161616" />
        <line x1="0" y1="60" x2="1000" y2="60" stroke="#f4f1e8" strokeOpacity="0.12" strokeWidth="3" />

        {/* floor */}
        <path d="M0 520 L1000 520 L1000 700 L0 700 Z" fill="#0c0c0c" />
        <g stroke="#f4f1e8" strokeOpacity="0.12" strokeWidth="2">
          <line x1="300" y1="520" x2="120" y2="700" />
          <line x1="700" y1="520" x2="880" y2="700" />
          <line x1="0" y1="600" x2="1000" y2="600" />
        </g>
        <line x1="0" y1="520" x2="1000" y2="520" stroke="#f4f1e8" strokeOpacity="0.3" strokeWidth="4" />

        {/* hanging bulb */}
        <line x1="500" y1="0" x2="500" y2="96" stroke="#f4f1e8" strokeWidth="2" />
        <circle cx="500" cy="104" r="9" fill="#f4f1e8" stroke="#0d0d0d" strokeWidth="1.5" />

        {/* ===== LEFT door — TV Room ===== */}
        <g onClick={onTV} style={{ cursor: "pointer" }} className="rough">
          <rect x="90" y="210" width="210" height="310" fill="url(#spotlight)" stroke="#f4f1e8" strokeWidth="5" />
          <motion.rect x="110" y="232" width="170" height="270" fill="#2c2c2c"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.85, 0.6] }} transition={{ duration: 4, repeat: Infinity }} />
          <circle cx="270" cy="370" r="6" fill="#f4f1e8" />
          {/* tiny tv hint */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <rect x="150" y="330" width="90" height="64" rx="6" />
            <line x1="185" y1="394" x2="175" y2="410" /><line x1="205" y1="394" x2="215" y2="410" />
            <line x1="248" y1="345" x2="262" y2="335" /><line x1="248" y1="360" x2="264" y2="356" />
          </g>
        </g>

        {/* ===== RIGHT — open terrace doors to the night sky ===== */}
        <g onClick={onTerrace} style={{ cursor: "pointer" }}>
          <rect x="700" y="200" width="240" height="320" fill="#070b14" stroke="#f4f1e8" strokeWidth="5" className="rough" />
          {/* stars beyond */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.circle key={i}
              cx={720 + ((i * 53) % 200)} cy={220 + ((i * 37) % 280)} r={1.4}
              fill="#f4f1e8"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.2 }} />
          ))}
          {/* moon sliver */}
          <circle cx="890" cy="270" r="26" fill="#f4f1e8" opacity="0.85" />
          <circle cx="900" cy="262" r="24" fill="#070b14" />
          {/* open door panels */}
          <g className="rough" fill="#1c1c1c" stroke="#f4f1e8" strokeWidth="4">
            <path d="M700 200 L660 180 L660 540 L700 520 Z" />
            <path d="M940 200 L980 180 L980 540 L940 520 Z" />
          </g>
          {/* railing */}
          <g stroke="#f4f1e8" strokeWidth="3" opacity="0.7">
            <line x1="700" y1="500" x2="940" y2="500" />
            {[730, 770, 810, 850, 890].map((x) => <line key={x} x1={x} y1="500" x2={x} y2="520" />)}
          </g>
        </g>

        {/* ===== CENTER stair opening (down) ===== */}
        <ellipse cx="500" cy="566" rx="118" ry="30" fill="#070707" stroke="#f4f1e8" strokeWidth="3" className="rough" />
        <SpiralStaircase cx={500} bottomY={556} topY={372} steps={10} stepsPerTurn={11} R={96} tiltY={26} onClick={onDownstairs} />
      </svg>

      <HoverButton label="TV Room" sublabel="Skills & Contact" onClick={onTV} delay={0.3}
        className="left-3 top-[8%] sm:left-[6%] lg:left-[14%]" />
      <HoverButton label="The Terrace" sublabel="Projects" onClick={onTerrace} delay={0.45}
        className="right-3 top-[8%] sm:right-[6%] lg:right-[14%]" />
      <HoverButton label="Go Downstairs" sublabel="Back to ground floor" onClick={onDownstairs} delay={0.6}
        className="left-1/2 top-[62%] -translate-x-1/2" />

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="dossier-font absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.35em] text-ash">
        Upstairs — two more rooms
      </motion.p>
    </motion.div>
  );
}
