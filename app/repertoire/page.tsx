import type { Metadata } from "next";
import BottomCTA from "@/components/BottomCTA";
import RepertoireList from "@/components/RepertoireList";
import SiteNav from "@/components/SiteNav";
import { siteConfig } from "@/data/siteConfig";

const repertoireUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/repertoire`;

export const metadata: Metadata = {
  title: "Repertoire | Rock Bar Heaven Akasaka",
  description:
    "Rock Bar Heaven Akasakaの曜日別レパートリー。セッションやリクエストの参考に、演奏可能曲・対応曲を掲載しています。",
  alternates: {
    canonical: repertoireUrl,
  },
  openGraph: {
    title: "Repertoire | Rock Bar Heaven Akasaka",
    description:
      "Rock Bar Heaven Akasakaの曜日別レパートリー。セッションやリクエストの参考に、演奏可能曲・対応曲を掲載しています。",
    type: "website",
    url: repertoireUrl,
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
    title: "Repertoire | Rock Bar Heaven Akasaka",
    description:
      "Rock Bar Heaven Akasakaの曜日別レパートリー。セッションやリクエストの参考に、演奏可能曲・対応曲を掲載しています。",
    images: [siteConfig.ogImage],
  },
};

export default function RepertoirePage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-heaven-base px-5 pb-28 pt-28 text-heaven-text sm:px-8 lg:px-12">
        <section className="fade-up mx-auto max-w-6xl">
          <p className="mb-3 font-heading text-sm uppercase tracking-[0.22em] text-heaven-amber">
            Repertoire
          </p>
          <h1 className="max-w-4xl font-heading text-4xl uppercase leading-none text-heaven-text sm:text-6xl">
            Songs by Session Night
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-heaven-text">
            セッション・リクエスト参考曲です。対応曜日を曲名の横に表示しています。
          </p>
          <p className="mt-5 max-w-3xl border-l-4 border-heaven-red bg-black/35 px-4 py-4 leading-8 text-heaven-muted">
            掲載曲はセッション・リクエスト時の参考レパートリーです。
            <br />
            当日の編成や状況により対応できない場合があります。
          </p>
        </section>
        <section className="fade-up mx-auto mt-9 max-w-6xl">
          <RepertoireList />
        </section>
      </main>
      <BottomCTA />
    </>
  );
}
