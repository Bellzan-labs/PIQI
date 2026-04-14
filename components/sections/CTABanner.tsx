import { Button } from "@/components/ui/Button";

export type CTABannerProps = {
  headline?: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function CTABanner({
  headline = "Let's shape the brief into something practical.",
  subtitle = "Tell us where you are and what needs to move. We'll come back with a short, honest response.",
  actionLabel = "Contact PIQI",
  actionHref = "/contact"
}: CTABannerProps) {
  return (
    <section className="section cta-banner-section">
      <div className="container cta-banner">
        <div className="cta-banner-copy">
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </div>
        <Button href={actionHref} variant="primary" size="lg">
          {actionLabel}
        </Button>
      </div>
    </section>
  );
}
