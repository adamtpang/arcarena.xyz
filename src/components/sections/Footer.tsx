import { config } from "@config";

export function Footer() {
  const { brand, event } = config;
  return (
    <footer className="border-t border-rule px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-faint">
        <span className="flex items-center gap-2 text-ink">
          <span aria-hidden className="text-gold">
            ♔
          </span>
          <span className="wordmark text-base">{brand.wordmark}</span>
        </span>
        <span aria-hidden className="text-rule">·</span>
        <span>{event.track} track</span>
        <span aria-hidden className="text-rule">·</span>
        <a
          href={event.sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold-deep"
        >
          Sponsored by {event.sponsor.name}
        </a>
        <span aria-hidden className="text-rule">·</span>
        <a href="/sponsor" className="font-medium text-red-deep transition-colors hover:text-red">
          Become a sponsor
        </a>

        <a
          href={brand.parent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold-deep sm:ml-auto"
        >
          An {brand.parent.name} incubator program ↗
        </a>
      </div>
    </footer>
  );
}
