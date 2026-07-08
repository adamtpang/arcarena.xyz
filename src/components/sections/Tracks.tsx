import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Capital tracks: each firm is a track. Public tracks render in full; gated ones tease. */
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
          Each fund is a track.
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-ink-dim">
          One firm, one thesis, one check. The firm&apos;s request for startups is the brief, and
          their first investment is the prize.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.firm} className="flex flex-col gap-4 bg-cream p-8">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-gold">{t.name} track</span>
                <span className={`text-xs uppercase tracking-[0.16em] ${t.status === "confirmed" ? "text-red" : "text-ink-faint"}`}>
                  {t.status === "confirmed" ? "Confirmed" : "Coming soon"}
                </span>
              </div>

              {t.public ? (
                <>
                  <a
                    href={t.firmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow text-2xl font-semibold tracking-tight"
                  >
                    {t.firm}
                  </a>
                  <p className="text-ink-dim">{t.thesis}</p>
                  <p className="mt-auto pt-2 text-sm text-ink-faint">
                    <span className="text-ink">What good looks like. </span>
                    {t.good}
                  </p>
                </>
              ) : (
                <>
                  <span className="text-2xl font-semibold tracking-tight text-ink-faint">{t.firm}</span>
                  <p className="text-ink-dim">
                    A second capital track, the agentic counterpart to Bitcoin. Details soon.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
