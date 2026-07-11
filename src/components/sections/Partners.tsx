import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Public, confirmed partners only. Warm leads are never listed here. */
export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="10">Partners</Marker>

      <h2 id="partners-h" className="wordmark mt-6 max-w-[18ch] text-4xl leading-[1.05] sm:text-5xl">
        In your corner.
      </h2>

      <ul className="mt-12 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
        {config.partners.map((p) => (
          <li key={p.name} className="flex flex-col gap-1 bg-cream p-8">
            <span className="text-xl font-semibold tracking-tight">{p.name}</span>
            <span className="text-sm text-ink-faint">{p.tier}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
