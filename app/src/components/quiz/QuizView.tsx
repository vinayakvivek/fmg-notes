import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";
import { useProgress } from "../../hooks/useProgress";
import { useChapterContext } from "../../hooks/useChapterContext";

export function QuizView() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const mcqs = chapter.mcqs;
  const total = mcqs.length;

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

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
    setFinished(false);
  };

  if (total === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-text-secondary">
        No quiz questions for this chapter yet.
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <AnimatePresence mode="wait">
        {finished ? (
          <QuizResult key="result" score={score} total={total} onRetry={handleRetry} />
        ) : (
          <motion.div
            key={currentIdx}
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
