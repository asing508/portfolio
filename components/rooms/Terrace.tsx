"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/ui/RoomShell";
import { projects } from "@/data/portfolio";

const STARS = Array.from({ length: 50 }, (_, i) => ({
  x: (i * 97.3) % 100,
  y: (i * 41.7) % 60,
  r: (i % 3) * 0.6 + 0.6,
  d: (i % 6) * 0.4,
}));

export default function Terrace({ onBack }: { onBack: () => void }) {
  return (
    <RoomShell
      title="The Terrace"
      kicker="Case File · Things I've Built"
      onBack={onBack}
      backLabel="Hallway"
      scenery={
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#070b14 0%,#0d0d0d 70%)" }} />
          <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
            {STARS.map((s, i) => (
              <motion.circle key={i} cx={s.x * 10} cy={s.y * 7} r={s.r} fill="#f4f1e8"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{ duration: 2.4 + s.d, repeat: Infinity, delay: s.d }} />
            ))}
            {/* big moon */}
            <circle cx="150" cy="120" r="70" fill="url(#moon)" opacity="0.9" />
            <circle cx="128" cy="104" r="10" fill="#bdb8a8" opacity="0.5" />
            <circle cx="168" cy="138" r="7" fill="#bdb8a8" opacity="0.5" />
            {/* city skyline silhouette */}
            <g fill="#050505" stroke="#f4f1e8" strokeOpacity="0.18" strokeWidth="2">
              <path d="M0 560 h80 v-90 h60 v60 h70 v-130 h50 v170 h90 v-70 h60 v90 h120 v-110 h54 v150 h80 v-60 h70 v70 h126 V700 H0 Z" />
            </g>
            {/* terrace railing in foreground */}
            <g stroke="#f4f1e8" strokeOpacity="0.5" strokeWidth="4" fill="none">
              <line x1="0" y1="640" x2="1000" y2="640" />
              <line x1="0" y1="690" x2="1000" y2="690" />
              {Array.from({ length: 21 }).map((_, i) => (
                <line key={i} x1={i * 50} y1="640" x2={i * 50} y2="690" strokeWidth="3" />
              ))}
            </g>
          </svg>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
            className={`paper-card relative rounded-sm p-5 ${i === 0 ? "md:col-span-2" : ""}`}
          >
            {/* hanging wire */}
            <span className="absolute -top-5 left-1/2 h-5 w-[2px] -translate-x-1/2 bg-paper/60" />
            {/* frame inset */}
            <div className="pointer-events-none absolute inset-1.5 border-2 border-ink/25" />

            <div className="relative">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="sign-font text-lg text-ink sm:text-xl">{p.name}</h2>
                <span className="dossier-font text-xs text-ink/70">{p.year}</span>
              </div>
              {p.award && (
                <p className="hand-font mb-2 inline-block border-2 border-ink px-2 py-0.5 text-sm text-ink">
                  {p.award}
                </p>
              )}
              <ul className="mb-3 mt-2 space-y-2">
                {p.bullets.map((b, j) => (
                  <li key={j} className="hand-font flex gap-2 text-[15px] leading-relaxed text-ink/85">
                    <span className="select-none text-ink">★</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="dossier-font rounded-sm border border-ink/60 px-2 py-0.5 text-[11px] text-ink/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </RoomShell>
  );
}
