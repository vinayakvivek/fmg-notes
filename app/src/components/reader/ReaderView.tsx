import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import type { Chapter, ContentBlock } from "../../data/types";
import { FlowchartBlock } from "./FlowchartBlock";
import { TableBlock } from "./TableBlock";
import { KeyPointBlock } from "./KeyPointBlock";
import { ClinicalNote } from "./ClinicalNote";
import { useProgress } from "../../hooks/useProgress";

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

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return <p className="my-2 text-sm leading-relaxed">{renderText(block.value)}</p>;

    case "bulletList":
      return (
        <ul className="my-2 space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-obs-500" />
              <span>{renderText(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "flowchart":
      return <FlowchartBlock nodes={block.nodes} edges={block.edges} />;

    case "table":
      return <TableBlock headers={block.headers} rows={block.rows} />;

    case "keyPoint":
      return <KeyPointBlock label={block.label} value={block.value} />;

    case "clinicalNote":
      return <ClinicalNote text={block.text} />;

    default:
      return null;
  }
}

export function ReaderView() {
  const chapter = useOutletContext<Chapter>();
  const { updateChapterProgress } = useProgress();

  useEffect(() => {
    updateChapterProgress(chapter.id, { readerRead: true });
  }, [chapter.id, updateChapterProgress]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      {chapter.sections.map((section, si) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: si * 0.08, duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight">
            <span className="text-obs-500">{si + 1}.</span> {section.title}
          </h2>
          {section.content.map((block, bi) => (
            <RenderBlock key={bi} block={block} />
          ))}
        </motion.section>
      ))}
    </div>
  );
}
