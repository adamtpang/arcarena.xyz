/* ============================================================================
 * event.config.ts, ARENA, SINGLE SOURCE OF TRUTH
 * ----------------------------------------------------------------------------
 * Arena is an edition of the Crucible hackathon engine: a directed,
 * multi-ecosystem builder weekend hosted by Arc. The Bitcoin-only version
 * was edition zero; this is the Base x Solana x Bitcoin edition. To run the
 * next one, swap values here, not markup. Search "TODO_" before launch.
 * ========================================================================== */

export type Beat = { time: string; label: string; detail: string };
export type Track = { name: string; tag: string; blurb: string };
export type Bounty = { amount: string; title: string; sponsor?: string; sponsorSlug?: string };
export type Person = { name: string; role: string; org?: string; confirmed?: boolean };
export type CoHost = { name: string; slug: string; lane: string };
export type Audience = { key: string; label: string; value: string; slug: string; cta: string; seats: string };
export type Kpi = { value: string; label: string };
export type HowStep = { no: string; title: string; detail: string };
export type Faq = { q: string; a: string };
export type Partner = { name: string; slug?: string; tier: string };
export type CtaKind = "primary" | "secondary" | "ghost";
export type LinkEntry = { label: string; destination: string; kind: CtaKind };

/* ---- /go/[slug] destination map, every outbound click is attributable ---- */
export const links: Record<string, LinkEntry> = {
  // ---- v1 single CTA (arcarena Bitcoin track) ----
  apply: { label: "Apply to build", destination: "https://forms.gle/qohh6ahc8NBATMS9A", kind: "primary" },

  // ---- primary apply paths ----
  // TODO_APPLY_BUILDER / INVESTOR / INCUBATOR / MEDIA: point at real application forms
  "apply-builder": { label: "Apply as a builder", destination: "https://tally.so/r/TODO_BUILDER_FORM", kind: "primary" },
  "apply-investor": { label: "Apply as an investor", destination: "https://tally.so/r/TODO_INVESTOR_FORM", kind: "primary" },
  "apply-incubator": { label: "Scout as an incubator", destination: "https://tally.so/r/TODO_INCUBATOR_FORM", kind: "secondary" },
  "apply-media": { label: "Apply for media access", destination: "https://tally.so/r/TODO_MEDIA_FORM", kind: "secondary" },

  // ---- secondary CTAs ----
  sponsor: { label: "Sponsor a bounty", destination: "mailto:partners@thearccity.com?subject=Arena%20sponsorship", kind: "secondary" },
  mentor: { label: "Become a judge or mentor", destination: "https://tally.so/r/TODO_MENTOR_FORM", kind: "secondary" },
  partner: { label: "Partner with us", destination: "mailto:hello@thearccity.com?subject=Arena%20partnership", kind: "secondary" },
  livestream: { label: "Watch the livestream", destination: "https://youtube.com/@TODO_CHANNEL", kind: "ghost" },

  // ---- host + the three ecosystems, all tracked ----
  arc: { label: "Arc", destination: "https://thearccity.com", kind: "ghost" },
  base: { label: "Base", destination: "https://base.org", kind: "ghost" },
  solana: { label: "Solana", destination: "https://solana.com", kind: "ghost" },
  // Bitcoin lane is represented by Fulgur Ventures
  bitcoin: { label: "Bitcoin", destination: "https://fulgur.ventures", kind: "ghost" },
};

