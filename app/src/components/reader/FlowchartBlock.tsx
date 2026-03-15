import { motion } from "framer-motion";
import type { FlowNode, FlowEdge } from "../../data/types";

function NodeBox({
  node,
  index,
}: {
  node: FlowNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      className={`relative rounded-xl border-2 px-4 py-3 text-center ${
        node.highlight
          ? "border-obs-500 bg-obs-500/10 shadow-md shadow-obs-500/10"
          : "border-border bg-surface-alt"
      }`}
    >
      <p className="text-sm font-bold leading-tight">{node.label}</p>
      {node.sublabel && (
        <p className="mt-0.5 text-xs text-text-secondary">{node.sublabel}</p>
      )}
    </motion.div>
  );
}

function EdgeLabel({ edge, index }: { edge: FlowEdge; index: number }) {
  if (!edge.label) return <Arrow index={index} />;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 + 0.06, duration: 0.3 }}
      className="flex flex-col items-center gap-0.5 py-1"
    >
      <div className="h-3 w-px bg-text-secondary/40" />
      <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-[11px] font-medium text-text-secondary">
        {edge.label}
      </span>
      <div className="text-text-secondary">↓</div>
    </motion.div>
  );
}

function Arrow({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 + 0.06 }}
      className="flex justify-center py-0.5 text-text-secondary"
    >
      ↓
    </motion.div>
  );
}

export function FlowchartBlock({
  nodes,
  edges,
}: {
  nodes: FlowNode[];
  edges: FlowEdge[];
}) {
  const isBranching =
    edges.filter((e) => e.from === edges[0]?.from).length > 1 ||
    new Set(edges.map((e) => e.from)).size < nodes.length - 1;

  if (isBranching) {
    const rootId = nodes[0].id;
    const rootNode = nodes[0];
    const rootEdges = edges.filter((e) => e.from === rootId);
    const branches = rootEdges.map((re) => {
      const childNode = nodes.find((n) => n.id === re.to)!;
      const subEdges = edges.filter((e) => e.from === re.to);
      const subNodes = subEdges.map(
        (se) => nodes.find((n) => n.id === se.to)!
      );
      return { edge: re, node: childNode, subEdges, subNodes };
    });

    return (
      <div className="my-4 flex flex-col items-center gap-1">
        <NodeBox node={rootNode} index={0} />
        <div className="text-text-secondary">↓</div>
        <div className="flex flex-wrap justify-center gap-6">
          {branches.map((branch, bi) => (
            <div key={branch.node.id} className="flex flex-col items-center gap-1">
              {branch.edge.label && (
                <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[11px] text-text-secondary">
                  {branch.edge.label}
                </span>
              )}
              <NodeBox node={branch.node} index={bi + 1} />
              {branch.subNodes.map((sn, si) => {
                const se = branch.subEdges[si];
                return (
                  <div key={sn.id} className="flex flex-col items-center gap-1">
                    {se?.label && (
                      <span className="rounded-full bg-surface-hover px-2 py-0.5 text-[11px] text-text-secondary">
                        {se.label}
                      </span>
                    )}
                    <div className="text-text-secondary">↓</div>
                    <NodeBox node={sn} index={bi + si + 2} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const ordered: FlowNode[] = [];
  const visited = new Set<string>();

  if (nodes.length > 0) {
    const allTargets = new Set(edges.map((e) => e.to));
    let startNode = nodes.find((n) => !allTargets.has(n.id)) ?? nodes[0];
    let current: FlowNode | undefined = startNode;
    while (current && !visited.has(current.id)) {
      visited.add(current.id);
      ordered.push(current);
      const nextEdge = edges.find((e) => e.from === current!.id);
      current = nextEdge ? nodes.find((n) => n.id === nextEdge.to) : undefined;
    }
    nodes.forEach((n) => {
      if (!visited.has(n.id)) ordered.push(n);
    });
  }

  return (
    <div className="my-4 flex flex-col items-center gap-1">
      {ordered.map((node, i) => {
        const edgeBefore = edges.find((e) => e.to === node.id);
        return (
          <div key={node.id} className="flex flex-col items-center gap-1">
            {i > 0 && edgeBefore && (
              <EdgeLabel edge={edgeBefore} index={i} />
            )}
            {i > 0 && !edgeBefore && <Arrow index={i} />}
            <NodeBox node={node} index={i} />
          </div>
        );
      })}
    </div>
  );
}
