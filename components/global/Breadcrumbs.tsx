"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import { buildBreadcrumbs } from "@/lib/schema";
import { JsonLd } from "@/components/global/JsonLd";

function toTitle(segment: string): string {
  return segment
    .split("-")
    .map((s) => (s.length ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname() ?? "";
  if (!pathname || pathname === "/") return null;

  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", url: `${SITE.url}/` },
    ...parts.map((part, i) => ({
      name: toTitle(part),
      url: `${SITE.url}/${parts.slice(0, i + 1).join("/")}`
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <div className="container">
        <ol>
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            const path = c.url.replace(SITE.url, "") || "/";
            return (
              <li key={c.url}>
                {isLast ? (
                  <span aria-current="page">{c.name}</span>
                ) : (
                  <Link href={path}>{c.name}</Link>
                )}
                {!isLast ? <span aria-hidden="true"> / </span> : null}
              </li>
            );
          })}
        </ol>
      </div>
      <JsonLd data={buildBreadcrumbs(crumbs)} />
    </nav>
  );
}
