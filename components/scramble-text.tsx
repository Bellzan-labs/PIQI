"use client";

import { useEffect, useState } from "react";

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?/|";

type Props = {
  text: string;
  speed?: number; // lower = faster
  scrambleChars?: string;
  className?: string;
};

export default function ScrambleText({
  text,
  speed = 50,
  scrambleChars = defaultChars,
  className = "",
}: Props) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let interval: NodeJS.Timeout;

    function scramble() {
      frame++;

      const progress = frame / 10;

      const output = text
        .split("")
        .map((char, i) => {
          if (i < progress * text.length) {
            return char;
          }
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join("");

      setDisplay(output);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplay(text);
      }
    }

    interval = setInterval(scramble, speed);

    return () => clearInterval(interval);
  }, [text, speed, scrambleChars]);

  return <span className={className}>{display}</span>;
}