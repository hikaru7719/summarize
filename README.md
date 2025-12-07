# Summarize

英語学習支援アプリケーション - 英語記事から学習コンテンツを自動生成

## 概要

このアプリケーションは、英語のニュース記事やブログから学習コンテンツを自動生成します。
- 日本語要約
- 高校レベル以上の英単語の日本語訳
- 理解度確認用のQ&A

## 技術スタック

- **ランタイム**: Cloudflare Workers
- **フロントエンド**: React + TypeScript + Chakra UI
- **バックエンド**: Hono
- **データベース**: Cloudflare D1 (SQLite)
- **KVストア**: Cloudflare KV
- **ORM**: Drizzle ORM
- **AI**: OpenAI API (GPT-4o)
- **状態管理**: TanStack Query

## 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.dev.vars`ファイルを作成し、以下の環境変数を設定してください：

```
OPENAI_API_KEY=your-openai-api-key-here
GITHUB_CLIENT_ID=your-github-client-id-here
GITHUB_CLIENT_SECRET=your-github-client-secret-here
GITHUB_CALLBACK_URL=http://localhost:8787/auth/github/callback
SESSION_SECRET=your-session-secret-here
SESSION_TTL=86400
APP_URL=http://localhost:8787
```

### 3. データベースのマイグレーション

ローカルD1データベースにマイグレーションを適用：

```bash
npm run db:migrate
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは `http://localhost:8787` で起動します。

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run deploy` - Cloudflare Workersへのデプロイ
- `npm test` - テストの実行
- `npm run db:generate` - マイグレーションファイルの生成
- `npm run db:migrate` - マイグレーションの実行
- `npm run db:studio` - Drizzle Studioの起動

## プロジェクト構造

```
src/
├── client/          # Reactフロントエンド
│   ├── components/  # UIコンポーネント
│   ├── hooks/       # カスタムフック
│   ├── pages/       # ページコンポーネント
│   ├── App.tsx      # メインアプリケーション
│   └── main.tsx     # エントリーポイント
├── server/          # APIハンドラー
├── services/        # ビジネスロジック
├── middleware/      # Honoミドルウェア
├── db/              # データベーススキーマ
├── types/           # TypeScript型定義
├── utils/           # ユーティリティ関数
└── index.ts         # Workerエントリーポイント
```

## ライセンス

ISC