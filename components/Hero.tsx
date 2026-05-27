import Image from "next/image";
import { heroContent } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden border-b border-white/10 bg-heaven-base">
      <Image
        src={siteConfig.heroImage}
        alt="Rock Bar Heaven Akasaka live classic rock underground bar"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover object-[58%_center] opacity-76 sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.24),rgba(11,11,11,0.72)_52%,#0B0B0B_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(177,18,38,0.28),transparent_32%),linear-gradient(90deg,rgba(11,11,11,0.86),rgba(11,11,11,0.22))]" />

      <div className="relative z-10 flex min-h-[92svh] items-end px-5 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          <p className="mb-4 inline-flex border border-heaven-amber/50 bg-black/50 px-3 py-2 font-heading text-sm uppercase tracking-[0.2em] text-heaven-amber">
            {siteConfig.hours} / Akasaka B1F
          </p>
          <p className="mb-3 font-heading text-2xl uppercase tracking-[0.08em] text-heaven-text sm:text-4xl">
            {heroContent.venueLine}
          </p>
          <h1 className="font-heading text-5xl uppercase leading-[0.92] text-heaven-text sm:text-7xl lg:text-8xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-heaven-text sm:text-2xl">
            {heroContent.leadJa.split("\n").map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
            {heroContent.facts.map((fact) => (
              <span className="fact-chip" key={fact}>
                {fact}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-button bg-heaven-red text-white" href={siteConfig.phoneHref}>
              Call Us
            </a>
            <a className="cta-button bg-heaven-amber text-black" href={siteConfig.googleMapUrl}>
              Get Directions
            </a>
            <a className="cta-button border border-white/30 bg-black/45 text-heaven-text" href={siteConfig.instagramUrl}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
