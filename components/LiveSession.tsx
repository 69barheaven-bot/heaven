import Image from "next/image";
import { sections } from "@/data/content";
import Section from "./Section";

export default function LiveSession() {
  const content = sections.liveSession;

  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      titleJa={content.titleJa}
      className="bg-heaven-panel"
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="max-w-2xl text-2xl font-semibold leading-relaxed text-heaven-text">
            {content.leadJa.split("\n").map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-heaven-muted">
            {content.body}
          </p>
        </div>
        <div className="overflow-hidden border border-white/10 bg-black">
          <Image
            src="/images/vocal-session.jpg"
            alt="Band members playing a live rock session at Rock Bar Heaven Akasaka"
            width={900}
            height={620}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
