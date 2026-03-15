export function ProgressRing({
  percent,
  size = 48,
  stroke = 4,
  accentClass = "text-obs-500",
}: {
  percent: number;
  size?: number;
  stroke?: number;
  accentClass?: string;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        className="text-border"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={`${accentClass} transition-all duration-500`}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="rotate-[90deg] origin-center fill-text text-xs font-bold"
      >
        {percent}%
      </text>
    </svg>
  );
}
