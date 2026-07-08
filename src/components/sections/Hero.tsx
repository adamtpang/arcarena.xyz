import { config } from "@config";
import { Countdown } from "@/components/Countdown";

export function Hero() {
  const { brand, event, prize, apply, chips } = config;
  const facts = [`${prize.headline} headline prize`, ...chips];
  return (
    <section
      id="top"
      aria-labelledby="wordmark"
      className="relative overflow-hidden"
    >
      {/* arena art backdrop (drop the image at public/arena.jpg) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/arena.jpg)" }}
      />
      {/* warm scrim: near-solid cream on the left for readable text, fading right to reveal the arena */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, #fffbf2 0%, rgba(255,251,242,0.94) 42%, rgba(255,251,242,0.7) 66%, rgba(255,251,242,0.42) 100%), linear-gradient(0deg, #fffbf2 0%, rgba(255,251,242,0) 30%)",
        }}
      />

      <div className="mx-auto max-w-[1080px] px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-16">
        <p className="marker mb-4">
          <span className="crown" aria-hidden>
            ♔
          </span>
          <span>
            An{" "}
            <a href={brand.parent.url} className="text-red-deep underline-offset-4 hover:underline">
              {brand.parent.name}
            </a>{" "}
            incubator program
          </span>
        </p>

        <h1 id="wordmark" className="wordmark text-[clamp(2.75rem,11vw,7rem)]">
          {brand.wordmark}
        </h1>

        <p className="mt-4 max-w-[30ch] text-balance text-2xl font-medium leading-[1.12] tracking-tight sm:text-3xl">
          {brand.tagline}
        </p>

        <p className="mt-4 max-w-[60ch] text-lg text-ink-dim">
          The {event.track} track, sponsored by{" "}
          <a
            href={event.sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow font-medium"
          >
            {event.sponsor.name}
          </a>
          . Ship in a weekend, then climb a funding ladder to a fundable seed.
        </p>

        {/* key facts, red-bordered */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {facts.map((c) => (
            <li
              key={c}
              className="border border-red bg-cream/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-ink backdrop-blur-sm"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* when + where */}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-1.5 text-sm">
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

        {/* dual CTAs, color-coded red */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href={apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {apply.builder}
          </a>
          <a href={apply.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {apply.investor}
          </a>
        </div>

        {/* countdown to doors (applications stay open by invite until doors) */}
        <div className="mt-7 border-t border-rule pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Doors open in
          </p>
          <Countdown targetISO={event.countdownISO} doneLabel="We are live" />
        </div>
      </div>
    </section>
  );
}
