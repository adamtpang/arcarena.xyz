import type { Metadata } from "next";
import { config } from "@config";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Marker } from "@/components/Marker";

export const metadata: Metadata = {
  title: "Sponsor arcarena",
  description:
    "Sponsor arcarena, Arc's curated builder weekend at Network School. Badge, Track, and Title tiers: your logo, your thesis as a track, your first check on stage.",
};

/* Sponsor page: DM to paid in two clicks. The $5K tier pays directly once
 * sponsor.payLink5k is set; until then every button is a prefilled email. */
export default function SponsorPage() {
  const { sponsor, event, brand } = config;
  const mailHref = (tier: string) =>
    `mailto:${sponsor.contact}?subject=${encodeURIComponent(`arcarena sponsorship: ${tier}`)}&body=${encodeURIComponent(
      `Hi Adam,\n\nWe want the ${tier} tier for arcarena (${event.dates}, ${event.venue}).\n\nFirm:\nName:\n`
    )}`;

  return (
    <>
      <Header />
      <main>
        <section
          id="sponsor"
          aria-labelledby="sponsor-h"
          className="mx-auto max-w-[1080px] px-6 py-14 md:px-10 md:py-20"
        >
          <Marker n="§">Sponsor</Marker>

          <h1 id="sponsor-h" className="wordmark mt-5 max-w-[16ch] text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
            Put your thesis in the arena.
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg text-ink-dim">{sponsor.intro}</p>
          <p className="mt-3 text-sm text-ink-faint">
            {event.dates} · {event.venue}, {event.venueLocation} · An {brand.parent.name} incubator program
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {sponsor.tiers.map((t) => {
              const payable = t.cta === "pay" && sponsor.payLink5k;
              const href = payable ? sponsor.payLink5k : mailHref(`${t.name} (${t.price})`);
              return (
                <div key={t.name} className="flex flex-col gap-4 bg-cream p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-gold">{t.name}</span>
                    <span className="text-xl font-semibold tracking-tight text-red">{t.price}</span>
                  </div>
                  <p className="text-lg font-semibold tracking-tight">{t.pitch}</p>
                  <ul className="flex flex-col gap-2">
                    {t.perks.map((p) => (
                      <li key={p} className="grid grid-cols-[1rem_1fr] gap-2 text-sm text-ink-dim">
                        <span aria-hidden className="text-gold">♔</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3">
                    <a
                      href={href}
                      {...(payable ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`btn ${t.cta === "pay" ? "btn-primary" : "btn-outline"} w-full justify-center`}
                    >
                      {t.cta === "pay" ? (payable ? "Sponsor now" : "Claim the Badge") : "Talk to us"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 max-w-[60ch] text-sm text-ink-faint">
            Every tier includes the recap film and the post-event report: what was built, who advanced
            on the funding ladder, and where the teams went next. Sponsorship closes when doors open
            on Saturday, July 11.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
