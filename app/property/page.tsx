import type { Metadata } from "next";
import { VerticalHub } from "@/components/sections/VerticalHub";
import { getVertical } from "@/lib/data/verticals";
import { SITE } from "@/lib/constants";

const v = getVertical("property")!;

export const metadata: Metadata = {
  title: v.displayName,
  description: v.description,
  alternates: { canonical: "/property" },
  openGraph: { title: v.displayName, description: v.description, url: `${SITE.url}/property` }
};

export default function PropertyPage() {
  return (
    <VerticalHub
      vertical={v}
      offerings={[
        "Routine inspections and maintenance",
        "Letting, tenant screening, and lease agreements",
        "Rent collection and property marketing",
        "Construction support for owners"
      ]}
      body="Managing properties can be complex and time-consuming. Our team is designed to alleviate the burdens of property ownership, end to end."
    />
  );
}
