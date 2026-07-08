"use client";

import { useState } from "react";

type Status = { kind: "idle" | "ok" | "err"; msg?: string };
const ROLES = ["Builder", "Founder", "Investor", "Mentor"];

/**
 * On-page interest + apply capture. POSTs to /api/subscribe (demo-safe with no
 * RESEND_API_KEY, real once keys are set). Styled in the Arc editorial system.
 */
export function ApplyForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "Builder");
    const company = String(data.get("company") || ""); // honeypot

    if (company) {
      setStatus({ kind: "ok", msg: "You are on the list." });
      return;
    }
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus({ kind: "err", msg: "Enter a valid email address." });
      return;
    }

    setBusy(true);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        form.reset();
        setStatus({
          kind: "ok",
          msg: "You are on the list. We will send the application the moment it opens.",
        });
      } else {
        setStatus({ kind: "err", msg: json.error || "Something went wrong. Try again." });
      }
    } catch {
      setStatus({ kind: "err", msg: "Network error. Try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[540px]" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="apply-email">
          Email address
        </label>
        <input
          id="apply-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@domain.com"
          required
          className="min-w-0 flex-1 border border-rule bg-cream px-4 py-3 text-ink placeholder:text-ink-faint focus-visible:border-gold focus-visible:outline-none"
        />
        <button
          type="submit"
          disabled={busy}
          className="border border-ink bg-ink px-6 py-3 font-medium text-cream transition-colors hover:border-gold-deep hover:bg-gold-deep disabled:opacity-50"
        >
          {busy ? "Sending" : "Apply to build"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">I am a</span>
        {ROLES.map((r, i) => (
          <label key={r} className="flex cursor-pointer items-center gap-1.5 text-sm text-ink-dim">
            <input type="radio" name="role" value={r} defaultChecked={i === 0} className="accent-gold" />
            {r}
          </label>
        ))}
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <p className="mt-4 min-h-[1.2em] text-sm" aria-live="polite" role="status">
        {status.kind === "ok" && <span className="text-gold-deep">{status.msg}</span>}
        {status.kind === "err" && <span className="text-[#b3261e]">{status.msg}</span>}
        {status.kind === "idle" && (
          <span className="text-ink-faint">No spam. One email when applications open.</span>
        )}
      </p>
    </form>
  );
}
