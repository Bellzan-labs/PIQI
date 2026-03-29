import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { LottiePanel } from "@/components/lottie-panel";
import { ThemeToggle } from "@/components/theme-toggle";
import RevolverHeading from "@/components/revolver-heading";

const navItems = [
  { href: "#services", label: "Services", icon: "grid" },
  { href: "#approach", label: "Approach", icon: "flow" },
  { href: "#management", label: "Management", icon: "spark" },
  { href: "#brands", label: "Projects", icon: "orbit" },
  { href: "#contact", label: "Contact", icon: "phone" },
] as const;

const serviceCards = [
  {
    id: "consulting",
    eyebrow: "Business consulting",
    title: "Focused guidance",
    description:
      "Our experienced consultants provide valuable insights and guidance to help businesses thrive.",
    image: "/brand/icons/Consultation.svg",
  },
  {
    id: "strategy",
    eyebrow: "Business strategy",
    title: "Strategic advice",
    description:
      "We assist in developing effective business strategies to drive growth, maximize profitability, and gain a competitive edge.",
    image: "/brand/icons/Stats.svg",
  },
  {
    id: "projects",
    eyebrow: "Project management",
    title: "On-time delivery",
    description:
      "Our team helps with project planning, risk management, resource allocation, and stakeholder communication.",
    image: "/brand/icons/Management.svg",
  },
  {
    id: "logistics",
    eyebrow: "Supply chain support",
    title: "Operational control",
    description:
      "We analyze your business processes, identify areas for improvement, and implement streamlined solutions.",
    image: "/brand/icons/Cube.svg",
  },
  {
    id: "commercial",
    eyebrow: "Commercial projects",
    title: "Detail that protects the outcome",
    description:
      "Procurement, contracts, claims, costs, workshops, and close-out support, all tied to the commercial result.",
    image: "/brand/icons/Projects.svg",
  },
];

const processCards = [
  {
    title: "Capture the brief",
    text: "We keep the first pass simple: understand the business, the pressure points, and what success needs to look like.",
  },
  {
    title: "Translate into action",
    text: "The original site leaned on strategy capture and implementation language, so we keep that tone but strip the clutter.",
  },
  {
    title: "Support the handoff",
    text: "Workshops, controls, follow-through, and commercial clarity stay in one place instead of being scattered across pages.",
  },
  {
    title: "Keep the outcome intact",
    text: "The team stays close to delivery, risk, procurement, and close-out so the business can actually use the plan.",
  },
];

const serviceJumpTiles = [
  { label: "Home", href: "#home", image: "/brand/brands/Home.png" },
  {
    label: "Consulting",
    href: "#consulting",
    image: "/brand/hero/Consutling.png",
  },
  { label: "Property", href: "#property", image: "/brand/brands/Property.png" },
  { label: "Auto", href: "#auto" },
  { label: "Yacht Charters", href: "#yacht", image: "/brand/brands/Yatch.png" },
  { label: "Fashion", href: "#fashion" },
];

const detailSections = [
  {
    id: "consulting",
    kicker: "Consulting",
    title: "Coaching",
    intro:
      "Our experienced coaches provide focused guidance to further enhance your personal and professional growth, addressing specific areas of improvement and providing actionable strategies for success.",
    body: "Unlock your potential and embark on a transformative journey with Piqi Group's consulting service. Our holistic approach, combined with personalized coaching, will empower you to achieve your goals, overcome obstacles, and reach new heights of success. Contact us today and discover how our experienced team can guide you toward a brighter future.",
    points: [
      "Focused guidance",
      "Personal and professional growth",
      "Actionable strategies for success",
    ],
    image: "/brand/hero/Consutling.png",
    imageAlt: "PIQI consulting artwork",
  },
  {
    id: "property",
    kicker: "Property",
    title: "Property Management",
    intro:
      "We offer comprehensive property management services that cover maintenance, letting, and construction support.",
    body: "Managing properties can be complex and time-consuming. Our team is designed to alleviate the burdens associated with property ownership, from routine inspections and repairs to tenant screening, lease agreements, rent collection, and property marketing.",
    points: ["Maintenance", "Letting", "Construction services"],
    image: "/brand/brands/Property.png",
    imageAlt: "Property management artwork",
  },
  {
    id: "auto",
    kicker: "Auto",
    title: "Piqi Auto",
    intro:
      "We provide professional automotive services that encompass panel beating and tyre sales.",
    body: "Whether you require minor repairs or a full tyre replacement, our skilled technicians and wide range of tyres are here to cater to your needs. We keep the focus on professionalism, care, and customer satisfaction.",
    points: ["Panel beating", "Tyre supplier", "Customer satisfaction"],
    image: null,
    imageAlt: "",
  },
  {
    id: "yacht",
    kicker: "Yacht Charters",
    title: "Yacht Chartering",
    intro:
      "A unique catamaran yacht charter on a self-catering basis, giving you the freedom to explore the coastline at your own pace.",
    body: "Our spacious catamaran features 4 double cabins for a comfortable sailing journey. You can supply your own food and drinks, creating a personalized experience on board while enjoying the freedom of self-catering travel.",
    points: ["Self-catering basis", "4 double cabins", "Freedom to explore"],
    image: "/brand/brands/Yatch.png",
    imageAlt: "Yacht charter artwork",
  },
  {
    id: "fashion",
    kicker: "Fashion",
    title: "Downtown Fashion",
    intro:
      "High fashion and bespoke clothing that translates your vision into luxurious style.",
    body: "We design and manufacture wedding attire, bridesmaid and flower girl outfits, groom and best man suits, matric dance outfits, school uniforms, tracksuits, safety clothing, and branded embroidered or printed clothing.",
    points: [
      "Wedding attire",
      "Matric dance outfits",
      "Uniforms and branded clothing",
    ],
    image: null,
    imageAlt: "",
  },
] as const;

