"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUP_NAV } from "@/lib/constants";

export function GroupNav() {
  const pathname = usePathname();

  return (
    <nav className="group-nav" aria-label="Primary">
      {GROUP_NAV.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href + "/"));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group-nav-link${isActive ? " group-nav-link-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
