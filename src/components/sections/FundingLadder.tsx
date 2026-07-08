import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The funding ladder: ship once, then climb. Each rung is a real check for a real milestone. */
export function FundingLadder() {
  return (
    <section
      id="ladder"
      aria-labelledby="ladder-h"
      className="reveal border-t border-rule-soft bg-paper"
    >
      <div className="mx-auto max-w-[1080px] px-6 py-12 md:px-10 md:py-16">
        <Marker n="05">The funding ladder</Marker>

        <h2 id="ladder-h" className="wordmark mt-6 max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl">
          Ship once. Then keep climbing.
        </h2>
        <p className="mt-5 max-w-[54ch] text-lg text-ink-dim">
          The hackathon is rung one. Every rung after it is a real check for hitting a real
          milestone, all the way to a seed round. You climb as far as the work takes you.
        </p>

        <ol className="mt-14 space-y-px">
          {config.ladder.map((rung, i) => (
            <li
              key={rung.stage}
              className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-5 gap-y-3 border-t border-rule py-8 last:border-b md:grid-cols-[3.5rem_13rem_1fr_auto] md:gap-x-8"
            >
              <span className="text-lg tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-start-2 md:col-start-2">
                <p className="text-xl font-semibold tracking-tight">{rung.stage}</p>
                <p className="text-sm uppercase tracking-[0.16em] text-ink-faint">{rung.when}</p>
              </div>
              <p className="col-start-2 max-w-[40ch] text-ink-dim md:col-start-3 md:pt-0.5">
                {rung.milestone}
              </p>
              <p className="col-start-2 text-2xl font-semibold tracking-tight text-gold-deep md:col-start-4 md:text-right">
                {rung.reward}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
