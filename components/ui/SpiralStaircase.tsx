/**
 * A hand-drawn black-metal spiral staircase rendered into a parent <svg>.
 * Treads fan out from a central pole on a true helix; a continuous handrail
 * traces the spiral. Pure geometry — no glow, no scatter.
 */
type Props = {
  cx: number;
  bottomY: number;
  topY: number;
  steps?: number;
  stepsPerTurn?: number;
  R?: number;
  tiltY?: number;
  onClick?: () => void;
};

export default function SpiralStaircase({
  cx,
  bottomY,
  topY,
  steps = 14,
  stepsPerTurn = 11,
  R = 96,
  tiltY = 30,
  onClick,
}: Props) {
  const rise = (bottomY - topY) / steps;
  const w = (2 * Math.PI) / stepsPerTurn; // angular width of one tread
  const railH = 78; // baluster height
  const TAU = Math.PI * 2;

  type Step = {
    i: number;
    yc: number;
    theta: number;
    tip: [number, number];
    tipB: [number, number]; // far outer corner
    front: boolean;
    railPt: [number, number];
  };

  const list: Step[] = Array.from({ length: steps }, (_, i) => {
    const theta = (i * TAU) / stepsPerTurn;
    const yc = bottomY - i * rise;
    const tip: [number, number] = [
      cx + R * Math.cos(theta),
      yc + tiltY * Math.sin(theta),
    ];
    const tipB: [number, number] = [
      cx + R * Math.cos(theta + w),
      yc - rise + tiltY * Math.sin(theta + w),
    ];
    return {
      i,
      yc,
      theta,
      tip,
      tipB,
      front: Math.sin(theta) > -0.15,
      railPt: [tip[0], tip[1] - railH],
    };
  });

  const tread = (s: Step) => (
    <g key={`t${s.i}`}>
      {/* riser (thickness under the tread) */}
      <path
        d={`M${cx} ${s.yc} L${s.tip[0]} ${s.tip[1]} L${s.tip[0]} ${s.tip[1] + 8} L${cx} ${s.yc + 8} Z`}
        fill="#0a0a0a"
        stroke="#f4f1e8"
        strokeWidth="2"
      />
      {/* top face of the tread */}
      <path
        d={`M${cx} ${s.yc} L${s.tip[0]} ${s.tip[1]} L${s.tipB[0]} ${s.tipB[1]} Z`}
        fill={s.i % 2 ? "#242424" : "#2c2c2c"}
        stroke="#f4f1e8"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* baluster */}
      <line
        x1={s.tip[0]}
        y1={s.tip[1]}
        x2={s.railPt[0]}
        y2={s.railPt[1]}
        stroke="#f4f1e8"
        strokeWidth="2"
        opacity="0.85"
      />
    </g>
  );

  const back = list.filter((s) => !s.front);
  const front = list.filter((s) => s.front);

  // handrail helix, split so the back arc sits behind the pole
  const railPath = (pts: Step[]) =>
    pts.length < 2
      ? ""
      : "M" + pts.map((s) => `${s.railPt[0]} ${s.railPt[1]}`).join(" L");

  return (
    <g
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
      className="rough"
    >
      {/* central pole */}
      <line x1={cx} y1={topY - railH - 6} x2={cx} y2={bottomY + 10} stroke="#f4f1e8" strokeWidth="2" />
      <rect x={cx - 5} y={topY - 6} width="10" height={bottomY - topY + 16} fill="#1a1a1a" stroke="#f4f1e8" strokeWidth="2" />

      {/* far side rail (behind pole) */}
      <path d={railPath(back)} fill="none" stroke="#f4f1e8" strokeWidth="2.4" opacity="0.55" />
      {back.map(tread)}

      {/* pole front face overlays back treads */}
      <rect x={cx - 5} y={topY - 6} width="10" height={bottomY - topY + 16} fill="#161616" stroke="#f4f1e8" strokeWidth="2" />

      {front.map(tread)}
      {/* near side rail (in front) */}
      <path d={railPath(front)} fill="none" stroke="#f4f1e8" strokeWidth="3" />
      {/* finial */}
      <circle cx={cx} cy={topY - railH - 6} r="4" fill="#f4f1e8" />
    </g>
  );
}
