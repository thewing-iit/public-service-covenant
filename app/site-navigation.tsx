"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "The Rules", href: "/#rules" },
  { label: "What We Fight For", href: "/#positions" },
  { label: "Join", href: "/join" },
  { label: "Ideas", href: "/ideas" },
  { label: "Contact", href: "/contact" },
];

const linkClassName =
  "rounded-full px-3 py-2 text-sm font-medium text-black/60 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10 motion-reduce:transition-none";

export default function SiteNavigation() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const surfaceVisible = hasScrolled || isMenuOpen;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 8);
  });

  useEffect(() => {
    setHasScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      animate={{
        backgroundColor: surfaceVisible
          ? "rgba(255, 255, 255, 0.96)"
          : "rgba(255, 255, 255, 0)",
        borderColor: surfaceVisible
          ? "rgba(0, 0, 0, 0.08)"
          : "rgba(0, 0, 0, 0)",
        boxShadow: surfaceVisible
          ? "0 12px 30px rgba(15, 23, 42, 0.04)"
          : "0 0 0 rgba(15, 23, 42, 0)",
      }}
      initial={false}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 -mx-6 border-b px-6 backdrop-blur-sm motion-reduce:transition-none sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5"
      >
        <a
          href="/"
          onClick={closeMenu}
          className="group inline-flex w-fit items-center gap-3 rounded-sm text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors group-hover:border-black/25">
            PSC
          </span>
          <span className="text-sm font-semibold tracking-tight text-black">
            PSC
          </span>
        </a>

        <div className="hidden items-center justify-center gap-2 lg:flex">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClassName}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-controls="mobile-primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close primary navigation" : "Open primary navigation"
          }
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:border-black/30 hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10 motion-reduce:transition-none lg:hidden"
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span
              className={[
                "h-0.5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                isMenuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 rounded-full bg-current transition-opacity duration-300 motion-reduce:transition-none",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                isMenuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-primary-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-black/10 py-4 lg:hidden"
          >
            <div className="grid gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-2 py-3 text-base font-semibold text-black/75 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10 motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
