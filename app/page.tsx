"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import SiteNavigation from "./site-navigation";
import SiteFooter from "@/components/sections/site-footer";
import { FADE_UP, STAGGER_CONTAINER } from "@/lib/motion";

/* ─── TAB DEFINITIONS ─── */
type TabId = "home" | "rules" | "comparison" | "positions" | "reality" | "action";

interface TabItem {
  id: TabId;
  label: string;
  icon: string;
  badge?: string;
}

const tabs: TabItem[] = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "rules", label: "The Rules", icon: "📜", badge: "6 Sacrifices" },
  { id: "comparison", label: "Today vs. PSC", icon: "⚡" },
  { id: "positions", label: "What We Fight For", icon: "🎯", badge: "9 Issues" },
  { id: "reality", label: "The Reality", icon: "🔍" },
  { id: "action", label: "Take Action", icon: "🤝" },
];

/* ─── THE RULES: Personal sacrifice standards ─── */
const rules = [
  {
    id: "01",
    title: "Assets Frozen in Office",
    desc: "Your personal wealth does not grow while you serve. Not by one rupee.",
  },
  {
    id: "02",
    title: "Retire at 60. No Exceptions.",
    desc: "Power is not for life. At 60, you step aside. No extensions, no excuses.",
  },
  {
    id: "03",
    title: "Live on an Allowance",
    desc: "No luxury cars. No farmhouses. A simple, strict allowance. If you want a rich life, do not join.",
  },
  {
    id: "04",
    title: "Declare Everything",
    desc: "All assets public. Every year. Your family's finances too. Total transparency.",
  },
  {
    id: "05",
    title: "No Defection",
    desc: "If you betray voters by switching sides for money or power, you are permanently expelled from PSC. No second chances.",
  },
  {
    id: "06",
    title: "Zero Corruption",
    desc: "No unexplained wealth. No side deals. No using public office for personal gain. Ever.",
  },
];

/* ─── WHAT WE FIGHT FOR: Policy positions ─── */
type PositionCategory = "all" | "agriculture" | "public_services" | "economy" | "governance";

interface PolicyPosition {
  icon: string;
  title: string;
  category: PositionCategory;
  now: string;
  psc: string;
}

const positions: PolicyPosition[] = [
  {
    icon: "🌾",
    title: "Farmers & Agriculture",
    category: "agriculture",
    now: "No legal MSP guarantee. Farmers take loans, get cheated by middlemen, and die by suicide. Paddy farmers alone lost ₹3 lakh crore this season.",
    psc: "Legal MSP guarantee based on Swaminathan formula (C2+50%). Complete loan waiver for small farmers. MGNREGA expansion to 200 days. No forced land acquisition. No FTAs that destroy Indian agriculture.",
  },
  {
    icon: "⚖️",
    title: "Judiciary",
    category: "governance",
    now: "56 million cases pending. 4,800 judge vacancies. Chief Justices get Rajya Sabha seats after retirement. Justice is a privilege, not a right.",
    psc: "Fill every judge vacancy within 12 months. No post-retirement government rewards for judges. Fast-track courts for farmer, worker, and student cases. Justice should take months, not decades.",
  },
  {
    icon: "📺",
    title: "Media Independence",
    category: "governance",
    now: "Two corporate houses own most major news channels. Media runs propaganda, not journalism. Independent reporters get jailed. Truth is whatever the highest bidder says.",
    psc: "Break corporate monopoly over news media. No single business group can own more than one news channel. Investigate the finances of anchors who run government propaganda. Protect independent journalism by law.",
  },
  {
    icon: "🎓",
    title: "Education",
    category: "public_services",
    now: "Exam papers leak before the ink dries. 2.27 million NEET students betrayed in one exam. Government spends only 2.7% of GDP on education — half of what was promised. Private schools and coaching mafias exploit families.",
    psc: "Free quality education from school to university. No privatization of education. 6% GDP spending on education — non-negotiable. End the coaching mafia. Fix the exam system permanently — not after every scandal.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    category: "public_services",
    now: "Government spends 1.8% of GDP on health — less than Bangladesh. 60% of Indians pay from their own pocket. One hospital bill can destroy a family. Private hospitals charge what they want.",
    psc: "Free healthcare for every citizen. No privatization of hospitals. Public health spending must reach 5% of GDP. Cap prices on essential medicines and procedures. Build public hospitals — not hand money to private chains.",
  },
  {
    icon: "🧒",
    title: "Right to Parenting & Childhood",
    category: "public_services",
    now: "Children are forced to beg at traffic lights or work in factories. Orphans and those in extreme poverty are abandoned by the system, stunted by malnutrition, and denied an education.",
    psc: "The state guarantees the 'Right to Parenting'. Zero child labor and zero child begging under the age of 16. Every vulnerable child receives state-sponsored proper meals, care, and mandatory education through graduation.",
  },
  {
    icon: "💼",
    title: "Jobs & Manufacturing",
    category: "economy",
    now: "40% of young graduates are unemployed. Government announces schemes, private sector gets contracts, jobs never reach the people. Public sector hiring has nearly stopped.",
    psc: "Manufacturing jobs are priority one. Revive and expand public sector — railways, steel, defence, infrastructure. India needs factories before it needs startups. Create 10 lakh government jobs per year. Invest in non-IT manufacturing first.",
  },
  {
    icon: "🔬",
    title: "Technology & AI",
    category: "governance",
    now: "India imports almost every chip it uses. We depend on Taiwan, Netherlands, Israel, and the US for the most basic technology. Zero domestic AI development. We consume tech — we don't build it.",
    psc: "Build India's own semiconductor fabs — not through private billionaires, through public investment. AI research must be government-funded and publicly owned. Parallel track: manufacturing jobs now, AI leadership within 15 years. No tech colonialism — India must own its future.",
  },
  {
    icon: "📉",
    title: "Economy & Rupee",
    category: "economy",
    now: "Rupee has fallen from ₹83 to ₹95 against the dollar in two years. FDI is pulling money out. Profit repatriation is bleeding the country. Growth numbers look good on paper — reality is different on the ground.",
    psc: "Protect the rupee through domestic manufacturing, not just RBI intervention. Tax excessive profit repatriation by foreign companies. Prioritize Indian public sector investment over FDI dependence. Build an economy where growth means jobs, not just stock market numbers.",
  },
];

