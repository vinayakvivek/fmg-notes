import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export function QuizResult({
  score,
  total,
  onRetry,
}: {
  score: number;
  total: number;
  onRetry: () => void;
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
