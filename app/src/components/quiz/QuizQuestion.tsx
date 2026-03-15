import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { DifficultyBadge } from "./QuizView";
import type { MCQ } from "../../data/types";

export function QuizQuestion({
  question,
  options,
  correctIndex,
  explanation,
  difficulty,
  onAnswer,
  questionNumber,
  total,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: MCQ["difficulty"];
  onAnswer: (correct: boolean) => void;
  questionNumber: number;
  total: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === correctIndex;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-secondary">
            Question {questionNumber} of {total}
          </span>
          <DifficultyBadge difficulty={difficulty} />
        </div>
        <div className="ml-4 h-1.5 w-24 rounded-full bg-surface-alt sm:w-40">
          <div
            className="h-full rounded-full bg-obs-500 transition-all duration-300"
            style={{ width: `${(questionNumber / total) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="mb-6 whitespace-pre-line text-lg font-bold leading-relaxed">
        {question}
      </h3>

      <div className="space-y-3">
        {options.map((opt, i) => {
          let style = "border-border bg-surface-alt hover:bg-surface-hover";
          if (answered) {
            if (i === correctIndex) style = "border-green-500 bg-green-500/10";
            else if (i === selected)
              style = "border-red-500 bg-red-500/10";
            else style = "border-border bg-surface-alt opacity-50";
          }

          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              whileTap={!answered ? { scale: 0.98 } : undefined}
              animate={
                answered && i === selected && !isCorrect
                  ? { x: [0, -8, 8, -4, 4, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-colors ${style}`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-hover text-xs font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {answered && i === correctIndex && (
                <Check className="h-5 w-5 text-green-500" />
              )}
              {answered && i === selected && !isCorrect && (
                <X className="h-5 w-5 text-red-500" />
              )}
            </motion.button>
          );
        })}
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 rounded-xl border p-4 ${
            isCorrect
              ? "border-green-500/30 bg-green-500/5"
              : "border-red-500/30 bg-red-500/5"
          }`}
        >
          <p className="text-sm font-bold mb-1">
            {isCorrect ? "Correct!" : "Incorrect"}
          </p>
          <p className="text-sm text-text-secondary">{explanation}</p>
        </motion.div>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex justify-end"
        >
          <button
            onClick={() => onAnswer(isCorrect)}
            className="rounded-xl bg-obs-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-obs-600"
          >
            Next →
          </button>
        </motion.div>
      )}
    </div>
  );
}
