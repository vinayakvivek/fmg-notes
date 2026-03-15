import { Link } from "react-router-dom";
import {
  BookOpen,
  Layers,
  Brain,
  PenLine,
  RotateCcw,
} from "lucide-react";
import type { Chapter } from "../../data/types";
import { ProgressRing } from "./ProgressRing";
import { useProgress } from "../../hooks/useProgress";

const modes = [
  { path: "", icon: BookOpen, label: "Read", color: "text-blue-500" },
  { path: "/flashcards", icon: Layers, label: "Cards", color: "text-purple-500" },
  { path: "/quiz", icon: Brain, label: "Quiz", color: "text-green-500" },
  { path: "/fill-blanks", icon: PenLine, label: "Fill", color: "text-amber-500" },
  { path: "/revision", icon: RotateCcw, label: "Revise", color: "text-rose-500" },
];

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const { getOverallPercent } = useProgress();
  const pct = getOverallPercent(chapter.id);
  const isObs = chapter.subject === "obstetrics";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-alt p-5 transition-all hover:shadow-lg hover:shadow-obs-500/5 ${
        isObs ? "hover:border-obs-400/50" : "hover:border-gyn-400/50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              isObs
                ? "bg-obs-500/15 text-obs-600 dark:text-obs-400"
                : "bg-gyn-500/15 text-gyn-600 dark:text-gyn-400"
            }`}
          >
            {chapter.subject}
          </span>
          <h3 className="mt-2 text-lg font-bold leading-tight">
            <span className="text-text-secondary">Ch {chapter.number}.</span>{" "}
            {chapter.title}
          </h3>
        </div>
        <ProgressRing percent={pct} />
      </div>

      <div className="mt-4 flex gap-1">
        {modes.map(({ path, icon: Icon, label, color }) => (
          <Link
            key={path}
            to={`/chapter/${chapter.id}${path}`}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-text-secondary transition-colors hover:bg-surface-hover hover:text-text`}
          >
            <Icon className={`h-4 w-4 ${color}`} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
