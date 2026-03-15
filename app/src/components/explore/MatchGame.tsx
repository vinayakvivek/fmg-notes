import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Shuffle, Trophy, RotateCcw } from "lucide-react";
import type { MatchPair } from "../../data/types";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type Side = "left" | "right";

interface Selection {
  side: Side;
  index: number;
  pairId: string;
}

export function MatchGame({ pairs }: { pairs: MatchPair[] }) {
  const [seed, setSeed] = useState(0);

  const { leftItems, rightItems } = useMemo(() => {
    void seed;
    return {
      leftItems: shuffle(pairs.map((p) => ({ pairId: p.id, text: p.left }))),
      rightItems: shuffle(pairs.map((p) => ({ pairId: p.id, text: p.right }))),
    };
  }, [pairs, seed]);

  const [selected, setSelected] = useState<Selection | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<{ left: number; right: number } | null>(null);
  const [score, setScore] = useState({ correct: 0, attempts: 0 });

  const reset = useCallback(() => {
    setSelected(null);
    setMatched(new Set());
    setWrong(null);
    setScore({ correct: 0, attempts: 0 });
    setSeed((s) => s + 1);
  }, []);

  const handleSelect = (side: Side, index: number, pairId: string) => {
    if (matched.has(pairId)) return;

    if (!selected) {
      setSelected({ side, index, pairId });
      return;
    }

    if (selected.side === side) {
      setSelected({ side, index, pairId });
      return;
    }

    const leftIdx = side === "left" ? index : selected.index;
    const rightIdx = side === "right" ? index : selected.index;
    const isCorrect = selected.pairId === pairId;

    setScore((s) => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      attempts: s.attempts + 1,
    }));

    if (isCorrect) {
      setMatched((prev) => new Set(prev).add(pairId));
      setSelected(null);
    } else {
      setWrong({ left: leftIdx, right: rightIdx });
      setTimeout(() => {
        setWrong(null);
        setSelected(null);
      }, 600);
    }
  };

  const allDone = matched.size === pairs.length;

  if (pairs.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-text-secondary">
        No match pairs for this chapter yet.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">Match the Pairs</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">
            {matched.size}/{pairs.length}
          </span>
          <button
            onClick={reset}
            className="rounded-lg p-2 text-text-secondary transition hover:bg-surface-hover active:scale-95"
            title="Shuffle & restart"
          >
            <Shuffle className="h-4 w-4" />
          </button>
        </div>
      </div>

      {allDone ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4 rounded-2xl bg-obs-500/10 p-8 text-center"
        >
          <Trophy className="h-12 w-12 text-obs-500" />
          <p className="text-lg font-bold">All matched!</p>
          <p className="text-sm text-text-secondary">
            {score.correct}/{score.attempts} correct on first try
          </p>
          <button
            onClick={reset}
            className="mt-2 flex items-center gap-2 rounded-lg bg-obs-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-obs-600 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" /> Play again
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            {leftItems.map((item, i) => {
              const isMatched = matched.has(item.pairId);
              const isSelected =
                selected?.side === "left" && selected.index === i;
              const isWrong = wrong?.left === i;

              return (
                <motion.button
                  key={`l-${item.pairId}`}
                  onClick={() => handleSelect("left", i, item.pairId)}
                  disabled={isMatched}
                  animate={
                    isWrong
                      ? { x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.4 } }
                      : {}
                  }
                  className={`w-full rounded-xl border-2 px-3 py-3 text-left text-sm font-medium transition sm:px-4 ${
                    isMatched
                      ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400 opacity-60"
                      : isWrong
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-obs-500 bg-obs-500/10 shadow-md"
                          : "border-border bg-surface-alt hover:border-obs-300 hover:bg-surface-hover"
                  }`}
                >
                  {item.text}
                </motion.button>
              );
            })}
          </div>

          <div className="space-y-2">
            {rightItems.map((item, i) => {
              const isMatched = matched.has(item.pairId);
              const isSelected =
                selected?.side === "right" && selected.index === i;
              const isWrong = wrong?.right === i;

              return (
                <motion.button
                  key={`r-${item.pairId}`}
                  onClick={() => handleSelect("right", i, item.pairId)}
                  disabled={isMatched}
                  animate={
                    isWrong
                      ? { x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.4 } }
                      : {}
                  }
                  className={`w-full rounded-xl border-2 px-3 py-3 text-left text-sm font-medium transition sm:px-4 ${
                    isMatched
                      ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400 opacity-60"
                      : isWrong
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-obs-500 bg-obs-500/10 shadow-md"
                          : "border-border bg-surface-alt hover:border-obs-300 hover:bg-surface-hover"
                  }`}
                >
                  {item.text}
                </motion.button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
