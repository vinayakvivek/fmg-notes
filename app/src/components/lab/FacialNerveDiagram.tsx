import type { KeyboardEvent } from "react";
import { isLost } from "../../data/labs/facialNerve";
import type { FunctionId, SiteId } from "../../data/labs/facialNerve";

export type MarkerState = "idle" | "cut" | "correct" | "wrong";

interface Segment {
  id: string;
  d: string;
  deadAt: SiteId[];
}

// Paths are drawn in the direction the impulse travels.
const segments: Segment[] = [
  { id: "cortexL-stem", d: "M95 46 V64", deadAt: [] },
  { id: "cortexL-lower", d: "M95 64 V82 L145 100", deadAt: ["U"] },
  { id: "cortexL-upper", d: "M95 82 L205 100", deadAt: ["U"] },
  { id: "cortexR-upper", d: "M265 46 L225 100", deadAt: [] },
  { id: "trunk-0", d: "M180 140 V186", deadAt: [] },
  { id: "trunk-1", d: "M180 186 V250", deadAt: ["D"] },
  { id: "petrosal", d: "M180 215 H306 V228", deadAt: ["D"] },
  { id: "trunk-2", d: "M180 250 V310", deadAt: ["D", "C"] },
  { id: "stapedius", d: "M180 280 H100", deadAt: ["D", "C"] },
  { id: "trunk-3", d: "M180 310 V400", deadAt: ["D", "C", "B"] },
  { id: "chorda", d: "M180 340 H258", deadAt: ["D", "C", "B"] },
  { id: "trunk-4", d: "M180 400 V430", deadAt: ["D", "C", "B", "A"] },
  { id: "upper", d: "M180 430 L100 462", deadAt: ["D", "C", "B", "A"] },
  { id: "lower", d: "M180 430 L260 462", deadAt: ["D", "C", "B", "A", "U"] },
];

const markers: { id: SiteId; x: number; y: number }[] = [
  { id: "U", x: 95, y: 64 },
  { id: "D", x: 180, y: 186 },
  { id: "C", x: 180, y: 250 },
  { id: "B", x: 180, y: 310 },
  { id: "A", x: 180, y: 400 },
];

const targets: {
  fn: FunctionId[];
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
}[] = [
  { fn: ["lacrimation"], x: 258, y: 228, w: 96, h: 34, lines: ["Lacrimal, nasal &", "palatal glands"] },
  { fn: ["stapedius"], x: 14, y: 266, w: 86, h: 28, lines: ["Stapedius"] },
  { fn: ["taste", "salivation"], x: 258, y: 316, w: 96, h: 48, lines: ["Taste: anterior ⅔", "Submandibular &", "sublingual glands"] },
  { fn: ["upperFace"], x: 40, y: 462, w: 120, h: 36, lines: ["Upper face muscles", "forehead · eye closure"] },
  { fn: ["lowerFace"], x: 200, y: 462, w: 120, h: 36, lines: ["Lower face muscles", "smile · buccinator"] },
];

const markerStyle: Record<MarkerState, { circle: string; text: string }> = {
  idle: { circle: "fill-surface stroke-rose-500", text: "fill-rose-500" },
  cut: { circle: "fill-rose-500 stroke-rose-500", text: "fill-white" },
  correct: { circle: "fill-green-500 stroke-green-500", text: "fill-white" },
  wrong: { circle: "fill-surface stroke-text-secondary", text: "fill-text-secondary" },
};

