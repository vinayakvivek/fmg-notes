const colorMap: Record<
  string,
  {
    badge: string;
    activeBg: string;
    activeText: string;
    number: string;
    tag: string;
    accent: string;
    progressBar: string;
    border: string;
  }
> = {
  orange: {
    badge: "bg-obs-500/20 text-obs-600 dark:text-obs-400",
    activeBg: "bg-obs-500/10",
    activeText: "text-obs-500",
    number: "text-obs-600 dark:text-obs-400",
    tag: "bg-obs-500/15 text-obs-600 dark:text-obs-400",
    accent: "text-obs-500",
    progressBar: "bg-obs-500",
    border: "border-obs-500",
  },
  teal: {
    badge: "bg-gyn-500/20 text-gyn-600 dark:text-gyn-400",
    activeBg: "bg-gyn-500/10",
    activeText: "text-gyn-500",
    number: "text-gyn-600 dark:text-gyn-400",
    tag: "bg-gyn-500/15 text-gyn-600 dark:text-gyn-400",
    accent: "text-gyn-500",
    progressBar: "bg-gyn-500",
    border: "border-gyn-500",
  },
  blue: {
    badge: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    activeBg: "bg-blue-500/10",
    activeText: "text-blue-500",
    number: "text-blue-600 dark:text-blue-400",
    tag: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    accent: "text-blue-500",
    progressBar: "bg-blue-500",
    border: "border-blue-500",
  },
  purple: {
    badge: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
    activeBg: "bg-purple-500/10",
    activeText: "text-purple-500",
    number: "text-purple-600 dark:text-purple-400",
    tag: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    accent: "text-purple-500",
    progressBar: "bg-purple-500",
    border: "border-purple-500",
  },
  rose: {
    badge: "bg-rose-500/20 text-rose-600 dark:text-rose-400",
    activeBg: "bg-rose-500/10",
    activeText: "text-rose-500",
    number: "text-rose-600 dark:text-rose-400",
    tag: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
    accent: "text-rose-500",
    progressBar: "bg-rose-500",
    border: "border-rose-500",
  },
  green: {
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
    activeBg: "bg-green-500/10",
    activeText: "text-green-500",
    number: "text-green-600 dark:text-green-400",
    tag: "bg-green-500/15 text-green-600 dark:text-green-400",
    accent: "text-green-500",
    progressBar: "bg-green-500",
    border: "border-green-500",
  },
};

const fallback = colorMap.blue;

export function moduleColors(color: string) {
  return colorMap[color] ?? fallback;
}
