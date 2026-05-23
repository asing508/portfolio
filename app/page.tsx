"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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

const SCENES: Scene[] = ["ground", "lobby", "drawing", "upstairs", "terrace", "tv"];
const onGround = (s: Scene) => s === "ground" || s === "lobby" || s === "drawing";
const onUpstairs = (s: Scene) => s === "upstairs" || s === "terrace" || s === "tv";

const sceneFromHash = (): Scene => {
  if (typeof window === "undefined") return "exterior";
  const h = window.location.hash.replace(/^#/, "");
  return SCENES.includes(h as Scene) ? (h as Scene) : "exterior";
};

/**
 * Scene navigation is driven through the URL hash so the browser/OS history
 * works natively: every forward move sets `location.hash` (a new history
 * entry), and the back button, mouse back button, Android back, and iOS
 * edge-swipe all fire `hashchange`, which we map back to a scene. We use the
 * hash (not the History API directly) because Next's App Router intercepts
 * pushState/replaceState and would turn these into real route navigations.
 */
export default function Page() {
  const [scene, setScene] = useState<Scene>("exterior");
  const [stairs, setStairs] = useState<null | "up" | "down">(null);

  const sceneRef = useRef<Scene>("exterior");
  sceneRef.current = scene;
  const timers = useRef<number[]>([]);

  /** Apply a scene, playing the staircase overlay when crossing floors. */
  const transitionTo = useCallback((next: Scene) => {
    const cur = sceneRef.current;
    if (cur === next) return;

    const crossesFloors =
      (onGround(cur) && onUpstairs(next)) || (onUpstairs(cur) && onGround(next));

    if (crossesFloors) {
      setStairs(onUpstairs(next) ? "up" : "down");
      const t1 = window.setTimeout(() => {
        setScene(next);
        const t2 = window.setTimeout(() => setStairs(null), 180);
        timers.current.push(t2);
      }, 420);
      timers.current.push(t1);
    } else {
      setScene(next);
    }
  }, []);

  /** Forward navigation: add a history entry; hashchange drives the swap. */
  const navigate = useCallback((next: Scene) => {
    window.location.hash = next;
  }, []);

  /** Any back affordance — in-app button, mouse back, Android back, iOS swipe. */
  const goBack = useCallback(() => window.history.back(), []);

  useEffect(() => {
    // honor a deep-linked hash on first load (e.g. refresh inside a room)
    const initial = sceneFromHash();
    if (initial !== "exterior") setScene(initial);

    const onHash = () => transitionTo(sceneFromHash());
    window.addEventListener("hashchange", onHash);

    const pending = timers.current;
    return () => {
      window.removeEventListener("hashchange", onHash);
      pending.forEach((t) => window.clearTimeout(t));
    };
  }, [transitionTo]);

  return (
    <main className="fixed inset-0 h-[100dvh] w-screen overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        {scene === "exterior" && (
          <Exterior key="exterior" onEnter={() => navigate("ground")} />
        )}

        {scene === "ground" && (
          <GroundFloor
            key="ground"
            onLobby={() => navigate("lobby")}
            onDrawing={() => navigate("drawing")}
            onUpstairs={() => navigate("upstairs")}
            onExit={goBack}
          />
        )}

        {scene === "lobby" && <Lobby key="lobby" onBack={goBack} />}
        {scene === "drawing" && <DrawingRoom key="drawing" onBack={goBack} />}

        {scene === "upstairs" && (
          <Upstairs
            key="upstairs"
            onTerrace={() => navigate("terrace")}
            onTV={() => navigate("tv")}
            onDownstairs={goBack}
          />
        )}

        {scene === "terrace" && <Terrace key="terrace" onBack={goBack} />}
        {scene === "tv" && <TVRoom key="tv" onBack={goBack} />}
      </AnimatePresence>

      <AnimatePresence>
        {stairs && <StairTransition key="stairs" dir={stairs} />}
      </AnimatePresence>
    </main>
  );
}