export function FacialNerveDiagram({
  lesion,
  markerStates,
  onPick,
  disabled = false,
}: {
  /** Site whose effects are drawn on the nerve; null draws an intact nerve. */
  lesion: SiteId | null;
  markerStates: Partial<Record<SiteId, MarkerState>>;
  onPick: (site: SiteId) => void;
  disabled?: boolean;
}) {
  const onKey = (e: KeyboardEvent, site: SiteId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPick(site);
    }
  };

  return (
    <svg
      viewBox="0 0 368 510"
      className="mx-auto block w-full max-w-sm select-none"
      role="group"
      aria-label="Course of the right facial nerve with lesion sites"
    >
      {/* Cortex and nucleus */}
      <rect x="40" y="18" width="110" height="28" rx="8" className="fill-surface stroke-border" />
      <text x="95" y="36" textAnchor="middle" className="fill-text text-[10px] font-semibold">
        Left motor cortex
      </text>
      <rect x="210" y="18" width="110" height="28" rx="8" className="fill-surface stroke-border" />
      <text x="265" y="36" textAnchor="middle" className="fill-text text-[10px] font-semibold">
        Right motor cortex
      </text>

      <rect x="110" y="100" width="140" height="40" rx="10" className="fill-surface stroke-border" />
      <line x1="180" y1="100" x2="180" y2="140" className="stroke-border" />
      <text x="145" y="118" textAnchor="middle" className="fill-text text-[10px] font-semibold">
        Lower
      </text>
      <text x="145" y="130" textAnchor="middle" className="fill-text-secondary text-[8.5px]">
        face
      </text>
      <text x="215" y="118" textAnchor="middle" className="fill-text text-[10px] font-semibold">
        Upper
      </text>
      <text x="215" y="130" textAnchor="middle" className="fill-text-secondary text-[8.5px]">
        face
      </text>
      <text x="258" y="117" className="fill-text-secondary text-[9.5px]">
        Right facial
      </text>
      <text x="258" y="129" className="fill-text-secondary text-[9.5px]">
        nucleus (pons)
      </text>

      {/* Nerve segments */}
      {segments.map((seg) => {
        const dead = lesion !== null && seg.deadAt.includes(lesion);
        return (
          <g key={seg.id} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d={seg.d}
              strokeWidth={4}
              strokeDasharray={dead ? "2 7" : undefined}
              className={`transition-colors duration-500 ${
                dead ? "stroke-text-secondary/40" : "stroke-amber-500"
              }`}
            />
            {!dead && (
              <path d={seg.d} strokeWidth={2} className="nerve-impulse stroke-white" />
            )}
          </g>
        );
      })}

      {/* Landmarks */}
      <line x1="170" y1="163" x2="190" y2="163" strokeWidth={2} className="stroke-text-secondary" />
      <text x="164" y="166" textAnchor="end" className="fill-text-secondary text-[9.5px]">
        Internal acoustic meatus
      </text>
      <circle cx="180" cy="215" r="6" className="fill-amber-500 stroke-surface" strokeWidth={1.5} />
      <text x="168" y="218" textAnchor="end" className="fill-text-secondary text-[9.5px]">
        Geniculate ganglion
      </text>
      <line x1="170" y1="375" x2="190" y2="375" strokeWidth={2} className="stroke-text-secondary" />
      <text x="164" y="378" textAnchor="end" className="fill-text-secondary text-[9.5px]">
        Stylomastoid foramen
      </text>

      {/* Branch names */}
      <text x="243" y="208" textAnchor="middle" className="fill-text-secondary text-[9.5px]">
        Greater petrosal n.
      </text>
      <text x="140" y="273" textAnchor="middle" className="fill-text-secondary text-[9.5px]">
        N. to stapedius
      </text>
      <text x="214" y="333" textAnchor="middle" className="fill-text-secondary text-[9.5px]">
        Chorda tympani
      </text>

      {/* Targets */}
      {targets.map((t) => {
        const lost = t.fn.some((f) => isLost(f, lesion));
        const lineHeight = 11;
        const firstY = t.y + t.h / 2 - ((t.lines.length - 1) * lineHeight) / 2 + 3.5;
        return (
          <g key={t.fn.join("-")}>
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={t.h}
              rx="8"
              className={`transition-colors duration-500 ${
                lost ? "fill-rose-500/15 stroke-rose-500" : "fill-surface stroke-border"
              }`}
            />
            {t.lines.map((line, i) => (
              <text
                key={line}
                x={t.x + t.w / 2}
                y={firstY + i * lineHeight}
                textAnchor="middle"
                className={`text-[9.5px] ${
                  lost
                    ? "fill-rose-600 dark:fill-rose-400"
                    : i === 0
                      ? "fill-text font-semibold"
                      : "fill-text-secondary"
                }`}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Lesion sites */}
      {markers.map((m) => {
        const state = markerStates[m.id] ?? "idle";
        const style = markerStyle[state];
        return (
          <g
            key={m.id}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={`Lesion site ${m.id}`}
            aria-pressed={state === "cut"}
            onClick={() => !disabled && onPick(m.id)}
            onKeyDown={(e) => !disabled && onKey(e, m.id)}
            className={`outline-none ${disabled ? "" : "cursor-pointer"} [&:focus-visible>circle]:stroke-[3]`}
          >
            <circle cx={m.x} cy={m.y} r="22" fill="transparent" />
            <circle
              cx={m.x}
              cy={m.y}
              r="12"
              strokeWidth={2}
              className={`transition-colors duration-300 ${style.circle}`}
            />
            <text
              x={m.x}
              y={m.y + 4}
              textAnchor="middle"
              className={`pointer-events-none text-[11px] font-bold ${style.text}`}
            >
              {m.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
