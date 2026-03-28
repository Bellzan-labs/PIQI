import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://piqigroup.com"),
  title: "PIQI Group | Consulting, Strategy, Projects",
  description:
    "PIQI Group helps businesses simplify complexity across strategy, project delivery, process consulting, supply chain support, and commercial controls.",
  openGraph: {
    title: "PIQI Group",
    description:
      "Consulting, strategy, project delivery, process improvement, supply chain support, and commercial services.",
    url: "https://piqigroup.com",
    siteName: "PIQI Group",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PIQI Group",
    description:
      "Consulting, strategy, project delivery, process improvement, supply chain support, and commercial services."
  }
};

export const viewport: Viewport = {
  themeColor: "#000032",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