export const event = {
  /* ---- identity ---- */
  name: "Arena",
  // hero kicker line
  kicker: "Base × Solana × Bitcoin · hosted by Arc",
  positioning: "One weekend. The best builders on Base, Solana, and Bitcoin, in one room. Hosted by Arc. Forged, not gathered.",
  oneLiner: "One weekend. The best builders across Base, Solana, and Bitcoin. Real problems, real capital, one room.",

  // host of this edition
  host: { name: "Arc", slug: "arc", url: "https://thearccity.com" },

  /* ---- when + where ---- */
  // TODO_DATE: confirm the month. Reading "the 10th and 11th" as Fri-Sat 10-11 July 2026.
  date: {
    display: "July 10-11, 2026",
    doors: "Doors 18:00 · Friday 10 July",
  },
  // TODO_COUNTDOWN + TODO_TZ: confirm the timezone (defaulting to UTC+8).
  countdownTargetISO: "2026-07-10T18:00:00+08:00",
  // TODO_LOCATION: confirm Arc's venue + city.
  location: {
    venue: "Arc",
    city: "Venue TBA",
  },

  /* ---- the three ecosystems in the arena (shown equal) ---- */
  coHosts: [
    { name: "Base", slug: "base", lane: "Coinbase L2" },
    { name: "Solana", slug: "solana", lane: "High-performance L1" },
    { name: "Bitcoin", slug: "bitcoin", lane: "L1 + Lightning, with Fulgur" },
  ] satisfies CoHost[],

  /* ---- who's in the room: four audiences, one switchboard ----
   * TODO_SEATS: confirm capacity numbers (they double as scarcity). */
  connectivity:
    "Arena is run like a switchboard. Builders, investors, incubators, and the people who tell the story are in one room on purpose, matched by hand, not left to a name-tag scramble.",
  audiences: [
    { key: "builders", label: "Engineers", value: "Ship something real in one weekend. Mentors on the floor, capital in the room, and a stage that actually gets watched.", slug: "apply-builder", cta: "Apply as a builder", seats: "50 team seats" },
    { key: "investors", label: "Investors", value: "Meet the teams while the code is still warm. First look and first check, before the round is a round.", slug: "apply-investor", cta: "Apply as an investor", seats: "20 investor seats" },
    { key: "incubators", label: "Incubators", value: "Source your next cohort under real pressure. Watch 50 teams build, then take the best ones home.", slug: "apply-incubator", cta: "Scout as an incubator", seats: "10 partner slots" },
    { key: "media", label: "Creators & media", value: "The story builds itself. Get the room, the footage, and the founders before anyone else has them.", slug: "apply-media", cta: "Apply for media access", seats: "12 media passes" },
  ] satisfies Audience[],

  /* ---- KPI band: PROPOSED targets for edition one (not results). TODO_KPIS: tune. ---- */
  kpis: {
    caption: "A proposal for edition one. Targets, not promises.",
    items: [
      { value: "3", label: "ecosystems: Base, Solana, Bitcoin" },
      { value: "50", label: "teams, hand-selected" },
      { value: "$100K+", label: "in bounties and pre-seed capital" },
      { value: "2-4", label: "investable teams, the real metric" },
      { value: "100%", label: "documented and livestreamed" },
    ] satisfies Kpi[],
  },

  /* ---- how it works: the build -> win -> get backed pipeline (Colosseum-style) ---- */
  howItWorks: {
    intro: "Three moves across one weekend, and each one feeds the next.",
    steps: [
      { no: "01", title: "Build", detail: "Thirty-six hours on Base, Solana, or Bitcoin. Mentors on the floor, problems worth solving, and a clock that does not stop." },
      { no: "02", title: "Win", detail: "Demo on a real stage to judges, founders, and investors. Bounties are won live, not in a spreadsheet." },
      { no: "03", title: "Get backed", detail: "The strongest teams meet capital in the room: opinionated funds per ecosystem, with Arc's network behind them." },
    ] satisfies HowStep[],
  },

  /* ---- FAQ: handle objections before the footer. TODO_FAQ: confirm specifics. ---- */
  faqs: [
    { q: "Who can apply?", a: "Builders and founders who can ship in a weekend, plus investors, incubators, and media who want in the room. Each ecosystem track is reviewed and seats are limited." },
    { q: "What do I build?", a: "Anything real on Base, Solana, or Bitcoin. Working prototypes over slideware. Pick a track and a problem worth solving." },
    { q: "What does it cost to compete?", a: "Nothing. Selected builders get the room, mentors, meals, and the stage. TODO_TRAVEL: confirm whether travel or lodging is covered." },
    { q: "Who owns what I build?", a: "You do. Arena does not take your IP. Bounties and any capital are separate, opt-in conversations." },
    { q: "Is it in person or online?", a: "In person at Arc on the weekend, and fully documented and livestreamed for everyone who cannot make it." },
    { q: "How does the funding work?", a: "Each ecosystem brings its own opinionated capital, with the Bitcoin track led by Fulgur Ventures, and Arc connects the strongest teams to its network. Specifics per track announced soon." },
  ] satisfies Faq[],

  /* ---- the pitch ---- */
  pitch: [
    "Most hackathons hand you a room, a deadline, and a sponsor table, then disappear.",
    "Arena is directed. Base, Solana, and Bitcoin in one room, a curated problem set, a produced run of show, and no dead air, every hour pulls you toward the next.",
    "Builders, not spectators. You leave with a thing that works and the people who can fund it.",
  ],

  /* ---- tracks = the three ecosystems ---- */
  tracks: [
    { name: "Base", tag: "Coinbase L2", blurb: "Onchain consumer apps, payments, and the EVM L2 pushing hardest for mainstream adoption." },
    { name: "Solana", tag: "High-performance L1", blurb: "High-throughput apps, DePIN, and anything that needs raw speed and low fees." },
    { name: "Bitcoin", tag: "L1 + Lightning, with Fulgur", blurb: "Lightning, self-custody, and the hard problems on the original chain." },
  ] satisfies Track[],

  /* ---- bounties: each ecosystem brings its own capital ---- */
  bounties: {
    intro: "Each ecosystem brings its own capital. Bounties are won on the stage, not in a spreadsheet.",
    // TODO_BOUNTIES: confirm amounts + sponsors. sponsorSlug links the logo via /go/<slug>.
    pool: "$100K+",
    items: [
      { amount: "$30,000", title: "Best Base app", sponsor: "Base", sponsorSlug: "base" },
      { amount: "$30,000", title: "Best Solana app", sponsor: "Solana", sponsorSlug: "solana" },
      { amount: "$30,000", title: "Best Bitcoin / Lightning build", sponsor: "Fulgur Ventures", sponsorSlug: "bitcoin" },
      { amount: "$10,000", title: "Best cross-ecosystem build", sponsor: "Arc", sponsorSlug: "arc" },
    ] satisfies Bounty[],
  },

  /* ---- run of show: the produced-experience curve (Doors to Finale) ---- */
  runOfShow: [
    { time: "Fri 18:00", label: "Doors", detail: "Walk in, badge up, first real conversation. No milling, no lanyard limbo." },
    { time: "Fri 19:00", label: "Kickoff", detail: "Lights down. The problem set, the bounties, and the clock, presented like a premiere, not a briefing." },
    { time: "The weekend", label: "The Build", detail: "Heads-down. Mentors on the floor, capital in the room, checkpoints that keep the energy from sagging." },
    { time: "Sat 14:00", label: "Demo Theater", detail: "Every team on a real stage with real production. The audience is judges, founders, and investors, not a hallway." },
    { time: "Sat 17:00", label: "Judging", detail: "Live and on the record. Scored against problems that matter, not slide polish." },
    { time: "Sat 19:00", label: "The Finale", detail: "Bounties awarded, capital conversations opened, the night documented. You leave with momentum, not a tote bag." },
  ] satisfies Beat[],

  /* ---- judges + mentors (fill in as people confirm) ---- */
  judges: [
    { name: "To be announced", role: "Judge", confirmed: false },
    { name: "To be announced", role: "Judge", confirmed: false },
    { name: "To be announced", role: "Judge", confirmed: false },
    { name: "To be announced", role: "Judge", confirmed: false },
  ] satisfies Person[],
  mentors: [
    { name: "To be announced", role: "Mentor", confirmed: false },
    { name: "To be announced", role: "Mentor", confirmed: false },
    { name: "To be announced", role: "Mentor", confirmed: false },
  ] satisfies Person[],

  /* ---- partners + sponsors (Arc hosts; ecosystems shown equal; slots fill in) ---- */
  partners: [
    { name: "Arc", slug: "arc", tier: "Host" },
    { name: "Base", slug: "base", tier: "Ecosystem" },
    { name: "Solana", slug: "solana", tier: "Ecosystem" },
    { name: "Bitcoin / Fulgur", slug: "bitcoin", tier: "Ecosystem" },
    // TODO_SPONSORS: add sponsors with a `slug` present in `links` so clicks are tracked.
    { name: "Sponsor slot", tier: "Sponsor" },
    { name: "Sponsor slot", tier: "Sponsor" },
    { name: "Sponsor slot", tier: "Sponsor" },
  ] satisfies Partner[],

  /* ---- RSVP: mode "email" | "embed" | "redirect" ---- */
  rsvp: {
    mode: "email" as "email" | "embed" | "redirect",
    // /rsvp and /door 302 here (the application form is the front door for edition one).
    destination: "https://forms.gle/qohh6ahc8NBATMS9A",
    embedUrl: "https://lu.ma/embed/event/TODO/simple",
  },

  /* ---- contact + social ---- */
  contact: {
    // TODO_CONTACT: confirm Arc's addresses + socials
    email: "hello@thearccity.com",
    press: "press@thearccity.com",
    social: {
      x: "https://x.com/TODO_ARC",
      telegram: "https://t.me/TODO_ARC",
    },
  },

  /* ---- SEO ---- */
  seo: {
    url: "https://arcarena.xyz",
    description:
      "Arena, a directed multi-ecosystem hackathon hosted by Arc. The best builders on Base, Solana, and Bitcoin, one weekend, one room. Documented and livestreamed.",
  },
};

