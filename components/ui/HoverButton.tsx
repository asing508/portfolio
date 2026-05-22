"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  sublabel?: string;
  onClick: () => void;
  /** position via inline style (percentages) */
  className?: string;
  delay?: number;
};

/**
 * A hovering, bobbing hand-drawn signpost button. Swings gently on a "string"
 * and squashes with rubber-hose energy on hover.
 */
export default function HoverButton({
  label,
  sublabel,
  onClick,
  className = "",
  delay = 0,
}: Props) {
  return (
    <div className={`group absolute z-30 ${className}`}>
      <motion.button
        onClick={onClick}
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={`${label}${sublabel ? " — " + sublabel : ""}`}
      >
        {/* string */}
        <div className="h-6 w-[2px] bg-paper/70" />
        <motion.div
          className="origin-top"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="paper-card relative flex flex-col items-center gap-1.5 rotate-[-1.5deg] px-8 py-4 transition-transform group-hover:rotate-[1.5deg]">
            {/* pin */}
            <span className="absolute -top-2.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-ink bg-paper" />
            <div className="sign-font whitespace-nowrap text-center text-2xl leading-none tracking-wide sm:text-3xl">
              {label}
            </div>
            {sublabel && (
              <div className="dossier-font whitespace-nowrap text-center text-xs uppercase tracking-wider text-ink/70 sm:text-sm">
                {sublabel}
              </div>
            )}
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
