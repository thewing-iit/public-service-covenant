import { Variants } from "framer-motion";

/**
 * Shared motion configurations adhering to Apple/Linear design standards.
 * Employs subtle cubic-bezier easing curves and optimized spring physics.
 */

export const EASE_CUSTOM = [0.16, 1, 0.3, 1] as const;

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_CUSTOM,
    },
  },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_CUSTOM,
    },
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const VIEWPORT_OPTION = {
  once: true,
  amount: 0.2,
};

export const CARD_HOVER_TRANSITION = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1] as const,
};
