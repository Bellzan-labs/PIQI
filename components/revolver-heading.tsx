"use client";

import { useEffect, useState } from "react";
import ScrambleText from "./scramble-text";

const words = ["Success", "Growth", "Impact", "PIQI"];

export default function RevolverHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const word = words[index];
  const isFinal = word === "PIQI";

  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none text-center">
      Choose{" "}
      <ScrambleText
        text={word}
        className={`font-semibold ${
          isFinal ? "text-white scale-110" : "text-blue-400 scale-1100"
        }`}
      />
    </h1>
  );
}