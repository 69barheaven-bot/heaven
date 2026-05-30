import { repertoireByDay } from "@/data/repertoire";

export default function RepertoireList() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {repertoireByDay.map((day) => (
        <article
          className="border border-white/10 bg-black/35 p-5"
          key={day.day}
        >
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.18em] text-heaven-amber">
                {day.day}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-heaven-text">{day.label}</h2>
            </div>
            <span className="font-heading text-sm uppercase tracking-[0.12em] text-heaven-steel">
              {day.songs.length} songs
            </span>
          </div>
          {day.songs.length > 0 ? (
            <ul className="space-y-3">
              {day.songs.map((song) => (
                <li
                  className="border border-white/10 bg-heaven-panel/70 p-4"
                  key={`${day.day}-${song.title}-${song.artist}`}
                >
                  <p className="text-lg font-bold leading-snug text-heaven-text">
                    {song.title}
                  </p>
                  <p className="mt-1 font-heading text-sm uppercase tracking-[0.1em] text-heaven-amber">
                    {song.artist}
                  </p>
                  {song.note ? (
                    <p className="mt-3 text-sm leading-6 text-heaven-muted">{song.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="border border-dashed border-white/15 bg-heaven-panel/45 p-4 leading-7 text-heaven-muted">
              曲リストは準備中です。追加するとこの曜日カードに表示されます。
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
