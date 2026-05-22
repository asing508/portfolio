import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        paper: "#f4f1e8",
        soot: "#1a1a1a",
        bone: "#e8e3d5",
        ash: "#9c968a",
      },
      fontFamily: {
        sign: ["var(--font-sign)", "cursive"],
        hand: ["var(--font-hand)", "cursive"],
        dossier: ["var(--font-dossier)", "monospace"],
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.06" },
          "50%": { opacity: "0.10" },
          "73%": { opacity: "0.04" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        bob: "bob 2.4s ease-in-out infinite",
        flicker: "flicker 0.18s steps(2) infinite",
        sway: "sway 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
