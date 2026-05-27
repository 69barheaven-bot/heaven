import { sections } from "@/data/content";
import { systemInfo } from "@/data/siteConfig";
import Section from "./Section";

export default function SystemInfo() {
  const content = sections.system;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} titleJa={content.titleJa}>
      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {systemInfo.map((item) => (
          <div className="bg-heaven-panel p-5" key={item.label}>
            <dt className="font-heading text-sm uppercase tracking-[0.16em] text-heaven-steel">
              {item.label}
            </dt>
            <dd className="mt-2 text-xl font-semibold text-heaven-text">{item.value}</dd>
          </div>
        ))}
      </div>
    </Section>
  );
}
