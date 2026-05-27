import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seoTitle,
  description: siteConfig.ogDescription,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.ogDescription,
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.nameEn,
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
    title: siteConfig.seoTitle,
    description: siteConfig.ogDescription,
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
