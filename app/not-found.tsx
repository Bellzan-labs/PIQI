import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section">
      <Container variant="narrow">
        <p className="eyebrow">404</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p>
          The page you were looking for isn&apos;t here. Try the homepage, or get in touch and
          we&apos;ll point you the right way.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Back to home
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
