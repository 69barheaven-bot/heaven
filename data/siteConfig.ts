export const mapQuery = "東京都港区赤坂2-14-8 赤坂SKビルB1F";

export const siteConfig = {
  nameJa: "Rock Bar Heaven",
  nameEn: "Rock Bar Heaven Akasaka",
  siteUrl: "https://rockbarheaven.vercel.app/",
  seoTitle: "Rock Bar Heaven Akasaka | Classic Rock Bar in Akasaka, Tokyo",
  socialTitle: "Rock Bar Heaven Akasaka | 赤坂の地下ロックバー",
  seoDescription:
    "赤坂の地下にあるRock Bar Heaven Akasaka。月・水〜土の20:00〜翌5:00に営業（火・日・日本の祝日休み）。チャージ税込3,300円に1ドリンク税込1,100円が付き、お一人様の最低料金は税込4,400円。追加ドリンクは1杯税込1,100円です。",
  description:
    "Rock Bar Heaven Akasaka is a small underground rock bar in Akasaka, Tokyo, for classic rock, live music, records, drinks, and late-night jam sessions. Open Mon and Wed–Sat, 20:00–5:00 (closed Tue, Sun, and Japanese public holidays). The ¥3,300 tax-included cover includes one ¥1,100 drink; the minimum is ¥4,400 per person, with additional drinks at ¥1,100 each.",
  ogDescription:
    "赤坂の地下ロックバー。月・水〜土 20:00〜翌5:00（火・日・日本の祝日休み）。チャージと1ドリンク込みでお一人様税込4,400円、追加ドリンクは1杯税込1,100円。",
  addressJa: "東京都港区赤坂2-14-8 赤坂SKビルB1F",
  addressEn: "B1F Akasaka SK Building, 2-14-8 Akasaka, Minato-ku, Tokyo",
  postalAddress: {
    streetAddress: "2-14-8 Akasaka, Akasaka SK Building B1F",
    addressLocality: "Minato-ku",
    addressRegion: "Tokyo",
    addressCountry: "JP",
  },
  phone: "03-5545-5969",
  phoneHref: "tel:0355455969",
  hours: "月・水〜土 20:00〜翌5:00 / Mon, Wed–Sat 20:00–5:00",
  openingHours: {
    days: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "20:00",
    closes: "05:00",
  },
  closed: "火・日・日本の祝日休業 / Closed Tue, Sun & Japanese public holidays",
  seats: "Approx. 20",
  charge: "¥3,300 incl. tax (¥3,000 before tax) / 税込3,300円（税抜3,000円）",
  bottleKeep: "Available",
  payment: "Cash / Card",
  smoking: "Separated area",
  wifi: "Available",
  liveSession: "Available",
  reservation: "Available",
  instagramHandle: "@rock_bar_heaven",
  instagramUrl: "https://www.instagram.com/rock_bar_heaven/",
  mapQuery,
  googleMapUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  googleBusinessProfileUrl: "",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E8%B5%A4%E5%9D%822-14-8%20%E8%B5%A4%E5%9D%82SK%E3%83%93%E3%83%ABB1F&output=embed",
  heroImage: "/images/hero-live-band.jpg",
  accessImage: "/images/entrance.jpg",
  ogImage: "/images/og/rock-bar-heaven-og.jpg",
  ogImageAlt: "Rock Bar Heaven Akasaka underground rock bar night",
  keywords: [
    "Rock Bar Heaven Akasaka",
    "rock bar in Akasaka",
    "classic rock bar Tokyo",
    "live music bar Akasaka",
    "70s hard rock",
    "80s metal",
    "赤坂 ロックバー",
    "赤坂 生演奏 バー",
    "赤坂 セッション バー",
  ],
};

export const mapActionUrl =
  siteConfig.googleBusinessProfileUrl || siteConfig.googleMapUrl;

export const systemInfo = [
  { label: "Hours / 営業時間", value: siteConfig.hours },
  { label: "Closed / 定休日", value: siteConfig.closed },
  { label: "Charge / チャージ", value: siteConfig.charge },
  { label: "All Drinks / 全ドリンク", value: "¥1,100 incl. tax (¥1,000 before tax) / 税込1,100円（税抜1,000円）" },
  { label: "Minimum / 最低料金", value: "¥4,400 incl. tax per person, including 1 drink; additional drinks ¥1,100 each / お一人様税込4,400円（1ドリンク込み）。追加ドリンクは1杯税込1,100円。" },
  { label: "Seats", value: siteConfig.seats },
  { label: "Payment", value: siteConfig.payment },
  { label: "Smoking", value: siteConfig.smoking },
  { label: "Wi-Fi", value: siteConfig.wifi },
  { label: "Reservation", value: siteConfig.reservation },
  { label: "Bottle Keep", value: siteConfig.bottleKeep },
];
