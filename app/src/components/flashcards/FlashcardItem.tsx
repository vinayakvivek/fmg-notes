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
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div
        className="perspective-1000 h-52 w-full max-w-lg cursor-pointer sm:h-64"
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className="backface-hidden absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-border bg-surface-alt p-5 shadow-lg sm:p-8">
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary sm:mb-3">
                Question
              </p>
              <p className="text-base font-medium leading-relaxed sm:text-lg">
                {front}
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-obs-500/50 bg-obs-500/5 p-5 shadow-lg sm:p-8">
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-obs-500 sm:mb-3">
                Answer
              </p>
              <p className="text-base font-medium leading-relaxed sm:text-lg">
                {back}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-xs text-text-secondary">Tap card to flip</p>

      {flipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex w-full max-w-xs gap-3"
        >
          <button
            onClick={() => {
              setFlipped(false);
              onKnow();
            }}
            className="flex-1 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-95"
          >
            Got it!
          </button>
          <button
            onClick={() => {
              setFlipped(false);
              onReview();
            }}
            className="flex-1 rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface-hover active:scale-95"
          >
            Review
          </button>
        </motion.div>
      )}
    </div>
  );
}