/* ─── TODAY vs PSC: Comparison ─── */
const comparisons = [
  {
    today: "Politicians enter office middle-class, leave as billionaires.",
    psc: "Assets frozen. You leave with what you came in with.",
  },
  {
    today: "80-year-olds clinging to power for decades.",
    psc: "Strict retirement at 60. Make room for the next generation.",
  },
  {
    today: "MLAs switch parties overnight for money and ministries.",
    psc: "Defect once — permanently expelled from PSC. No second chances.",
  },
  {
    today: "Farmers die. Exam papers leak. Media covers it up.",
    psc: "Legal MSP. Free education. Independent media. No compromises.",
  },
  {
    today: "India imports every chip, has zero AI — dependent on small nations.",
    psc: "Public-funded chip fabs. Government AI labs. Own your technology.",
  },
  {
    today: "Private hospitals bankrupt families. Private schools exploit students.",
    psc: "Free healthcare. Free education. Zero privatization in essentials.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [policyCategory, setPolicyCategory] = useState<PositionCategory>("all");
  const tabContentRef = useRef<HTMLDivElement>(null);

  // Sync with URL hash on mount & hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "rules") setActiveTab("rules");
      else if (hash === "comparison" || hash === "today-vs-psc") setActiveTab("comparison");
      else if (hash === "positions" || hash === "what-we-fight-for") setActiveTab("positions");
      else if (hash === "reality") setActiveTab("reality");
      else if (hash === "action" || hash === "join") setActiveTab("action");
      else if (hash === "home" || hash === "") setActiveTab("home");
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const switchTab = (tabId: TabId, shouldScroll = true) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);

    if (shouldScroll && tabContentRef.current) {
      const elementPosition = tabContentRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 90; // offset for sticky header and tab bar
      window.scrollTo({
        top: Math.max(0, elementPosition - offset),
        behavior: "smooth",
      });
    }
  };

  const filteredPositions =
    policyCategory === "all"
      ? positions
      : positions.filter((p) => p.category === policyCategory);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white text-black selection:bg-black/10">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 sm:px-8 lg:px-12">
          {/* Top Site Navigation */}
          <SiteNavigation />

          {/* ═══ TOP STICKY TAB BUTTONS BAR ═══ */}
          <section
            aria-label="Section Tabs"
            className="sticky top-20 z-40 -mx-4 border-b border-black/10 bg-white/95 px-4 py-3 backdrop-blur-md transition-all sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          >
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
              <div className="no-scrollbar flex w-full items-center gap-1.5 overflow-x-auto py-1 sm:gap-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => switchTab(tab.id, true)}
                      aria-selected={isActive}
                      role="tab"
                      className={[
                        "group relative inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10",
                        isActive
                          ? "bg-black text-white shadow-sm"
                          : "bg-black/[0.04] text-black/70 hover:bg-black/[0.08] hover:text-black",
                      ].join(" ")}
                    >
                      <span className="text-sm">{tab.icon}</span>
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span
                          className={[
                            "hidden rounded-full px-1.5 py-0.5 text-[10px] font-semibold sm:inline-block",
                            isActive ? "bg-white/20 text-white" : "bg-black/10 text-black/60",
                          ].join(" ")}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ═══ ACTIVE TAB CONTENT CONTAINER ═══ */}
          <div ref={tabContentRef} className="flex-1 py-8 sm:py-12">
            <AnimatePresence mode="wait">
              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 1: HOME                                                */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "home" && (
                <motion.div
                  key="home"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-16 sm:space-y-24"
                >
                  {/* Hero Container */}
                  <section className="pt-6 sm:pt-12">
                    <div className="max-w-3xl">
                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-xs font-semibold text-black/70">
                        <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
                        Public Service Covenant &bull; Citizen Movement
                      </div>

                      <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl leading-[1.1]">
                        Good people should not stay silent.
                      </h1>

                      <p className="mt-6 text-xl leading-relaxed text-black/75 sm:text-2xl sm:leading-relaxed">
                        India deserves leaders who serve,
                        <br className="hidden sm:block" /> not leaders who loot.
                      </p>

                      {/* Primary Buttons at Top */}
                      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a
                          href="/join"
                          className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-all hover:bg-black/80 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/15 shadow-sm"
                        >
                          Join PSC &rarr;
                        </a>
                        <button
                          type="button"
                          onClick={() => switchTab("rules", true)}
                          className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white px-8 text-base font-medium text-black transition-all hover:border-black/35 hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
                        >
                          Read The 6 Rules
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* 3 Core Pillars of PSC */}
                  <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Extreme Personal Sacrifice
                      </h3>
                      <p className="text-sm leading-relaxed text-black/65">
                        Assets frozen while in office. Strict allowance. Mandatory retirement at 60. Power is service, not an inheritance.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        People Before Profit
                      </h3>
                      <p className="text-sm leading-relaxed text-black/65">
                        Guaranteed MSP for farmers. Free world-class healthcare & education. Uncompromised Right to Parenting for every child.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg font-bold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Zero Defection & Graft
                      </h3>
                      <p className="text-sm leading-relaxed text-black/65">
                        Betray voters once and you are permanently expelled. Total asset transparency. We accept zero financial donations.
                      </p>
                    </div>
                  </section>

                  {/* Key Reality Callout */}
                  <section className="rounded-2xl border border-black/10 bg-black/[0.02] p-8 sm:p-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-black/50">
                      Why We Exist
                    </span>
                    <blockquote className="mt-3 text-2xl font-medium tracking-tight text-black sm:text-3xl leading-snug">
                      &ldquo;The system was designed to fail the public and feed the private. Protest alone will not fix it. We must build something new.&rdquo;
                    </blockquote>
                    <p className="mt-4 text-base text-black/70 sm:text-lg leading-relaxed">
                      From paper leaks ruining millions of youth to 56 million court cases stalled while politicians retire as oligarchs, incremental reform is dead. PSC represents a complete reset on how leaders operate.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => switchTab("reality", true)}
                        className="text-sm font-semibold text-black underline underline-offset-4 hover:text-black/70"
                      >
                        Read the full breakdown &rarr;
                      </button>
                    </div>
                  </section>

                  {/* Quick Hub Navigation Cards */}
                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-black sm:text-2xl">
                      Explore the Movement
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => switchTab("rules", true)}
                        className="group flex flex-col items-start rounded-2xl border border-black/10 bg-white p-6 text-left transition-all hover:border-black/30 hover:shadow-md"
                      >
                        <span className="mb-2 text-2xl">📜</span>
                        <h3 className="text-base font-semibold text-black group-hover:underline">
                          The Rules of Sacrifice &rarr;
                        </h3>
                        <p className="mt-1 text-sm text-black/60">
                          The 6 strict personal standards all PSC leaders must sign before entering public office.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => switchTab("comparison", true)}
                        className="group flex flex-col items-start rounded-2xl border border-black/10 bg-white p-6 text-left transition-all hover:border-black/30 hover:shadow-md"
                      >
                        <span className="mb-2 text-2xl">⚡</span>
                        <h3 className="text-base font-semibold text-black group-hover:underline">
                          Today vs. PSC &rarr;
                        </h3>
                        <p className="mt-1 text-sm text-black/60">
                          Side-by-side contrast of existing corrupt politics versus our covenant standard.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => switchTab("positions", true)}
                        className="group flex flex-col items-start rounded-2xl border border-black/10 bg-white p-6 text-left transition-all hover:border-black/30 hover:shadow-md"
                      >
                        <span className="mb-2 text-2xl">🎯</span>
                        <h3 className="text-base font-semibold text-black group-hover:underline">
                          What We Fight For &rarr;
                        </h3>
                        <p className="mt-1 text-sm text-black/60">
                          Our 9 uncompromising policy solutions for farmers, healthcare, education, AI, and economy.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => switchTab("action", true)}
                        className="group flex flex-col items-start rounded-2xl border border-black/10 bg-white p-6 text-left transition-all hover:border-black/30 hover:shadow-md"
                      >
                        <span className="mb-2 text-2xl">🤝</span>
                        <h3 className="text-base font-semibold text-black group-hover:underline">
                          Take Action (No Donations) &rarr;
                        </h3>
                        <p className="mt-1 text-sm text-black/60">
                          We don&apos;t want your money. Join as volunteer, core candidate, or raise your voice.
                        </p>
                      </button>
                    </div>
                  </section>
                </motion.div>
              )}

              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 2: THE RULES                                           */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "rules" && (
                <motion.div
                  key="rules"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-10"
                >
                  {/* Header & Quick Action at Top */}
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-black/10 pb-8">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                        <span>📜</span> The Covenant Standards
                      </span>
                      <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        The Rules
                      </h2>
                      <p className="mt-2 text-lg text-black/65 sm:text-xl max-w-xl">
                        Non-negotiable. Anyone representing PSC accepts all of these before contesting or holding office.
                      </p>
                    </div>
                    <a
                      href="/join"
                      className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
                    >
                      Apply as Core Member &rarr;
                    </a>
                  </div>

                  {/* 6 Rules Cards Grid */}
                  <motion.div
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {rules.map((rule) => (
                      <motion.div
                        key={rule.id}
                        variants={FADE_UP}
                        className="group flex flex-col rounded-2xl border border-black/10 bg-white p-7 transition-all hover:border-black/30 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                      >
                        <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white shadow-xs">
                          {rule.id}
                        </span>
                        <h3 className="text-lg font-semibold text-black mb-2">
                          {rule.title}
                        </h3>
                        <p className="text-base text-black/65 leading-relaxed">
                          {rule.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Covenant Guarantee Box */}
                  <div className="rounded-2xl border-2 border-black bg-black/[0.02] p-6 sm:p-8">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      A Binding Moral & Legal Oath
                    </h3>
                    <p className="text-base text-black/75 leading-relaxed">
                      Every PSC candidate legally signs these conditions. Any unexplained asset accumulation, private commercial conflict, or party defection triggers immediate expulsion and forfeiture of office.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => switchTab("comparison", true)}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-black underline underline-offset-4 hover:text-black/70"
                      >
                        See how this compares to politics today &rarr;
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 3: TODAY vs. PSC                                       */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "comparison" && (
                <motion.div
                  key="comparison"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-10"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-black/10 pb-8">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                        <span>⚡</span> The Stark Contrast
                      </span>
                      <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                        Today vs. PSC
                      </h2>
                      <p className="mt-2 text-lg text-black/65 sm:text-xl max-w-xl">
                        Quick summary. This is what fundamentally changes under Public Service Covenant.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => switchTab("positions", true)}
                      className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/20 bg-white px-5 py-2.5 text-sm font-medium text-black hover:border-black hover:bg-black/[0.03] transition-colors"
                    >
                      Explore Our 9 Policies &rarr;
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    {comparisons.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/10 shadow-[0_2px_12px_rgba(15,23,42,0.03)] sm:grid-cols-2"
                      >
                        {/* Today side */}
                        <div className="bg-black/[0.03] p-6 sm:p-7 border-b border-black/10 sm:border-b-0 sm:border-r">
                          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-red-800">
                            ✕ Today
                          </span>
                          <p className="text-base text-black/75 leading-relaxed sm:text-lg">
                            {item.today}
                          </p>
                        </div>

                        {/* PSC side */}
                        <div className="bg-white p-6 sm:p-7">
                          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-black px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                            ✓ PSC Standard
                          </span>
                          <p className="text-base font-semibold text-black leading-relaxed sm:text-lg">
                            {item.psc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Want to stand for this change?</h3>
                      <p className="text-sm text-white/70 mt-1">Join as a volunteer or apply as a representative candidate.</p>
                    </div>
                    <a
                      href="/join"
                      className="inline-flex shrink-0 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black hover:bg-white/90 transition-colors"
                    >
                      Join PSC Now
                    </a>
                  </div>
                </motion.div>
              )}

              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 4: WHAT WE FIGHT FOR                                   */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "positions" && (
                <motion.div
                  key="positions"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  <div className="border-b border-black/10 pb-6">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                      <span>🎯</span> Concrete Policies
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                      What We Fight For
                    </h2>
                    <p className="mt-2 text-lg text-black/65 sm:text-xl max-w-2xl">
                      Not empty slogans. Real problems. Clear positions.
                    </p>

                    {/* Quick Category Filter for mobile & desktop */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        { id: "all", label: "All Issues (9)" },
                        { id: "agriculture", label: "🌾 Agriculture" },
                        { id: "public_services", label: "🎓 Health & Education" },
                        { id: "economy", label: "💼 Jobs & Economy" },
                        { id: "governance", label: "⚖️ Institutions & AI" },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setPolicyCategory(cat.id as PositionCategory)}
                          className={[
                            "rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                            policyCategory === cat.id
                              ? "bg-black text-white"
                              : "bg-black/[0.05] text-black/70 hover:bg-black/[0.1] hover:text-black",
                          ].join(" ")}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filtered Policy Positions */}
                  <div className="space-y-6">
                    {filteredPositions.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-black/10 overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.03)]"
                      >
                        {/* Issue header */}
                        <div className="bg-black/[0.03] px-6 py-4 sm:px-8 sm:py-5 border-b border-black/10">
                          <h3 className="text-lg font-semibold text-black flex items-center gap-3 sm:text-xl">
                            <span className="text-2xl">{item.icon}</span>
                            {item.title}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                          {/* The problem */}
                          <div className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-black/10 bg-white">
                            <span className="mb-2.5 inline-block text-xs font-semibold uppercase tracking-widest text-black/40">
                              The Problem
                            </span>
                            <p className="text-base text-black/70 leading-relaxed">
                              {item.now}
                            </p>
                          </div>

                          {/* PSC position */}
                          <div className="p-6 sm:p-7 bg-black/[0.015]">
                            <span className="mb-2.5 inline-block text-xs font-semibold uppercase tracking-widest text-black">
                              PSC Position
                            </span>
                            <p className="text-base text-black/90 leading-relaxed font-medium">
                              {item.psc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ideas submission banner */}
                  <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-black">Have an idea to improve India?</h4>
                      <p className="text-sm text-black/60 mt-1">We crowdsource public policy proposals directly from citizens.</p>
                    </div>
                    <a
                      href="/ideas"
                      className="inline-flex shrink-0 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
                    >
                      Submit a Policy Idea
                    </a>
                  </div>
                </motion.div>
              )}

              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 5: THE REALITY                                         */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "reality" && (
                <motion.div
                  key="reality"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-10"
                >
                  <div className="border-b border-black/10 pb-8">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                      <span>🔍</span> The Systemic Crisis
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                      The Reality
                    </h2>
                    <p className="mt-2 text-lg text-black/65 sm:text-xl max-w-xl">
                      The hard truth about where our country stands and why cosmetic changes won&apos;t work.
                    </p>
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-black/80 sm:text-xl sm:leading-9">
                    <p>
                      Farmers kill themselves because there is no legal MSP. Exam papers leak and millions of students lose a year of their lives. 40% of graduates are unemployed while politicians announce &ldquo;record growth.&rdquo;
                    </p>
                    <p>
                      The rupee has fallen from ₹83 to ₹95 in two years. FDI takes profit and leaves. We import every semiconductor chip from Taiwan and the Netherlands. Our AI development is zero. Two corporate houses own the news. 56 million court cases are pending while retired judges get Rajya Sabha seats.
                    </p>
                    <p>
                      Government hospitals have no beds. Government schools have no teachers. But private hospitals and private coaching centres are booming — because the system was designed to fail the public and feed the private.
                    </p>

                    {/* Right to Parenting highlight */}
                    <div className="rounded-2xl border-2 border-black bg-black/[0.03] p-6 sm:p-8 my-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black mb-2">
                        <span>🧒</span> Core Human Mandate
                      </span>
                      <p className="text-xl font-semibold text-black sm:text-2xl leading-snug">
                        We demand the Right to Parenting. No child under 16 should be seen begging or working in factories. Every orphan and vulnerable child has the right to proper meals, safety, and proper education till graduation.
                      </p>
                    </div>

                    <p className="text-black font-semibold text-xl">
                      This is not a single issue. The entire system is broken. Protest alone will not fix it. We must build something new.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => switchTab("rules", true)}
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
                    >
                      See Our Rules to Fix This &rarr;
                    </button>
                    <button
                      type="button"
                      onClick={() => switchTab("action", true)}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 px-7 text-sm font-semibold text-black hover:border-black transition-colors"
                    >
                      Join the Fight
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ────────────────────────────────────────────────────────── */}
              {/* TAB 6: TAKE ACTION                                         */}
              {/* ────────────────────────────────────────────────────────── */}
              {activeTab === "action" && (
                <motion.div
                  key="action"
                  variants={FADE_UP}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-12"
                >
                  <div className="border-b border-black/10 pb-8">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                      <span>🤝</span> Get Involved
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                      Take Action
                    </h2>
                    <p className="mt-2 text-lg text-black/65 sm:text-xl max-w-xl">
                      We don&apos;t want your money. We want your voice and your commitment.
                    </p>
                  </div>

                  {/* NO DONATIONS BANNER */}
                  <div className="rounded-2xl border-2 border-black bg-black/[0.02] p-7 sm:p-9 shadow-sm">
                    <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white text-base">
                        ₹
                      </span>
                      We Are Not Accepting Donations
                    </h3>
                    <div className="space-y-3 text-base text-black/80 sm:text-lg leading-relaxed">
                      <p className="font-semibold text-black">
                        At this stage, PSC is not accepting any financial contributions.
                      </p>
                      <p>
                        No one is authorized to collect funds on our behalf. If anyone approaches you requesting money in the name of PSC, please report them immediately.
                      </p>
                      <p>
                        Right now, what we need from citizens is far more valuable than money: your time, your organizing, and your conviction.
                      </p>
                    </div>
                  </div>

                  {/* 3 Ways to Join */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-2xl mb-3 block">🙋</span>
                        <h4 className="text-lg font-semibold text-black mb-2">Volunteer</h4>
                        <p className="text-sm text-black/65 leading-relaxed">
                          Give your time. Organize locally. Spread the word. Help build the movement on the ground in your town or city.
                        </p>
                      </div>
                      <a
                        href="/join"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-black/20 py-2.5 text-xs font-semibold text-black hover:border-black hover:bg-black/[0.03] transition-colors"
                      >
                        Join as Volunteer &rarr;
                      </a>
                    </div>

                    <div className="rounded-2xl border-2 border-black bg-black/[0.015] p-6 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-2xl mb-3 block">🛡️</span>
                        <h4 className="text-lg font-semibold text-black mb-2">Core Member</h4>
                        <p className="text-sm text-black/65 leading-relaxed">
                          Accept the full sacrifice. Live by the covenant rules. Be ready to represent PSC in elections and public life.
                        </p>
                      </div>
                      <a
                        href="/join"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black py-2.5 text-xs font-semibold text-white hover:bg-black/80 transition-colors"
                      >
                        Apply as Core Member &rarr;
                      </a>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-2xl mb-3 block">📢</span>
                        <h4 className="text-lg font-semibold text-black mb-2">Voice Raiser</h4>
                        <p className="text-sm text-black/65 leading-relaxed">
                          Ask questions. Demand answers. Share PSC&apos;s message. Hold every politician accountable — including ours.
                        </p>
                      </div>
                      <a
                        href="/ideas"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-black/20 py-2.5 text-xs font-semibold text-black hover:border-black hover:bg-black/[0.03] transition-colors"
                      >
                        Submit an Idea &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Direct Contact */}
                  <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-black">Questions or media inquiry?</h4>
                      <p className="text-sm text-black/60 mt-1">Get in touch directly with our coordination team.</p>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex shrink-0 rounded-full border border-black/20 px-6 py-2.5 text-sm font-semibold text-black hover:border-black hover:bg-black/[0.03] transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Site Footer */}
          <SiteFooter />
        </div>
      </main>
    </MotionConfig>
  );
}
