import About from "@/components/About";
import Access from "@/components/Access";
import BottomCTA from "@/components/BottomCTA";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LiveSession from "@/components/LiveSession";
import Music from "@/components/Music";
import PrivateParty from "@/components/PrivateParty";
import SystemInfo from "@/components/SystemInfo";
import { artists, musicGenres } from "@/data/music";
import { siteConfig } from "@/data/siteConfig";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "MusicVenue"],
  name: siteConfig.nameEn,
  alternateName: siteConfig.nameJa,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  sameAs: [siteConfig.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2-14-8 Akasaka, Akasaka SK Building B1F",
    addressLocality: "Minato-ku",
    addressRegion: "Tokyo",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "20:00",
      closes: "05:00",
    },
  ],
  servesCuisine: "Drinks",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Live music", value: true },
    { "@type": "LocationFeatureSpecification", name: "Jam session", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
  ],
  keywords: [...siteConfig.keywords, ...musicGenres, ...artists].join(", "),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-heaven-base text-heaven-text">
        <Hero />
        <About />
        <LiveSession />
        <Music />
        <Gallery />
        <SystemInfo />
        <Access />
        <PrivateParty />
        <Contact />
      </main>
      <BottomCTA />
    </>
  );
}
