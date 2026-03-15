import { useState, useRef, useEffect } from "react";
import { Check, X } from "lucide-react";

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function BlankSentence({
  sentence,
  blanks,
  onComplete,
}: {
  sentence: string;
  blanks: string[];
  onComplete: (allCorrect: boolean) => void;
}) {
  const parts = sentence.split("_____");
  const [answers, setAnswers] = useState<string[]>(blanks.map(() => ""));
  const [submitted, setSubmitted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const results = blanks.map(
    (b, i) => normalize(answers[i]) === normalize(b)
  );
  const allCorrect = results.every(Boolean);

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete(allCorrect);
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter") {
      if (idx < blanks.length - 1) {
        inputRefs.current[idx + 1]?.focus();
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <div className="rounded-xl border border-border bg-surface-alt p-4 sm:p-5">
      <p className="text-sm leading-loose sm:leading-loose">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < blanks.length && (
              <span className="inline-flex items-center gap-1 mx-0.5 sm:mx-1">
                <input
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  value={answers[i]}
                  onChange={(e) => {
                    const next = [...answers];
                    next[i] = e.target.value;
                    setAnswers(next);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  disabled={submitted}
                  placeholder="..."
                  className={`inline-block w-24 rounded-lg border-2 bg-surface px-2 py-1.5 text-center text-sm font-medium outline-none transition-colors sm:w-28 sm:py-1 ${
                    submitted
                      ? results[i]
                        ? "border-green-500 bg-green-500/5"
                        : "border-red-500 bg-red-500/5"
                      : "border-border focus:border-obs-500"
                  }`}
                />
                {submitted && (
                  results[i] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <span className="flex items-center gap-1">
                      <X className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-medium text-obs-500">
                        {blanks[i]}
                      </span>
                    </span>
                  )
                )}
              </span>
            )}
          </span>
        ))}
      </p>

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-lg bg-obs-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-obs-600 active:scale-95"
        >
          Check
        </button>
      )}
    </div>
  );
}
