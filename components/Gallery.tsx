import Image from "next/image";
import { sections } from "@/data/content";
import { galleryItems } from "@/data/gallery";
import Section from "./Section";

export default function Gallery() {
  const content = sections.gallery;

  return (
    <Section
      eyebrow={content.eyebrow}
      title={content.title}
      titleJa={content.titleJa}
      className="bg-heaven-panel"
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {galleryItems.map((item, index) => (
          <figure
            className={`group relative overflow-hidden border border-white/10 bg-black ${
              index === 0 || index === 2 ? "row-span-2" : ""
            }`}
            key={item.src}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={760}
              height={920}
              className="h-full min-h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black/70 px-3 py-2 font-heading text-sm uppercase tracking-[0.12em] text-heaven-text">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
