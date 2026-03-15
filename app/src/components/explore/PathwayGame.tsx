import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Eye, RotateCcw, ChevronDown } from "lucide-react";
import type { Section, FlowNode, FlowEdge } from "../../data/types";

interface OrderedStep {
  node: FlowNode;
  incomingEdge?: FlowEdge;
}

function buildLinearPath(
  nodes: FlowNode[],
  edges: FlowEdge[]
): OrderedStep[] {
  if (nodes.length === 0) return [];
  const allTargets = new Set(edges.map((e) => e.to));
  const startNode = nodes.find((n) => !allTargets.has(n.id)) ?? nodes[0];
  const steps: OrderedStep[] = [{ node: startNode }];
  const visited = new Set([startNode.id]);

  let current = startNode;
  while (true) {
    const nextEdge = edges.find((e) => e.from === current.id && !visited.has(e.to));
    if (!nextEdge) break;
    const nextNode = nodes.find((n) => n.id === nextEdge.to);
    if (!nextNode) break;
    visited.add(nextNode.id);
    steps.push({ node: nextNode, incomingEdge: nextEdge });
    current = nextNode;
  }

  return steps;
}

function SinglePathway({
  sectionTitle,
  nodes,
  edges,
}: {
  sectionTitle: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}) {
  const steps = useMemo(() => buildLinearPath(nodes, edges), [nodes, edges]);
  const [revealedCount, setRevealedCount] = useState(1);

  const revealNext = () => {
    if (revealedCount < steps.length) {
      setRevealedCount((c) => c + 1);
    }
  };

  const revealAll = () => setRevealedCount(steps.length);
  const reset = () => setRevealedCount(1);

  const allRevealed = revealedCount >= steps.length;

  return (
    <div className="mb-8 rounded-2xl border border-border bg-surface-alt p-4 sm:p-6">
      <h3 className="mb-4 text-base font-bold sm:text-lg">{sectionTitle}</h3>

      <div className="flex flex-col items-center gap-1">
        <AnimatePresence mode="popLayout">
          {steps.slice(0, revealedCount).map((step, i) => (
            <motion.div
              key={step.node.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex w-full flex-col items-center gap-1"
            >
              {i > 0 && step.incomingEdge && (
                <div className="flex flex-col items-center gap-0.5 py-1">
                  <div className="h-3 w-px bg-text-secondary/40" />
                  {step.incomingEdge.label && (
                    <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-[11px] font-medium text-text-secondary">
                      {step.incomingEdge.label}
                    </span>
                  )}
                  <ChevronDown className="h-4 w-4 text-text-secondary" />
                </div>
              )}
              {i > 0 && !step.incomingEdge && (
                <ChevronDown className="h-4 w-4 text-text-secondary" />
              )}
              <div
                className={`w-full max-w-xs rounded-xl border-2 px-4 py-3 text-center ${
                  step.node.highlight
                    ? "border-obs-500 bg-obs-500/10 shadow-md shadow-obs-500/10"
                    : "border-border bg-surface"
                }`}
              >
                <p className="text-sm font-bold leading-tight">
                  {step.node.label}
                </p>
                {step.node.sublabel && (
                  <p className="mt-0.5 text-xs text-text-secondary">
                    {step.node.sublabel}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {!allRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-1 pt-2"
          >
            <ChevronDown className="h-4 w-4 animate-bounce text-text-secondary" />
            <div className="flex w-full max-w-xs items-center justify-center rounded-xl border-2 border-dashed border-obs-500/40 bg-obs-500/5 px-4 py-3">
              <span className="text-sm font-medium text-obs-500">???</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={revealNext}
                className="flex items-center gap-1.5 rounded-lg bg-obs-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-obs-600 active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
                Reveal next
              </button>
              <button
                onClick={revealAll}
                className="flex items-center gap-1.5 rounded-lg bg-surface-hover px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-surface active:scale-95"
              >
                <Eye className="h-4 w-4" />
                Show all
              </button>
            </div>
          </motion.div>
        )}

        {allRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex flex-col items-center gap-2"
          >
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              Pathway complete!
            </p>
            <button
              onClick={reset}
              className="flex items-center gap-1.5 rounded-lg bg-surface-hover px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-surface active:scale-95"
            >
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function PathwayGame({ sections }: { sections: Section[] }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">Interactive Pathways</h3>
      <p className="mb-6 text-sm text-text-secondary">
        Step through each flowchart one node at a time. Try to recall the next
        step before revealing it.
      </p>
      {sections.map((section) => {
        const flowcharts = section.content.filter(
          (c): c is Extract<typeof c, { type: "flowchart" }> =>
            c.type === "flowchart"
        );
        return flowcharts.map((fc, fi) => (
          <SinglePathway
            key={`${section.id}-${fi}`}
            sectionTitle={section.title}
            nodes={fc.nodes}
            edges={fc.edges}
          />
        ));
      })}
    </div>
  );
}
