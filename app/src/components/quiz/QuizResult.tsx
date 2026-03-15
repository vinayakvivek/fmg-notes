import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import type { MCQ } from "../../data/types";

type Difficulty = MCQ["difficulty"];

const tierLabels: Record<Difficulty, string> = {
  recall: "Recall",
  clinical: "Clinical",
  tricky: "Tricky",
};

const tierColors: Record<Difficulty, string> = {
  recall: "bg-blue-500",
  clinical: "bg-amber-500",
  tricky: "bg-red-500",
};

export function QuizResult({
  score,
  total,
  onRetry,
  tierScores,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  tierScores?: Record<Difficulty, { correct: number; total: number }>;
}) {
  const pct = Math.round((score / total) * 100);
  const perfect = score === total;

  useEffect(() => {
    if (perfect) {
      const end = Date.now() + 1500;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [perfect]);

  const tiers: Difficulty[] = ["recall", "clinical", "tricky"];
  const activeTiers = tierScores
    ? tiers.filter((t) => tierScores[t].total > 0)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center py-12"
    >
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-full ${
          perfect
            ? "bg-amber-500/20 text-amber-500"
            : pct >= 50
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
        }`}
      >
        <Trophy className="h-12 w-12" />
      </div>

      <h2 className="mt-6 text-3xl font-bold">
        {score}/{total}
      </h2>
      <p className="text-lg text-text-secondary">{pct}% correct</p>

      <p className="mt-2 text-sm text-text-secondary">
        {perfect
          ? "Perfect score! Outstanding!"
          : pct >= 75
            ? "Great work! Almost there."
            : pct >= 50
              ? "Good effort. Keep studying!"
              : "Review this chapter and try again."}
      </p>

      {activeTiers.length > 1 && tierScores && (
        <div className="mt-6 w-full max-w-xs space-y-2">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Breakdown by Difficulty
          </p>
          {activeTiers.map((tier) => {
            const { correct, total: t } = tierScores[tier];
            const tierPct = t > 0 ? Math.round((correct / t) * 100) : 0;
            return (
              <div key={tier} className="flex items-center gap-3">
                <span className="w-16 text-xs font-medium text-text-secondary">
                  {tierLabels[tier]}
                </span>
                <div className="h-2 flex-1 rounded-full bg-surface-alt">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tierPct}%` }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className={`h-full rounded-full ${tierColors[tier]}`}
                  />
                </div>
                <span className="w-12 text-right text-xs font-bold">
                  {correct}/{t}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={onRetry}
        className="mt-8 flex items-center gap-2 rounded-xl bg-obs-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-obs-600"
      >
        <RotateCcw className="h-4 w-4" />
        Try Again
      </button>
    </motion.div>
  );
}
