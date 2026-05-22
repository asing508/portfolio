"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import BackButton from "./BackButton";

type Props = {
  title: string;
  kicker?: string;
  onBack: () => void;
  backLabel?: string;
  /** absolutely-positioned scenery rendered behind the content */
  scenery?: ReactNode;
  children: ReactNode;
};

/** Shared frame for an interior "section" room: scenery + title placard + scroll. */
export default function RoomShell({
  title,
  kicker,
  onBack,
  backLabel,
  scenery,
  children,
}: Props) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative h-full w-full overflow-hidden bg-ink"
    >
      {scenery}

      <BackButton onClick={onBack} label={backLabel} />

      <div className="room-scroll relative z-20 h-full w-full">
        <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col px-5 pb-24 pt-20 sm:px-8">
          {/* title placard */}
          <motion.div
            initial={{ y: -24, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: -1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 12 }}
            className="paper-card mx-auto mb-10 inline-block px-8 py-4"
          >
            {kicker && (
              <div className="dossier-font text-center text-[11px] uppercase tracking-[0.3em] text-ink/60">
                {kicker}
              </div>
            )}
            <h1 className="sign-font text-center text-3xl leading-none text-ink sm:text-4xl">
              {title}
            </h1>
          </motion.div>

          {children}
        </div>
      </div>
    </motion.div>
  );
}
