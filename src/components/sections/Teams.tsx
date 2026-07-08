import { config } from "@config";
import { Marker } from "@/components/Marker";

/* The teams: up to 5 pilot seats, each showing its chosen prompt and rung on the ladder. */
export function Teams() {
  const rungs = config.ladder.length;

  return (
    <section
      id="teams"
      aria-labelledby="teams-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="06">The teams</Marker>

      <h2 id="teams-h" className="wordmark mt-6 max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl">
        Five seats. Five companies.
      </h2>
      <p className="mt-5 max-w-[54ch] text-lg text-ink-dim">
        Up to five pilot teams are selected. Each picks a problem, ships it, and climbs the ladder.
        Their progress shows up here as the program runs.
      </p>

      <ol className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-5">
        {config.teams.map((team, i) => {
          const open = team.status === "open";
          return (
            <li key={i} className="flex flex-col gap-4 bg-cream p-6">
              <span className="text-xs tabular-nums uppercase tracking-[0.18em] text-gold">
                Seat {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`text-lg font-semibold tracking-tight ${open ? "text-ink-faint" : ""}`}>
                {team.name}
              </p>
              <p className="min-h-[2.5em] text-sm text-ink-dim">
                {team.rfs ?? "Awaiting selection"}
              </p>

              {/* rung progress */}
              <div className="mt-auto flex items-center gap-1.5 pt-2" aria-label={`Rung ${team.rung} of ${rungs}`}>
                {Array.from({ length: rungs }).map((_, r) => (
                  <span
                    key={r}
                    aria-hidden
                    className={`h-1.5 flex-1 rounded-full ${r < team.rung ? "bg-gold" : "bg-rule"}`}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
