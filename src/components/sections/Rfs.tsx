import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Requests for startups: the sharp prompts teams build against. */
export function Rfs() {
  return (
    <section
      id="rfs"
      aria-labelledby="rfs-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="03">Requests for startups</Marker>

      <h2 id="rfs-h" className="wordmark mt-6 max-w-[18ch] text-4xl leading-[1.05] sm:text-5xl">
        Four problems worth a company.
      </h2>
      <p className="mt-5 max-w-[58ch] text-lg text-ink-dim">
        Straight from{" "}
        <a
          href="https://fulgur.ventures/request-for-startups"
          target="_blank"
          rel="noopener noreferrer"
          className="arrow font-medium"
        >
          Fulgur&apos;s request for startups
        </a>
        . Pick one and build it, or bring your own in the same spirit.
      </p>

      <ol className="mt-14 border-t border-rule-soft">
        {config.rfs.map((r, i) => (
          <li
            key={r.title}
            className="grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-2 border-b border-rule-soft py-7 md:grid-cols-[3rem_22rem_1fr] md:gap-x-8"
          >
            <span className="text-sm tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-semibold tracking-tight">{r.title}</h3>
            <p className="col-start-2 max-w-[48ch] text-ink-dim md:col-start-3">{r.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
