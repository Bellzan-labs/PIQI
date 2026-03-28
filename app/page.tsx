import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { LottiePanel } from "@/components/lottie-panel";

const servicePillars = [
  {
    eyebrow: "Business consulting",
    title: "Make the operating model easier to run",
    description:
      "We help teams clarify priorities, improve performance, and align strategy with the way the business actually works.",
    image: "/brand/icons/Consultation.svg"
  },
  {
    eyebrow: "Business strategy",
    title: "Turn long-term vision into executable moves",
    description:
      "From strategy capture to gap analysis, we help leadership teams break the plan into practical, time-bound actions.",
    image: "/brand/icons/Stats.svg"
  },
  {
    eyebrow: "Project management",
    title: "Keep delivery on time and under control",
    description:
      "Plan, risk, resources, and stakeholder communication are managed together so the project does not drift off course.",
    image: "/brand/icons/Management.svg"
  },
  {
    eyebrow: "Process consulting",
    title: "Remove friction from the work floor",
    description:
      "We document, simplify, and improve core processes so teams can work with fewer constraints and better consistency.",
    image: "/brand/icons/Cube.svg"
  },
  {
    eyebrow: "Supply chain support",
    title: "Build a smarter path from need to delivery",
    description:
      "We improve sourcing, logistics, inventory, and supplier alignment to support the bottom line and cash flow.",
    image: "/brand/icons/Projects.svg"
  }
];

const commercialPoints = [
  "Front-end loading and project set-up for success",
  "Risk management, budgeting, and planning support",
  "Procurement, contracts, claims, and negotiation",
  "Cost control, workshops, and knowledge management",
  "Project auditing and close-out support"
];

const brandTiles = [
  { label: "Consulting", image: "/brand/hero/Consutling.png", href: "#services" },
  { label: "Coaching", image: "/brand/brands/Home.png", href: "https://piqigroup.com/consulting/" },
  { label: "Property", image: "/brand/brands/Property.png", href: "https://piqigroup.com/property-management/" },
  { label: "Auto", href: "https://piqigroup.com/auto/" },
  { label: "Yacht Charters", image: "/brand/brands/Yatch.png", href: "https://piqigroup.com/yacht-chartering/" },
  { label: "Downtown Fashion", href: "https://piqigroup.com/downtown-fashion/" }
];

