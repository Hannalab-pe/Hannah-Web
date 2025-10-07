"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeUpCard = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
}: FadeUpCardProps) => {
  return (
    <motion.div
      initial={{
        y: 60,
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`transition-shadow duration-300 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: duration + 0.2,
          delay: delay + 0.1,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
