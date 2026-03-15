import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shuffle, ArrowLeft, ArrowRight } from "lucide-react";
import { FlashcardItem } from "./FlashcardItem";
import { useProgress } from "../../hooks/useProgress";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useChapterContext } from "../../hooks/useChapterContext";

export function FlashcardDeck() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [shuffled, setShuffled] = useState(false);

  const cards = useMemo(() => {
    if (!shuffled) return chapter.flashcards;
    return [...chapter.flashcards].sort(() => Math.random() - 0.5);
  }, [chapter.flashcards, shuffled]);

  const card = cards[currentIdx];
  const total = cards.length;

  const goNext = useCallback(() => {
    setCurrentIdx((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIdx((i) => Math.max(i - 1, 0));
  }, []);

  useKeyboard({
    ArrowRight: goNext,
    ArrowLeft: goPrev,
  });

  const handleKnow = () => {
    const next = new Set(known);
    next.add(card.id);
    setKnown(next);
    updateChapterProgress(moduleId, chapter.id, {
      flashcardsDone: next.size,
      flashcardsTotal: total,
    });
    if (currentIdx < total - 1) {
      setTimeout(goNext, 200);
    }
  };

  const handleReview = () => {
    if (currentIdx < total - 1) {
      setTimeout(goNext, 200);
    }
  };

  const handleShuffle = () => {
    setShuffled(true);
    setCurrentIdx(0);
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-8">
      <div className="mb-6 flex w-full items-center justify-between">
        <div>
          <span className="text-2xl font-bold">{currentIdx + 1}</span>
          <span className="text-text-secondary">/{total}</span>
          <span className="ml-3 text-sm text-green-500">
            {known.size} known
          </span>
        </div>
        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 rounded-lg bg-surface-alt px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:bg-surface-hover"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Shuffle
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-1.5 w-full rounded-full bg-surface-alt">
        <div
          className="h-full rounded-full bg-obs-500 transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <FlashcardItem
            front={card.front}
            back={card.back}
            onKnow={handleKnow}
            onReview={handleReview}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-text-secondary transition hover:bg-surface-hover disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Prev
        </button>
        <div className="flex gap-1">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentIdx
                  ? "w-6 bg-obs-500"
                  : known.has(cards[i].id)
                    ? "bg-green-500"
                    : "bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={currentIdx === total - 1}
          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-text-secondary transition hover:bg-surface-hover disabled:opacity-30"
        >
          Next <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-xs text-text-secondary">
        Use ← → arrow keys to navigate
      </p>
    </div>
  );
}
