import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { modules } from "../data/modules";
import { moduleColors } from "../utils/colors";
import { useProgress } from "../hooks/useProgress";

export function Dashboard() {
  const { getOverallPercent } = useProgress();

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">FMG Study Notes</h1>
        <p className="mt-1 text-text-secondary">
          Select a module to start studying
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const colors = moduleColors(mod.color);
          const chapterCount = mod.chapters.length;
          const doneCount = mod.chapters.filter(
            (ch) => getOverallPercent(mod.id, ch.id) === 100
          ).length;

          return (
            <Link
              key={mod.id}
              to={`/module/${mod.id}`}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-alt p-6 transition-all hover:shadow-lg hover:${colors.border}/50`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.tag}`}
                >
                  {mod.shortName}
                </span>
                <ChevronRight className="h-5 w-5 text-text-secondary transition-transform group-hover:translate-x-1" />
              </div>

              <h2 className="mt-4 text-lg font-bold leading-tight">
                {mod.name}
              </h2>

              <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
                <BookOpen className="h-4 w-4" />
                <span>
                  {chapterCount} chapter{chapterCount !== 1 ? "s" : ""}
                </span>
                {doneCount > 0 && (
                  <span className={`ml-auto text-xs font-medium ${colors.accent}`}>
                    {doneCount}/{chapterCount} complete
                  </span>
                )}
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full rounded-full bg-surface-hover">
                <div
                  className={`h-full rounded-full ${colors.progressBar} transition-all duration-500`}
                  style={{
                    width: `${
                      chapterCount > 0
                        ? (doneCount / chapterCount) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </Link>
          );
        })}

        {/* Placeholder for future modules */}
        <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-border p-6 text-text-secondary">
          <div className="text-center">
            <p className="text-sm font-medium">More modules coming soon</p>
            <p className="mt-1 text-xs">Surgery, Medicine, Pediatrics...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