const contactDetails = [
  "PO Box 751615 Gardenview 2047, South Africa",
  "info@piqi.co.za",
  "+27(0) 10 007-3358",
  "+27(0) 86 671-7958"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-bar">
          <Link href="#home" className="brand-lockup" aria-label="PIQI Group home">
            <Image
              src="/brand/logo/new-piqi-logo-white.png"
              alt="PIQI Group logo"
              width={258}
              height={118}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="site-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#commercial">Commercial</a>
            <a href="#brands">Brands</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href="#contact">
            Contact us
          </a>
        </div>
      </header>

      <section id="home" className="hero section">
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/brand/hero/Consutling.png"
            className="hero-video"
          >
            <source src="/brand/video/consultants-office.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">PIQI Group</p>
            <h1>Strategy that moves the business. Delivery that survives the real world.</h1>
            <p className="hero-text">
              PIQI helps leadership teams simplify complexity across consulting, strategy, project
              delivery, process improvement, supply chain support, and commercial controls.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Talk to PIQI
              </a>
              <a className="button button-secondary" href="#services">
                Explore services
              </a>
            </div>
            <ul className="hero-tags" aria-label="Key capabilities">
              <li>Business consulting</li>
              <li>Project commercial controls</li>
              <li>Supply chain support</li>
              <li>South Africa based</li>
            </ul>
          </div>

          <div className="hero-aside reveal delay-1">
            <div className="hero-panel panel-panel">
              <div className="hero-panel-top">
                <span className="panel-kicker">Brand signal</span>
                <span className="panel-chip">Premium refresh</span>
              </div>
              <div className="hero-panel-media">
                <LottiePanel src="/brand/animations/strategy.json" />
              </div>
              <div className="hero-mini-grid">
                <article>
                  <strong>5</strong>
                  <span>Core pillars</span>
                </article>
                <article>
                  <strong>1</strong>
                  <span>One-page experience</span>
                </article>
                <article>
                  <strong>6</strong>
                  <span>Group brands surfaced</span>
                </article>
                <article>
                  <strong>24/7</strong>
                  <span>Clear contact access</span>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid reveal">
          <div>
            <p className="eyebrow">What the site needed more of</p>
            <h2>Cleaner hierarchy, stronger proof, less WordPress noise.</h2>
          </div>
          <p className="trust-copy">
            The rebuild keeps the original PIQI brand, but turns the content into a sharper,
            easier-to-scan story with clearer service groupings, better contrast, and a more
            intentional conversion path.
          </p>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>Five core pillars, plus the commercial work that holds the whole machine together.</h2>
          </div>

          <div className="service-grid">
            {servicePillars.map((service, index) => (
              <article className={`service-card reveal delay-${(index % 3) + 1}`} key={service.title}>
                <div className="service-icon">
                  <Image src={service.image} alt="" width={128} height={128} aria-hidden="true" />
                </div>
                <p className="card-eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section approach-section">
        <div className="container approach-grid">
          <div className="approach-copy reveal">
            <p className="eyebrow">Approach</p>
            <h2>Capture the strategy, clean up the process, and protect the delivery.</h2>
            <p>
              PIQI&apos;s better version of consulting is practical, board-friendly, and grounded in
              the details that make teams succeed or stall.
            </p>
            <div className="approach-steps">
              <article>
                <span>01</span>
                <strong>Capture</strong>
                <p>Understand the current strategy, operating rhythm, and commercial reality.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Clarify</strong>
                <p>Expose gaps, duplicate effort, and decision bottlenecks before they spread.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Improve</strong>
                <p>Rewrite the process and commercial controls in a way teams can actually use.</p>
              </article>
              <article>
                <span>04</span>
                <strong>Deliver</strong>
                <p>Support implementation so the work lands in the real world, not just in slides.</p>
              </article>
            </div>
          </div>

          <div className="approach-visual reveal delay-1">
            <div className="visual-frame">
              <LottiePanel src="/brand/animations/office-flourish.json" />
              <div className="visual-caption">
                <span>Built for teams that need clarity, control, and momentum.</span>
              </div>
            </div>
            <div className="quote-card">
              <p>
                “An effective high-level strategy is the secret behind every successful business.”
              </p>
              <strong>Mike Wright</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="commercial" className="section commercial-section">
        <div className="container commercial-grid">
          <div className="commercial-copy reveal">
            <p className="eyebrow">Commercial services</p>
            <h2>Procurement, contracts, controls, and the detail work that protects the outcome.</h2>
            <p>
              This is where PIQI adds serious operational value: smarter set-up, better risk
              handling, tighter commercial decisions, and a cleaner close-out path.
            </p>
          </div>

          <div className="commercial-panel reveal delay-1">
            <div className="commercial-image">
              <Image
                src="/brand/hero/Consutling.png"
                alt="PIQI consulting illustration"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="cover-image"
              />
            </div>
            <ul>
              {commercialPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="brands" className="section brands-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">PIQI group brands</p>
            <h2>One ecosystem, multiple service lines, all presented with a cleaner visual rhythm.</h2>
          </div>

          <div className="brand-grid">
            {brandTiles.map((brand, index) => (
              <a
                key={brand.label}
                href={brand.href}
                className={`brand-card reveal delay-${(index % 3) + 1}`}
              >
                <div className={`brand-image-wrap${brand.image ? "" : " brand-fallback"}`}>
                  {brand.image ? (
                    <Image src={brand.image} alt="" fill sizes="(max-width: 900px) 100vw, 16vw" />
                  ) : (
                    <span aria-hidden="true">{brand.label.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <span>{brand.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s turn the brief into a cleaner operating reality.</h2>
            <p>
              Reach out if you need help with consulting, commercial controls, strategy capture,
              project delivery, or process improvement.
            </p>

            <ul className="contact-details">
              {contactDetails.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:info@piqi.co.za">
                Email PIQI
              </a>
              <a className="button button-secondary" href="tel:+27100073358">
                Call now
              </a>
            </div>
          </div>

          <div className="contact-card reveal delay-1">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Image
            src="/brand/logo/new-piqi-logo-white.png"
            alt="PIQI Group logo"
            width={180}
            height={82}
          />
          <div>
            <p>PIQI Group</p>
            <p>Consulting, strategy, projects, and commercial support.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
