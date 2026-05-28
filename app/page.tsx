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
  description: siteConfig.seoDescription,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl.replace(/\/$/, "")}${siteConfig.ogImage}`,
  hasMap: siteConfig.googleMapUrl,
  sameAs: [siteConfig.instagramUrl],
  address: {
    "@type": "PostalAddress",
    ...siteConfig.postalAddress,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
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
