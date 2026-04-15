import type { SVGProps } from "react";

/**
 * Motif1 — geometric section divider.
 * Full-width, ~120px tall. Subtle diagonal line-work in var(--brand-navy)
 * with a single red accent stroke. Purely decorative.
 */
export function Motif1({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      {...rest}
      style={{ display: "block", width: "100%", height: 120, ...(rest.style ?? {}) }}
    >
      <g stroke="var(--brand-navy)" strokeWidth="1" fill="none" opacity="0.55">
        <line x1="0" y1="20" x2="1200" y2="100" />
        <line x1="0" y1="40" x2="1200" y2="80" />
        <line x1="0" y1="60" x2="1200" y2="60" />
        <line x1="0" y1="80" x2="1200" y2="40" />
        <line x1="0" y1="100" x2="1200" y2="20" />
      </g>
      <line
        x1="0"
        y1="60"
        x2="1200"
        y2="60"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeDasharray="8 12"
        opacity="0.85"
      />
    </svg>
  );
}
