"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/ui/RoomShell";
import { profile, education } from "@/data/portfolio";

function Detective() {
  return (
    <svg viewBox="0 0 200 240" className="h-48 w-40 sm:h-56 sm:w-48">
      <g className="rough" fill="none" stroke="#0d0d0d" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        {/* spotlight floor */}
        <ellipse cx="100" cy="226" rx="64" ry="10" fill="#0d0d0d" opacity="0.15" stroke="none" />
        {/* trench coat body */}
        <path d="M58 232 L62 150 Q60 120 80 110 L120 110 Q140 120 138 150 L142 232" fill="#f4f1e8" />
        <path d="M100 112 L100 232" />
        <path d="M80 120 L70 150 M120 120 L130 150" />
        {/* collar */}
        <path d="M82 112 L100 132 L118 112" fill="#f4f1e8" />
        {/* arms */}
        <path d="M62 150 Q44 168 52 200" />
        <path d="M138 150 Q156 168 148 200" />
        {/* tie */}
        <path d="M100 132 l-7 12 l7 30 l7 -30 z" fill="#0d0d0d" />
        {/* head */}
        <circle cx="100" cy="78" r="30" fill="#f4f1e8" />
        {/* fedora */}
        <path d="M66 60 Q100 40 134 60 Q120 50 100 50 Q80 50 66 60 Z" fill="#0d0d0d" />
        <path d="M58 62 Q100 74 142 62" />
        <path d="M72 58 Q100 30 128 58 L128 60 Q100 46 72 60 Z" fill="#0d0d0d" />
        {/* face */}
        <path d="M88 78 q4 -5 9 0 M103 78 q4 -5 9 0" strokeWidth="2.6" />
        <path d="M92 94 q8 6 16 0" strokeWidth="2.6" />
      </g>
    </svg>
  );
}

export default function Lobby({ onBack }: { onBack: () => void }) {
  return (
    <RoomShell
      title="The Lobby"
      kicker="Case File · Who's Aditya?"
      onBack={onBack}
      backLabel="Hallway"
      scenery={
        <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-[0.13]">
          {/* tall window with moonlight */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <rect x="80" y="90" width="150" height="300" />
            <line x1="155" y1="90" x2="155" y2="390" />
            <line x1="80" y1="240" x2="230" y2="240" />
          </g>
          {/* wall clock */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <circle cx="850" cy="150" r="55" />
            <line x1="850" y1="150" x2="850" y2="115" />
            <line x1="850" y1="150" x2="878" y2="160" />
          </g>
          {/* potted plant */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <path d="M780 620 L800 540 M800 620 Q760 540 770 510 M800 620 Q840 540 832 505" />
            <path d="M770 620 h60 l-8 40 h-44 z" />
          </g>
        </svg>
      }
    >
      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="paper-card mb-8 flex flex-col items-center gap-6 rounded-sm p-6 sm:flex-row sm:p-8"
      >
        <div className="shrink-0">
          <Detective />
        </div>
        <div>
          <h2 className="sign-font mb-3 text-2xl text-ink">{profile.name}</h2>
          <p className="dossier-font mb-3 text-xs uppercase tracking-widest text-ink/60">
            {profile.title} · {profile.tagline}
          </p>
          <p className="hand-font text-lg leading-relaxed text-ink/90">{profile.blurb}</p>
        </div>
      </motion.div>

      {/* Education — framed diploma */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="paper-card relative rounded-sm p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-2 border-2 border-dashed border-ink/30" />
        <div className="relative">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="sign-font text-xl text-ink sm:text-2xl">{education.school}</h2>
            <span className="dossier-font text-xs text-ink/70">{education.dates}</span>
          </div>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <p className="hand-font text-lg text-ink/90">{education.degree}</p>
            <span className="paper-card !shadow-none border-2 border-ink px-3 py-1 sign-font text-sm text-ink">
              GPA {education.gpa}
            </span>
          </div>
          <p className="dossier-font mb-2 text-[11px] uppercase tracking-widest text-ink/60">
            Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="hand-font rounded-full border-2 border-ink px-3 py-0.5 text-sm text-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </RoomShell>
  );
}
