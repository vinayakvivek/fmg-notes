import { motion } from "framer-motion";
import { Zap } from "lucide-react";

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-obs-600 dark:text-obs-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function KeyPointBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="my-3 rounded-xl border-l-4 border-obs-500 bg-obs-500/5 p-4"
    >
      <div className="flex items-center gap-2 text-obs-600 dark:text-obs-400">
        <Zap className="h-4 w-4" />
        <span className="text-sm font-bold">{label}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed">{renderText(value)}</p>
    </motion.div>
  );
}
