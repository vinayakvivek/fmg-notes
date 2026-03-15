import { useCallback, useSyncExternalStore } from "react";

interface ChapterProgress {
  readerRead: boolean;
  flashcardsDone: number;
  flashcardsTotal: number;
  quizScore: number | null;
  quizTotal: number;
  fillBlanksCorrect: number;
  fillBlanksTotal: number;
  revisionDone: boolean;
}

const STORAGE_KEY = "fmg-progress";

let listeners: Array<() => void> = [];

function emitChange() {
  listeners.forEach((l) => l());
}

function getSnapshot(): Record<string, ChapterProgress> {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function useProgress() {
  const progress = useSyncExternalStore(subscribe, () =>
    JSON.stringify(getSnapshot())
  );

  const data: Record<string, ChapterProgress> = JSON.parse(progress);

  const getChapterProgress = useCallback(
    (chapterId: string): ChapterProgress => {
      return (
        data[chapterId] ?? {
          readerRead: false,
          flashcardsDone: 0,
          flashcardsTotal: 0,
          quizScore: null,
          quizTotal: 0,
          fillBlanksCorrect: 0,
          fillBlanksTotal: 0,
          revisionDone: false,
        }
      );
    },
    [data]
  );

  const updateChapterProgress = useCallback(
    (chapterId: string, updates: Partial<ChapterProgress>) => {
      const current = getSnapshot();
      const prev = current[chapterId] ?? {
        readerRead: false,
        flashcardsDone: 0,
        flashcardsTotal: 0,
        quizScore: null,
        quizTotal: 0,
        fillBlanksCorrect: 0,
        fillBlanksTotal: 0,
        revisionDone: false,
      };
      current[chapterId] = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      emitChange();
    },
    []
  );

  const getOverallPercent = useCallback(
    (chapterId: string): number => {
      const p = getChapterProgress(chapterId);
      let score = 0;
      let total = 5;
      if (p.readerRead) score++;
      if (p.flashcardsTotal > 0 && p.flashcardsDone >= p.flashcardsTotal)
        score++;
      if (p.quizScore !== null) score++;
      if (p.fillBlanksTotal > 0 && p.fillBlanksCorrect >= p.fillBlanksTotal)
        score++;
      if (p.revisionDone) score++;
      return Math.round((score / total) * 100);
    },
    [getChapterProgress]
  );

  return { getChapterProgress, updateChapterProgress, getOverallPercent };
}
