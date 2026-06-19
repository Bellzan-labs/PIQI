"use client";

import { useEffect, useState } from "react";
import ScrambleText from "./scramble-text";

const words = ["Success", "Growth", "Impact", "PIQI"];

/**
 * Cycling display heading — scrambles between words, resolving on the brand.
 * Plain PIQI classes (no Tailwind), red statement word resolving to white on
 * "PIQI", and it holds still under prefers-reduced-motion.
 */
export default function RevolverHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const word = words[index];
  const isFinal = word === "PIQI";

  return (
    <h2 className="revolver-heading">
      Choose{" "}
      <ScrambleText
        text={word}
        className={`revolver-word${isFinal ? " revolver-word-final" : ""}`}
      />
    </h2>
  );
}
