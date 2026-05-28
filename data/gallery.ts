export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  scene: "entrance" | "counter" | "stage" | "session" | "records" | "sign";
  note: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/entrance.jpg",
    alt: "地下入口の目印になるRock Bar Heaven Akasakaの看板",
    label: "Entrance",
    scene: "entrance",
    note: "ビル外から地下へ入る目印",
  },
  {
    src: "/images/counter.jpg",
    alt: "Counter area at the basement rock bar in Akasaka",
    label: "Counter",
    scene: "counter",
    note: "距離の近いカウンター",
  },
  {
    src: "/images/stage-wide.jpg",
    alt: "Small underground stage with drums and amps at Rock Bar Heaven Akasaka",
    label: "Stage",
    scene: "stage",
    note: "楽器とアンプのある小さなステージ",
  },
  {
    src: "/images/session-night.jpg",
    alt: "Classic rock live session inside Rock Bar Heaven Akasaka",
    label: "Live",
    scene: "session",
    note: "夜の生演奏とセッション感",
  },
  {
    src: "/images/vocal-session.jpg",
    alt: "Vocalist and band performing at Rock Bar Heaven Akasaka",
    label: "Session",
    scene: "session",
    note: "歌とバンドの距離感",
  },
  {
    src: "/images/hero-live-band.jpg",
    alt: "Band playing classic rock at Rock Bar Heaven Akasaka",
    label: "Band",
    scene: "session",
    note: "バンド全体の熱量",
  },
  {
    src: "/images/records.jpg",
    alt: "Vinyl records at Rock Bar Heaven Akasaka",
    label: "Records",
    scene: "records",
    note: "ロックバーらしい音源棚",
  },
  {
    src: "/images/sign.jpg",
    alt: "Rock Bar Heaven Akasaka sign logo",
    label: "Sign",
    scene: "sign",
    note: "店舗ロゴと看板",
  },
];

export const photoSlots = [
  {
    key: "basement-stairs",
    label: "Basement",
    targetFile: "/images/basement-stairs.jpg",
    memo: "地下へ降りる感じが伝わる入口または階段の横位置写真",
  },
  {
    key: "bar-counter-wide",
    label: "Counter",
    targetFile: "/images/bar-counter-wide.jpg",
    memo: "カウンターとボトル棚が見える横位置写真",
  },
  {
    key: "bottle-shelf",
    label: "Bottles",
    targetFile: "/images/bottle-shelf.jpg",
    memo: "深夜感のあるボトル棚、照明、レコード棚の写真",
  },
  {
    key: "live-session-wide",
    label: "Session",
    targetFile: "/images/live-session-wide.jpg",
    memo: "演奏者と客席の距離が伝わるライブ/セッション全体写真",
  },
];
