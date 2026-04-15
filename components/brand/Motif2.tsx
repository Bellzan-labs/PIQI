import type { SVGProps } from "react";

/**
 * Motif2 — concentric arcs.
 * 3-4 thin ring arcs in the bottom-right of a hero, red -> navy fade.
 * Absolute-positionable via parent. Purely decorative.
 */
export function Motif2({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 400 400"
      className={className}
      {...rest}
    >
      <defs>
        <linearGradient id="piqi-motif2-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-navy)" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#piqi-motif2-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      >
        <path d="M 400 280 A 120 120 0 0 0 280 400" />
        <path d="M 400 220 A 180 180 0 0 0 220 400" opacity="0.85" />
        <path d="M 400 160 A 240 240 0 0 0 160 400" opacity="0.7" />
        <path d="M 400 100 A 300 300 0 0 0 100 400" opacity="0.55" />
      </g>
    </svg>
  );
}
