"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  revealDirection?: "left" | "right" | "top" | "bottom";
}

export const RevealContainer = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  revealDirection = "left",
}: RevealContainerProps) => {
  const getRevealAnimation = () => {
    switch (revealDirection) {
      case "left":
        return { clipPath: "inset(0 100% 0 0)" };
      case "right":
        return { clipPath: "inset(0 0 0 100%)" };
      case "top":
        return { clipPath: "inset(100% 0 0 0)" };
      case "bottom":
        return { clipPath: "inset(0 0 100% 0)" };
      default:
        return { clipPath: "inset(0 100% 0 0)" };
    }
  };

  return (
    <motion.div
      initial={getRevealAnimation()}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: duration + 0.2,
          delay: delay + 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
