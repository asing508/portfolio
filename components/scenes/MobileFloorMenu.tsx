"use client";

import { motion } from "framer-motion";

export type FloorItem = {
  key: string;
  label: string;
  sublabel: string;
  onClick: () => void;
  kind: "door" | "up" | "down";
};

function Chevrons({ dir }: { dir: "up" | "down" }) {
  const up = dir === "up";
  return (
    <svg viewBox="0 0 40 44" width="30" height="33" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={up ? `M8 ${30 - i * 9} L20 ${20 - i * 9} L32 ${30 - i * 9}` : `M8 ${14 + i * 9} L20 ${24 + i * 9} L32 ${14 + i * 9}`}
          fill="none"
          stroke="#0d0d0d"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </svg>
  );
}

/** Phone-first navigation: stacked door & staircase cards instead of the
 *  cropped spatial room SVG used on larger screens. */
export default function MobileFloorMenu({
  heading,
  caption,
  items,
  className = "",
}: {
  heading: string;
  caption: string;
  items: FloorItem[];
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 flex flex-col px-5 pb-8 pt-[4.5rem] ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 shrink-0 text-center"
      >
        <div className="dossier-font text-[10px] uppercase tracking-[0.32em] text-ash">
          {caption}
        </div>
        <h2 className="sign-font mt-1 text-3xl text-paper ink-shadow">{heading}</h2>
      </motion.div>

      <div className="flex flex-1 flex-col justify-center gap-4">
        {items.map((it, i) => {
          const isDoor = it.kind === "door";
          return (
            <motion.button
              key={it.key}
              onClick={it.onClick}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.1, type: "spring", stiffness: 140, damping: 16 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`${it.label} — ${it.sublabel}`}
              className={
                isDoor
                  ? "relative w-full overflow-hidden rounded-t-[2.2rem] rounded-b-md border-[3px] border-paper bg-gradient-to-b from-[#2a2a2a] to-[#0c0c0c] px-6 py-7 text-center shadow-[5px_5px_0_rgba(0,0,0,0.6)] active:from-[#363636]"
                  : "paper-card flex w-full items-center justify-center gap-4 rounded-md px-6 py-4"
              }
            >
              {isDoor ? (
                <>
                  {/* doorknob */}
                  <span className="absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-ink bg-paper" />
                  {/* panel seams */}
                  <span className="pointer-events-none absolute inset-x-6 inset-y-4 rounded-t-[1.6rem] border border-paper/25" />
                  <div className="sign-font text-2xl leading-none text-paper">{it.label}</div>
                  <div className="dossier-font mt-2 text-[11px] uppercase tracking-[0.2em] text-ash">
                    {it.sublabel}
                  </div>
                </>
              ) : (
                <>
                  <Chevrons dir={it.kind === "up" ? "up" : "down"} />
                  <div className="text-left">
                    <div className="sign-font text-xl leading-none text-ink">{it.label}</div>
                    <div className="dossier-font mt-1 text-[10px] uppercase tracking-[0.2em] text-ink/60">
                      {it.sublabel}
                    </div>
                  </div>
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      <p className="dossier-font mt-4 shrink-0 text-center text-[10px] uppercase tracking-[0.3em] text-ash">
        Tap a door to step in
      </p>
    </div>
  );
}
