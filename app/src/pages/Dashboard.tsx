import { useState } from "react";
import { chapters } from "../data/chapters";
import { ChapterCard } from "../components/shared/ChapterCard";

type Filter = "all" | "obstetrics" | "gynaecology";

export function Dashboard() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? chapters : chapters.filter((c) => c.subject === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          FMG Study Notes
        </h1>
        <p className="mt-1 text-text-secondary">
          OBS & GYN — Dr. Gayathri MS
        </p>
      </div>

      <div className="mb-6 flex gap-2">
        {(["all", "obstetrics", "gynaecology"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
              filter === f
                ? f === "obstetrics"
                  ? "bg-obs-500 text-white"
                  : f === "gynaecology"
                    ? "bg-gyn-500 text-white"
                    : "bg-text text-surface"
                : "bg-surface-alt text-text-secondary hover:bg-surface-hover"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {filtered.map((ch) => (
          <ChapterCard key={ch.id} chapter={ch} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-text-secondary">
          No chapters yet for this subject.
        </p>
      )}
    </div>
  );
}
