"use client";

import { useRef, useState } from "react";

/**
 * Nav music toggle: plays an epic anthem to set the arena mood.
 * Drop an audio file at public/anthem.mp3. Until then the button is a no-op
 * (browsers block autoplay anyway, so it always starts on a user click).
 */
export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  function toggle() {
    const a = ref.current;
    if (!a) return;
    if (on) {
      a.pause();
      setOn(false);
    } else {
      a.volume = 0.35;
      a.play().then(() => setOn(true)).catch(() => setOn(false));
    }
  }

  return (
    <>
      <audio ref={ref} src="/anthem.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={on ? "Pause the anthem" : "Play the anthem"}
        aria-pressed={on}
        title="Anthem"
        className={`flex h-8 w-8 items-center justify-center border text-sm transition-colors ${
          on
            ? "border-red bg-red text-cream"
            : "border-rule text-gold-deep hover:border-red hover:text-red"
        }`}
      >
        <span aria-hidden>{on ? "❚❚" : "♪"}</span>
      </button>
    </>
  );
}
