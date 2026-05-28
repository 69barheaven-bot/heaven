# TODO

## 公開前

- 独自ドメイン取得
- Google Map正式URL差し替え
- Google Business Profileの正式URLを `data/siteConfig.ts` の `googleBusinessProfileUrl` に追加
- 写真追加
- メニュー追加
- イベント情報追加
- SNS用OGP画像を `public/images/og/rock-bar-heaven-og.jpg` に差し替え

## 検索非公開に戻す時

- `app/layout.tsx` の `robots` を `index: false`, `follow: false` に変更
- `app/robots.ts` を `disallow: "/"` に変更
- `data/siteConfig.ts` の `siteUrl` が正式URLになっているか確認
- Vercelで独自ドメインが正しく設定されているか確認

## 写真・内容

- OGP専用画像を1200x630で作成。黒基調、赤坂、地下感、深夜感、ROCK BAR HEAVEN AKASAKAの文字を入れる
- `public/images/basement-stairs.jpg`: 地下へ降りる感じが伝わる入口・階段写真を追加
- `public/images/bar-counter-wide.jpg`: カウンターとボトル棚が見える横位置写真を追加
- `public/images/bottle-shelf.jpg`: 深夜感のあるボトル棚・レコード棚写真を追加
- `public/images/live-session-wide.jpg`: 演奏者と客席の距離が伝わるセッション全体写真を追加
- 入口とビル外観の高解像度写真を追加
- 店内メニューやドリンク情報を追加
- セッション開催日やイベント告知を追加
- 貸切案内の具体例を追加

## 追加ページ候補

- Events
  - route: `app/events/page.tsx`
  - title案: `Events | Rock Bar Heaven Akasaka`
  - description案: `赤坂の地下ロックバー Rock Bar Heaven Akasaka のイベント、貸切、セッション開催情報。`
  - 必要素材: 開催頻度、過去イベント写真、問い合わせ導線
- Repertoire
  - route: `app/repertoire/page.tsx`
  - title案: `Repertoire | Rock Bar Heaven Akasaka`
  - description案: `70〜80年代ロックを中心に、Rock Bar Heaven Akasakaで楽しめる楽曲・アーティストの案内。`
  - 必要素材: 曲リスト、アーティスト分類、参加できる楽器
- Session
  - route: `app/session/page.tsx`
  - title案: `Session Guide | Rock Bar Heaven Akasaka`
  - description案: `Rock Bar Heaven Akasakaのセッション参加案内。初めての方、ボーカル、ギター、ベース、ドラム向けの流れ。`
  - 必要素材: 参加条件、開催曜日、料金、楽器持ち込み可否
