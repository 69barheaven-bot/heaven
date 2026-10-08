export const mapQuery = "東京都港区赤坂2-14-8 赤坂SKビルB1F";

export const siteConfig = {
  nameJa: "Rock Bar Heaven",
  nameEn: "Rock Bar Heaven Akasaka",
  siteUrl: "https://rockbarheaven.vercel.app/",
  seoTitle: "Rock Bar Heaven Akasaka | Classic Rock Bar in Akasaka, Tokyo",
  socialTitle: "Rock Bar Heaven Akasaka | 赤坂の地下ロックバー",
  seoDescription:
    "赤坂の地下にあるRock Bar Heaven Akasaka。70〜80年代ロック、生演奏、レコード、ドリンク、深夜セッションを楽しめる小さなロックバーです。",
  description:
    "Rock Bar Heaven Akasaka is a small underground rock bar in Akasaka, Tokyo, for classic rock, live music, records, drinks, and late-night jam sessions.",
  ogDescription:
    "赤坂の地下にある、70〜80年代ロックを生演奏・レコード・セッションで楽しめるロックバー。",
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
  hours: "20:00 - 5:00",
  openingHours: {
    days: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "20:00",
    closes: "05:00",
  },
  closed: "Tue, Sun, National Holidays",
  seats: "Approx. 20",
  charge: "¥3,000",
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
  { label: "Hours", value: siteConfig.hours },
  { label: "Closed", value: siteConfig.closed },
  { label: "Charge", value: siteConfig.charge },
  { label: "Seats", value: siteConfig.seats },
  { label: "Payment", value: siteConfig.payment },
  { label: "Smoking", value: siteConfig.smoking },
  { label: "Wi-Fi", value: siteConfig.wifi },
  { label: "Reservation", value: siteConfig.reservation },
  { label: "Bottle Keep", value: siteConfig.bottleKeep },
];
