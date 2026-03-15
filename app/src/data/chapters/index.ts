import type { Chapter } from "../types";
import ch01 from "./ch01";

export const chapters: Chapter[] = [ch01];

export function getChapter(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
