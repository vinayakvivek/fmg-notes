import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ChevronRight, RotateCcw, Scissors, Target, X } from "lucide-react";
import { functions, getSite, isLost, sites } from "../../data/labs/facialNerve";
import type { SiteId } from "../../data/labs/facialNerve";
import { FacialNerveDiagram } from "./FacialNerveDiagram";
import type { MarkerState } from "./FacialNerveDiagram";
import { FaceFigure } from "./FaceFigure";

const modes = [
  { id: "explore", label: "Cut & see", icon: Scissors },
  { id: "quiz", label: "Find the lesion", icon: Target },
] as const;

type ModeId = (typeof modes)[number]["id"];

function shuffled<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function FunctionList({ lesion }: { lesion: SiteId | null }) {
  return (
    <ul className="space-y-1.5">
      {functions.map((fn) => {
        const lost = isLost(fn.id, lesion);
        return (
          <li
            key={fn.id}
            className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm transition-colors duration-300 ${
              lost ? "border-rose-500/50 bg-rose-500/10" : "border-border bg-surface"
            }`}
          >
            {lost ? (
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
            ) : (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            )}
            <div className="min-w-0">
              <p className="font-medium leading-tight">{fn.label}</p>
              <p className="text-xs text-text-secondary">
                {lost ? fn.lostAs : `Intact · ${fn.via}`}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function SiteExplanation({ site }: { site: SiteId }) {
  const s = getSite(site);
  return (
    <motion.div
      key={site}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-surface p-4"
    >
      <h3 className="text-base font-bold">{s.title}</h3>
      <p className="text-xs text-text-secondary">{s.where}</p>
      <p className="mt-2 text-sm">{s.summary}</p>
      <p className="mt-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
        {s.tip}
      </p>
    </motion.div>
  );
}

export function FacialNerveLab() {
  const [mode, setMode] = useState<ModeId>("explore");
  const [cut, setCut] = useState<SiteId | null>(null);

  const [order, setOrder] = useState<SiteId[]>(["C", "U", "A", "D", "B"]);
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<SiteId | null>(null);
  const [score, setScore] = useState(0);

  const answer = order[round];
  const finished = round >= order.length;
  const answered = picked !== null;

  const restartQuiz = () => {
    setOrder(shuffled(sites.map((s) => s.id)));
    setRound(0);
    setPicked(null);
    setScore(0);
  };

  const pickInQuiz = (site: SiteId) => {
    if (answered || finished) return;
    setPicked(site);
    if (site === answer) setScore((s) => s + 1);
  };

  const nextRound = () => {
    setPicked(null);
    setRound((r) => r + 1);
  };

  const quizMarkers: Partial<Record<SiteId, MarkerState>> = {};
  if (picked !== null) {
    quizMarkers[answer] = "correct";
    if (picked !== answer) quizMarkers[picked] = "wrong";
  }

  // In the quiz the nerve stays intact until the answer is revealed.
  const shownLesion = mode === "explore" ? cut : answered ? answer : null;
  const symptomLesion = mode === "explore" ? cut : finished ? null : answer;

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-text-secondary transition hover:text-text"
      >
        <ArrowLeft className="h-4 w-4" />
        All Modules
      </Link>

      <div className="mb-5">
        <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Anatomy lab
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Facial Nerve Lesion Simulator
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Right facial nerve (VII), from the cortex to the face.
        </p>
      </div>

      <div className="mb-5 flex max-w-md gap-1 rounded-xl bg-surface-alt p-1">
        {modes.map(({ id, label, icon: Icon }) => {
          const isActive = mode === id;
          return (
            <button
              key={id}
              onClick={() => setMode(id)}
              className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="lab-mode-bg"
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

      <div className="grid gap-5 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
        <div className="rounded-2xl border border-border bg-surface-alt p-3 sm:p-4">
          <p className="mb-2 text-center text-xs font-medium text-text-secondary">
            {mode === "explore"
              ? "Tap a red letter to cut the nerve there"
              : answered || finished
                ? "The lesion is marked in green"
                : "Tap the letter where the lesion must be"}
          </p>
          <FacialNerveDiagram
            lesion={shownLesion}
            markerStates={mode === "explore" ? (cut ? { [cut]: "cut" } : {}) : quizMarkers}
            onPick={
              mode === "explore"
                ? (site) => setCut((c) => (c === site ? null : site))
                : pickInQuiz
            }
            disabled={mode === "quiz" && (answered || finished)}
          />
        </div>

        <div className="space-y-4">
          {mode === "quiz" && !finished && (
            <div className="rounded-xl border border-border bg-surface-alt p-4">
              <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-secondary">
                <span>
                  Case {round + 1} of {order.length}
                </span>
                <span>Score {score}</span>
              </div>
              <p className="text-sm font-medium">{getSite(answer).vignette}</p>
            </div>
          )}

          {mode === "quiz" && finished ? (
            <div className="rounded-xl border border-border bg-surface-alt p-6 text-center">
              <p className="text-3xl font-bold">
                {score} / {order.length}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                {score === order.length
                  ? "Every lesion localised correctly."
                  : "Go through the missed ones in Cut & see, then try again."}
              </p>
              <button
                onClick={restartQuiz}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600 active:scale-95"
              >
                <RotateCcw className="h-4 w-4" /> Try again
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-surface-alt p-4">
              <div className="flex items-start gap-4">
                <FaceFigure
                  upperLost={isLost("upperFace", symptomLesion)}
                  lowerLost={isLost("lowerFace", symptomLesion)}
                />
                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-xs text-text-secondary">
                    Asked to wrinkle the forehead, shut both eyes and smile.
                  </p>
                  {mode === "explore" && !cut && (
                    <p className="text-sm font-medium">
                      Nerve intact — both sides move normally.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <FunctionList lesion={symptomLesion} />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {mode === "explore" && cut && <SiteExplanation site={cut} />}
            {mode === "quiz" && answered && !finished && (
              <motion.div key={`r${round}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <p
                  className={`text-sm font-semibold ${
                    picked === answer
                      ? "text-green-600 dark:text-green-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {picked === answer
                    ? "Correct."
                    : `Not quite — you picked ${picked}, the lesion is at ${answer}.`}
                </p>
                <SiteExplanation site={answer} />
                <button
                  onClick={nextRound}
                  className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600 active:scale-95"
                >
                  <ChevronRight className="h-4 w-4" />
                  {round + 1 < order.length ? "Next case" : "See score"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
