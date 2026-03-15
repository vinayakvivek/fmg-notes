import type { Module, Chapter } from "../types";
import obg from "./obg";

export const modules: Module[] = [obg];

export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId);
}

export function getChapter(
  moduleId: string,
  chapterId: string
): Chapter | undefined {
  const mod = getModule(moduleId);
  return mod?.chapters.find((c) => c.id === chapterId);
}

export function getAllChapters(): Array<{ module: Module; chapter: Chapter }> {
  return modules.flatMap((m) =>
    m.chapters.map((c) => ({ module: m, chapter: c }))
  );
}
