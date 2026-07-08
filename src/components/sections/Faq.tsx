import { config } from "@config";
import { Marker } from "@/components/Marker";

/* Native details/summary accordion, Arc editorial styling. */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-12 md:px-10 md:py-16"
    >
      <Marker n="11">Questions</Marker>

      <h2 id="faq-h" className="wordmark mt-6 max-w-[18ch] text-4xl leading-[1.05] sm:text-5xl">
        Before you ask.
      </h2>

      <div className="mt-12 max-w-[70ch] divide-y divide-rule-soft border-y border-rule-soft">
        {config.faqs.map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden className="text-red transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[60ch] text-ink-dim">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
