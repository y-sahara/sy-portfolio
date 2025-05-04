# プロジェクト構成

## ディレクトリ構造

```
sy-portfolio/
├── app/                    # Next.js アプリケーションのルート
|   ├── about.tsx
│   ├── blog/              # ブログ関連のページ
│   │   ├── [slug]/       # 動的ルーティング用のディレクトリ
│   │   │   └── page.tsx  # 個別のブログ記事ページ
│   │   └── page.tsx      # ブログ一覧ページ
│   ├── portfolio/         # ポートフォリオ関連のページ
│   │   ├── [slug]/       # 動的ルーティング用のディレクトリ
│   │   │   └── page.tsx  # 個別のプロジェクト詳細ページ
│   │   └── page.tsx      # ポートフォリオ一覧ページ
│   └── page.tsx          # ホームページ
│
├── components/            # 再利用可能なコンポーネント
│   ├── home/             # ホームページ用コンポーネント
│   │   ├── featured-posts.tsx    # フィーチャード投稿
│   │   └── featured-projects.tsx # フィーチャードプロジェクト
│   ├── ui/               # UIコンポーネント（shadcn/ui）
│   │   ├── button.tsx
│   │    ├── card.tsx
│   │    ├── input.tsx
│   │    └── ...          # その他のUIコンポーネント
│   ├── theme-provider.tsx  # テーマ管理用プロバイダー（next-themesをラップ）
│   └── theme-toggle.tsx    # テーマ切り替えUIコンポーネント
│
├── lib/                  # ユーティリティ関数とデータ
│   ├── data/            # データソース
│   │   ├── posts.ts     # ブログ投稿データ
│   │   ├── projects.ts  # プロジェクトデータ
│   │   └── categories.ts # カテゴリーデータ
│   ├── types/           # 型定義
│   │   ├── post.ts      # 投稿の型定義
│   │   ├── project.ts   # プロジェクトの型定義
│   │   ├── category.ts  # カテゴリーの型定義
│   │   └── index.ts     # 型定義のエクスポート
│   └── utils.ts         # ユーティリティ関数
│
├── public/              # 静的ファイル
│   └── images/         # 画像ファイル
│
├── docs/               # ドキュメント
│   └── project-structure.md  # プロジェクト構成の説明
│
├── package.json        # プロジェクトの依存関係
├── tailwind.config.ts  # Tailwind CSSの設定
└── tsconfig.json       # TypeScriptの設定
```

## 主要なディレクトリの説明

### `app/`

Next.js 13 以降の App Router を使用したページコンポーネントを格納。各ページは`page.tsx`として実装。

### `components/`

- `home/`: ホームページ固有のコンポーネント
- `ui/`: shadcn/ui からインストールした再利用可能な UI コンポーネント
- `theme-provider.tsx`: next-themes をラップしたテーマ管理用プロバイダー
- `theme-toggle.tsx`: ダークモード/ライトモード切り替え用の UI コンポーネント

### `lib/`

- `data/`: アプリケーションで使用するデータソース
  - `posts.ts`: ブログ投稿のデータと関連関数
  - `projects.ts`: プロジェクトのデータと関連関数
  - `categories.ts`: カテゴリーのデータと関連関数
- `types/`: アプリケーションで使用する型定義
  - `post.ts`: 投稿の型定義
  - `project.ts`: プロジェクトの型定義
  - `category.ts`: カテゴリーの型定義
  - `index.ts`: 型定義のエクスポート
- `utils.ts`: アプリケーション全体で使用するユーティリティ関数

### `public/`

静的ファイル（画像、フォントなど）を格納。

## データフロー

1. データソース

   - `lib/data/`で一元管理
   - `lib/types/`で型安全性を確保
   - カテゴリーは独立したデータとして管理

2. コンポーネント

   - 各コンポーネントは必要なデータを`lib/data`から取得
   - UI コンポーネントは`components/ui`から再利用

3. ページ
   - 動的ルーティング（`[slug]`）を使用して個別の記事やプロジェクトを表示
   - データ取得関数を使用して必要なデータを取得

## 特徴

- モジュール化された構造
- 型安全性の確保
- データの一元管理
- 再利用可能なコンポーネント
- 動的ルーティングの活用
- 独立したカテゴリー管理
