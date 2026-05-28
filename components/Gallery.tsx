import Image from "next/image";
import { sections } from "@/data/content";
import { galleryItems, photoSlots } from "@/data/gallery";
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
      {content.leadJa ? (
        <p className="mb-7 max-w-3xl leading-8 text-heaven-muted">{content.leadJa}</p>
      ) : null}
      <div className="mb-7 grid gap-2 sm:grid-cols-4">
        {photoSlots.map((slot) => (
          <div className="border border-white/10 bg-black/35 p-4" key={slot.key}>
            <p className="font-heading text-sm uppercase tracking-[0.16em] text-heaven-amber">
              {slot.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-heaven-muted">{slot.memo}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {galleryItems.map((item, index) => (
          <figure
            className={`group relative overflow-hidden border border-white/10 bg-black ${
              index === 2 || index === 3 ? "row-span-2" : ""
            }`}
            key={item.src}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={760}
              height={920}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="h-full min-h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black/70 px-3 py-2 font-heading text-sm uppercase tracking-[0.12em] text-heaven-text">
              {item.label}
            </figcaption>
            <p className="absolute right-0 top-0 max-w-[82%] bg-black/72 px-3 py-2 text-right text-xs leading-5 text-heaven-muted opacity-0 transition duration-300 group-hover:opacity-100">
              {item.note}
            </p>
          </figure>
        ))}
      </div>
    </Section>
  );
}
