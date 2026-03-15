import { motion } from "framer-motion";

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

export function TableBlock({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-4 overflow-x-auto rounded-xl border border-border"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-alt">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors"
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2.5">
                  {renderText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
