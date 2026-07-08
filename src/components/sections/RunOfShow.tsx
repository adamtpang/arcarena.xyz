import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The produced weekend, Doors to Finale. */
export function RunOfShow() {
  return (
    <section
      id="schedule"
      aria-labelledby="sched-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="08">Run of show</Marker>

      <h2 id="sched-h" className="wordmark mt-6 max-w-[20ch] text-4xl leading-[1.05] sm:text-5xl">
        A produced weekend, not a free-for-all.
      </h2>

      <ol className="mt-14 border-t border-rule-soft">
        {config.runOfShow.map((b) => (
          <li
            key={b.label}
            className="grid gap-1 border-b border-rule-soft py-6 md:grid-cols-[10rem_12rem_1fr] md:gap-8 md:py-7"
          >
            <span className="text-sm uppercase tracking-[0.16em] text-gold">{b.time}</span>
            <span className="text-lg font-semibold tracking-tight">{b.label}</span>
            <span className="max-w-[52ch] text-ink-dim">{b.detail}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
