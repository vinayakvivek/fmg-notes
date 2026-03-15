import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Puzzle, Route } from "lucide-react";
import { useChapterContext } from "../../hooks/useChapterContext";
import { useProgress } from "../../hooks/useProgress";
import { RevealSection } from "./RevealSection";
import { MatchGame } from "./MatchGame";
import { PathwayGame } from "./PathwayGame";

const tabs = [
  { id: "reveal", label: "Reveal", icon: Layers },
  { id: "match", label: "Match", icon: Puzzle },
  { id: "pathway", label: "Pathway", icon: Route },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ExploreView() {
  const { chapter, moduleId } = useChapterContext();
  const { updateChapterProgress } = useProgress();
  const [activeTab, setActiveTab] = useState<TabId>("reveal");

  useEffect(() => {
    updateChapterProgress(moduleId, chapter.id, { readerRead: true });
  }, [moduleId, chapter.id, updateChapterProgress]);

  const flowchartSections = chapter.sections.filter((s) =>
    s.content.some((c) => c.type === "flowchart")
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-6">
      <div className="mb-6 flex gap-1 rounded-xl bg-surface-alt p-1">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "text-obs-600 dark:text-obs-400"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="explore-tab-bg"
                  className="absolute inset-0 rounded-lg bg-surface shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {chapter.sections.map((section, i) => (
              <RevealSection
                key={section.id}
                sectionIndex={i}
                title={section.title}
                content={section.content}
              />
            ))}
          </motion.div>
        )}

        {activeTab === "match" && (
          <motion.div
            key="match"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <MatchGame pairs={chapter.matchPairs} />
          </motion.div>
        )}

        {activeTab === "pathway" && (
          <motion.div
            key="pathway"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {flowchartSections.length === 0 ? (
              <p className="py-12 text-center text-sm text-text-secondary">
                No flowcharts in this chapter.
              </p>
            ) : (
              <PathwayGame sections={flowchartSections} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
