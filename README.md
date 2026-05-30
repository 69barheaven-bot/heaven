# Rock Bar Heaven Akasaka 公式サイト

Rock Bar Heaven Akasaka の公式サイトです。
Next.js + Tailwind CSS + TypeScript で作っており、GitHub + Vercel で公開しています。

Web制作に慣れていない方でも更新しやすいように、営業時間・Instagram・Google Map・写真・音楽ジャンルは `data` フォルダに分けています。

## 公開URL

- Vercel: `https://rockbarheaven.vercel.app/`

現在は正式公開済みのため、検索エンジンがクロールできる設定です。
一時的に検索に出したくない場合は `app/layout.tsx` の `robots` 設定と `app/robots.ts` を見直してください。

## ローカル起動方法

最初の1回だけ：

```bash
npm install
```

サイトを確認するとき：

```bash
npm run dev
```

表示された `http://localhost:3000` をブラウザで開きます。

## lint / build 方法

コード確認：

```bash
npm run lint
```

公開用ビルド確認：

```bash
npm run build
```

GitHubにpushすると、Vercelへ自動反映されます。

## よく触るファイル

- `data/siteConfig.ts`: 店舗情報、営業時間、Instagram、Google Map、電話番号
- `data/content.ts`: Heroや各セクションの文章、日本語見出し
- `data/gallery.ts`: ギャラリー写真の追加・差し替え
- `data/music.ts`: 音楽ジャンル、アーティスト名
- `public/images`: サイトで使う写真
- `public/images/og`: SNS共有用のOGP画像
- `README.md`: 更新方法の説明

## 触らない方がいいファイル

- `app/layout.tsx`: SEOと全体設定
- `app/page.tsx`: ページの並び順
- `app/globals.css`: デザイン全体
- `components`: 各セクションの表示部品
- `package.json`: 使う技術の設定
- `tailwind.config.ts`: 色やフォントの設定

## 営業時間の変更方法

`data/siteConfig.ts` を開き、以下を変更します。

```ts
hours: "20:00 - 5:00",
closed: "Tue, Sun, National Holidays",
```

## サイト内の文章を変更する方法

Heroコピーや各セクションの短い説明文は `data/content.ts` にまとめています。

例：

```ts
titleJa: "生演奏とセッション",
```

コンポーネントを直接触らず、まずは `data/content.ts` を編集してください。

## Instagram URL変更方法

`data/siteConfig.ts` のこの行を変更します。

```ts
instagramUrl: "https://www.instagram.com/rock_bar_heaven/",
```

## 公開URL変更方法

Vercelで公開後、正式なURLが決まったら `data/siteConfig.ts` のこの行を変更します。

```ts
siteUrl: "https://rockbarheaven.vercel.app/",
```

独自ドメインを使う場合は、ここを独自ドメインにしてください。

## Google Map変更方法

`data/siteConfig.ts` の項目を変更します。

```ts
mapQuery: "東京都港区赤坂2-14-8 赤坂SKビルB1F",
googleMapUrl: "https://www.google.com/maps/search/?api=1&query=東京都港区赤坂2-14-8 赤坂SKビルB1F",
googleBusinessProfileUrl: "",
googleMapEmbedUrl: "https://www.google.com/maps?q=...&output=embed",
```

- `googleMapUrl`: ボタンを押したときに開く地図
- `googleBusinessProfileUrl`: Google Business Profileの正式URLがある場合に入れる場所。空欄なら `googleMapUrl` を使います。
- `googleMapEmbedUrl`: サイト内に表示される埋め込み地図
- `mapQuery`: 地図検索に使う住所

Google Mapで店舗を開き、「共有」からURLを取得して差し替えてください。

## 写真追加方法

1. 写真を `public/images` に入れます。
2. ファイル名は英数字がおすすめです。例：`new-live-photo.jpg`
3. `data/gallery.ts` に1件追加します。

```ts
{
  src: "/images/new-live-photo.jpg",
  alt: "Rock Bar Heaven live session",
  label: "Live",
  scene: "session",
  note: "演奏・セッション感が伝わる写真",
},
```

### 店舗写真の優先スロット

`data/gallery.ts` の `photoSlots` に、今後追加したい写真の受け皿をまとめています。

