import { sections } from "@/data/content";
import { mapActionUrl, siteConfig } from "@/data/siteConfig";
import Section from "./Section";

export default function Contact() {
  const content = sections.contact;

  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      titleJa={content.titleJa}
      className="bg-heaven-panel pb-28"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <a className="contact-card" href={siteConfig.phoneHref}>
          <span>Phone</span>
          <strong>{siteConfig.phone}</strong>
        </a>
        <a className="contact-card" href={mapActionUrl}>
          <span>Google Map</span>
          <strong>Get Directions</strong>
        </a>
        <a className="contact-card" href={siteConfig.instagramUrl}>
          <span>Instagram</span>
          <strong>{siteConfig.instagramHandle}</strong>
        </a>
      </div>
    </Section>
  );
}
