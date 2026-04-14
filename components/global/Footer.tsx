import Image from "next/image";
import Link from "next/link";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src="/brand/logo/new-piqi-logo-white.png"
            alt="PIQI Group logo"
            width={180}
            height={82}
            className="theme-logo"
          />
          <p>{SITE.description}</p>
        </div>

        <div className="footer-col">
          <h4>Group</h4>
          <ul>
            {FOOTER_LINKS.group.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Verticals</h4>
          <ul>
            {FOOTER_LINKS.verticals.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>{SITE.poBox}</li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phonePrimaryE164}`}>{SITE.phonePrimary}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneSecondaryE164}`}>{SITE.phoneSecondary}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-subfooter">
        <p>&copy; {year} PIQI Group. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a href="https://bellzan.com" target="_blank" rel="noopener noreferrer">
            Bellzan
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
