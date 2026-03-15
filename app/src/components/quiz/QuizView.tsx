import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";
import { useProgress } from "../../hooks/useProgress";
import { useChapterContext } from "../../hooks/useChapterContext";
import type { MCQ } from "../../data/types";

type Difficulty = MCQ["difficulty"];
type Filter = "all" | Difficulty;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "recall", label: "Recall" },
  { id: "clinical", label: "Clinical" },
  { id: "tricky", label: "Tricky" },
];

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const styles: Record<Difficulty, string> = {
    recall: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    clinical: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    tricky: "bg-red-500/15 text-red-600 dark:text-red-400",
  };
  const labels: Record<Difficulty, string> = {
    recall: "Recall",
    clinical: "Clinical Vignette",
    tricky: "High-Yield",
  };
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${styles[difficulty]}`}>
      {labels[difficulty]}
    </span>
  );
}

export function QuizView() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [filter, setFilter] = useState<Filter>("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [tierScores, setTierScores] = useState<Record<Difficulty, { correct: number; total: number }>>({
    recall: { correct: 0, total: 0 },
    clinical: { correct: 0, total: 0 },
    tricky: { correct: 0, total: 0 },
  });
  const [finished, setFinished] = useState(false);

  const mcqs = useMemo(
    () =>
      filter === "all"
        ? chapter.mcqs
        : chapter.mcqs.filter((q) => q.difficulty === filter),
    [chapter.mcqs, filter]
  );

  const total = mcqs.length;

  const handleFilterChange = (f: Filter) => {
    setFilter(f);
    setCurrentIdx(0);
    setScore(0);
    setTierScores({
      recall: { correct: 0, total: 0 },
      clinical: { correct: 0, total: 0 },
      tricky: { correct: 0, total: 0 },
    });
    setFinished(false);
  };

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    const currentQ = mcqs[currentIdx];
    setTierScores((prev) => ({
      ...prev,
      [currentQ.difficulty]: {
        correct: prev[currentQ.difficulty].correct + (correct ? 1 : 0),
        total: prev[currentQ.difficulty].total + 1,
      },
    }));

    if (currentIdx >= total - 1) {
      setFinished(true);
      updateChapterProgress(moduleId, chapter.id, {
        quizScore: newScore,
        quizTotal: total,
      });
    } else {
      setCurrentIdx((i) => i + 1);
    }
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setScore(0);
    setTierScores({
      recall: { correct: 0, total: 0 },
      clinical: { correct: 0, total: 0 },
      tricky: { correct: 0, total: 0 },
    });
    setFinished(false);
  };

  if (chapter.mcqs.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-text-secondary">
        No quiz questions for this chapter yet.
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto mb-6 flex max-w-2xl flex-wrap gap-2">
        {filters.map(({ id, label }) => {
          const count =
            id === "all"
              ? chapter.mcqs.length
              : chapter.mcqs.filter((q) => q.difficulty === id).length;
          const isActive = filter === id;
          return (
            <button
              key={id}
              onClick={() => handleFilterChange(id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? "bg-obs-500 text-white shadow-sm"
                  : "bg-surface-alt text-text-secondary hover:bg-surface-hover"
              }`}
            >
              {label}{" "}
              <span className={isActive ? "text-white/70" : "text-text-secondary/60"}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {finished ? (
          <QuizResult
            key="result"
            score={score}
            total={total}
            onRetry={handleRetry}
            tierScores={tierScores}
          />
        ) : total === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-sm text-text-secondary"
          >
            No questions in this category.
          </motion.div>
        ) : (
          <motion.div
            key={`${filter}-${currentIdx}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <QuizQuestion
              question={mcqs[currentIdx].question}
              options={mcqs[currentIdx].options}
              correctIndex={mcqs[currentIdx].correctIndex}
              explanation={mcqs[currentIdx].explanation}
              difficulty={mcqs[currentIdx].difficulty}
              onAnswer={handleAnswer}
              questionNumber={currentIdx + 1}
              total={total}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { DifficultyBadge };
