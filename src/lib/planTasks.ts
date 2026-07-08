export type PlanStatus = "todo" | "doing" | "done";
export type PlanPriority = "P0" | "P1" | "P2";
export type PlanTask = {
  id: string;
  title: string;
  workstream: string;
  owner: string;
  priority: PlanPriority;
  due: string;
  status: PlanStatus;
};

/**
 * Seed for the /plan ops board, re-dated 2026-07-02 for the confirmed
 * July 11-12 event (setup Jul 10, apps close Jul 8). Edit freely; the board
 * persists your changes to localStorage and you can reset back to this seed.
 * NOTE: resetting the board applies these new dates; older localStorage
 * boards keep the old ones until reset.
 */
export const SEED_TASKS: PlanTask[] = [
  // Capital
  { id: "t1", title: "Get Fulgur signed: check size, RFS text, judge seat, follow-on ladder", workstream: "Capital", owner: "Adam", priority: "P0", due: "Jul 3", status: "doing" },
  { id: "t2", title: "Confirm the exact Fulgur check number to publish", workstream: "Capital", owner: "Adam", priority: "P1", due: "Jul 3", status: "todo" },
  { id: "t3", title: "Define the funding ladder terms with Fulgur (rung by rung)", workstream: "Capital", owner: "Adam", priority: "P1", due: "Jul 4", status: "todo" },
  { id: "t4", title: "Confirm Curious mandate + what to publish with James", workstream: "Capital", owner: "Adam", priority: "P1", due: "Jul 4", status: "todo" },

  // Team
  { id: "t27", title: "Ask Megan: cofounder / floor-ops lead (interior half of the org)", workstream: "Team", owner: "Adam", priority: "P0", due: "Jul 2", status: "todo" },

  // Recruiting
  { id: "t5", title: "Build the target list of 40 to 60 named builders", workstream: "Recruiting", owner: "Recruiting", priority: "P0", due: "Jul 2", status: "doing" },
  { id: "t6", title: "Tier 0 outreach: ask Alex/Fulgur for intros in person + NS alumni Telegram", workstream: "Recruiting", owner: "Adam", priority: "P0", due: "Jul 2", status: "todo" },
  { id: "t7", title: "Tier 1 warm DMs: Bitshala, Koji, BitDevs SG, Superteam, GenAI Fund", workstream: "Recruiting", owner: "Recruiting", priority: "P1", due: "Jul 4", status: "todo" },
  { id: "t8", title: "Application form live (Google Form wired to all CTAs)", workstream: "Recruiting", owner: "Adam", priority: "P0", due: "Done", status: "done" },
  { id: "t9", title: "Curate and accept about 5 teams (over-accept to 6 or 7)", workstream: "Recruiting", owner: "Adam", priority: "P0", due: "Jul 7", status: "todo" },
  { id: "t10", title: "Send confirmation + logistics pack to each team", workstream: "Recruiting", owner: "Ops", priority: "P0", due: "Jul 8", status: "todo" },
  { id: "t11", title: "Collect deposits / commitments to kill no-show risk", workstream: "Recruiting", owner: "Ops", priority: "P1", due: "Jul 8", status: "todo" },

  // Venue + workstations
  { id: "t12", title: "Lock Network School venue in writing for Jul 10 to 12 (overnight OK)", workstream: "Venue", owner: "Adam", priority: "P0", due: "Jul 3", status: "todo" },
  { id: "t13", title: "Verify wifi + power; stage 3 to 5 backup hotspots", workstream: "Venue", owner: "Venue", priority: "P1", due: "Jul 8", status: "todo" },
  { id: "t14", title: "Workstation setup: desks, power strips, monitors, cabling, signage", workstream: "Workstations", owner: "Venue", priority: "P1", due: "Jul 10", status: "todo" },
  { id: "t15", title: "AV test: projector, screen, mics, demo stage", workstream: "Workstations", owner: "Venue", priority: "P0", due: "Jul 10", status: "todo" },

  // Logistics
  { id: "t16", title: "Order food at 20 percent over headcount + collect dietary needs", workstream: "Logistics", owner: "Ops", priority: "P1", due: "Jul 6", status: "todo" },
  { id: "t17", title: "Procure swag + print badges and a backup attendee list", workstream: "Logistics", owner: "Ops", priority: "P2", due: "Jul 8", status: "todo" },
  { id: "t18", title: "Arrange the Singapore to Forest City crossing (shared van)", workstream: "Logistics", owner: "Ops", priority: "P1", due: "Jul 9", status: "todo" },

  // Program + judging
  { id: "t19", title: "Confirm judges: Fulgur anchor + 1 to 2 Bitcoin SMEs", workstream: "Judging", owner: "Adam", priority: "P1", due: "Jul 6", status: "todo" },
  { id: "t20", title: "Judging rubric locked and published on the site", workstream: "Program", owner: "Adam", priority: "P1", due: "Done", status: "done" },
  { id: "t21", title: "Lock IP + eligibility rules (work starts at the event)", workstream: "Program", owner: "Adam", priority: "P1", due: "Jul 4", status: "todo" },

  // Comms + ops
  { id: "t22", title: "Stand up the cohort Telegram and comms hub", workstream: "Comms", owner: "Comms", priority: "P1", due: "Jul 5", status: "todo" },
  { id: "t23", title: "Assign a code-of-conduct lead + post the contingency sheet", workstream: "Ops", owner: "Ops", priority: "P1", due: "Jul 9", status: "todo" },
  { id: "t24", title: "Run the day-of run-of-show rehearsal on site", workstream: "Ops", owner: "Adam", priority: "P0", due: "Jul 10", status: "todo" },
  { id: "t25", title: "Site live: full IA, red CTAs, Fulgur RFS, apply form, Jul 11-12 dates", workstream: "Comms", owner: "Adam", priority: "P0", due: "Done", status: "done" },
  { id: "t26", title: "Post-event: survey, recap, set month 1/2/3 ladder checkpoints", workstream: "Post", owner: "Adam", priority: "P2", due: "Jul 19", status: "todo" },
];
