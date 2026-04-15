import type { SVGProps } from "react";

type Motif3Props = SVGProps<SVGSVGElement> & {
  /**
   * Dot density.
   * - "light": single 2px dot per 40x40 cell.
   * - "heavy": 2px dot plus a smaller 1px dot offset for a denser weave.
   */
  variant?: "light" | "heavy";
};

/**
 * Motif3 — grid/dot pattern.
 * Repeating 2px red dots on a 40x40 grid, fading to transparent.
 * Use as a card-background decoration.
 */
export function Motif3({ className, variant = "light", ...rest }: Motif3Props) {
  const patternId = `piqi-motif3-${variant}`;
  const fadeId = `piqi-motif3-fade-${variant}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className={className}
      {...rest}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1" fill="var(--brand)" />
          {variant === "heavy" ? (
            <circle cx="0" cy="0" r="0.5" fill="var(--brand)" opacity="0.6" />
          ) : null}
        </pattern>
        <linearGradient id={fadeId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <mask id={`${patternId}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${fadeId})`} />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        mask={`url(#${patternId}-mask)`}
      />
    </svg>
  );
}
