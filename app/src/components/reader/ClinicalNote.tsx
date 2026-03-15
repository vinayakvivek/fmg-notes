import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ClinicalNote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="my-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4"
    >
      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
        <Stethoscope className="h-4 w-4" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Clinical Correlation
        </span>
      </div>
      <p className="mt-1 text-sm leading-relaxed">{renderText(text)}</p>
    </motion.div>
  );
}
