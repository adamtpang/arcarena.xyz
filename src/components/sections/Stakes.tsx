import { config } from "@config";

/* The stakes: honest numbers up front, a16z-style. The one dark band on the page,
 * the coliseum's shadow between the warm hero and the editorial sections. */
export function Stakes() {
  const { prize } = config;
  const stats = [
    { v: prize.headline, l: "in prizes" },
    { v: "2", l: "funds in the room" },
    { v: "5", l: "team seats" },
    { v: "36h", l: "to ship" },
    { v: "→ Seed", l: "the ladder's end" },
  ];
  return (
    <section aria-label="The stakes" className="reveal bg-ink text-cream">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.l} className="flex flex-col gap-1.5 bg-ink px-6 py-9">
            <span className="text-[clamp(1.6rem,1.1rem+2vw,2.6rem)] font-bold leading-none tracking-tight">
              {s.v}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/50">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
