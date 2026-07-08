import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The opinionated-capital model, made clear for both sides of the room. */
export function HowItWorks() {
  const { howItWorks } = config;
  const columns = [howItWorks.builder, howItWorks.investor];
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="01">How it works</Marker>

      <h2 id="how-h" className="wordmark mt-5 max-w-[20ch] text-3xl leading-[1.05] sm:text-4xl">
        The thesis is the brief. The check is the prize.
      </h2>
      <p className="mt-4 max-w-[56ch] text-lg text-ink-dim">{howItWorks.intro}</p>

      <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
        {columns.map((col) => (
          <div key={col.label} className="bg-cream p-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-red">{col.label}</p>
            <ol className="space-y-5">
              {col.steps.map((s) => (
                <li key={s.no} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="text-sm tabular-nums text-gold">{s.no}</span>
                  <div>
                    <p className="font-semibold tracking-tight">{s.title}</p>
                    <p className="text-sm text-ink-dim">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
