"use client";

import { useEffect, useState } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

export function useTextScramble(text: string, speed: number = 30) {
  const [display, setDisplay] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const length = text.length;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= length) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { display, isComplete };
}
