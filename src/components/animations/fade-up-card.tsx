"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  shadowIntensity?: "light" | "medium" | "heavy";
}

export const FadeUpCard = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  shadowIntensity = "medium",
}: FadeUpCardProps) => {
  const getShadowClass = () => {
    switch (shadowIntensity) {
      case "light":
        return "shadow-lg";
      case "medium":
        return "shadow-xl";
      case "heavy":
        return "shadow-2xl";
      default:
        return "shadow-xl";
    }
  };

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
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 },
      }}
      className={`${getShadowClass()} hover:shadow-2xl transition-shadow duration-300 ${className}`}
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
