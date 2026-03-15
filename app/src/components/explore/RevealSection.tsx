import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, Stethoscope } from "lucide-react";
import type { ContentBlock } from "../../data/types";
import { FlowchartBlock } from "../reader/FlowchartBlock";

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-obs-600 dark:text-obs-400">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function RevealOverlay({
  revealed,
  onReveal,
  children,
}: {
  revealed: boolean;
  onReveal: () => void;
  children: React.ReactNode;
}) {
  if (revealed) return <>{children}</>;
  return (
    <button
      onClick={onReveal}
      className="group relative w-full cursor-pointer text-left"
    >
      <div className="pointer-events-none select-none blur-[6px] opacity-40">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center gap-1.5 rounded-full bg-obs-500/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition group-hover:bg-obs-600 group-active:scale-95">
          <Eye className="h-3.5 w-3.5" />
          Tap to reveal
        </span>
      </div>
    </button>
  );
}

function RevealableKeyPoint({
  label,
  value,
  revealed,
  onReveal,
}: {
  label: string;
  value: string;
  revealed: boolean;
  onReveal: () => void;
}) {
  return (
    <div className="my-3 rounded-xl border-l-4 border-obs-500 bg-obs-500/5 p-4">
      <div className="flex items-center gap-2 text-obs-600 dark:text-obs-400">
        <Zap className="h-4 w-4" />
        <span className="text-sm font-bold">{label}</span>
      </div>
      <RevealOverlay revealed={revealed} onReveal={onReveal}>
        <p className="mt-1 text-sm leading-relaxed">{renderBold(value)}</p>
      </RevealOverlay>
    </div>
  );
}

function RevealableClinicalNote({
  text,
  revealed,
  onReveal,
}: {
  text: string;
  revealed: boolean;
  onReveal: () => void;
}) {
  return (
    <div className="my-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
        <Stethoscope className="h-4 w-4" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Clinical Correlation
        </span>
      </div>
      <RevealOverlay revealed={revealed} onReveal={onReveal}>
        <p className="mt-1 text-sm leading-relaxed">{renderBold(text)}</p>
      </RevealOverlay>
    </div>
  );
}

function RevealableTable({
  headers,
  rows,
  revealedCells,
  onRevealCell,
}: {
  headers: string[];
  rows: string[][];
  revealedCells: Set<string>;
  onRevealCell: (key: string) => void;
}) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-border">
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
            <tr key={ri} className="border-b border-border last:border-0">
              <td className="px-4 py-2.5 font-medium">{renderBold(row[0])}</td>
              {row.slice(1).map((cell, ci) => {
                const key = `${ri}-${ci + 1}`;
                const isRevealed = revealedCells.has(key);
                return (
                  <td key={ci + 1} className="px-4 py-2.5">
                    {isRevealed ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {renderBold(cell)}
                      </motion.span>
                    ) : (
                      <button
                        onClick={() => onRevealCell(key)}
                        className="rounded-lg bg-obs-500/10 px-3 py-1 text-xs font-medium text-obs-500 transition hover:bg-obs-500/20 active:scale-95"
                      >
                        ???
                      </button>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RevealableBullets({
  items,
  revealedItems,
  onReveal,
}: {
  items: string[];
  revealedItems: Set<number>;
  onReveal: (idx: number) => void;
}) {
  return (
    <ul className="my-2 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-obs-500" />
          {revealedItems.has(i) ? (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {renderBold(item)}
            </motion.span>
          ) : (
            <button
              onClick={() => onReveal(i)}
              className="rounded-lg bg-surface-hover px-3 py-1 text-xs font-medium text-text-secondary transition hover:bg-obs-500/10 hover:text-obs-500 active:scale-95"
            >
              Tap to reveal
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export function RevealSection({
  sectionIndex,
  title,
  content,
}: {
  sectionIndex: number;
  title: string;
  content: ContentBlock[];
}) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const reveal = (key: string) =>
    setRevealed((prev) => new Set(prev).add(key));

  const revealAll = () => {
    const all = new Set<string>();
    content.forEach((block, bi) => {
      if (block.type === "keyPoint" || block.type === "clinicalNote")
        all.add(`block-${bi}`);
      if (block.type === "table")
        block.rows.forEach((row, ri) =>
          row.slice(1).forEach((_, ci) => all.add(`table-${bi}-${ri}-${ci + 1}`))
        );
      if (block.type === "bulletList")
        block.items.forEach((_, i) => all.add(`bullet-${bi}-${i}`));
    });
    setRevealed(all);
  };

  let totalItems = 0;
  let revealedCount = 0;

  content.forEach((block, bi) => {
    if (block.type === "keyPoint" || block.type === "clinicalNote") {
      totalItems++;
      if (revealed.has(`block-${bi}`)) revealedCount++;
    }
    if (block.type === "table") {
      block.rows.forEach((row, ri) =>
        row.slice(1).forEach((_, ci) => {
          totalItems++;
          if (revealed.has(`table-${bi}-${ri}-${ci + 1}`)) revealedCount++;
        })
      );
    }
    if (block.type === "bulletList") {
      block.items.forEach((_, i) => {
        totalItems++;
        if (revealed.has(`bullet-${bi}-${i}`)) revealedCount++;
      });
    }
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: sectionIndex * 0.08, duration: 0.4 }}
      className="mb-8"
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl">
          <span className="text-obs-500">{sectionIndex + 1}.</span> {title}
        </h2>
        <span className="text-xs text-text-secondary">
          {revealedCount}/{totalItems}
        </span>
      </div>

      {content.map((block, bi) => {
        switch (block.type) {
          case "keyPoint":
            return (
              <RevealableKeyPoint
                key={bi}
                label={block.label}
                value={block.value}
                revealed={revealed.has(`block-${bi}`)}
                onReveal={() => reveal(`block-${bi}`)}
              />
            );
          case "clinicalNote":
            return (
              <RevealableClinicalNote
                key={bi}
                text={block.text}
                revealed={revealed.has(`block-${bi}`)}
                onReveal={() => reveal(`block-${bi}`)}
              />
            );
          case "table":
            return (
              <RevealableTable
                key={bi}
                headers={block.headers}
                rows={block.rows}
                revealedCells={
                  new Set(
                    [...revealed].filter((k) => k.startsWith(`table-${bi}-`)).map((k) => k.replace(`table-${bi}-`, ""))
                  )
                }
                onRevealCell={(cellKey) => reveal(`table-${bi}-${cellKey}`)}
              />
            );
          case "bulletList":
            return (
              <RevealableBullets
                key={bi}
                items={block.items}
                revealedItems={
                  new Set(
                    [...revealed]
                      .filter((k) => k.startsWith(`bullet-${bi}-`))
                      .map((k) => Number(k.replace(`bullet-${bi}-`, "")))
                  )
                }
                onReveal={(idx) => reveal(`bullet-${bi}-${idx}`)}
              />
            );
          case "flowchart":
            return <FlowchartBlock key={bi} nodes={block.nodes} edges={block.edges} />;
          case "text":
            return (
              <p key={bi} className="my-2 text-sm leading-relaxed">
                {renderBold(block.value)}
              </p>
            );
          default:
            return null;
        }
      })}

      {totalItems > 0 && revealedCount < totalItems && (
        <button
          onClick={revealAll}
          className="mt-2 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:bg-surface-hover active:scale-95"
        >
          <EyeOff className="h-3.5 w-3.5" />
          Reveal all
        </button>
      )}
    </motion.section>
  );
}
