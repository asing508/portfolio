/**
 * Global SVG <defs>: hand-drawn "rough ink" filters + cross-hatch / paper
 * patterns. Rendered once, referenced everywhere via url(#id).
 */
export default function InkDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden
      style={{ position: "absolute", pointerEvents: "none" }}
    >
      <defs>
        {/* wobbly hand-drawn displacement — applied to clean paths */}
        <filter id="roughpaper" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* gentler wobble for big shapes */}
        <filter id="roughsoft" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* cross-hatch shading pattern */}
        <pattern
          id="hatch"
          width="8"
          height="8"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#0d0d0d" strokeWidth="1.4" />
        </pattern>

        <pattern
          id="hatch2"
          width="6"
          height="6"
          patternTransform="rotate(-45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0d0d0d" strokeWidth="1" />
        </pattern>

        {/* dotted stipple */}
        <pattern
          id="stipple"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="0.9" fill="#0d0d0d" />
        </pattern>

        {/* radial spotlight gradient */}
        <radialGradient id="spotlight" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="60%" stopColor="#141414" />
          <stop offset="100%" stopColor="#070707" />
        </radialGradient>

        <radialGradient id="moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4f1e8" />
          <stop offset="80%" stopColor="#e8e3d5" />
          <stop offset="100%" stopColor="#bdb8a8" />
        </radialGradient>
      </defs>
    </svg>
  );
}
