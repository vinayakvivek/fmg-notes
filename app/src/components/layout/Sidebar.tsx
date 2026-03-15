import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Compass,
  Home,
  Layers,
  Brain,
  PenLine,
  RotateCcw,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { modules } from "../../data/modules";
import { useProgress } from "../../hooks/useProgress";
import { moduleColors } from "../../utils/colors";

const modeIcons = [
  { path: "", icon: Compass, label: "Explore" },
  { path: "/flashcards", icon: Layers, label: "Flashcards" },
  { path: "/quiz", icon: Brain, label: "Quiz" },
  { path: "/fill-blanks", icon: PenLine, label: "Fill Blanks" },
  { path: "/revision", icon: RotateCcw, label: "Revision" },
];

export function Sidebar() {
  const { moduleId } = useParams();
  const { getOverallPercent } = useProgress();
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    () => Object.fromEntries(modules.map((m) => [m.id, m.id === moduleId || modules.length === 1]))
  );

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

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
          Modules
        </p>

        {modules.map((mod) => {
          const colors = moduleColors(mod.color);
          const isOpen = expanded[mod.id];

          return (
            <div key={mod.id} className="mb-2">
              <button
                onClick={() => toggle(mod.id)}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-surface-hover"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold ${colors.badge}`}
                >
                  {mod.shortName}
                </span>
                <span className="flex-1 truncate text-left">{mod.name}</span>
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-text-secondary" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-text-secondary" />
                )}
              </button>

              {isOpen && (
                <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-2">
                  {mod.chapters.map((ch) => {
                    const pct = getOverallPercent(mod.id, ch.id);
                    return (
                      <div key={ch.id}>
                        <NavLink
                          to={`/module/${mod.id}/chapter/${ch.id}`}
                          end
                          className={({ isActive }) =>
                            `flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                              isActive
                                ? `${colors.activeText} ${colors.activeBg} font-medium`
                                : "hover:bg-surface-hover text-text-secondary"
                            }`
                          }
                        >
                          <span className={`text-xs font-bold ${colors.number}`}>
                            {ch.number}
                          </span>
                          <span className="flex-1 truncate">{ch.title}</span>
                          {pct > 0 && (
                            <span className={`text-xs ${colors.activeText}`}>
                              {pct}%
                            </span>
                          )}
                        </NavLink>

                        {/* Sub-modes */}
                        <div className="ml-6 flex flex-col gap-0.5">
                          {modeIcons.map(({ path, icon: Icon, label }) => (
                            <NavLink
                              key={path}
                              to={`/module/${mod.id}/chapter/${ch.id}${path}`}
                              end
                              className={({ isActive }) =>
                                `flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] transition-colors ${
                                  isActive
                                    ? `${colors.activeText} ${colors.activeBg} font-medium`
                                    : "hover:bg-surface-hover text-text-secondary"
                                }`
                              }
                            >
                              <Icon className="h-3 w-3" />
                              {label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
