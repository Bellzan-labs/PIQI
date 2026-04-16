import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("coaching")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/coaching" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/coaching` }
};

export default function CoachingPage() {
  return <VerticalHub vertical={v} />;
}
