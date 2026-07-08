import Link from "next/link";
import { config } from "@config";
import { MusicToggle } from "@/components/MusicToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule-soft bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="flex items-baseline gap-2" aria-label="arcarena, back to top">
          <span aria-hidden className="text-gold">
            ♔
          </span>
          <span className="wordmark text-lg">{config.brand.wordmark}</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Primary">
          <span className="hidden items-center gap-6 text-sm text-ink-dim md:flex">
            <a href="/#how-it-works" className="transition-colors hover:text-ink">How it works</a>
            <a href="/#tracks" className="transition-colors hover:text-ink">Tracks</a>
            <a href="/#ladder" className="transition-colors hover:text-ink">Ladder</a>
            <a href="/#schedule" className="transition-colors hover:text-ink">Schedule</a>
            <Link href="/sponsor" className="font-medium text-red-deep transition-colors hover:text-red">Sponsor</Link>
          </span>
          <MusicToggle />
          <a
            href={config.apply.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Apply
          </a>
        </nav>
      </div>
    </header>
  );
}
