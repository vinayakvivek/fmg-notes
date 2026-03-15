import { useState } from "react";
import { motion } from "framer-motion";

export function FlashcardItem({
  front,
  back,
  onKnow,
  onReview,
}: {
  front: string;
  back: string;
  onKnow: () => void;
  onReview: () => void;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="perspective-1000 h-64 w-full max-w-lg cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className="backface-hidden absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-border bg-surface-alt p-8 shadow-lg">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
                Question
              </p>
              <p className="text-lg font-medium leading-relaxed">{front}</p>
            </div>
          </div>

          {/* Back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-obs-500/50 bg-obs-500/5 p-8 shadow-lg">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-obs-500 mb-3">
                Answer
              </p>
              <p className="text-lg font-medium leading-relaxed">{back}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-xs text-text-secondary">
        Click card to flip
      </p>

      {flipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >
          <button
            onClick={() => {
              setFlipped(false);
              onKnow();
            }}
            className="rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Got it!
          </button>
          <button
            onClick={() => {
              setFlipped(false);
              onReview();
            }}
            className="rounded-xl bg-surface-alt px-6 py-2.5 text-sm font-semibold text-text-secondary border border-border transition-colors hover:bg-surface-hover"
          >
            Review again
          </button>
        </motion.div>
      )}
    </div>
  );
}
