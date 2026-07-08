import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Prizes and judges: the headline number, the real prize (the path), 3 judges, the 4-line rubric. */
export function PrizesJudges() {
  const { prize, judges, rubric } = config;

  return (
    <section
      id="prizes"
      aria-labelledby="prizes-h"
      className="reveal border-t border-rule-soft bg-paper"
    >
      <div className="mx-auto max-w-[1080px] px-6 py-12 md:px-10 md:py-16">
        <Marker n="07">Prizes and judges</Marker>

        <h2 id="prizes-h" className="wordmark mt-6 max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl">
          What you are playing for.
        </h2>

        {/* the headline prize */}
        <div className="mt-12 border-y border-rule py-12">
          <p className="wordmark text-[clamp(3rem,10vw,6rem)] leading-none text-red">
            {prize.headline}
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink-faint">{prize.caption}</p>
          <p className="mt-6 max-w-[46ch] text-xl leading-snug">{prize.realPrize}</p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {/* judges */}
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-ink-faint">The judges</p>
            <ul className="mt-6 divide-y divide-rule-soft border-y border-rule-soft">
              {judges.map((j, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4 py-4">
                  <span className={`text-lg font-medium ${j.confirmed ? "" : "text-ink-faint"}`}>
                    {j.name}
                  </span>
                  <span className="text-sm text-ink-dim">{j.org}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* rubric */}
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-ink-faint">How it is judged</p>
            <ol className="mt-6 space-y-5">
              {rubric.map((r, i) => (
                <li key={r.criterion} className="grid grid-cols-[2rem_1fr] gap-x-4">
                  <span className="text-sm tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold tracking-tight">{r.criterion}</p>
                    <p className="text-sm text-ink-dim">{r.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