- `basement-stairs`: 地下へ降りる感じが伝わる入口・階段
- `bar-counter-wide`: カウンターとボトル棚
- `bottle-shelf`: 深夜感のあるボトル棚・レコード棚
- `live-session-wide`: 演奏者と客席の距離が伝わるセッション全体

実写真が入ったら、`public/images` に置いて `galleryItems` の `src` を差し替えてください。

## ギャラリー差し替え方法

`data/gallery.ts` の `src` を別の画像ファイル名に変えます。

```ts
src: "/images/live-performance.jpg",
```

を

```ts
src: "/images/new-live-photo.jpg",
```

に変更します。

## 差し替えるべき画像一覧

現在は既存素材を整理して入れています。より実店舗感を強めるなら、以下の写真を追加すると良いです。

- 演奏中の写真
- セッション中の写真
- 店内全景
- カウンター
- 楽器
- アンプ
- レコード
- 看板
- 地下入口
- ビル外観
- 赤坂の夜感

現在使っている画像：

- `public/images/hero-live-band.jpg`
- `public/images/session-night.jpg`
- `public/images/vocal-session.jpg`
- `public/images/stage-wide.jpg`
- `public/images/records.jpg`
- `public/images/counter.jpg`
- `public/images/sign.jpg`
- `public/images/entrance.jpg`

## OGP画像の変更方法

SNS共有画像は `data/siteConfig.ts` の `ogImage` で指定しています。

```ts
ogImage: "/images/og/rock-bar-heaven-og.jpg",
```

差し替え画像は `public/images/og/rock-bar-heaven-og.jpg` に置くのが基本です。
推奨サイズや方向性は `public/images/og/README.md` にまとめています。

## 今後ページを追加する場合

現在は `app/page.tsx` の1ページ構成です。
Events / Repertoire / Session を追加する場合は、Next.js App Routerに合わせて以下のように増やします。

- `app/events/page.tsx`: イベント告知、貸切実績、セッション日程
- `app/repertoire/page.tsx`: 演奏できる曲、アーティスト、ジャンル
- `app/session/page.tsx`: セッション参加案内、楽器、初参加の流れ

各ページのtitle / description案は `TODO.md` に残しています。

## レパートリー更新方法

レパートリーページの元データは `data/repertoire.xlsx` で管理しています。

- 曲を追加する場合は、表の末尾に `Artist` と `Title` を入力します。
- 対応曜日は `M`, `Tu`, `W`, `Th`, `F`, `S` 列に `x` や `1` などの印を入れます。
- 火曜日は現在休みですが、将来使えるように `Tu` 列を用意しています。
- 補足が必要な場合だけ `Note` に入力します。
- 曲を削除する場合は、対象行を削除します。
- 表示順は `data/repertoire.xlsx` の行順どおりです。
- `npm run repertoire:sync` を実行すると、Excelから `data/repertoire.ts` が生成されます。
- `npm run dev` と `npm run build` では自動で同期されます。
- 編集後にGitHubへPushすると、VercelのPreview / 本番環境へ自動反映されます。

## GitHub連携方法

1. GitHubで新しいリポジトリを作ります。
2. この `heaven` フォルダをGitHubにアップします。
3. GitHub Desktopを使う場合は「Add Local Repository」で `heaven` フォルダを選びます。
4. 変更をコミットして、GitHubへPushします。

コマンドで行う場合：

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin GitHubのリポジトリURL
git push -u origin main
```

## Vercel公開方法

1. Vercelにログインします。
2. 「Add New Project」を押します。
3. GitHubのリポジトリを選びます。
4. Framework Preset が `Next.js` になっていることを確認します。
5. Build Command は通常 `npm run build` のままでOKです。
6. Deployを押します。

公開後、VercelのProject Settingsから独自ドメインを追加できます。

## 初心者向けの更新手順

1. `npm run dev` でサイトを起動します。
2. 変更したい内容に合わせて `data` フォルダのファイルを編集します。
3. ブラウザで見た目を確認します。
4. 問題なければGitHubへPushします。
5. Vercelが自動で公開サイトを更新します。

## 今後追加しやすい機能

- 独自ドメイン設定
- Google Map正式URL差し替え
- メニュー追加
- イベントスケジュール
- セッション開催日の告知
- 英語ページの追加
- Instagram投稿の埋め込み
- 貸切問い合わせフォーム
- Google Analytics / Search Console
- 店舗写真を増やしたギャラリー
- よくある質問

詳しい改善候補は `TODO.md` にまとめています。
