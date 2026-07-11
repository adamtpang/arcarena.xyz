import { config } from "@config";
import { Countdown } from "@/components/Countdown";

export function Hero() {
  const { brand, event, apply } = config;
  return (
    <section id="top" aria-labelledby="wordmark" className="relative isolate overflow-hidden">
      {/* arena backdrop (drop the image at public/arena.jpg) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/arena.svg)" }}
      />
      {/* warm coliseum veil: readable on the left, the arena revealed to the right, a gold floor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(103deg, #fffbf2 0%, rgba(255,251,242,0.94) 36%, rgba(255,251,242,0.64) 60%, rgba(255,251,242,0.28) 100%), radial-gradient(120% 80% at 18% 0%, rgba(184,137,42,0.12), transparent 60%), linear-gradient(0deg, #fffbf2 3%, rgba(255,251,242,0) 32%)",
        }}
      />

      <div className="mx-auto flex min-h-[88vh] max-w-[1080px] flex-col justify-center px-6 py-16 md:px-10">
        <p className="marker mb-5">
          <span className="crown" aria-hidden>
            ♔
          </span>
          <span>
            An{" "}
            <a href={brand.parent.url} className="text-red-deep underline-offset-4 hover:underline">
              {brand.parent.name}
            </a>{" "}
            incubator program · Network School
          </span>
        </p>

        <h1 id="wordmark" className="wordmark text-[clamp(3.25rem,15vw,10rem)]">
          {brand.wordmark}
        </h1>

        <p className="mt-6 max-w-[22ch] text-balance text-3xl font-semibold leading-[1.04] tracking-tight sm:text-4xl md:text-5xl">
          The <span className="text-gold-deep">proving ground</span> where problems meet talent meets capital.
        </p>

        <p className="mt-6 max-w-[58ch] text-xl text-ink-dim">
          Ship in 36 hours on Bitcoin or AI. Win a real first check. Climb a funding ladder to a
          fundable seed.
        </p>

        <p className="mt-4 max-w-[62ch] text-base text-ink-faint">
          <a href="https://fulgur.ventures" target="_blank" rel="noopener noreferrer" className="arrow font-medium text-ink-dim">
            Fulgur Ventures
          </a>
          {"   ·   "}
          <a href="https://curiousventures.xyz" target="_blank" rel="noopener noreferrer" className="arrow font-medium text-ink-dim">
            Curious Ventures
          </a>
          {"   ·   "}
          Solana Superteam, in the room.
        </p>

        {/* CTAs: builders into the group, investors to the form */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={apply.groupUrl || apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {apply.group}
          </a>
          <a href={apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {apply.investor}
          </a>
        </div>

        {/* when + where + the clock */}
        <div className="mt-10 flex flex-col gap-5 border-t border-rule pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-1.5 text-sm">
            <span>
              <span className="text-ink-faint">DATES </span>
              {event.dates}
            </span>
            <span>
              <span className="text-ink-faint">VENUE </span>
              {event.venue}, {event.venueLocation}
            </span>
            <span>
              <span className="text-ink-faint">FORMAT </span>
              {event.format}
            </span>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red">Doors open in</p>
            <Countdown targetISO={event.countdownISO} doneLabel="We are live" />
          </div>
        </div>
      </div>
    </section>
  );
}
