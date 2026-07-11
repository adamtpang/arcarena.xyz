import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Three tracks on a spectrum: opinionated (Fulgur) → ecosystem (Solana) → open (Curious).
 * Each is color-coded by its accent. */
export function Tracks() {
  const { tracks } = config;
  return (
    <section
      id="tracks"
      aria-labelledby="tracks-h"
      className="reveal border-t border-rule-soft bg-paper"
    >
      <div className="mx-auto max-w-[1080px] px-6 py-12 md:px-10 md:py-16">
        <Marker n="02">The tracks</Marker>

        <h2 id="tracks-h" className="wordmark mt-6 max-w-[18ch] text-4xl leading-[1.05] sm:text-5xl">
          Three arenas. Pick your fight.
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg text-ink-dim">
          From a sharp thesis to a blank canvas: build to Fulgur&apos;s Bitcoin brief, on Solana with
          Superteam, or whatever you are curious about. Opinionated to open, left to right.
        </p>

        <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.firm} className="flex flex-col gap-3 bg-cream p-7">
              <span aria-hidden className="h-1.5 w-14 rounded-full" style={{ background: t.accent }} />
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl font-bold tracking-tight" style={{ color: t.accent }}>
                  {t.name}
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-ink-faint">{t.tag}</span>
              </div>
              <a
                href={t.firmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow font-semibold tracking-tight"
              >
                {t.firm}
              </a>
              <p className="text-[0.82rem] font-semibold" style={{ color: t.accent }}>
                <span className="mr-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-ink-faint">
                  Prize
                </span>
                {t.prize}
              </p>
              <p className="text-sm text-ink-dim">{t.thesis}</p>
              <p className="mt-auto pt-2 text-sm text-ink-faint">
                <span className="text-ink">Good looks like. </span>
                {t.good}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
