import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getModule } from "../data/modules";
import { ChapterCard } from "../components/shared/ChapterCard";
import { moduleColors } from "../utils/colors";

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = getModule(moduleId!);

  if (!mod) return <Navigate to="/" replace />;

  const colors = moduleColors(mod.color);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-text-secondary transition hover:text-text"
      >
        <ArrowLeft className="h-4 w-4" />
        All Modules
      </Link>

      <div className="mb-8">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.tag}`}
        >
          {mod.shortName}
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{mod.name}</h1>
        <p className="mt-1 text-text-secondary">
          {mod.chapters.length} chapter{mod.chapters.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {mod.chapters.map((ch) => (
          <ChapterCard key={ch.id} chapter={ch} moduleId={mod.id} moduleColor={mod.color} />
        ))}
      </div>

      {mod.chapters.length === 0 && (
        <p className="py-12 text-center text-text-secondary">
          No chapters added yet.
        </p>
      )}
    </div>
  );
}
