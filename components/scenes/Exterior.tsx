"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const STARS = Array.from({ length: 54 }, (_, i) => ({
  x: ((i * 197.3) % 1600) - 300,
  y: ((i * 71) % 540) - 150,
  r: (i % 3) * 0.5 + 0.8,
  d: (i % 7) * 0.3,
}));

export default function Exterior({ onEnter }: { onEnter: () => void }) {
  const [opening, setOpening] = useState(false);

  // keep the latest callback without re-arming the timer on every re-render
  const onEnterRef = useRef(onEnter);
  onEnterRef.current = onEnter;

  useEffect(() => {
    if (!opening) return;
    const t = window.setTimeout(() => onEnterRef.current(), 1750);
    return () => window.clearTimeout(t);
  }, [opening]);

  const enter = () => !opening && setOpening(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-full w-full overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 20%, #1c1c1c 0%, #0d0d0d 70%)" }}
    >
      {/* push the camera into the doorway when opening */}
      <motion.div
        className="absolute inset-0"
        animate={
          opening
            ? { scale: 3.4, y: "8%" }
            : { scale: 1, y: 0 }
        }
        transition={{ duration: 1.7, ease: [0.7, 0, 0.3, 1] }}
        style={{ transformOrigin: "50% 64%" }}
      >
        <svg
          viewBox="-300 -160 1600 1040"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          {/* ---- sky extras ---- */}
          {STARS.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#f4f1e8"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2.4 + s.d, repeat: Infinity, delay: s.d }}
            />
          ))}

          {/* moon */}
          <g className="rough">
            <circle cx="830" cy="120" r="62" fill="url(#moon)" />
            <circle cx="830" cy="120" r="62" fill="none" stroke="#f4f1e8" strokeWidth="2" opacity="0.4" />
            <circle cx="812" cy="105" r="9" fill="#bdb8a8" opacity="0.5" />
            <circle cx="848" cy="132" r="6" fill="#bdb8a8" opacity="0.5" />
            <circle cx="828" cy="146" r="4" fill="#bdb8a8" opacity="0.5" />
          </g>

          {/* drifting clouds */}
          {[0, 1].map((c) => (
            <motion.g
              key={c}
              opacity={0.16}
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 18 + c * 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d={`M${120 + c * 520} ${90 + c * 40} q20 -26 50 -10 q14 -28 50 -12 q34 -6 30 26 q24 6 6 24 h-150 q-26 -8 -16 -42z`}
                fill="#f4f1e8"
              />
            </motion.g>
          ))}

          {/* distant hills */}
          <path d="M-300 560 Q200 505 500 540 Q800 575 1300 535 V880 H-300 Z" fill="#121212" />
          <path d="M-300 600 Q150 560 500 590 Q850 620 1300 585 V880 H-300 Z" fill="#161616" />

          {/* ground */}
          <path d="M-300 612 Q500 585 1300 612 V880 H-300 Z" fill="#0a0a0a" stroke="#f4f1e8" strokeOpacity="0.25" strokeWidth="2" />

          {/* stone path to door */}
          <g stroke="#f4f1e8" strokeOpacity="0.35" strokeWidth="2" fill="none">
            {[0, 1, 2, 3].map((i) => (
              <ellipse
                key={i}
                cx={500}
                cy={650 + i * 18}
                rx={46 - i * 7}
                ry={9 - i * 1.2}
              />
            ))}
          </g>

          {/* ---- the house (sways gently) ---- */}
          <motion.g
            animate={opening ? {} : { rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "500px 600px" }}
          >
            {/* drop shadow */}
            <ellipse cx="500" cy="616" rx="240" ry="20" fill="#000" opacity="0.5" />

            {/* walls */}
            <g className="rough">
              <rect x="330" y="360" width="340" height="252" fill="#1c1c1c" stroke="#f4f1e8" strokeWidth="4" />
              {/* plank lines */}
              {[400, 440, 480, 520, 560].map((y) => (
                <line key={y} x1="330" y1={y} x2="670" y2={y} stroke="#f4f1e8" strokeOpacity="0.12" strokeWidth="2" />
              ))}
            </g>

            {/* roof */}
            <g className="rough">
              <path d="M300 366 L500 250 L700 366 Z" fill="#101010" stroke="#f4f1e8" strokeWidth="4" />
              <path d="M300 366 L500 250 L700 366 Z" fill="url(#hatch2)" opacity="0.5" />
              <line x1="500" y1="250" x2="500" y2="300" stroke="#f4f1e8" strokeOpacity="0.2" strokeWidth="2" />
            </g>

            {/* chimney + smoke */}
            <g className="rough">
              <rect x="600" y="278" width="44" height="64" fill="#161616" stroke="#f4f1e8" strokeWidth="4" />
              <rect x="594" y="270" width="56" height="16" fill="#1c1c1c" stroke="#f4f1e8" strokeWidth="4" />
            </g>
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                cx={622}
                cy={262}
                r={9 + i * 3}
                fill="#f4f1e8"
                initial={{ opacity: 0.18 }}
                animate={{ cy: [262, 200 - i * 20], opacity: [0.18, 0], cx: [622, 640 + i * 6] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
              />
            ))}

            {/* windows */}
            {[388, 560].map((wx) => (
              <g key={wx} className="rough">
                <rect x={wx} y="404" width="64" height="74" fill="#f4f1e8" stroke="#f4f1e8" strokeWidth="4" />
                <motion.rect
                  x={wx + 4}
                  y="408"
                  width="56"
                  height="66"
                  fill="#f4f1e8"
                  initial={{ opacity: 0.78 }}
                  animate={{ opacity: [0.78, 0.95, 0.78] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <line x1={wx + 32} y1="404" x2={wx + 32} y2="478" stroke="#1c1c1c" strokeWidth="3" />
                <line x1={wx} y1="441" x2={wx + 64} y2="441" stroke="#1c1c1c" strokeWidth="3" />
                {/* little sleepy cat / plant silhouette */}
                <path d={`M${wx + 12} 474 q8 -18 20 -18 q12 0 20 18z`} fill="#1c1c1c" opacity="0.7" />
              </g>
            ))}

            {/* lantern beside door */}
            <g>
              <line x1="585" y1="470" x2="585" y2="500" stroke="#f4f1e8" strokeWidth="3" />
              <circle cx="585" cy="510" r="11" fill="#f4f1e8" />
              <rect x="576" y="500" width="18" height="22" fill="none" stroke="#1c1c1c" strokeWidth="2" />
            </g>

            {/* ===== DOOR (clickable) ===== */}
            {/* dark doorway revealed behind the swinging door */}
            <rect x="445" y="438" width="110" height="174" fill="#050505" />
            <rect x="445" y="438" width="110" height="174" fill="url(#hatch)" opacity="0.25" />

            <motion.g
              onClick={enter}
              style={{ cursor: "pointer", transformBox: "fill-box", transformOrigin: "left center" }}
              animate={opening ? { scaleX: 0.08 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={opening ? {} : { scale: 1.01 }}
            >
              <g className="rough">
                <rect x="445" y="438" width="110" height="174" fill="#171717" stroke="#f4f1e8" strokeWidth="4" />
                {/* panels */}
                <rect x="458" y="452" width="38" height="64" fill="none" stroke="#f4f1e8" strokeOpacity="0.4" strokeWidth="2.5" />
                <rect x="504" y="452" width="38" height="64" fill="none" stroke="#f4f1e8" strokeOpacity="0.4" strokeWidth="2.5" />
                <rect x="458" y="528" width="38" height="64" fill="none" stroke="#f4f1e8" strokeOpacity="0.4" strokeWidth="2.5" />
                <rect x="504" y="528" width="38" height="64" fill="none" stroke="#f4f1e8" strokeOpacity="0.4" strokeWidth="2.5" />
              </g>
              {/* knob */}
              <circle cx="538" cy="528" r="6" fill="#f4f1e8" />
            </motion.g>

            {/* doorstep */}
            <rect x="430" y="608" width="140" height="12" fill="#222" stroke="#f4f1e8" strokeWidth="3" className="rough" />
          </motion.g>

          {/* ===== hanging invitation sign (clickable) ===== */}
          <motion.g
            onClick={enter}
            style={{ cursor: "pointer", transformOrigin: "500px 150px" }}
            initial={{ opacity: 1 }}
            animate={opening ? { opacity: 0, rotate: 0 } : { opacity: 1, rotate: [-2.5, 2.5, -2.5] }}
            transition={opening ? { duration: 0.4 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="455" y1="150" x2="465" y2="190" stroke="#f4f1e8" strokeWidth="2" />
            <line x1="545" y1="150" x2="535" y2="190" stroke="#f4f1e8" strokeWidth="2" />
            <g className="rough">
              <rect x="350" y="190" width="300" height="92" rx="6" fill="#f4f1e8" stroke="#0d0d0d" strokeWidth="3" />
            </g>
            <text x="500" y="222" textAnchor="middle" className="sign-font" fill="#0d0d0d" fontSize="22">
              Take a peek inside
            </text>
            <text x="500" y="252" textAnchor="middle" className="hand-font" fill="#0d0d0d" fontSize="20">
              Aditya&apos;s place
            </text>
            <text x="500" y="272" textAnchor="middle" className="dossier-font" fill="#0d0d0d" fontSize="11" letterSpacing="2">
              ▸ CLICK THE DOOR ◂
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* name plate */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-7 z-10 -translate-x-1/2 text-center"
        initial={{ opacity: 1 }}
        animate={opening ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="sign-font text-3xl tracking-wider text-paper ink-shadow sm:text-5xl">
          {profile.name.toUpperCase()}
        </h1>
        <p className="dossier-font mt-2 text-[11px] uppercase tracking-[0.4em] text-ash sm:text-sm">
          A Portfolio, Drawn in Ink
        </p>
      </motion.div>

      {/* fade-to-black as we step inside */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 bg-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 1 : 0 }}
        transition={{ duration: 1.7, times: [0, 1], ease: "easeIn" }}
      />
    </motion.div>
  );
}
