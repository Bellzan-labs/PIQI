"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const HONEYPOT_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "-10000px",
  width: 1,
  height: 1,
  overflow: "hidden"
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!email.includes("@") || email.trim().length < 3) {
      next.email = "Please enter a valid email address.";
    }
    if (message.trim().length < 10) {
      next.message = "Please share a little more detail (at least 10 characters).";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || undefined,
          message: message.trim(),
          company
        })
      });

      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        data = {};
      }

      if (response.ok && data.ok === true) {
        setStatus("success");
        setStatusMessage(
          `Thanks — we'll be in touch. You can also email ${SITE.email} directly.`
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setCompany("");
        setErrors({});
        return;
      }

      setStatus("error");
      if (response.status === 429) {
        setStatusMessage(
          data.error ?? "Too many requests. Please try again later."
        );
      } else {
        setStatusMessage(
          data.error ??
            `Something went wrong. Please try again or email ${SITE.email} directly.`
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error — please try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.name ? (
          <p
            id="contact-name-error"
            role="alert"
            className="form-error"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.email ? (
          <p
            id="contact-email-error"
            role="alert"
            className="form-error"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-subject">Subject (optional)</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={200}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            role="alert"
            className="form-error"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot field — hidden from real users, visible to naive bots. */}
      <div aria-hidden="true" style={HONEYPOT_STYLE}>
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="button button-primary button-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>

      <div
        className="form-status"
        aria-live="polite"
      >
        {status === "success" ? (
          <p role="status" className="form-success">
            {statusMessage}
          </p>
        ) : null}
        {status === "error" ? (
          <p role="status" className="form-error">
            {statusMessage}
          </p>
        ) : null}
      </div>

      <p className="form-note">
        Prefer email? Write to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> directly.
      </p>
    </form>
  );
}
