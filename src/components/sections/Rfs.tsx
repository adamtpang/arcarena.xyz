import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The briefs: Fulgur's published RFS (Bitcoin track) + Curious Ventures'
 * Next Fundable Ideas deck (Open track), baked in from Ashish's slides. */
export function Rfs() {
  const { curiousRfs } = config;
  return (
    <section
      id="rfs"
      aria-labelledby="rfs-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="03">Requests for startups</Marker>

      <h2 id="rfs-h" className="wordmark mt-5 max-w-[20ch] text-3xl leading-[1.05] sm:text-4xl">
        Thirty-one ideas worth a company.
      </h2>
      <p className="mt-4 max-w-[60ch] text-lg text-ink-dim">
        The funds published exactly what they want built. Claim one at kickoff, or bring your own
        in the same spirit.
      </p>

      {/* ---- Fulgur: the Bitcoin brief ---- */}
      <div className="mt-10 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#b8892a" }}>
          Bitcoin track · Fulgur Ventures
        </p>
        <a
          href="https://fulgur.ventures/request-for-startups"
          target="_blank"
          rel="noopener noreferrer"
          className="arrow text-sm font-medium"
        >
          The source
        </a>
      </div>
      <ol className="mt-4 border-t border-rule-soft">
        {config.rfs.map((r, i) => (
          <li
            key={r.title}
            className="grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-2 border-b border-rule-soft py-5 md:grid-cols-[3rem_20rem_1fr] md:gap-x-8"
          >
            <span className="text-sm tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
            <p className="col-start-2 max-w-[52ch] text-sm text-ink-dim md:col-start-3">{r.detail}</p>
          </li>
        ))}
      </ol>

      {/* ---- Curious: the Next Fundable Ideas deck ---- */}
      <div className="mt-12 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red">
          Open track · Curious Ventures · {curiousRfs.deckName}
        </p>
        <a
          href={curiousRfs.source}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow text-sm font-medium"
        >
          The source
        </a>
      </div>
      <p className="mt-3 max-w-[62ch] text-ink-dim">{curiousRfs.intro}</p>

      {/* the behavioral fork filter */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {curiousRfs.filter.map((f) => (
          <li
            key={f}
            className="border border-red px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-ink"
          >
            {f}
          </li>
        ))}
      </ul>

      {/* tier 1: fund now */}
      <div className="mt-6 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
        {curiousRfs.fundNow.map((idea) => (
          <div key={idea.no} className="flex flex-col gap-2.5 bg-cream p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold tabular-nums text-red">{idea.no}</span>
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.14em] text-gold-deep">
                Fund now
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-snug tracking-tight">{idea.title}</h3>
            <p className="text-sm text-ink-dim">{idea.detail}</p>
            {idea.note && <p className="mt-auto pt-1 text-xs italic text-red">{idea.note}</p>}
          </div>
        ))}
      </div>

      {/* the other 24, compact */}
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
        Plus 24 more in the deck
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {curiousRfs.more.map((t) => (
          <li key={t} className="text-sm text-ink-dim">
            {t}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-lg font-semibold tracking-tight">
        {curiousRfs.closer} <span className="text-ink-faint">Claim yours at kickoff.</span>
      </p>
    </section>
  );
}
