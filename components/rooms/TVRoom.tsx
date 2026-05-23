"use client";

import { motion } from "framer-motion";
import RoomShell from "@/components/ui/RoomShell";
import { profile, skills } from "@/data/portfolio";

type Channel = { label: string; value: string; href: string; icon: JSX.Element };

const I = (d: string) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {d.split("|").map((p, i) => (<path key={i} d={p} />))}
  </svg>
);

const channels: Channel[] = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: I("M3 6 h18 v12 H3 Z|M3 7 l9 7 l9 -7") },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: I("M5 4 h4 l2 5 l-3 2 a12 12 0 0 0 5 5 l2 -3 l5 2 v4 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2") },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: I("M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.5 1.3a12 12 0 0 0-6 0C7 4.6 6 4.9 6 4.9a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 11c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V23") },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: I("M4 9 h3 v11 H4 Z|M5.5 4.5 a1.5 1.5 0 1 0 0 3 a1.5 1.5 0 0 0 0 -3|M10 9 h3 v1.5 a3.2 3.2 0 0 1 6 1.5 V20 h-3 v-6 a1.5 1.5 0 0 0 -3 0 V20 h-3 Z") },
  { label: "Résumé", value: "Download PDF", href: profile.resume, icon: I("M14 3 H6 a1 1 0 0 0 -1 1 v16 a1 1 0 0 0 1 1 h12 a1 1 0 0 0 1 -1 V8 Z|M14 3 v5 h5|M12 11 v6|M9 14 l3 3 l3 -3") },
];

export default function TVRoom({ onBack }: { onBack: () => void }) {
  return (
    <RoomShell
      title="TV Room"
      kicker="Case File · Toolkit & Hailing Frequencies"
      onBack={onBack}
      backLabel="Hallway"
      scenery={
        <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-[0.12]">
          {/* bookshelf */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <rect x="60" y="180" width="180" height="430" />
            <line x1="60" y1="290" x2="240" y2="290" /><line x1="60" y1="400" x2="240" y2="400" /><line x1="60" y1="510" x2="240" y2="510" />
            {[80, 100, 120, 150, 180, 210].map((x) => <line key={x} x1={x} y1="200" x2={x} y2="288" />)}
          </g>
          {/* couch */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <path d="M700 640 v-90 q0 -30 40 -30 h180 q40 0 40 30 v90" />
            <path d="M740 560 h180" />
          </g>
          {/* floor lamp */}
          <g stroke="#f4f1e8" strokeWidth="3" fill="none">
            <path d="M620 620 v-220 M600 620 h40" />
            <path d="M590 400 h60 l-14 -50 h-32 z" />
          </g>
        </svg>
      }
    >
      {/* ===== The Television ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, type: "spring", stiffness: 90, damping: 14 }}
        className="mx-auto mb-12 w-full max-w-2xl"
      >
        {/* antenna */}
        <svg viewBox="0 0 200 70" className="mx-auto -mb-1 h-14 w-44">
          <g fill="none" stroke="#f4f1e8" strokeWidth="3.5" strokeLinecap="round">
            <motion.line x1="100" y1="62" x2="60" y2="10"
              animate={{ x2: [60, 56, 60] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.line x1="100" y1="62" x2="146" y2="14"
              animate={{ x2: [146, 150, 146] }} transition={{ duration: 3.4, repeat: Infinity }} />
            <circle cx="60" cy="10" r="4" fill="#f4f1e8" />
            <circle cx="146" cy="14" r="4" fill="#f4f1e8" />
          </g>
        </svg>

        <div className="paper-card flex gap-4 rounded-xl p-4 sm:gap-5 sm:p-6">
          {/* screen */}
          <div className="relative aspect-[4/3] flex-1 overflow-hidden rounded-lg border-[6px] border-ink bg-ink">
            {/* static */}
            <div className="grain-overlay !absolute !z-0 !opacity-30 !mix-blend-screen" />
            {/* scanlines */}
            <div className="pointer-events-none absolute inset-0 z-10"
              style={{ backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,0.06) 0 2px,transparent 2px 4px)" }} />
            {/* on air */}
            <div className="absolute left-3 top-3 z-20 flex items-center gap-2">
              <motion.span className="h-2.5 w-2.5 rounded-full bg-paper"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
              <span className="dossier-font text-[10px] uppercase tracking-widest text-paper/80">On Air</span>
            </div>

            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
              <p className="sign-font text-xl leading-none text-paper ink-shadow sm:text-2xl">{profile.name}</p>
              <p className="dossier-font mt-2 text-[10px] uppercase tracking-[0.25em] text-paper/70 sm:text-xs">
                {profile.title}
              </p>
              <p className="hand-font mt-4 text-sm text-paper/80 sm:text-base">
                ▸ Tune in below to reach me ◂
              </p>
            </div>
          </div>

          {/* control panel (hidden on phones so the screen goes full-width) */}
          <div className="hidden w-14 flex-col items-center justify-between py-1 sm:flex sm:w-16">
            <div className="dossier-font mb-1 text-[9px] uppercase tracking-widest text-ink/60">VOL</div>
            {[0, 1].map((k) => (
              <div key={k} className="relative mb-3 h-9 w-9 rounded-full border-[3px] border-ink sm:h-10 sm:w-10">
                <span className="absolute left-1/2 top-1 h-3 w-[3px] -translate-x-1/2 bg-ink" style={{ transform: `rotate(${k ? 40 : -30}deg)`, transformOrigin: "bottom" }} />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-ink/70" />
              ))}
            </div>
          </div>
        </div>
        {/* legs */}
        <div className="mx-auto flex w-3/4 justify-between">
          <div className="h-7 w-2 -skew-x-12 bg-paper" />
          <div className="h-7 w-2 skew-x-12 bg-paper" />
        </div>

        {/* channel buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              whileHover={{ y: -3, rotate: -1 }}
              whileTap={{ scale: 0.96 }}
              className="paper-card flex items-center gap-3 rounded-sm p-3 text-ink"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink text-ink">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="dossier-font block text-[9px] uppercase tracking-widest text-ink/55">{c.label}</span>
                <span className="hand-font block truncate text-sm text-ink">{c.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ===== Skills ===== */}
      <motion.h2
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="sign-font mb-5 text-center text-2xl text-paper ink-shadow"
      >
        The Toolkit
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.08 }}
            className={`paper-card rounded-sm p-4 ${i === skills.length - 1 && skills.length % 2 ? "sm:col-span-2" : ""}`}
          >
            <h3 className="dossier-font mb-3 text-[11px] uppercase tracking-[0.25em] text-ink/60">{g.label}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="hand-font rounded-full border-2 border-ink px-3 py-0.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </RoomShell>
  );
}
