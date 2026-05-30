export type RepertoireSong = {
  title: string;
  artist: string;
  note?: string;
};

export type RepertoireDay = {
  day: string;
  label: string;
  songs: RepertoireSong[];
};

export const repertoireByDay: RepertoireDay[] = [
  {
    day: "Monday",
    label: "月曜日",
    songs: [
      {
        title: "Smoke on the Water",
        artist: "Deep Purple",
      },
    ],
  },
  {
    day: "Wednesday",
    label: "水曜日",
    songs: [],
  },
  {
    day: "Thursday",
    label: "木曜日",
    songs: [],
  },
  {
    day: "Friday",
    label: "金曜日",
    songs: [],
  },
  {
    day: "Saturday",
    label: "土曜日",
    songs: [],
  },
];
