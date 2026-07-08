"use client";

import { useEffect, useState } from "react";
import { SEED_TASKS, type PlanTask, type PlanStatus, type PlanPriority } from "@/lib/planTasks";

const COLUMNS: { key: PlanStatus; label: string }[] = [
  { key: "todo", label: "To do" },
  { key: "doing", label: "In progress" },
  { key: "done", label: "Done" },
];

const PRIORITY: Record<PlanPriority, string> = {
  P0: "border-red text-red",
  P1: "border-gold text-gold-deep",
  P2: "border-rule text-ink-faint",
};

const STORE_KEY = "arcarena-plan-v1";

export default function PlanPage() {
  const [tasks, setTasks] = useState<PlanTask[]>(SEED_TASKS);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState("");

  // hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) setTasks(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(tasks));
    } catch {
      /* ignore */
    }
  }, [tasks, loaded]);

  function move(id: string, status: PlanStatus) {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, status } : x)));
  }
  function remove(id: string) {
    setTasks((t) => t.filter((x) => x.id !== id));
  }
  function addTask() {
    const title = draft.trim();
    if (!title) return;
    setTasks((t) => [
      ...t,
      { id: `u${t.length}-${title.length}`, title, workstream: "General", owner: "Adam", priority: "P1", due: "TBD", status: "todo" },
    ]);
    setDraft("");
  }
  function reset() {
    if (typeof window !== "undefined" && window.confirm("Reset the board to the seeded plan? Local changes are lost.")) {
      setTasks(SEED_TASKS);
    }
  }

  const done = tasks.filter((t) => t.status === "done").length;
  const pct = tasks.length ? Math.round((done / tasks.length) * 100) : 0;

  return (
    <main className="mx-auto max-w-[1280px] px-5 py-8 md:px-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5">
        <div>
          <p className="marker mb-2">
            <span className="crown" aria-hidden>♔</span>
            <span>arcarena ops board</span>
          </p>
          <h1 className="wordmark text-3xl sm:text-4xl">Behind the scenes.</h1>
          <p className="mt-2 max-w-[60ch] text-sm text-ink-dim">
            Drag cards across the columns, check things off, add your own. Roles and priorities are on
            every card. This board is unlisted and saved to this browser only.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-semibold tabular-nums text-red">{pct}%</p>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">{done} / {tasks.length} done</p>
          </div>
          <button
            onClick={reset}
            className="border border-rule px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink-dim transition-colors hover:border-red hover:text-red"
          >
            Reset
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {COLUMNS.map((col) => {
          const items = tasks.filter((t) => t.status === col.key);
          return (
            <section
              key={col.key}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData("id");
                if (id) move(id, col.key);
              }}
              className="flex min-h-[60vh] flex-col gap-3 border border-rule bg-paper/50 p-3"
            >
              <h2 className="flex items-baseline justify-between px-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                {col.label}
                <span className="tabular-nums">{items.length}</span>
              </h2>

              {items.map((t) => (
                <article
                  key={t.id}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("id", t.id)}
                  className={`cursor-grab border border-rule bg-cream p-3 active:cursor-grabbing ${
                    t.status === "done" ? "opacity-60" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`border px-1.5 py-0.5 text-[0.62rem] font-semibold tracking-wide ${PRIORITY[t.priority]}`}>
                      {t.priority}
                    </span>
                    <button
                      onClick={() => remove(t.id)}
                      aria-label="Delete card"
                      className="text-ink-faint transition-colors hover:text-red"
                    >
                      ×
                    </button>
                  </div>
                  <p className={`mt-2 text-sm font-medium leading-snug ${t.status === "done" ? "line-through" : ""}`}>
                    {t.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] text-ink-faint">
                    <span className="font-semibold text-gold-deep">{t.workstream}</span>
                    <span>{t.owner}</span>
                    <span>{t.due}</span>
                  </div>
                </article>
              ))}

              {col.key === "todo" && (
                <div className="mt-1 flex gap-2">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Add a card"
                    className="min-w-0 flex-1 border border-rule bg-cream px-2 py-1.5 text-sm placeholder:text-ink-faint focus-visible:border-red focus-visible:outline-none"
                  />
                  <button
                    onClick={addTask}
                    className="border border-red bg-red px-3 py-1.5 text-sm font-medium text-cream transition-colors hover:bg-red-deep"
                  >
                    Add
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
