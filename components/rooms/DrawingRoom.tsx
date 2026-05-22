"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/ui/RoomShell";
import { experience } from "@/data/portfolio";

export default function DrawingRoom({ onBack }: { onBack: () => void }) {
  return (
    <RoomShell
      title="Drawing Room"
      kicker="Case File · The Track Record"
      onBack={onBack}
      backLabel="Hallway"
      scenery={
        <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-[0.14]">
          {/* fireplace */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <rect x="60" y="420" width="220" height="240" />
            <rect x="90" y="470" width="160" height="150" />
            <rect x="44" y="404" width="252" height="22" />
          </g>
          {/* flames */}
          {[140, 170, 200].map((x, i) => (
            <motion.path
              key={x}
              d={`M${x} 600 q-14 -50 0 -90 q14 40 0 90 z`}
              fill="#f4f1e8"
              animate={{ scaleY: [1, 1.25, 0.9, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.1 + i * 0.3, repeat: Infinity }}
              style={{ transformOrigin: `${x}px 600px` }}
            />
          ))}
          {/* portrait above mantle */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <rect x="120" y="250" width="100" height="120" />
            <circle cx="170" cy="300" r="22" />
            <path d="M140 360 q30 -40 60 0" />
          </g>
          {/* armchair right */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <path d="M780 640 L780 500 Q780 470 820 470 L900 470 Q940 470 940 500 L940 640" />
            <path d="M790 560 L930 560" />
            <path d="M760 640 L760 540 Q760 520 790 525 M960 640 L960 540 Q960 520 930 525" />
          </g>
        </svg>
      }
    >
      <div className="relative pl-6 sm:pl-10">
        {/* timeline spine */}
        <div className="absolute bottom-2 left-1 top-2 w-[3px] bg-paper/50 sm:left-3" />

        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="relative mb-8 last:mb-0"
          >
            {/* node */}
            <span className="absolute -left-[26px] top-3 h-4 w-4 rounded-full border-[3px] border-paper bg-ink sm:-left-[34px]" />

            <div className="paper-card rounded-sm p-5 sm:p-6">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3">
                <h2 className="sign-font text-lg text-ink sm:text-xl">{job.company}</h2>
                <span className="dossier-font text-xs text-ink/70">{job.dates}</span>
              </div>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="hand-font text-base text-ink/90">{job.role}</p>
                <span className="dossier-font text-[11px] uppercase tracking-widest text-ink/55">
                  {job.location}
                </span>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="hand-font flex gap-2 text-[15px] leading-relaxed text-ink/85">
                    <span className="select-none text-ink">✎</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </RoomShell>
  );
}
