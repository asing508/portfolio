"use client";

import { motion } from "framer-motion";

export default function BackButton({
  onClick,
  label = "Back",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.94 }}
      className="paper-card dossier-font fixed left-4 top-4 z-40 flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-widest sm:left-6 sm:top-6"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <g
          fill="none"
          stroke="#0d0d0d"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 5 L7 12 L14 19" />
          <path d="M7 12 H20" />
        </g>
      </svg>
      {label}
    </motion.button>
  );
}
