import { repertoireDayOptions, repertoireSongs } from "@/data/repertoire";

const availableSongs = repertoireSongs.filter((song) => song.days.length > 0);
const requestSongs = repertoireSongs.filter((song) => song.days.length === 0);

function songKey(song: (typeof repertoireSongs)[number], index: number) {
  return `${song.artist}-${song.title}-${index}`;
}

export default function RepertoireList() {
  if (repertoireSongs.length === 0) {
    return (
      <p className="border border-dashed border-white/15 bg-heaven-panel/45 p-5 leading-7 text-heaven-muted">
        曲リストは準備中です。`data/repertoire.xlsx` に曲を追加すると表示されます。
      </p>
    );
  }

  return (
    <div className="space-y-10">
      <section className="overflow-hidden border border-white/10 bg-black/35">
        <div className="flex flex-col gap-3 border-b border-white/10 bg-heaven-panel/70 px-4 py-4 sm:px-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.16em] text-heaven-steel">
              Available by Day
            </p>
            <p className="mt-1 text-sm leading-6 text-heaven-muted">
              各曜日ごとにレパートリーをまとめています。
              <span className="mt-1 block text-xs leading-5 text-heaven-steel">
                Songs are grouped by the days they are available to play.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {repertoireDayOptions.map((day) => (
              <span
                className="min-w-10 border border-white/10 bg-black/25 px-2 py-1 text-center font-heading text-xs uppercase tracking-[0.1em] text-heaven-amber"
                key={day.key}
              >
                {day.shortLabel}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="w-full table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[34%]" />
              {repertoireDayOptions.map((day) => (
                <col className="w-[6.333%]" key={day.key} />
              ))}
            </colgroup>
            <thead className="bg-black/40">
              <tr className="border-b border-white/10">
                <th className="px-3 py-3 font-heading text-xs uppercase tracking-[0.14em] text-heaven-steel sm:px-5">
                  Artist
                </th>
                <th className="px-3 py-3 font-heading text-xs uppercase tracking-[0.14em] text-heaven-steel sm:px-5">
                  Song
                </th>
                {repertoireDayOptions.map((day) => (
                  <th
                    className="px-1 py-3 text-center font-heading text-xs uppercase tracking-[0.1em] text-heaven-steel sm:px-2"
                    key={day.key}
                  >
                    {day.shortLabel}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {availableSongs.map((song, index) => (
                <tr className="align-middle" key={songKey(song, index)}>
                  <td className="break-words px-3 py-3 text-sm font-bold leading-6 text-heaven-text sm:px-5">
                    {song.artist}
                  </td>
                  <td className="break-words px-3 py-3 text-sm leading-6 text-heaven-text sm:px-5">
                    {song.title}
                    {song.note ? (
                      <span className="mt-1 block text-xs leading-5 text-heaven-muted">
                        {song.note}
                      </span>
                    ) : null}
                  </td>
                  {repertoireDayOptions.map((day) => {
                    const isAvailable = song.days.includes(day.key);
                    return (
                      <td className="px-0 py-3 text-center sm:px-2" key={day.key}>
                        <span
                          aria-label={isAvailable ? `${day.label} available` : `${day.label} unavailable`}
                          className={
                            isAvailable
                              ? "inline-flex h-4 w-4 items-center justify-center border border-heaven-amber bg-heaven-amber/15 font-heading text-[10px] text-heaven-amber sm:h-7 sm:w-7 sm:text-xs"
                              : "inline-flex h-4 w-4 items-center justify-center border border-white/10 text-[10px] text-heaven-steel/45 sm:h-7 sm:w-7 sm:text-xs"
                          }
                        >
                          {isAvailable ? "●" : "-"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="overflow-hidden border border-white/10 bg-black/35">
        <div className="border-b border-white/10 bg-heaven-panel/70 px-4 py-4 sm:px-5">
          <p className="font-heading text-xs uppercase tracking-[0.16em] text-heaven-steel">
            For Request
          </p>
          <p className="mt-1 text-sm leading-6 text-heaven-muted">
            リクエストをいただいた場合や、ゲストプレイヤーを交えて演奏する楽曲です。リストにない曲でもメンバーが可能な限り頑張って対応を試みます。
            <span className="mt-1 block text-xs leading-5 text-heaven-steel">
              Songs we may play by request or with guest players. Even if a song is not listed, we will do our best to try it whenever possible.
            </span>
          </p>
        </div>
        <ul className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
          {requestSongs.map((song, index) => (
            <li
              className="border-b border-white/10 px-4 py-4 sm:px-5 md:border-b"
              key={songKey(song, index)}
            >
              <p className="text-sm font-bold leading-6 text-heaven-text">
                {song.artist} <span className="text-heaven-steel">|</span> {song.title}
              </p>
              {song.note ? (
                <p className="mt-1 text-xs leading-5 text-heaven-muted">{song.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
