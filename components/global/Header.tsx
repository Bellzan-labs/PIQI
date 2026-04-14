"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GroupNav } from "@/components/global/GroupNav";
import { MobileNav } from "@/components/global/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-bar">
        <Link href="/" className="brand-lockup" aria-label="PIQI Group home">
          <Image
            src="/brand/logo/new-piqi-logo-white.png"
            alt="PIQI Group logo"
            width={258}
            height={118}
            priority
            className="brand-logo theme-logo"
          />
        </Link>

        <div className="site-nav-wrap">
          <GroupNav />
        </div>

        <div className="header-actions">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
