import { NavLink, Outlet, useParams, Navigate } from "react-router-dom";
import {
  BookOpen,
  Layers,
  Brain,
  PenLine,
  RotateCcw,
} from "lucide-react";
import { getChapter } from "../data/chapters";

const tabs = [
  { path: "", icon: BookOpen, label: "Read", end: true },
  { path: "flashcards", icon: Layers, label: "Flashcards", end: false },
  { path: "quiz", icon: Brain, label: "Quiz", end: false },
  { path: "fill-blanks", icon: PenLine, label: "Fill Blanks", end: false },
  { path: "revision", icon: RotateCcw, label: "Revision", end: false },
];

export function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const chapter = getChapter(id!);

  if (!chapter) return <Navigate to="/" replace />;

  const isObs = chapter.subject === "obstetrics";

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border bg-surface-alt px-6 pt-4">
        <div className="mb-3">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              isObs
                ? "bg-obs-500/15 text-obs-600 dark:text-obs-400"
                : "bg-gyn-500/15 text-gyn-600 dark:text-gyn-400"
            }`}
          >
            {chapter.subject} — Ch {chapter.number}
          </span>
          <h1 className="mt-1 text-2xl font-bold">{chapter.title}</h1>
        </div>

        <div className="flex gap-1">
          {tabs.map(({ path, icon: Icon, label, end }) => (
            <NavLink
              key={label}
              to={path}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-b-2 border-obs-500 text-obs-500 bg-surface"
                    : "text-text-secondary hover:text-text"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Outlet context={chapter} />
      </div>
    </div>
  );
}
