import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

// TODO: The sender domain `piqigroup.com` must be verified in Resend (DNS records
// for SPF, DKIM, and optionally DMARC) before this `from` address will deliver
// mail. Until verification completes, either use an `onboarding@resend.dev`
// sandbox address or keep this route returning the 503 defined below.
const FROM_ADDRESS = "PIQI Group Website <website@piqigroup.com>";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
  subject: z.string().max(200).optional(),
  company: z.string().max(200).optional()
});

type RateLimitEntry = { count: number; resetAt: number };

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const rateLimitStore = new Map<string, RateLimitEntry>();

function rateLimit(key: string): { limited: boolean } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { limited: true };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { limited: false };
}

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }
  return "unknown";
}

export async function POST(request: Request): Promise<NextResponse> {
  const clientKey = getClientKey(request);
  const { limited } = rateLimit(clientKey);

  if (limited) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data." },
      { status: 400 }
    );
  }

  const { name, email, message, subject, company } = parsed.data;

  // Honeypot: a real user cannot see or tab into the `company` field.
  // Any value here indicates a bot — return a silent success without sending.
  if (company && company.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact form is not yet connected. Please email info@piqi.co.za directly."
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const trimmedSubject = subject?.trim();
  const finalSubject = `[PIQI website] ${
    trimmedSubject && trimmedSubject.length > 0
      ? trimmedSubject
      : `New enquiry from ${name}`
  }`;

  const textBody = [
    `Name:\n${name}`,
    `Email:\n${email}`,
    `Subject:\n${trimmedSubject && trimmedSubject.length > 0 ? trimmedSubject : "(none provided)"}`,
    `Message:\n${message}`
  ].join("\n\n");

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [SITE.email],
      replyTo: email,
      subject: finalSubject,
      text: textBody
    });

    if (result.error) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email delivery failed. Please try again or email info@piqi.co.za directly."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery failed. Please try again or email info@piqi.co.za directly."
      },
      { status: 500 }
    );
  }
}
