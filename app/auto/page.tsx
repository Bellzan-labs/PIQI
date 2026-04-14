import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("auto")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/auto" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/auto` }
};

export default function AutoPage() {
  return (
    <VerticalHub
      vertical={v}
      offerings={[
        "Panel beating and accident repair",
        "Tyre sales and replacement",
        "Customer-first service and aftercare"
      ]}
      body="Whether you need minor repairs or a full tyre replacement, the team is here to help."
    />
  );
}
