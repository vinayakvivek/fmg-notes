import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Home,
  Layers,
  Brain,
  PenLine,
  RotateCcw,
} from "lucide-react";
import { chapters } from "../../data/chapters";
import { useProgress } from "../../hooks/useProgress";

const modeIcons = [
  { path: "", icon: BookOpen, label: "Read" },
  { path: "/flashcards", icon: Layers, label: "Flashcards" },
  { path: "/quiz", icon: Brain, label: "Quiz" },
  { path: "/fill-blanks", icon: PenLine, label: "Fill Blanks" },
  { path: "/revision", icon: RotateCcw, label: "Revision" },
];

export function Sidebar() {
  const { getOverallPercent } = useProgress();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-surface-alt">
      <NavLink
        to="/"
        className="flex items-center gap-2 border-b border-border px-4 py-4"
      >
        <Home className="h-5 w-5 text-obs-500" />
        <span className="text-lg font-bold tracking-tight">FMG Notes</span>
      </NavLink>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
          Chapters
        </p>
        {chapters.map((ch) => {
          const pct = getOverallPercent(ch.id);
          return (
            <div key={ch.id} className="mb-1">
              <NavLink
                to={`/chapter/${ch.id}`}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-obs-500/10 text-obs-500 font-medium"
                      : "hover:bg-surface-hover text-text-secondary"
                  }`
                }
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-obs-500/20 text-xs font-bold text-obs-600 dark:text-obs-400">
                  {ch.number}
                </span>
                <span className="flex-1 truncate">{ch.title}</span>
                {pct > 0 && (
                  <span className="text-xs text-obs-500">{pct}%</span>
                )}
              </NavLink>

              <div className="ml-11 mt-1 flex flex-col gap-0.5">
                {modeIcons.map(({ path, icon: Icon, label }) => (
                  <NavLink
                    key={path}
                    to={`/chapter/${ch.id}${path}`}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-md px-2 py-1 text-xs transition-colors ${
                        isActive
                          ? "bg-obs-500/10 text-obs-500 font-medium"
                          : "hover:bg-surface-hover text-text-secondary"
                      }`
                    }
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
