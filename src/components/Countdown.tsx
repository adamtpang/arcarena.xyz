"use client";

import { useEffect, useState } from "react";

type Remaining = { d: number; h: number; m: number; s: number; done: boolean };

function compute(target: number): Remaining {
  const ms = target - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Live countdown to the configured target. Renders a stable placeholder on the
 * server / first paint (no hydration mismatch), then ticks every second.
 */
export function Countdown({ targetISO, doneLabel = "We are live" }: { targetISO: string; doneLabel?: string }) {
  const [t, setT] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => setT(compute(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const cells: Array<[string, string]> = [
    ["Days", t ? pad(t.d) : "––"],
    ["Hrs", t ? pad(t.h) : "––"],
    ["Min", t ? pad(t.m) : "––"],
    ["Sec", t ? pad(t.s) : "––"],
  ];

  if (t?.done) {
    return (
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
        {doneLabel}
      </span>
    );
  }

  return (
    <div role="timer" aria-label="Time until day one" className="flex items-end gap-4 sm:gap-7">
      {cells.map(([label, value]) => (
        <div key={label} className="flex flex-col">
          <span className="text-[2.1rem] font-semibold leading-none tabular-nums tracking-tight sm:text-5xl">
            {value}
          </span>
          <span className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-ink-faint sm:text-[0.65rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
