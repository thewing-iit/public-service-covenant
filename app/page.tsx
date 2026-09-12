"use client";

import { MotionConfig, motion } from "framer-motion";
import SiteNavigation from "./site-navigation";
import SiteFooter from "@/components/sections/site-footer";
import { FADE_UP, STAGGER_CONTAINER } from "@/lib/motion";

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
const positions = [
  {
    icon: "🌾",
    title: "Farmers & Agriculture",
    now: "No legal MSP guarantee. Farmers take loans, get cheated by middlemen, and die by suicide. Paddy farmers alone lost ₹3 lakh crore this season.",
    psc: "Legal MSP guarantee based on Swaminathan formula (C2+50%). Complete loan waiver for small farmers. MGNREGA expansion to 200 days. No forced land acquisition. No FTAs that destroy Indian agriculture.",
  },
  {
    icon: "⚖️",
    title: "Judiciary",
    now: "56 million cases pending. 4,800 judge vacancies. Chief Justices get Rajya Sabha seats after retirement. Justice is a privilege, not a right.",
    psc: "Fill every judge vacancy within 12 months. No post-retirement government rewards for judges. Fast-track courts for farmer, worker, and student cases. Justice should take months, not decades.",
  },
  {
    icon: "📺",
    title: "Media Independence",
    now: "Two corporate houses own most major news channels. Media runs propaganda, not journalism. Independent reporters get jailed. Truth is whatever the highest bidder says.",
    psc: "Break corporate monopoly over news media. No single business group can own more than one news channel. Investigate the finances of anchors who run government propaganda. Protect independent journalism by law.",
  },
  {
    icon: "🎓",
    title: "Education",
    now: "Exam papers leak before the ink dries. 2.27 million NEET students betrayed in one exam. Government spends only 2.7% of GDP on education — half of what was promised. Private schools and coaching mafias exploit families.",
    psc: "Free quality education from school to university. No privatization of education. 6% GDP spending on education — non-negotiable. End the coaching mafia. Fix the exam system permanently — not after every scandal.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    now: "Government spends 1.8% of GDP on health — less than Bangladesh. 60% of Indians pay from their own pocket. One hospital bill can destroy a family. Private hospitals charge what they want.",
    psc: "Free healthcare for every citizen. No privatization of hospitals. Public health spending must reach 5% of GDP. Cap prices on essential medicines and procedures. Build public hospitals — not hand money to private chains.",
  },
  {
    icon: "🧒",
    title: "Right to Parenting & Childhood",
    now: "Children are forced to beg at traffic lights or work in factories. Orphans and those in extreme poverty are abandoned by the system, stunted by malnutrition, and denied an education.",
    psc: "The state guarantees the 'Right to Parenting'. Zero child labor and zero child begging under the age of 16. Every vulnerable child receives state-sponsored proper meals, care, and mandatory education through graduation.",
  },
  {
    icon: "💼",
    title: "Jobs & Manufacturing",
    now: "40% of young graduates are unemployed. Government announces schemes, private sector gets contracts, jobs never reach the people. Public sector hiring has nearly stopped.",
    psc: "Manufacturing jobs are priority one. Revive and expand public sector — railways, steel, defence, infrastructure. India needs factories before it needs startups. Create 10 lakh government jobs per year. Invest in non-IT manufacturing first.",
  },
  {
    icon: "🔬",
    title: "Technology & AI",
    now: "India imports almost every chip it uses. We depend on Taiwan, Netherlands, Israel, and the US for the most basic technology. Zero domestic AI development. We consume tech — we don't build it.",
    psc: "Build India's own semiconductor fabs — not through private billionaires, through public investment. AI research must be government-funded and publicly owned. Parallel track: manufacturing jobs now, AI leadership within 15 years. No tech colonialism — India must own its future.",
  },
  {
    icon: "📉",
    title: "Economy & Rupee",
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
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white text-black selection:bg-black/10">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 sm:px-10 lg:px-16">
          <SiteNavigation />

          {/* ═══ SECTION 1: HERO ═══ */}
          <section className="flex flex-col justify-center py-32 sm:py-48">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <div className="mb-10 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-black shadow-sm">
                  PSC
                </span>
                <span className="text-sm font-medium text-black/60 uppercase tracking-widest">
                  Public Service Covenant
                </span>
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Good people should not stay silent.
              </h1>
              <p className="mt-8 text-xl text-black/70 sm:text-2xl leading-relaxed">
                India deserves leaders who serve,
                <br className="hidden sm:block" />
                not leaders who loot.
              </p>

              <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/join"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Join PSC
                </a>
                <a
                  href="#rules"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/15 bg-white px-8 text-base font-medium text-black transition-colors hover:border-black/35 hover:bg-black/[0.03] focus:outline-none focus:ring-4 focus:ring-black/10"
                >
                  Read the Rules
                </a>
              </div>
            </motion.div>
          </section>

          {/* ═══ SECTION 2: THE REALITY ═══ */}
          <section className="py-24 border-t border-black/10">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-10">
                The Reality
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-black/75 sm:text-2xl sm:leading-10">
                <p>
                  Farmers kill themselves because there is no legal MSP. Exam papers leak and millions of students lose a year of their lives. 40% of graduates are unemployed while politicians announce &ldquo;record growth.&rdquo;
                </p>
                <p>
                  The rupee has fallen from ₹83 to ₹95 in two years. FDI takes profit and leaves. We import every semiconductor chip from Taiwan and the Netherlands. Our AI development is zero. Two corporate houses own the news. 56 million court cases are pending while retired judges get Rajya Sabha seats.
                </p>
                <p>
                  Government hospitals have no beds. Government schools have no teachers. But private hospitals and private coaching centres are booming — because the system was designed to fail the public and feed the private.
                </p>
                <p className="text-black font-bold border-l-4 border-black pl-5 py-2 my-8">
                  We demand the Right to Parenting. No child under 16 should be seen begging or working in factories. Every orphan and vulnerable child has the right to proper meals, safety, and proper education till graduation.
                </p>
                <p className="text-black font-semibold">
                  This is not a single issue. The entire system is broken. Protest alone will not fix it. We must build something new.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ═══ SECTION 3: THE RULES ═══ */}
          <section id="rules" className="py-24 border-t border-black/10 scroll-mt-24">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-4">
                  The Rules
                </h2>
                <p className="text-xl text-black/60 sm:text-2xl">
                  Non-negotiable. Anyone representing PSC accepts all of these.
                </p>
              </div>

              <motion.div
                variants={STAGGER_CONTAINER}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {rules.map((rule) => (
                  <motion.div
                    key={rule.id}
                    variants={FADE_UP}
                    className="group flex flex-col rounded-2xl border border-black/10 bg-white p-7 transition-all hover:border-black/25 hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-8"
                  >
                    <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
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
            </motion.div>
          </section>

          {/* ═══ SECTION 4: WHAT WE FIGHT FOR ═══ */}
          <section id="positions" className="py-24 border-t border-black/10 scroll-mt-24">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-4">
                  What We Fight For
                </h2>
                <p className="text-xl text-black/60 sm:text-2xl">
                  Not empty slogans. Real problems. Clear positions.
                </p>
              </div>

              <div className="space-y-6">
                {positions.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={FADE_UP}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="rounded-2xl border border-black/10 overflow-hidden"
                  >
                    {/* Issue header */}
                    <div className="bg-black/[0.03] px-6 py-5 sm:px-8 sm:py-6 border-b border-black/10">
                      <h3 className="text-xl font-semibold text-black flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        {item.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {/* The problem */}
                      <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-black/10">
                        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-black/40">
                          The Problem
                        </span>
                        <p className="text-base text-black/65 leading-relaxed">
                          {item.now}
                        </p>
                      </div>

                      {/* PSC position */}
                      <div className="p-6 sm:p-8 bg-black/[0.015]">
                        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-black">
                          PSC Position
                        </span>
                        <p className="text-base text-black/85 leading-relaxed font-medium">
                          {item.psc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ═══ SECTION 5: TODAY vs PSC (quick summary) ═══ */}
          <section className="py-24 border-t border-black/10">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-4">
                  Today vs. PSC
                </h2>
                <p className="text-xl text-black/60 sm:text-2xl">
                  Quick summary. This is what changes.
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-black/10 sm:grid-cols-2"
                  >
                    <div className="bg-black/[0.03] p-6 sm:p-8">
                      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-black/40">
                        Today
                      </span>
                      <p className="text-base text-black/70 leading-relaxed sm:text-lg">
                        {item.today}
                      </p>
                    </div>
                    <div className="border-t border-black/10 bg-white p-6 sm:border-l sm:border-t-0 sm:p-8">
                      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-black">
                        PSC
                      </span>
                      <p className="text-base text-black font-medium leading-relaxed sm:text-lg">
                        {item.psc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ═══ SECTION 6: NO DONATIONS ═══ */}
          <section className="py-24 border-t border-black/10">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl"
            >
              <div className="rounded-2xl border-2 border-black bg-black/[0.02] p-8 sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-lg">
                    ₹
                  </span>
                  We Are Not Accepting Donations
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-black/75 sm:text-xl sm:leading-9">
                  <p className="text-black font-semibold">
                    At this stage, PSC is not accepting financial contributions.
                  </p>
                  <p>
                    Please be aware that no one is currently authorized to collect funds on our behalf. If anyone contacts you asking for donations in the name of PSC, please report them.
                  </p>
                  <p>
                    Right now, what we need from you is far more valuable than money:
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-black/10 bg-white p-5">
                    <h3 className="text-base font-semibold text-black mb-2">🙋 Volunteer</h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      Give your time. Organize locally. Spread the word. Help build the movement on the ground.
                    </p>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white p-5">
                    <h3 className="text-base font-semibold text-black mb-2">🛡️ Core Member</h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      Accept the full sacrifice. Live by the rules. Be ready to represent PSC in public life.
                    </p>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white p-5">
                    <h3 className="text-base font-semibold text-black mb-2">📢 Voice Raiser</h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      Ask questions. Demand answers. Share PSC's message. Hold every politician accountable — including ours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ═══ SECTION 7: CTA ═══ */}
          <section className="py-24 sm:py-32 border-t border-black/10 text-center">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-2xl mx-auto flex flex-col items-center"
            >
              <div className="space-y-4 mb-12 text-xl leading-relaxed text-black/80 sm:text-2xl sm:leading-10">
                <p className="font-semibold text-black">
                  We don&apos;t want your money. We want your voice.
                </p>
                <p>Join as a volunteer, a core member, or simply raise your voice.</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/join"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-10 text-base font-semibold text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Join PSC
                </a>
                <a
                  href="/ideas"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/15 bg-white px-10 text-base font-semibold text-black transition-colors hover:border-black/35 hover:bg-black/[0.03] focus:outline-none focus:ring-4 focus:ring-black/10"
                >
                  Submit an Idea
                </a>
              </div>
            </motion.div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </MotionConfig>
  );
}
