import { NavLink, Outlet, useParams, Navigate, Link } from "react-router-dom";
import {
  BookOpen,
  Layers,
  Brain,
  PenLine,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";
import { getModule, getChapter } from "../data/modules";
import { moduleColors } from "../utils/colors";

const tabs = [
  { path: "", icon: BookOpen, label: "Read", end: true },
  { path: "flashcards", icon: Layers, label: "Flashcards", end: false },
  { path: "quiz", icon: Brain, label: "Quiz", end: false },
  { path: "fill-blanks", icon: PenLine, label: "Fill", end: false },
  { path: "revision", icon: RotateCcw, label: "Revise", end: false },
];

export interface ChapterContext {
  moduleId: string;
  chapterId: string;
  moduleColor: string;
}

export function ChapterPage() {
  const { moduleId, chapterId } = useParams<{
    moduleId: string;
    chapterId: string;
  }>();
  const mod = getModule(moduleId!);
  const chapter = getChapter(moduleId!, chapterId!);

  if (!mod || !chapter) return <Navigate to="/" replace />;

  const colors = moduleColors(mod.color);

  const context: ChapterContext = {
    moduleId: mod.id,
    chapterId: chapter.id,
    moduleColor: mod.color,
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border bg-surface-alt px-4 pt-3 sm:px-6 sm:pt-4">
        <Link
          to={`/module/${mod.id}`}
          className="mb-2 inline-flex items-center gap-1 text-xs text-text-secondary transition hover:text-text"
        >
          <ArrowLeft className="h-3 w-3" />
          <span className="hidden sm:inline">{mod.name}</span>
          <span className="sm:hidden">{mod.shortName}</span>
        </Link>

        <div className="mb-3">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${colors.tag}`}
          >
            {mod.shortName} — Ch {chapter.number}
          </span>
          <h1 className="mt-1 text-xl font-bold sm:text-2xl">
            {chapter.title}
          </h1>
        </div>

        <div className="-mx-4 flex gap-0.5 overflow-x-auto px-4 sm:-mx-0 sm:gap-1 sm:px-0">
          {tabs.map(({ path, icon: Icon, label, end }) => (
            <NavLink
              key={label}
              to={path}
              end={end}
              className={({ isActive }) =>
                `flex flex-shrink-0 items-center gap-1 rounded-t-lg px-3 py-2 text-xs font-medium transition-colors sm:gap-1.5 sm:px-4 sm:text-sm ${
                  isActive
                    ? `border-b-2 ${colors.border} ${colors.activeText} bg-surface`
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
        <Outlet context={{ chapter, ...context }} />
      </div>
    </div>
  );
}
