"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { heroRun } from "@/data/profile";
import { cn } from "@/lib/cn";

const STEP_MS = 420;

export function TestRun() {
  const [done, setDone] = useState<number>(heroRun.length);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const run = useCallback(() => {
    stop();
    setDone(0);
    timer.current = setInterval(() => {
      setDone((n) => {
        if (n + 1 >= heroRun.length) stop();
        return n + 1;
      });
    }, STEP_MS);
  }, [stop]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = reduce ? null : setTimeout(run, 150);
    return () => {
      if (start) clearTimeout(start);
      stop();
    };
  }, [run, stop]);

  const finished = done >= heroRun.length;
  const defects = heroRun.filter((t) => t.status === "defect").length;
  const passed = heroRun.length - defects;

  return (
    <div className="border-ink bg-surface rounded-2xl border shadow-[8px_8px_0_0_var(--color-ink)]">
      <div className="border-rule flex items-center justify-between border-b px-5 py-3">
        <p className="font-mono text-sm">checkout.spec.ts</p>
        <button
          type="button"
          onClick={run}
          disabled={!finished}
          className="border-ink hover:bg-ink disabled:hover:text-ink rounded-full border px-4 py-1 text-sm font-medium transition-colors hover:text-white disabled:cursor-progress disabled:opacity-40 disabled:hover:bg-transparent"
        >
          {finished ? "Run again" : "Running"}
        </button>
      </div>

      <ol className="divide-rule divide-y" aria-live="polite">
        {heroRun.map((test, i) => {
          const visible = i < done;
          const isDefect = test.status === "defect";
          return (
            <li
              key={test.name}
              className={cn(
                "flex items-start gap-3 px-5 py-3 text-[0.95rem] transition-opacity duration-200",
                !visible && "opacity-0",
                visible && isDefect && "bg-fail-soft",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white",
                  isDefect ? "bg-fail" : "bg-pass",
                )}
              >
                {isDefect ? (
                  <X className="size-3.5" strokeWidth={3} aria-label="Defect found" />
                ) : (
                  <Check className="size-3.5" strokeWidth={3} aria-label="Passed" />
                )}
              </span>
              <span className={isDefect ? "text-fail font-medium" : undefined}>
                {test.name}
                {isDefect ? (
                  <span className="text-ink/70 mt-0.5 block text-sm font-normal">
                    Accepts a negative amount. Reported with steps to reproduce.
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>

      <p
        className={cn(
          "border-rule border-t px-5 py-3 font-mono text-sm transition-opacity duration-200",
          !finished && "opacity-0",
        )}
      >
        <span className="text-pass">{passed} passed</span>,{" "}
        <span className="text-fail">{defects} defect caught</span>
      </p>
    </div>
  );
}
