import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Rock Bar Heaven Akasaka | Classic Rock Bar in Akasaka, Tokyo",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: "Rock Bar Heaven Akasaka",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1080,
        height: 810,
        alt: "Rock Bar Heaven Akasaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Bar Heaven Akasaka",
    description: siteConfig.description,
    images: [siteConfig.heroImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body className="font-body">{children}</body>
    </html>
  );
}
