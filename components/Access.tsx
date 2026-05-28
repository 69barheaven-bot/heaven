import Image from "next/image";
import { sections } from "@/data/content";
import { mapActionUrl, siteConfig } from "@/data/siteConfig";
import Section from "./Section";

export default function Access() {
  const content = sections.access;

  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      titleJa={content.titleJa}
      className="bg-heaven-panel"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-lg font-semibold leading-relaxed text-heaven-text">
            {siteConfig.addressJa}
          </p>
          <p className="mb-6 leading-7 text-heaven-muted">{siteConfig.addressEn}</p>
          <dl className="mb-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="border border-white/10 bg-black/35 p-4">
              <dt className="font-heading uppercase tracking-[0.14em] text-heaven-steel">Hours</dt>
              <dd className="mt-2 text-heaven-text">{siteConfig.hours}</dd>
            </div>
            <div className="border border-white/10 bg-black/35 p-4">
              <dt className="font-heading uppercase tracking-[0.14em] text-heaven-steel">Closed</dt>
              <dd className="mt-2 text-heaven-text">{siteConfig.closed}</dd>
            </div>
          </dl>
          <div className="mb-6 grid gap-3 sm:flex sm:flex-wrap">
            <a className="cta-button bg-heaven-amber text-black" href={mapActionUrl}>
              Open Google Map
            </a>
            <a className="cta-button bg-heaven-red text-white" href={siteConfig.phoneHref}>
              Call {siteConfig.phone}
            </a>
          </div>
          <div className="overflow-hidden border border-white/10 bg-black">
            <Image
              src={siteConfig.accessImage}
              alt="地下入口の目印になるRock Bar Heaven Akasakaの看板"
              width={900}
              height={620}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <iframe
          className="min-h-[360px] w-full border border-white/10 grayscale"
          src={siteConfig.googleMapEmbedUrl}
          title="Google Map for Rock Bar Heaven Akasaka"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}
