"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Magnetic wrapper — the child eases toward the pointer on hover, a premium
 * "the button reaches for you" micro-interaction. Disabled on touch devices
 * and under prefers-reduced-motion (falls back to a normal button).
 */
export function Magnetic({
  children,
  strength = 0.3
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function onMove(e: PointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  return (
    <span
      ref={ref}
      className="magnetic"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </span>
  );
}
