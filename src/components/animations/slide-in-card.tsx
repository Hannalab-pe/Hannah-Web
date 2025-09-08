"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
  distance?: number;
}

export const SlideInCard = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "left",
  distance = 100,
}: SlideInCardProps) => {
  const initialX = direction === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{
        x: initialX,
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
