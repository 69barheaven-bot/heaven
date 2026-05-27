# TODO

## 公開前

- 独自ドメイン取得
- Google Map正式URL差し替え
- 写真追加
- メニュー追加
- イベント情報追加
- SEO公開設定に切り替え
- Google Search Console登録
- SNS用OGP画像作成

## SEO公開設定に切り替える時

- `app/layout.tsx` の `robots` を `index: true`, `follow: true` に変更
- `app/robots.ts` の `disallow: "/"` を削除または `allow: "/"` に変更
- `data/siteConfig.ts` の `siteUrl` が正式URLになっているか確認
- Vercelで独自ドメインが正しく設定されているか確認

## 写真・内容

- Hero専用の横長OGP画像を作成
- 入口とビル外観の写真を追加
- 店内メニューやドリンク情報を追加
- セッション開催日やイベント告知を追加
- 貸切案内の具体例を追加
