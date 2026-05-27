import { sections } from "@/data/content";
import Section from "./Section";

export default function About() {
  const content = sections.about;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} titleJa={content.titleJa}>
      <div className="grid gap-6 text-lg leading-relaxed text-heaven-muted md:grid-cols-2">
        <p>{content.bodyEn}</p>
        <p>{content.bodyJa}</p>
      </div>
    </Section>
  );
}
