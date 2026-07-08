import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The base layer: Arc + Network School handle housing, food, and legal. You just build. */
export function Venue() {
  const { venue } = config;
  return (
    <section
      id="venue"
      aria-labelledby="venue-h"
      className="reveal border-t border-rule-soft bg-paper"
    >
      <div className="mx-auto max-w-[1080px] px-6 py-12 md:px-10 md:py-16">
        <Marker n="09">The base layer</Marker>

        <h2 id="venue-h" className="wordmark mt-5 max-w-[20ch] text-3xl leading-[1.05] sm:text-4xl">
          You just build. We handle the rest.
        </h2>
        <p className="mt-4 max-w-[58ch] text-lg text-ink-dim">{venue.blurb}</p>

        {/* the two infra providers */}
        <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
          {venue.providers.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 bg-cream p-7"
            >
              <span className="arrow text-xl font-semibold tracking-tight">{p.name}</span>
              <span className="text-sm text-ink-dim">{p.role}</span>
            </a>
          ))}
        </div>

        {/* what is handled */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {venue.handled.map((h) => (
            <li
              key={h}
              className="border border-red px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-ink"
            >
              {h}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ink-faint">
          {venue.location} · {venue.travel} · {venue.swag}
        </p>
      </div>
    </section>
  );
}
