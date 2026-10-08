export const repertoireDayOptions = [
  {
    "key": "monday",
    "label": "月",
    "shortLabel": "M",
    "column": "M"
  },
  {
    "key": "tuesday",
    "label": "火",
    "shortLabel": "Tu",
    "column": "Tu"
  },
  {
    "key": "wednesday",
    "label": "水",
    "shortLabel": "W",
    "column": "W"
  },
  {
    "key": "thursday",
    "label": "木",
    "shortLabel": "Th",
    "column": "Th"
  },
  {
    "key": "friday",
    "label": "金",
    "shortLabel": "F",
    "column": "F"
  },
  {
    "key": "saturday",
    "label": "土",
    "shortLabel": "S",
    "column": "S"
  }
] as const;

export type RepertoireDayKey = (typeof repertoireDayOptions)[number]["key"];

export type RepertoireSong = {
  artist: string;
  title: string;
  days: RepertoireDayKey[];
  note?: string;
};

export const repertoireSongs: RepertoireSong[] = [
  {
    "artist": "AC/DC",
    "title": "Back In Black",
    "days": [
      "friday",
      "saturday"
    ]
  },
  {
    "artist": "Deep Purple",
    "title": "Smoke on the Water",
    "days": [
      "monday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ]
  }
];
