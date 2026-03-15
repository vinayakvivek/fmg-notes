import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  theme,
  toggle,
}: {
  theme: "dark" | "light";
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      className="rounded-lg p-2 transition-colors hover:bg-surface-hover"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-600" />
      )}
    </button>
  );
}
