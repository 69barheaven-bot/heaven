import { sections } from "@/data/content";
import Section from "./Section";

export default function About() {
  const content = sections.about;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} titleJa={content.titleJa}>
      <div className="grid gap-6 text-lg leading-relaxed text-heaven-muted md:grid-cols-2">
        <div className="space-y-5">
          <p className="whitespace-pre-line">{content.bodyEn}</p>
          <p className="whitespace-pre-line font-semibold text-heaven-text">{content.highlightEn}</p>
        </div>
        <div className="space-y-5">
          <p className="whitespace-pre-line">{content.bodyJa}</p>
          <p className="whitespace-pre-line font-semibold text-heaven-text">{content.highlightJa}</p>
        </div>
      </div>
    </Section>
  );
}