function NavIcon({ name }: { name: (typeof navItems)[number]["icon"] }) {
  switch (name) {
    case "grid":
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <rect x="2" y="2" width="6" height="6" rx="1.5" />
          <rect x="12" y="2" width="6" height="6" rx="1.5" />
          <rect x="2" y="12" width="6" height="6" rx="1.5" />
          <rect x="12" y="12" width="6" height="6" rx="1.5" />
        </svg>
      );
    case "flow":
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 6h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h-2" />
          <path d="M11 4l3 2-3 2" />
          <path d="M6 12l-3 2 3 2" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l1.8 5.2L17 8.5l-5.2 1.8L10 15.5l-1.8-5.2L3 8.5l5.2-1.8L10 1.5z" />
        </svg>
      );
    case "orbit":
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="3.5" />
          <path d="M2.5 10a7.5 7.5 0 0 1 15 0" />
          <path d="M5.5 15.5a7.5 7.5 0 0 1 9-11" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M6.5 3.5l1.9 3.9-1.6 1.6a13.5 13.5 0 0 0 4.7 4.7l1.6-1.6 3.9 1.9-.6 3.1c-.1.5-.5.9-1 .9A14 14 0 0 1 2.5 4.1c0-.5.4-.9.9-1l3.1.4z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionDirection(index: number) {
  return index % 2 === 0 ? "reveal-left" : "reveal-right";
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-bar">
          <Link
            href="#home"
            className="brand-lockup"
            aria-label="PIQI Group home"
          >
            <Image
              src="/brand/logo/new-piqi-logo-white.png"
              alt="PIQI Group logo"
              width={258}
              height={118}
              priority
              className="brand-logo theme-logo"
            />
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a href={item.href} key={item.label} className="nav-link">
                <span className="nav-icon" aria-hidden="true">
                  <NavIcon name={item.icon} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <a className="header-cta" href="#contact">
              Contact us
            </a>
          </div>
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
            <source
              src="/brand/video/consultants-office.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <RevolverHeading />
            <p className="hero-text">
              Our expertise in business consulting, strategy, project
              management, process consulting, project commercial services, and
              supply chain support services will empower your organization to
              achieve its goals. Contact us today to take your business to new
              heights.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get info
              </a>
              <a className="button button-secondary" href="#services">
                Services
              </a>
            </div>
          </div>

          <div className="hero-collage reveal delay-1" aria-hidden="true">
            <div className="collage-primary">
              <div className="business-scene" aria-hidden="true">
                <span className="scene-shape shape-briefcase" />
                <span className="scene-shape shape-chart" />
                <span className="scene-shape shape-cube" />
                <span className="scene-shape shape-arrow" />
                <span className="scene-shape shape-circle shape-circle-a" />
                <span className="scene-shape shape-circle shape-circle-b" />
              </div>
            </div>
            <div className="collage-grid">
              <div className="collage-tile">
                <Image
                  src="/brand/brands/Home.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 12vw"
                  className="theme-media"
                />
              </div>
              <div className="collage-tile">
                <Image
                  src="/brand/brands/Property.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 12vw"
                  className="theme-media"
                />
              </div>
              <div className="collage-tile">
                <Image
                  src="/brand/brands/Yatch.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 12vw"
                  className="theme-media"
                />
              </div>
              <div className="collage-tile">
                <Image
                  src="/brand/logo/new-piqi-logo-white.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 12vw"
                  className="theme-media"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>
              Piqi Group offers a range of comprehensive services to choose from
            </h2>
          </div>

          <div className="service-grid">
            {serviceCards.map((service, index) => (
              <article
                className={`service-card reveal ${SectionDirection(index)}`}
                key={service.title}
              >
                <div className="service-icon">
                  <Image
                    src={service.image}
                    alt=""
                    width={128}
                    height={128}
                    aria-hidden="true"
                    className="theme-media"
                  />
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
            <p className="eyebrow">Our Approach</p>
            <h2>
              We keep the strategy practical, the process clear, and the handoff
              smooth.
            </h2>
            <LottiePanel
              src="/brand/animations/office-flourish.json"
              className="motion-lottie"
            />
            <p>
              The original site leaned on strategy-capture and implementation
              language. This keeps that tone, but trims the clutter so the story
              reads faster and lands harder.
            </p>

            <div className="process-grid">
              {processCards.map((card, index) => (
                <article
                  className={`process-card reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
                  key={card.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="approach-aside reveal delay-1">
            <LottiePanel
              src="/brand/animations/strategy.json"
              className="motion-lottie"
            />
            <div className="source-quote">
              <p>
                An effective high-level strategy is the secret behind every
                successful business.
              </p>
              <strong>Mike Wright</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="management" className="section motion-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Management</p>
            <h2>
              Piqi Group offers project management solutions to ensure
              successful project execution.
            </h2>
            <p>
              Our team helps with project planning, risk management, resource
              allocation, and stakeholder communication to deliver projects on
              time and within budget. For reasons of both security and urgency,
              organisations are often wary of offloading complete development or
              management tasks offsite. For such companies, having an
              experienced and dependable source of management consulting can be
              optimal.
            </p>
          </div>

          <div className="motion-grid">
            <article className="motion-card reveal">
              <div className="motion-panel motion-panel-lottie"></div>
              <div className="motion-copy">
                <h3>Strategy in motion</h3>
                <p>fill this in</p>
              </div>
            </article>

            <article className="motion-card reveal delay-1">
              <div className="motion-panel motion-panel-lottie"></div>
              <div className="motion-copy">
                <h3>Office rhythm</h3>
                <p>fill this in</p>
              </div>
            </article>

            <article className="motion-card motion-card-shapes reveal delay-2">
              <div className="business-scene" aria-hidden="true"></div>
              <div className="motion-copy">
                <h3>when</h3>
                <p>fill this in</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="brands" className="section brands-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">More PIQI</p>
            <h2>Our Prooudest Projects</h2>
            <p>
              With extensive experience in the Project Commercial environment,
              we are able to provide cradle to grave project support services to
              our clients to enable them to set their projects up for success by
              carrying out project reviews to ensure their Front-End Loading
              (FEL) process is streamlined and efficient, facilitating accurate
              budgeting, planning and risk management with the end goal in mind.
            </p>
            <p>
              This goal can then be supported during implementation to
              commercially ensure the objectives are achieved and closed out
              with Knowledge Management Learnings.{" "}
            </p>
          </div>

          <div className="brand-grid">
            {serviceJumpTiles.map((tile, index) => (
              <a
                key={tile.label}
                href={tile.href}
                className={`brand-card reveal ${SectionDirection(index)}`}
              >
                <div
                  className={`brand-image-wrap${tile.image ? "" : " brand-fallback"}`}
                >
                  {tile.image ? (
                    <Image
                      src={tile.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 16vw"
                      className="theme-media"
                    />
                  ) : (
                    <span aria-hidden="true">
                      {tile.label.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <span>{tile.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {detailSections.map((section, index) => (
        <section
          id={section.id}
          className={`section detail-section detail-${section.id}`}
          key={section.id}
        >
          <div className="container detail-grid">
            <div
              className={`detail-copy reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
            >
              <p className="eyebrow">{section.kicker}</p>
              <h2>{section.title}</h2>
              <p className="detail-intro">{section.intro}</p>
              <div className="detail-points">
                {section.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
              <p className="detail-body">{section.body}</p>
            </div>

            <div
              className={`detail-media reveal delay-1${section.image ? "" : " detail-media-fallback"}`}
            >
              {section.image ? (
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className="cover-image theme-media"
                />
              ) : (
                <div className="detail-fallback">
                  <strong>{section.title}</strong>
                  <p>{section.points.join(" / ")}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>
              Get in touch and we will shape the brief into something practical.
            </h2>
            <p>
              We will answer as soon as we get the chance, please do try to
              stick to business hours though.
            </p>

            <ul className="contact-details">
              <li>PO Box 751615 Gardenview 2047, South Africa</li>
              <li>info@piqi.co.za</li>
              <li>+27(0) 10 007-3358</li>
              <li>+27(0) 86 671-7958</li>
            </ul>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:info@piqi.co.za"
              >
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
      {/* TODO: make the date auto update and link the owered by bellzan to bellzan.com */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <Image
            src="/brand/logo/new-piqi-logo-white.png"
            alt="PIQI Group logo"
            width={180}
            height={82}
            className="theme-logo"
          />
          <div>
            <p>©PIQI Group 2026</p>
            <p>
              Consulting, strategy, projects, property, auto, yacht charters,
              and fashion.
            </p>
          </div>
        </div>
        <p className="align-center">Powered By Bellzan</p>
      </footer>
    </main>
  );
}
