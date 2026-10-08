import recordsWithCovers from "./records.with-covers.json";

export type RecordItem = {
  artist: string;
  album: string;
  jacketUrl: string;
  genre: string;
  note: string;
};

export const records: RecordItem[] = recordsWithCovers;
