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
      <div className="mb-8 max-w-3xl space-y-2 text-heaven-muted">
        <p>ご予約・お問い合わせは下記フォームから承ります。<br />営業時間は月・水〜土の20:00〜翌5:00（火・日・日本の祝日は休業）です。お急ぎの場合は営業時間中にお電話ください。</p>
        <p>Reservations and inquiries can be sent using the form below.<br />We are open Mon and Wed–Sat, 20:00–5:00, and closed Tue, Sun, and Japanese public holidays. For urgent inquiries, please call during opening hours.</p>
      </div>
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
