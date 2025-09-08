"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
  cursorClassName?: string;
}

export const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
  showCursor = true,
  cursorClassName = "",
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={className}
    >
      <span>{displayedText}</span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: isAnimating ? Infinity : 3,
            ease: "easeInOut",
          }}
          className={`inline-block ml-1 ${cursorClassName}`}
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};
