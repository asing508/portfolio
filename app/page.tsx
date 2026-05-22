"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Exterior from "@/components/scenes/Exterior";
import GroundFloor from "@/components/scenes/GroundFloor";
import Upstairs from "@/components/scenes/Upstairs";
import StairTransition from "@/components/scenes/StairTransition";
import Lobby from "@/components/rooms/Lobby";
import DrawingRoom from "@/components/rooms/DrawingRoom";
import Terrace from "@/components/rooms/Terrace";
import TVRoom from "@/components/rooms/TVRoom";

export type Scene =
  | "exterior"
  | "ground"
  | "lobby"
  | "drawing"
  | "upstairs"
  | "terrace"
  | "tv";

export default function Page() {
  const [scene, setScene] = useState<Scene>("exterior");
  const [stairs, setStairs] = useState<null | "up" | "down">(null);

  const go = useCallback((s: Scene) => setScene(s), []);

  // staircase transition: play climb/descend overlay, then swap floors
  const takeStairs = useCallback((dir: "up" | "down") => {
    setStairs(dir);
    window.setTimeout(() => {
      setScene(dir === "up" ? "upstairs" : "ground");
      window.setTimeout(() => setStairs(null), 180);
    }, 420);
  }, []);

  return (
    <main className="fixed inset-0 h-[100dvh] w-screen overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        {scene === "exterior" && (
          <Exterior key="exterior" onEnter={() => go("ground")} />
        )}

        {scene === "ground" && (
          <GroundFloor
            key="ground"
            onLobby={() => go("lobby")}
            onDrawing={() => go("drawing")}
            onUpstairs={() => takeStairs("up")}
            onExit={() => go("exterior")}
          />
        )}

        {scene === "lobby" && <Lobby key="lobby" onBack={() => go("ground")} />}
        {scene === "drawing" && (
          <DrawingRoom key="drawing" onBack={() => go("ground")} />
        )}

        {scene === "upstairs" && (
          <Upstairs
            key="upstairs"
            onTerrace={() => go("terrace")}
            onTV={() => go("tv")}
            onDownstairs={() => takeStairs("down")}
          />
        )}

        {scene === "terrace" && (
          <Terrace key="terrace" onBack={() => go("upstairs")} />
        )}
        {scene === "tv" && <TVRoom key="tv" onBack={() => go("upstairs")} />}
      </AnimatePresence>

      <AnimatePresence>
        {stairs && <StairTransition key="stairs" dir={stairs} />}
      </AnimatePresence>
    </main>
  );
}
