"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ConsultingNavItem = { slug: string; label: string };

/**
 * Consulting-only intra-hub local nav rail. Renders on the Consulting hub and
 * all 5 spoke pages (the only depth-2 routes), so the mini-hub asymmetry the IA
 * calls for is visible — no other vertical gets this. Sticky below the header.
 */
export function ConsultingNav({ items }: { items: readonly ConsultingNavItem[] }) {
  const pathname = usePathname();
  const overviewActive = pathname === "/consulting";

  return (
    <nav className="consulting-rail" aria-label="Consulting services">
      <div className="container consulting-rail-inner">
        <span className="consulting-rail-label" aria-hidden="true">
          Consulting
        </span>
        <div className="consulting-rail-links">
          <Link
            href="/consulting"
            className={`consulting-rail-link${overviewActive ? " is-active" : ""}`}
            aria-current={overviewActive ? "page" : undefined}
          >
            Overview
          </Link>
          {items.map((it) => {
            const href = `/consulting/${it.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={it.slug}
                href={href}
                className={`consulting-rail-link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
