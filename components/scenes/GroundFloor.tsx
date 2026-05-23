"use client";

import { motion } from "framer-motion";
import HoverButton from "@/components/ui/HoverButton";
import BackButton from "@/components/ui/BackButton";
import SpiralStaircase from "@/components/ui/SpiralStaircase";
import MobileFloorMenu from "@/components/scenes/MobileFloorMenu";

type Props = {
  onLobby: () => void;
  onDrawing: () => void;
  onUpstairs: () => void;
  onExit: () => void;
};

export default function GroundFloor({ onLobby, onDrawing, onUpstairs, onExit }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.18 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative h-full w-full overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #1f1f1f 0%, #0c0c0c 75%)" }}
    >
      <BackButton onClick={onExit} label="Outside" />

      {/* ===== Mobile: stacked door menu ===== */}
      <MobileFloorMenu
        className="md:hidden"
        heading="Ground Floor"
        caption="Pick a room"
        items={[
          { key: "lobby", label: "The Lobby", sublabel: "About & Education", onClick: onLobby, kind: "door" },
          { key: "drawing", label: "Drawing Room", sublabel: "Experience", onClick: onDrawing, kind: "door" },
          { key: "up", label: "Go Upstairs", sublabel: "Projects · Skills · Contact", onClick: onUpstairs, kind: "up" },
        ]}
      />

      {/* ===== Tablet / Desktop: spatial room ===== */}
      <div className="absolute inset-0 hidden md:block">
      <svg
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {/* back wall */}
        <rect x="0" y="0" width="1000" height="520" fill="#161616" />
        {/* wall trim */}
        <line x1="0" y1="60" x2="1000" y2="60" stroke="#f4f1e8" strokeOpacity="0.12" strokeWidth="3" />

        {/* floor in perspective */}
        <path d="M0 520 L1000 520 L1000 700 L0 700 Z" fill="#0c0c0c" />
        <g stroke="#f4f1e8" strokeOpacity="0.12" strokeWidth="2">
          <line x1="500" y1="520" x2="500" y2="700" />
          <line x1="300" y1="520" x2="120" y2="700" />
          <line x1="700" y1="520" x2="880" y2="700" />
          <line x1="150" y1="520" x2="-120" y2="700" />
          <line x1="850" y1="520" x2="1120" y2="700" />
          <line x1="0" y1="580" x2="1000" y2="580" />
          <line x1="0" y1="640" x2="1000" y2="640" />
        </g>
        {/* baseboard */}
        <line x1="0" y1="520" x2="1000" y2="520" stroke="#f4f1e8" strokeOpacity="0.3" strokeWidth="4" />

        {/* chandelier */}
        <g className="rough">
          <line x1="500" y1="0" x2="500" y2="70" stroke="#f4f1e8" strokeWidth="2" />
          <motion.g
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "500px 70px" }}
          >
            <path d="M440 90 Q500 70 560 90" fill="none" stroke="#f4f1e8" strokeWidth="3" />
            {[440, 500, 560].map((x) => (
              <g key={x}>
                <line x1={x} y1="86" x2={x} y2="104" stroke="#f4f1e8" strokeWidth="2" />
                <circle cx={x} cy="110" r="7" fill="#f4f1e8" stroke="#0d0d0d" strokeWidth="1.5" />
              </g>
            ))}
          </motion.g>
        </g>

        {/* rug */}
        <ellipse cx="500" cy="610" rx="260" ry="60" fill="none" stroke="#f4f1e8" strokeOpacity="0.25" strokeWidth="3" />
        <ellipse cx="500" cy="610" rx="210" ry="46" fill="url(#hatch2)" opacity="0.18" />

        {/* ===== LEFT doorway — Lobby ===== */}
        <g onClick={onLobby} style={{ cursor: "pointer" }} className="rough">
          <path d="M70 520 L70 250 Q70 200 130 200 L230 200 Q290 200 290 250 L290 520 Z"
            fill="url(#spotlight)" stroke="#f4f1e8" strokeWidth="5" />
          {/* warm glow inside */}
          <motion.path d="M95 510 L95 258 Q95 224 140 224 L222 224 Q265 224 265 258 L265 510 Z"
            fill="#2c2c2c"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }} />
          <rect x="150" y="470" width="60" height="6" fill="#f4f1e8" opacity="0.5" />
        </g>

        {/* ===== RIGHT doorway — Drawing Room ===== */}
        <g onClick={onDrawing} style={{ cursor: "pointer" }} className="rough">
          <path d="M710 520 L710 250 Q710 200 770 200 L870 200 Q930 200 930 250 L930 520 Z"
            fill="url(#spotlight)" stroke="#f4f1e8" strokeWidth="5" />
          <motion.path d="M735 510 L735 258 Q735 224 780 224 L862 224 Q905 224 905 258 L905 510 Z"
            fill="#2c2c2c"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          <rect x="790" y="470" width="60" height="6" fill="#f4f1e8" opacity="0.5" />
        </g>

        {/* ===== CENTER spiral staircase ===== */}
        {/* opening to upper floor */}
        <ellipse cx="500" cy="170" rx="118" ry="30" fill="#070707" stroke="#f4f1e8" strokeWidth="3" className="rough" />
        <SpiralStaircase cx={500} bottomY={448} topY={186} steps={15} stepsPerTurn={11} R={104} tiltY={30} onClick={onUpstairs} />
      </svg>

      {/* hovering navigation buttons */}
      <HoverButton
        label="The Lobby"
        sublabel="About & Education"
        onClick={onLobby}
        delay={0.3}
        className="left-3 top-[8%] sm:left-[6%] lg:left-[14%]"
      />
      <HoverButton
        label="Drawing Room"
        sublabel="Experience"
        onClick={onDrawing}
        delay={0.45}
        className="right-3 top-[8%] sm:right-[6%] lg:right-[14%]"
      />
      <HoverButton
        label="Go Upstairs"
        sublabel="Projects · Skills · Contact"
        onClick={onUpstairs}
        delay={0.6}
        className="left-1/2 top-[60%] -translate-x-1/2"
      />

      {/* floor caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="dossier-font absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.35em] text-ash"
      >
        Ground Floor — pick a room
      </motion.p>
      </div>
    </motion.div>
  );
}
