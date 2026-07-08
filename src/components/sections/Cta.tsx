import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The closing call to action: builder + investor, both to the application form. */
export function Cta() {
  const { event, apply } = config;
  return (
    <section
      id="apply"
      aria-labelledby="apply-h"
      className="reveal border-t border-rule-soft bg-paper"
    >
      <div className="mx-auto max-w-[1080px] px-6 py-14 md:px-10 md:py-20">
        <Marker n="12">Apply</Marker>

        <h2 id="apply-h" className="wordmark mt-5 max-w-[14ch] text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
          Take a seat in the arena.
        </h2>
        <p className="mt-4 max-w-[48ch] text-lg text-ink-dim">
          One weekend, five seats, and a ladder that pays out to a seed round. Builders ship; investors
          get first look. Bring something real to build on {event.track}.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {apply.builder}
          </a>
          <a href={apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {apply.investor}
          </a>
        </div>

        <p className="mt-6 text-sm text-ink-faint">
          Final seats by invite · {event.dates} · {event.venue}
        </p>
      </div>
    </section>
  );
}