/* ---- helpers ---- */
export const go = (slug: string) => `/go/${slug}`;
export const RSVP_HREF = "/rsvp";
export const DOOR_HREF = "/door";

export type EventConfig = typeof event;

/* ============================================================================
 * v1 CONFIG, arcarena, the operating system for Arc's incubator.
 * THIS is what the live page renders. Via negativa: ONE track (Bitcoin /
 * Fulgur). Everything the page shows lives here, so a second track later is
 * just another object. The `event` + multi-track `links` above are LEGACY from
 * the Base x Solana x Bitcoin version, kept only so the now-unused legacy
 * section components still type-check. Safe to delete with those files.
 * Search "TODO_" for the values to fill before launch.
 * ========================================================================== */

export type Rfs = { title: string; detail: string };
export type CuriousIdea = { no: string; title: string; detail: string; note?: string };
export type Rung = { stage: string; when: string; milestone: string; reward: string };
export type LadderTeam = { name: string; rfs: string | null; rung: number; status: "open" | "confirmed" };
export type Judge = { name: string; org: string; confirmed: boolean };
export type Rubric = { criterion: string; detail: string };
export type ArcTrack = { name: string; firm: string; firmUrl: string; status: "confirmed" | "gated"; public: boolean; tag: string; accent: string; prize: string; thesis: string; good: string };
export type FirmProfile = { name: string; url: string; public: boolean; oneLine: string; meta: { label: string; value: string }[]; portfolio?: string[]; note?: string };

