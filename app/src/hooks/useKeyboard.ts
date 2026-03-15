import { useEffect } from "react";

export function useKeyboard(
  keyMap: Record<string, () => void>,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    function handler(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      const fn = keyMap[e.key];
      if (fn) {
        e.preventDefault();
        fn();
      }
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [keyMap, enabled]);
}
