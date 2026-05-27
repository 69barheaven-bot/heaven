import Image from "next/image";
import { sections } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
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
          <div className="overflow-hidden border border-white/10 bg-black">
            <Image
              src={siteConfig.accessImage}
              alt="Entrance near Rock Bar Heaven Akasaka"
              width={900}
              height={620}
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
