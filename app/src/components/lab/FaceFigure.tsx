import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 160, damping: 18 } as const;

/**
 * A face trying to wrinkle the forehead, shut both eyes and smile.
 * The patient's right side is on the viewer's left.
 */
export function FaceFigure({
  upperLost,
  lowerLost,
}: {
  upperLost: boolean;
  lowerLost: boolean;
}) {
  const mouth = `M52 ${lowerLost ? 141 : 126} Q80 150 108 126`;

  return (
    <svg
      viewBox="0 0 160 200"
      className="w-32 flex-shrink-0 sm:w-36"
      role="img"
      aria-label={
        upperLost
          ? "Whole right side of the face is paralysed"
          : lowerLost
            ? "Right lower face is paralysed, forehead spared"
            : "Face moves normally on both sides"
      }
    >
      <ellipse cx="80" cy="92" rx="58" ry="72" strokeWidth={2} className="fill-surface stroke-text-secondary" />
      <line x1="80" y1="24" x2="80" y2="160" strokeDasharray="2 5" className="stroke-border" />

      {/* Forehead wrinkles */}
      {[44, 51, 58].map((y) => (
        <g key={y} strokeWidth={1.5} strokeLinecap="round" className="stroke-text-secondary">
          <motion.line x1="42" y1={y} x2="72" y2={y} animate={{ opacity: upperLost ? 0 : 1 }} />
          <line x1="88" y1={y} x2="118" y2={y} />
        </g>
      ))}

      {/* Eyebrows */}
      <g strokeWidth={3} strokeLinecap="round" fill="none" className="stroke-text">
        <motion.path
          initial={false}
          animate={{ d: upperLost ? "M42 78 Q57 76 72 78" : "M42 70 Q57 62 72 70" }}
          transition={spring}
        />
        <path d="M88 70 Q103 62 118 70" />
      </g>

      {/* Eyes: shut on the working side, stuck open when orbicularis oculi is lost */}
      <g strokeWidth={2} strokeLinecap="round" className="stroke-text">
        <motion.ellipse
          cx="57"
          cy="92"
          rx="11"
          initial={false}
          animate={{ ry: upperLost ? 7 : 0.5 }}
          transition={spring}
          className="fill-surface"
        />
        <motion.circle cx="57" cy="92" r="3" animate={{ opacity: upperLost ? 1 : 0 }} className="fill-text" />
        <ellipse cx="103" cy="92" rx="11" ry="0.5" className="fill-surface" />
      </g>

      <path d="M80 98 V114 H74" strokeWidth={2} fill="none" strokeLinecap="round" className="stroke-text-secondary" />

      {/* Nasolabial folds */}
      <g strokeWidth={1.5} strokeLinecap="round" fill="none" className="stroke-text-secondary">
        <motion.path d="M60 112 Q50 120 48 130" animate={{ opacity: lowerLost ? 0 : 1 }} />
        <path d="M100 112 Q110 120 112 130" />
      </g>

      <motion.path
        initial={false}
        animate={{ d: mouth }}
        transition={spring}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
        className="stroke-text"
      />

      <text x="44" y="184" textAnchor="middle" className="fill-text-secondary text-[10px] font-semibold">
        Right
      </text>
      <text x="116" y="184" textAnchor="middle" className="fill-text-secondary text-[10px] font-semibold">
        Left
      </text>
    </svg>
  );
}
