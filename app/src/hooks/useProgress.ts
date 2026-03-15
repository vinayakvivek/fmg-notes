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

const defaultProgress: ChapterProgress = {
  readerRead: false,
  flashcardsDone: 0,
  flashcardsTotal: 0,
  quizScore: null,
  quizTotal: 0,
  fillBlanksCorrect: 0,
  fillBlanksTotal: 0,
  revisionDone: false,
};

function progressKey(moduleId: string, chapterId: string) {
  return `${moduleId}:${chapterId}`;
}

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
    (moduleId: string, chapterId: string): ChapterProgress => {
      return data[progressKey(moduleId, chapterId)] ?? { ...defaultProgress };
    },
    [data]
  );

  const updateChapterProgress = useCallback(
    (moduleId: string, chapterId: string, updates: Partial<ChapterProgress>) => {
      const current = getSnapshot();
      const key = progressKey(moduleId, chapterId);
      const prev = current[key] ?? { ...defaultProgress };
      current[key] = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      emitChange();
    },
    []
  );

  const getOverallPercent = useCallback(
    (moduleId: string, chapterId: string): number => {
      const p = getChapterProgress(moduleId, chapterId);
      let score = 0;
      const total = 5;
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
