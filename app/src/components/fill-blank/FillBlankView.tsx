import { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BlankSentence } from "./BlankSentence";
import { useProgress } from "../../hooks/useProgress";
import { useChapterContext } from "../../hooks/useChapterContext";

export function FillBlankView() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [correct, setCorrect] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const total = chapter.fillBlanks.length;

  const handleComplete = (allCorrect: boolean) => {
    const newCompleted = completed + 1;
    const newCorrect = allCorrect ? correct + 1 : correct;
    const newStreak = allCorrect ? streak + 1 : 0;

    setCompleted(newCompleted);
    if (allCorrect) setCorrect(newCorrect);
    setStreak(newStreak);
    setMaxStreak((m) => Math.max(m, newStreak));

    updateChapterProgress(moduleId, chapter.id, {
      fillBlanksCorrect: newCorrect,
      fillBlanksTotal: total,
    });
  };

  if (total === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-text-secondary">
        No fill-in-the-blank exercises for this chapter yet.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Fill in the Blanks</h2>
          <p className="text-sm text-text-secondary">
            {correct}/{total} correct
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-surface-alt px-3 py-1.5">
          <Flame
            className={`h-4 w-4 ${
              streak > 0 ? "text-obs-500" : "text-text-secondary"
            }`}
          />
          <span className="text-sm font-bold">
            {streak}
          </span>
          <span className="text-xs text-text-secondary">streak</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6 h-1.5 w-full rounded-full bg-surface-alt">
        <div
          className="h-full rounded-full bg-obs-500 transition-all duration-300"
          style={{ width: `${(completed / total) * 100}%` }}
        />
      </div>

      <div className="space-y-4">
        {chapter.fillBlanks.map((fb, i) => (
          <motion.div
            key={fb.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <BlankSentence
              sentence={fb.sentence}
              blanks={fb.blanks}
              onComplete={handleComplete}
            />
          </motion.div>
        ))}
      </div>

      {completed === total && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 rounded-xl bg-obs-500/10 p-6 text-center"
        >
          <p className="text-lg font-bold">
            {correct}/{total} correct
          </p>
          <p className="text-sm text-text-secondary">
            Best streak: {maxStreak}
          </p>
        </motion.div>
      )}
    </div>
  );
}
