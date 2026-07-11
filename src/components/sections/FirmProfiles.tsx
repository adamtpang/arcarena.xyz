import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Who is behind the check. Public, confirmed firms only. */
export function FirmProfiles() {
  const firms = config.firmProfiles.filter((f) => f.public);
  return (
    <section
      id="firms"
      aria-labelledby="firms-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="04">Who backs it</Marker>

      <h2 id="firms-h" className="wordmark mt-6 max-w-[18ch] text-4xl leading-[1.05] sm:text-5xl">
        Who is behind the check.
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {firms.map((f) => (
          <div key={f.name} className="flex flex-col gap-5 border border-rule bg-cream p-8">
            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow text-xl font-semibold tracking-tight"
            >
              {f.name}
            </a>
            <p className="text-ink-dim">{f.oneLine}</p>

            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {f.meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">{m.label}</dt>
                  <dd className="text-sm">{m.value}</dd>
                </div>
              ))}
            </dl>

            {f.portfolio && (
              <div className="mt-auto pt-2">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">Portfolio</p>
                <p className="mt-1 text-sm text-ink-dim">{f.portfolio.join(" · ")}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
