import type { Metadata } from "next";
import BottomCTA from "@/components/BottomCTA";
import RecordsList from "@/components/RecordsList";
import SiteNav from "@/components/SiteNav";
import { records } from "@/data/records";
import { siteConfig } from "@/data/siteConfig";

const recordsUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/records`;
const recordsDescription =
  "赤坂のロックバー Rock Bar Heaven Akasakaで楽しめるレコードリスト。ハードロック、ヘヴィメタル、プログレ、クラシックロックを中心に、店内リクエストの参考にもご覧いただけます。";

export const metadata: Metadata = {
  title: "Record List | Rock Bar Heaven Akasaka",
  description: recordsDescription,
  alternates: {
    canonical: recordsUrl,
  },
  openGraph: {
    title: "Record List | Rock Bar Heaven Akasaka",
    description: recordsDescription,
    type: "website",
    url: recordsUrl,
    siteName: siteConfig.nameEn,
    locale: "ja_JP",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Record List | Rock Bar Heaven Akasaka",
    description: recordsDescription,
    images: [siteConfig.ogImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Record List | Rock Bar Heaven Akasaka",
  description: recordsDescription,
  url: recordsUrl,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.nameEn,
    url: siteConfig.siteUrl,
  },
  about: ["赤坂 ロックバー レコード", "赤坂 ハードロックバー", "赤坂 メタルバー"],
};

export default function RecordsPage() {
  return (
    <>
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-heaven-base px-5 pb-28 pt-28 text-heaven-text sm:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <p className="mb-3 font-heading text-sm uppercase tracking-[0.22em] text-heaven-amber">
            Vinyl Selection
          </p>
          <h1 className="max-w-4xl font-heading text-4xl uppercase leading-none text-heaven-text sm:text-6xl">
            Record List
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-heaven-text">
            Heavenで楽しめるレコードの一部をご紹介します。ハードロック、ヘヴィメタル、プログレ、クラシックロックを中心に、店内でリクエストも可能です。
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="fact-chip">{records.length} Records</span>
            <span className="fact-chip">Hard Rock</span>
            <span className="fact-chip">Heavy Metal</span>
            <span className="fact-chip">Progressive Rock</span>
          </div>
        </section>
        <section className="mx-auto mt-9 max-w-6xl">
          <RecordsList />
        </section>
      </main>
      <BottomCTA />
    </>
  );
}
