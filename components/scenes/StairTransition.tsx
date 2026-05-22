"use client";

import { motion } from "framer-motion";

/** Fast, clean black wipe with chevrons streaming in the travel direction. */
export default function StairTransition({ dir }: { dir: "up" | "down" }) {
  const up = dir === "up";
  const rows = [0, 1, 2, 3, 4];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-ink"
    >
      {rows.map((i) => (
        <motion.svg
          key={i}
          viewBox="0 0 60 24"
          width="54"
          height="22"
          initial={{ opacity: 0, y: up ? 26 : -26 }}
          animate={{ opacity: [0, 1, 0], y: up ? -26 : 26 }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: "easeInOut" }}
        >
          <path
            d={up ? "M6 18 L30 6 L54 18" : "M6 6 L30 18 L54 6"}
            fill="none"
            stroke="#f4f1e8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
      <span className="sign-font mt-2 text-lg tracking-widest text-paper">
        {up ? "Up we go" : "Going down"}
      </span>
    </motion.div>
  );
}
