import { repertoireDayOptions, repertoireSongs } from "@/data/repertoire";

const dayLabelByKey = new Map(
  repertoireDayOptions.map((day) => [day.key, day.shortLabel]),
);

export default function RepertoireList() {
  if (repertoireSongs.length === 0) {
    return (
      <p className="border border-dashed border-white/15 bg-heaven-panel/45 p-5 leading-7 text-heaven-muted">
        曲リストは準備中です。`data/repertoire.xlsx` に曲を追加すると表示されます。
      </p>
    );
  }

  return (
    <div className="overflow-hidden border border-white/10 bg-black/35">
      <div className="border-b border-white/10 bg-heaven-panel/70 px-4 py-3 font-heading text-xs uppercase tracking-[0.16em] text-heaven-steel sm:px-5">
        Artist / Song / Days
      </div>
      <ul className="divide-y divide-white/10">
        {repertoireSongs.map((song) => {
          const days = song.days
            .map((day) => dayLabelByKey.get(day))
            .filter(Boolean);

          return (
            <li
              className="px-4 py-4 sm:px-5"
              key={`${song.artist}-${song.title}`}
            >
              <p className="text-lg font-bold leading-snug text-heaven-text">
                {song.artist} <span className="text-heaven-steel">|</span> {song.title}{" "}
                <span className="font-heading text-sm uppercase tracking-[0.12em] text-heaven-amber">
                  ({days.length > 0 ? days.join(", ") : "-"})
                </span>
              </p>
              {song.note ? (
                <p className="mt-2 text-sm leading-6 text-heaven-muted">{song.note}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
