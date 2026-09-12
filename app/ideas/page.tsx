"use client";

import { MotionConfig, motion } from "framer-motion";
import SiteNavigation from "../site-navigation";
import SiteFooter from "@/components/sections/site-footer";
import { FADE_UP } from "@/lib/motion";

const topics = [
  "Education",
  "Employment & Jobs",
  "Agriculture",
  "Healthcare",
  "Governance & Law",
  "Technology",
  "Women & Gender",
  "Environment",
  "Economy",
];

export default function IdeasPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white text-black flex flex-col">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-6 sm:px-10 lg:px-16 flex-grow">
          <SiteNavigation />

          <section className="flex flex-col justify-center py-32 sm:py-40 flex-grow">
            <motion.div
              variants={FADE_UP}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Your idea could become policy.
              </h1>
              <p className="mt-8 text-xl text-black/70 sm:text-2xl leading-relaxed">
                Great policies come from the people, not from boardrooms. If you see a problem and have a solution — share it.
              </p>

              {/* Topic areas */}
              <div className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-5">
                  Submit ideas on
                </h2>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm font-medium text-black/70"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-black/10 bg-black/[0.02] p-6 sm:p-8">
                <p className="text-base text-black/70 leading-relaxed sm:text-lg">
                  Every idea is read. If it aligns with PSC principles, it will be discussed publicly. You can submit anonymously.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://forms.gle/LudNcTLVTubFCDfU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Submit Idea via Google Form
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <p className="mt-4 text-sm text-black/40">
                  Opens a Google Form. Name and email are optional.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-16">
          <SiteFooter />
        </div>
      </main>
    </MotionConfig>
  );
}
