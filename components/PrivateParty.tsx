import { sections } from "@/data/content";
import Section from "./Section";

export default function PrivateParty() {
  const content = sections.privateParty;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} titleJa={content.titleJa}>
      <div className="border-l-4 border-heaven-red bg-heaven-panel p-6 sm:p-8">
        <p className="max-w-3xl text-2xl font-semibold leading-relaxed text-heaven-text">
          {content.leadJa}
        </p>
        <p className="mt-5 max-w-2xl leading-8 text-heaven-muted">
          {content.body}
        </p>
      </div>
    </Section>
  );
}
