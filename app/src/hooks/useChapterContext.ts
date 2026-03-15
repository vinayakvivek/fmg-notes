import { useOutletContext } from "react-router-dom";
import type { Chapter } from "../data/types";
import type { ChapterContext } from "../pages/ChapterPage";

interface FullContext extends ChapterContext {
  chapter: Chapter;
}

export function useChapterContext() {
  return useOutletContext<FullContext>();
}
