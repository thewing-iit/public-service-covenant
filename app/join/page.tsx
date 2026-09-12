"use client";

import { MotionConfig, motion } from "framer-motion";
import SiteNavigation from "../site-navigation";
import SiteFooter from "@/components/sections/site-footer";
import { FADE_UP } from "@/lib/motion";

const sacrifices = [
  "Your personal wealth will be frozen while you serve.",
  "You will live on a strict, simple allowance.",
  "You will retire from public office at 60.",
  "Your assets will be publicly declared every year.",
  "You will never use public office for personal gain.",
];

export default function JoinPage() {
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
                Ready to serve?
              </h1>
              <p className="mt-8 text-xl text-black/70 sm:text-2xl leading-relaxed">
                Joining PSC is not a membership. It is a commitment to extreme personal sacrifice. Read what you are signing up for.
              </p>

              {/* What you accept */}
              <div className="mt-12 rounded-2xl border border-black/10 bg-black/[0.02] p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-5">
                  What you accept
                </h2>
                <ul className="space-y-4">
                  {sacrifices.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-4 mt-2 h-2 w-2 rounded-full bg-black shrink-0" />
                      <span className="text-base text-black/80 sm:text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/RemRXuoFWN1BRgd98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Apply as Core Member
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
                <a
                  href="https://forms.gle/PrfPiCGhRGZ28qbp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/15 bg-white px-8 text-base font-medium text-black transition-colors hover:border-black/35 hover:bg-black/[0.03] focus:outline-none focus:ring-4 focus:ring-black/10"
                >
                  Join as Volunteer
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
              </div>
              <p className="mt-4 text-sm text-black/40">
                Links open Google Forms. Your data stays private.
              </p>
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
