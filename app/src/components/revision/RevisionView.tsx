import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useProgress } from "../../hooks/useProgress";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useChapterContext } from "../../hooks/useChapterContext";

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-obs-600 dark:text-obs-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function RevisionView() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [currentIdx, setCurrentIdx] = useState(0);

  const items = chapter.quickRevision;
  const total = items.length;

  const goNext = useCallback(() => {
    setCurrentIdx((i) => {
      const next = Math.min(i + 1, total - 1);
      if (next === total - 1) {
        updateChapterProgress(moduleId, chapter.id, { revisionDone: true });
      }
      return next;
    });
  }, [total, moduleId, chapter.id, updateChapterProgress]);

  const goPrev = useCallback(() => {
    setCurrentIdx((i) => Math.max(i - 1, 0));
  }, []);

  useKeyboard({ ArrowRight: goNext, ArrowLeft: goPrev });

  if (total === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-text-secondary">
        No revision points for this chapter yet.
      </div>
    );
  }

  const isLast = currentIdx === total - 1;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-8">
      <div className="mb-4 flex w-full items-center justify-between">
        <span className="text-sm text-text-secondary">Quick Revision</span>
        <span className="text-sm font-medium">
          {currentIdx + 1} / {total}
        </span>
      </div>

      {/* Progress dots */}
      <div className="mb-6 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIdx
                ? "w-8 bg-obs-500"
                : i < currentIdx
                  ? "w-2 bg-obs-500/50"
                  : "w-2 bg-border"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <div className="relative rounded-2xl border-2 border-border bg-surface-alt p-8 shadow-sm">
            <span className="absolute -top-3 left-4 rounded-full bg-obs-500 px-3 py-0.5 text-xs font-bold text-white">
              {currentIdx + 1}
            </span>
            <p className="text-base leading-relaxed">
              {renderText(items[currentIdx])}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-text-secondary transition hover:bg-surface-hover disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Prev
        </button>

        {isLast ? (
          <button
            onClick={() =>
              updateChapterProgress(moduleId, chapter.id, { revisionDone: true })
            }
            className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <CheckCircle2 className="h-4 w-4" />
            Done!
          </button>
        ) : (
          <button
            onClick={goNext}
            className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-text-secondary transition hover:bg-surface-hover"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-text-secondary">
        Use ← → arrow keys to navigate
      </p>
    </div>
  );
}