export const config = {
  /* ---- identity (wordmark circumflex echoes Arc's Ârc) ---- */
  brand: {
    name: "arcarena",
    wordmark: "ârcarena",
    tagline: "where problems meet talent meets capital",
    parent: { name: "Arc", url: "https://thearccity.com" },
  },

  /* ---- the one track ---- */
  event: {
    track: "Bitcoin",
    sponsor: { name: "Fulgur Ventures", url: "https://fulgur.ventures" },
    // Confirmed with James 2026-07-02: Sat-Sun July 11-12, a 36-hour weekend build.
    dates: "July 11 to 12, 2026",
    venue: "Network School campus",
    venueLocation: "Forest City, Johor, near Singapore",
    format: "36 hours, in person, curated",
    countdownISO: "2026-07-11T09:00:00+08:00",
    applyDeadlineISO: "2026-07-08T23:59:00+08:00",
    applyDeadlineDisplay: "Applications close July 8",
    intro:
      "One track, run like an incubator. The sharpest builders in Bitcoin take a real problem, ship it in a weekend, and step onto a funding ladder that pays out as they keep going.",
  },

  /* ---- at a glance: the curated scale is the selling point ---- */
  chips: ["36 hours", "Up to 5 teams", "1 thesis", "1 check", "Network School campus"],

  /* ---- how it works: one model, made crystal clear for both sides of the room ---- */
  howItWorks: {
    intro:
      "One model, two sides of the same room. Builders ship to a thesis; investors fund what ships.",
    builder: {
      label: "For builders",
      steps: [
        { no: "01", title: "Build to the thesis", detail: "The sponsor's request for startups is the track. Pick a prompt and ship something real on Bitcoin in a weekend." },
        { no: "02", title: "Win the check", detail: "The firm's first investment is the prize, not swag. You demo live to the people who write it." },
        { no: "03", title: "Climb the ladder", detail: "Keep shipping and milestone funding follows, from a working demo to a fundable seed round." },
      ],
    },
    investor: {
      label: "For investors",
      steps: [
        { no: "01", title: "Set the thesis", detail: "Your investment thesis becomes the track's request for startups. Curated builders self-select to it." },
        { no: "02", title: "See it built", detail: "Watch five hand-picked teams ship against your thesis in one weekend. First look, while the code is still warm." },
        { no: "03", title: "Write the first check", detail: "Back the best on the stage, then follow on at each rung of the ladder as they prove out." },
      ],
    },
  },

  /* ---- capital tracks: each firm is a track (thesis = RFS, check = prize) ----
   * A track with public:false renders as a gated teaser until the partner signs off. */
  tracks: [
    {
      name: "Bitcoin",
      firm: "Fulgur Ventures",
      firmUrl: "https://fulgur.ventures",
      status: "confirmed",
      public: true,
      tag: "Opinionated",
      accent: "#b8892a",
      prize: "First check + a builder residency",
      thesis: "Bitcoin infrastructure for the next 4 billion people. Build to Fulgur's four requests for startups.",
      good: "Bitcoin native, not bolted on. Emerging-market relevance. Coachable founders.",
    },
    {
      name: "Solana",
      firm: "Solana Superteam",
      firmUrl: "https://superteam.fun",
      status: "confirmed",
      public: true,
      tag: "Ecosystem",
      accent: "#9945ff",
      prize: "$2,500+ in cash prizes",
      thesis: "High-throughput, consumer-ready apps on Solana, with the Superteam community and its network behind you.",
      good: "Fast, cheap, and built to reach real users on Solana.",
    },
    {
      // Curious Ventures (curiousventures.xyz, GP Ashish Sood): the open track.
      name: "Open",
      firm: "Curious Ventures",
      firmUrl: "https://curiousventures.xyz",
      status: "confirmed",
      public: true,
      tag: "Unopinionated",
      accent: "#c8102e",
      prize: "First check + a hacker house spot",
      thesis: "Build whatever you are curious about. Distribution is the only moat, so any vertical wins if it reaches users. Agents especially welcome.",
      good: "Distribution baked in, not bolted on. Agents that win their own users.",
    },
  ] satisfies ArcTrack[],

  /* ---- firm profiles: who is behind the check (public, confirmed firms only) ----
   * Warm leads (Openspace / Ocular, Notch) are deliberately NOT listed here. */
  firmProfiles: [
    {
      name: "Fulgur Ventures",
      url: "https://fulgur.ventures",
      public: true,
      oneLine: "The leading venture firm focused exclusively on Bitcoin and the Lightning Network.",
      meta: [
        { label: "Founded", value: "2019" },
        { label: "Stage", value: "Pre-seed to Series A" },
        { label: "First check", value: "~$50K to $200K typical (third-party estimate)" },
        { label: "Based", value: "Singapore, registered Delaware" },
      ],
      portfolio: ["Blockstream", "Breez", "Voltage", "Amboss", "Fold", "Casa", "Alby", "Umbrel", "Bitrefill"],
    },
    {
      name: "Curious Ventures",
      url: "https://curiousventures.xyz",
      public: true,
      oneLine: "Distribution-first pre-seed fund. AI commoditized code, Web3 commoditized capital, so distribution is the only moat.",
      meta: [
        { label: "Stage", value: "Pre-seed, distribution-first" },
        { label: "Check", value: "$250K to $500K" },
        { label: "GP", value: "Ashish Sood" },
        { label: "Focus", value: "Large Action Models, invisible Web3" },
      ],
      portfolio: ["Memeland", "Pyse"],
    },
  ] satisfies FirmProfile[],

  /* ---- run of show: the produced weekend, Doors to Finale ---- */
  runOfShow: [
    { time: "Sat 09:00", label: "Doors", detail: "Badge up, breakfast, first real conversations. No lanyard limbo." },
    { time: "Sat 10:00", label: "Kickoff", detail: "The thesis, the RFS, the rubric, the ladder, and the clock, presented like a premiere." },
    { time: "The 36 hours", label: "The Build", detail: "Heads down through the night. Mentors on the floor, the sponsor in the room, checkpoints that keep the energy up." },
    { time: "Sun 14:00", label: "Demo Theater", detail: "Every team on a real stage, to judges, founders, and the people who write the check." },
    { time: "Sun 17:00", label: "Judging", detail: "Live and on the record, scored against the published rubric." },
    { time: "Sun 21:00", label: "The Finale", detail: "The check is awarded and rung one opens: who advances to month one of the ladder." },
  ] satisfies Beat[],

  /* ---- the base layer: Arc + Network School are the infrastructure ---- */
  venue: {
    name: "Network School campus",
    location: "Forest City, Johor, Malaysia, a short hop from Singapore",
    blurb:
      "You bring the build. Arc and Network School handle everything else: a residential campus with housing and meals, fast wifi, and turnkey legal. Show up and ship.",
    providers: [
      { name: "Network School", url: "https://ns.com", role: "The campus, housing, meals, the room. 400-plus residents across 70-plus nationalities." },
      { name: "Arc", url: "https://thearccity.com", role: "The SEZ jurisdiction, legal incorporation in-zone, and the brand." },
    ],
    // Official NS event listing (public: names Bitcoin, Solana Superteam, Curious Ventures, Fulgur).
    eventListingUrl: "https://ns.com/events/cu1w4a2u",
    eventListingLabel: "Official event listing on ns.com",
    handled: ["Housing on the NS campus", "All meals and coffee", "Fast wifi and power", "SEZ legal incorporation via Arc"],
    // TODO_ARC_REFERRAL: replace with the real Arc / Network School referral link or code.
    referralUrl: "https://ns.com",
    referralNote: "Selected builders onboard to Network School through the Arc referral.",
    travel: "Travel for selected builders: details soon.",
    swag: "One premium item for every builder who ships.",
  },

  /* ---- FAQ: kill objections before the apply CTA ---- */
  faqs: [
    { q: "How do I get in?", a: "Apply and you are reviewed. Up to five teams are curated for edition one, so a clear, shipped track record matters more than a long form." },
    { q: "What do I build?", a: "Anything where Bitcoin is load-bearing, against one of Fulgur's four prompts. Working prototypes over slideware." },
    { q: "What does it cost to compete?", a: "Nothing. Selected builders get the room, mentors, meals, and the stage. Travel and lodging: details soon." },
    { q: "Who owns what I build?", a: "You do. arcarena does not take your IP. The check and any capital are separate, opt-in conversations." },
    { q: "What team size works best?", a: "Teams of two to four. Solo builders can find a team in the group. Four is the cap, five-plus spend too long coordinating." },
    { q: "Can I bring existing code?", a: "Bring your libraries and tools, not a finished product. The work toward the prize should start at the event." },
    { q: "How does the money work?", a: "The sponsor's first check is the prize, then the ladder pays out at the month one, two, and three milestones. Specifics are confirmed per edition." },
  ] satisfies Faq[],

  /* ---- partners: public, confirmed entities only (no warm leads) ---- */
  partners: [
    { name: "Arc", tier: "Host and base layer" },
    { name: "Fulgur Ventures", tier: "Bitcoin track" },
    { name: "Curious Ventures", tier: "Agentic track" },
    { name: "Solana Superteam", tier: "Community partner" },
    { name: "Network School", tier: "Campus" },
  ] satisfies Partner[],

  /* ---- requests for startups: the prompts teams build against ---- */
  // Fulgur's actual published RFS, lifted from fulgur.ventures/request-for-startups.
  rfs: [
    { title: "Bitcoin savings apps", detail: "Everyone will save in bitcoin, but across Vietnam, Indonesia, the Philippines and beyond there is still no simple way to buy a little every week. Get 20,000 users buying $200 a week and you have the backbone of the global bitcoin banking system." },
    { title: "TradFi exploits", detail: "Fiat is a leaky ship and bitcoin is not. Find the ways bitcoin drains energy from the old system: inheritance wrappers, proof of reserves, anything that demonetises real estate or gold." },
    { title: "Bitcoin financial services and cyber infrastructure", detail: "Most of TradFi has no bitcoin-native equivalent yet: prime brokerage, structured credit, derivatives clearing. Plus security, where proof of work can raise the cost of attacks until they stop being economic." },
    { title: "Universal payments", detail: "No consumer, business, or AI agent should have to choose between Lightning, Ark, Spark, or ecash. Abstract the rails into one experience, privacy by default, bridging UPI, Pix, and FPS." },
  ] satisfies Rfs[],

  /* ---- Curious Ventures' brief: the Next Fundable Ideas deck (July 2026), baked in ----
   * Source: Ashish Sood's slides. 27 ideas on the Behavioral Fork thesis. */
  curiousRfs: {
    source: "https://curiousventures.xyz",
    deckName: "Next Fundable Ideas",
    intro:
      "Twenty-seven startup ideas on the Behavioral Fork thesis. Every one survives four market shifts, and the tie-breaker is always the same: distribution is the only moat.",
    filter: ["Agentic AI", "Web3 maturity", "Micro-earning", "Creator-led products"],
    fundNow: [
      { no: "01", title: "Agentic commerce", detail: "Every product and brand gets a dedicated AI agent that onboards, supports, and sells. The agent-to-agent thesis in action.", note: "Hottest venture category" },
      { no: "02", title: "Quest and micro-task platforms", detail: "Brands post micro-tasks with micro-payouts: UGC, reshares, check-ins. Web3 questing mechanics on web2 rails.", note: "The edge is distribution" },
      { no: "03", title: "Influencer-led marketplace", detail: "Trust is the gap in online brand discovery. A creator-led marketplace: quest-based micro-distribution, productized.", note: "Validates the thesis" },
    ] satisfies CuriousIdea[],
    more: [
      "The AI creative stack", "Stablecoin remittance rails", "Work-from-home AI enablement", "GenAI animation and microdrama",
      "Monetized AI selves", "Faith-tech AI", "Earn-more apps", "AI in the group chat", "Culturally native social",
      "Global D2C from local", "Regional beauty and fashion AI", "Next-gen gaming", "AI-first fintech", "Creator-distributed AI tutors",
      "Creator content licensing", "Royalty-backed creator finance", "Elder companion AI", "Snackable mobile entertainment",
      "On-device edge AI", "Consent-driven data wallets", "AI diligence for syndicates", "AI for collective action",
      "The pet economy", "Rural creator commerce",
    ],
    closer: "The alpha is in choosing.",
  },

  /* ---- the funding ladder: ship, then keep climbing for real capital ---- */
  ladder: [
    { stage: "Hackathon", when: "July 11 to 12", milestone: "Ship a working demo on Bitcoin.", reward: "$5,000" },
    { stage: "Month 1", when: "August", milestone: "A live product with your first real users.", reward: "$25,000" },
    { stage: "Month 2", when: "September", milestone: "Traction that compounds week over week.", reward: "$100K to $250K pre-seed" },
    { stage: "Month 3", when: "October", milestone: "A fundable seed story, told in numbers.", reward: "Series A introductions" },
  ] satisfies Rung[],

  /* ---- the teams: 5 seats, one per Fulgur RFS prompt + one wildcard ----
   * As teams confirm, set name and status "confirmed". rung = ladder step (0 = not started). */
  teams: [
    { name: "Seat open", rfs: "Bitcoin savings apps", rung: 0, status: "open" },
    { name: "Seat open", rfs: "TradFi exploits", rung: 0, status: "open" },
    { name: "Seat open", rfs: "Bitcoin financial services + cyber infra", rung: 0, status: "open" },
    { name: "Seat open", rfs: "Universal payments", rung: 0, status: "open" },
    { name: "Seat open", rfs: "Open: a Curious fundable idea, or your own", rung: 0, status: "open" },
  ] satisfies LadderTeam[],

  /* ---- prize: the headline number, then the real prize (the path) ---- */
  // Honest floor as of 2026-07-09: $3,000+ locked. Bump the headline the moment
  // Fulgur/Arc confirm a larger number. Never publish a prize we cannot pay.
  prize: {
    headline: "$3,000+",
    caption: "in cash across the tracks, and the funds bring more than cash",
    realPrize: "The VCs do not do cash prizes. They do better: a first check, a builder residency, and a spot in the hacker house. Keep shipping and the ladder pays out, all the way to a seed.",
  },

  /* ---- judges: 3 seats. TODO_JUDGES: names as they confirm. ---- */
  judges: [
    { name: "To be announced", org: "Fulgur Ventures", confirmed: false },
    { name: "To be announced", org: "Arc", confirmed: false },
    { name: "To be announced", org: "Bitcoin ecosystem", confirmed: false },
  ] satisfies Judge[],

  /* ---- rubric: the 4 lines teams are judged on ---- */
  rubric: [
    { criterion: "Problem clarity", detail: "Is the problem real, sharp, and worth solving now?" },
    { criterion: "Bitcoin integration depth", detail: "Is Bitcoin native to the build, not bolted on?" },
    { criterion: "Traction potential", detail: "Could this reach real users and compound?" },
    { criterion: "Demo plus commitment", detail: "Does it work live, and will the team keep building after?" },
  ] satisfies Rubric[],

  /* ---- swag: one premium item, mentioned simply ---- */
  // TODO_SWAG: name the item (a jacket, a piece of hardware, etc.).
  swag: { item: "One premium item for every builder who ships." },

  /* ---- the single call to action ---- */
  cta: { label: "Apply to build", slug: "apply" },

  /* ---- application: builders into the WhatsApp group, investors via the form ---- */
  apply: {
    url: "https://forms.gle/qohh6ahc8NBATMS9A",
    // TODO_GROUP: paste the WhatsApp builder group invite link (chat.whatsapp.com/...).
    // Empty = "Join the builder group" falls back to the form as the join request.
    groupUrl: "",
    group: "Join the builder group",
    builder: "Apply as a builder",
    investor: "Apply as an investor",
    flow: [
      { no: "01", title: "Join the builder group", detail: "One WhatsApp group, everyone in it. Meet the builders and form a team of two to four." },
      { no: "02", title: "Pick your track", detail: "Bitcoin with Fulgur, or agentic with Curious. Claim a request for startups." },
      { no: "03", title: "Build and win", detail: "Ship Saturday to Sunday. The best teams take the check and climb the funding ladder." },
    ],
  },

  /* ---- sponsor tiers (the /sponsor page): DM to paid in two clicks ---- */
  sponsor: {
    contact: "adamtpang@gmail.com",
    // TODO_5K_LINK: paste a Stripe payment link here to make the $5K tier direct-pay.
    // Until set, the button falls back to a prefilled email.
    payLink5k: "",
    intro:
      "Five curated teams build to a fund's thesis in 36 hours, documented and judged on stage, then climb a funding ladder. Sponsoring puts your name, your prompts, and your first check inside that room.",
    tiers: [
      {
        name: "Badge",
        price: "$5,000",
        pitch: "Put your name in the arena.",
        perks: [
          "Logo on arcarena.xyz and the stage screen",
          "Thanks from the stage at kickoff and the finale",
          "Two passes to demo day and the finale",
        ],
        cta: "pay" as "pay" | "mail",
      },
      {
        name: "Track",
        price: "$25,000",
        pitch: "Your thesis becomes a track.",
        perks: [
          "Your request for startups: teams build to your thesis",
          "A judge seat and stage time at the finale",
          "Prizes awarded in your name",
          "First look at every team, before any round exists",
        ],
        cta: "mail" as "pay" | "mail",
      },
      {
        name: "Title",
        price: "Edition two",
        pitch: "Edition one is anchored by Fulgur Ventures.",
        perks: [
          "Naming across the whole edition",
          "The anchor judge seat",
          "The funding ladder carries your name",
          "First claim on the next edition's theme",
        ],
        cta: "mail" as "pay" | "mail",
      },
    ],
  },

  /* ---- SEO ---- */
  seo: {
    url: "https://arcarena.xyz",
    title: "arcarena, where problems meet talent meets capital",
    description:
      "The Arc x Network School hackathon, where problems meet talent meets capital. A 36-hour build weekend with Fulgur Ventures (Bitcoin), Curious Ventures (agentic), and Solana Superteam, July 11 to 12, 2026.",
  },
};

export type ArcarenaConfig = typeof config;
