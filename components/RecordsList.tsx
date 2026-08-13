"use client";

import { useMemo, useState } from "react";
import { records } from "@/data/records";

function normalizeSearch(value: string) {
  return value.trim().toLocaleLowerCase("ja-JP");
}

function RecordPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_center,#d08a24_0_4%,#111_4%_12%,#242424_12%_14%,#090909_14%_36%,#1b1b1b_36%_38%,#080808_38%_62%,#181818_62%_64%,#050505_64%_100%)] shadow-amber"
    >
      <div className="absolute inset-4 rounded-full border border-white/8" />
      <div className="absolute inset-8 rounded-full border border-white/6" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_32%,rgba(177,18,38,0.18)_58%,transparent_72%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
        <span className="font-heading text-[0.55rem] uppercase tracking-[0.14em] text-heaven-amber">
          Cover Art Unavailable
        </span>
        <span className="mt-1 text-[0.5rem] uppercase tracking-[0.08em] text-heaven-muted">
          Artwork not available
        </span>
      </div>
    </div>
  );
}

export default function RecordsList() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);

  const filteredRecords = useMemo(() => {
    if (!normalizedQuery) return records;

    return records.filter((record) => {
      const target = normalizeSearch(`${record.artist} ${record.album}`);
      return target.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  if (records.length === 0) {
    return (
      <p className="border border-dashed border-white/15 bg-heaven-panel/45 p-5 leading-7 text-heaven-muted">
        レコードリストは準備中です。data/records.xlsx にレコードを追加すると表示されます。
      </p>
    );
  }

  return (
    <div className="space-y-5">
      <div className="border border-white/10 bg-heaven-panel/70 p-4 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <label className="block md:min-w-[24rem]" htmlFor="record-search">
            <span className="font-heading text-xs uppercase tracking-[0.16em] text-heaven-steel">
              Search
            </span>
            <input
              className="mt-2 w-full border border-white/15 bg-black/55 px-4 py-3 text-base text-heaven-text outline-none transition duration-300 placeholder:text-heaven-steel focus:border-heaven-amber focus:shadow-amber"
              id="record-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Artist or album"
              type="search"
              value={query}
            />
          </label>
          <p className="font-heading text-sm uppercase tracking-[0.14em] text-heaven-muted">
            <span className="text-2xl text-heaven-amber">{filteredRecords.length}</span>
            <span className="ml-2 text-heaven-steel">/ {records.length} Records</span>
          </p>
        </div>
      </div>

      {filteredRecords.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecords.map((record, index) => (
            <li
              className="grid grid-cols-[5rem_1fr] gap-4 border border-white/10 bg-black/35 p-3 transition duration-300 hover:border-heaven-red hover:bg-black/55 sm:grid-cols-[5.75rem_1fr] sm:p-4"
              key={`${record.artist}-${record.album}-${index}`}
            >
              {record.jacketUrl ? (
                <img
                  alt={`${record.artist} ${record.album} jacket`}
                  className="aspect-square w-full border border-white/10 object-cover"
                  loading="lazy"
                  src={record.jacketUrl}
                />
              ) : (
                <RecordPlaceholder />
              )}
              <div className="min-w-0 self-center">
                <p className="break-words font-heading text-base uppercase leading-6 text-heaven-text">
                  {record.artist}
                </p>
                <p className="mt-1 break-words text-sm leading-6 text-heaven-muted">
                  {record.album}
                </p>
                {record.genre || record.note ? (
                  <p className="mt-2 text-xs leading-5 text-heaven-steel">
                    {[record.genre, record.note].filter(Boolean).join(" / ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="border border-dashed border-white/15 bg-black/35 p-5 leading-7 text-heaven-muted">
          該当するレコードが見つかりませんでした。
        </p>
      )}
    </div>
  );
}
