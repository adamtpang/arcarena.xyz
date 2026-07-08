import { config } from "@config";
import { Marker } from "@/components/Marker";

/* One premium item, mentioned simply. */
export function Swag() {
  return (
    <section
      id="swag"
      aria-labelledby="swag-h"
      className="reveal mx-auto max-w-[1080px] border-t border-rule-soft px-6 py-20 md:px-10 md:py-24"
    >
      <Marker n="05">Swag</Marker>
      <p id="swag-h" className="mt-6 max-w-[24ch] text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
        {config.swag.item}
      </p>
    </section>
  );
}
