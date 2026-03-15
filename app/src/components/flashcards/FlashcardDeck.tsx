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
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-4 flex w-full items-center justify-between sm:mb-6">
        <div>
          <span className="text-xl font-bold sm:text-2xl">
            {currentIdx + 1}
          </span>
          <span className="text-text-secondary">/{total}</span>
          <span className="ml-2 text-sm text-green-500 sm:ml-3">
            {known.size} known
          </span>
        </div>
        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 rounded-lg bg-surface-alt px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:bg-surface-hover active:scale-95"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Shuffle
        </button>
      </div>

      <div className="mb-4 h-1.5 w-full rounded-full bg-surface-alt sm:mb-6">
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

      <div className="mt-4 flex w-full items-center justify-between sm:mt-6 sm:justify-center sm:gap-4">
        <button
          onClick={goPrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition hover:bg-surface-hover active:scale-95 disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>
        <div className="flex max-w-[50vw] flex-wrap justify-center gap-1 sm:max-w-none">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIdx
                  ? "w-6 bg-obs-500"
                  : known.has(cards[i].id)
                    ? "w-2 bg-green-500"
                    : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={currentIdx === total - 1}
          className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition hover:bg-surface-hover active:scale-95 disabled:opacity-30"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 hidden text-xs text-text-secondary sm:block">
        Use ← → arrow keys to navigate
      </p>
    </div>
  );
}
