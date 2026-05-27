import { sections } from "@/data/content";
import { artists, musicGenres } from "@/data/music";
import Section from "./Section";

export default function Music() {
  const content = sections.music;

  return (
    <Section eyebrow={content.eyebrow} title={content.title} titleJa={content.titleJa}>
      <p className="mb-7 max-w-2xl text-lg text-heaven-muted">
        {content.body}
      </p>
      <div className="mb-8 flex flex-wrap gap-3">
        {musicGenres.map((genre) => (
          <span className="tag border-heaven-red/50 text-heaven-text" key={genre}>
            {genre}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {artists.map((artist) => (
          <span className="tag border-heaven-amber/50 text-heaven-amber" key={artist}>
            {artist}
          </span>
        ))}
      </div>
    </Section>
  );
}
