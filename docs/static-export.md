# Next.js 静的エクスポートと generateStaticParams

## 静的エクスポート（`output: export`）について

### 基本的な特徴

- ビルド時にすべてのページを静的な HTML ファイルとして生成
- サーバーサイドのランタイムが不要
- 静的ホスティングサービス（GitHub Pages、Vercel、Netlify など）で簡単にデプロイ可能

### 設定方法

```javascript
// next.config.js
module.exports = {
  output: "export",
};
```

### 利点

- 高速なページロード（静的ファイルの配信）
- サーバーコストの削減
- SEO に最適化
- セキュリティの向上（サーバーサイドの脆弱性リスクが低減）

## `generateStaticParams`について

### 目的

- 動的ルーティング（`[slug]`など）を使用するページで、ビルド時に生成するパラメータを指定
- 静的エクスポート時に必要なページを事前に生成

### 使用例

```typescript
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 動作の流れ

1. ビルド時に`generateStaticParams`が実行
2. 返されたパラメータ（この場合は各投稿の`slug`）に対して静的なページを生成
3. 例えば、3 つの投稿がある場合：
   ```
   /blog/building-react-applications-with-nextjs.html
   /blog/the-power-of-tailwind-css.html
   /blog/modern-authentication-strategies.html
   ```

### 注意点

- 動的ルーティングを使用するページでは必須
- ビルド時に存在しないパラメータのページは生成されない
- 新しいコンテンツを追加する場合は、再ビルドが必要

## 実際の使用例

### ブログ投稿ページでの実装

```typescript
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 生成されるページ

- 各ブログ投稿の詳細ページが静的な HTML として生成
- ビルド時に存在する投稿のみがページとして生成される

### 利点

- 高速なページロード
- SEO に最適化
- サーバーコストの削減
- セキュリティの向上

## ビルドのタイミング

### ビルドが実行されるタイミング

1. **開発環境でのビルド**

   ```bash
   npm run build
   ```

   - プロジェクトのデプロイ前
   - 新しいコンテンツを追加した後
   - コードの変更を本番環境に反映する際

2. **CI/CD パイプラインでのビルド**

   - GitHub Actions などの CI ツールを使用する場合
   - リポジトリへのプッシュ時
   - 特定のブランチへのマージ時
   - 定期的なスケジュール実行時

3. **デプロイメント時のビルド**
   - Vercel、Netlify などのホスティングサービスでの自動ビルド
   - 手動デプロイ時のビルド

### ビルドプロセスの流れ

1. **依存関係のインストール**

   ```bash
   npm install
   ```

2. **ビルドコマンドの実行**

   ```bash
   npm run build
   ```

3. **静的ファイルの生成**

   - `generateStaticParams`の実行
   - 各ページの HTML ファイルの生成
   - アセット（画像、CSS、JavaScript）の最適化

4. **出力ディレクトリの作成**
   - `out`ディレクトリに生成されたファイルが配置
   - 静的ホスティング用のファイル構造が作成

### ビルド後のファイル構造

```
out/
├── _next/
│   ├── static/
│   └── chunks/
├── blog/
│   ├── building-react-applications-with-nextjs.html
│   ├── the-power-of-tailwind-css.html
│   └── ...
├── portfolio/
│   ├── ecommerce-platform.html
│   ├── task-management-app.html
│   └── ...
├── index.html
└── ...
```

### 注意点

1. **ビルドの頻度**

   - コンテンツの更新頻度に応じてビルドを実行
   - 頻繁な更新がある場合は、CI/CD パイプラインの設定を検討

2. **ビルド時間**

   - ページ数が多い場合、ビルド時間が長くなる可能性
   - インクリメンタルビルドの活用を検討

3. **キャッシュの活用**
   - ビルド時のキャッシュを活用してビルド時間を短縮
   - CI/CD ツールのキャッシュ機能を活用

## データベース（Supabase）との連携

### Supabase を使用する場合の`generateStaticParams`

1. **基本的な実装方法**

   ```typescript
   import { createClient } from "@supabase/supabase-js";

   export async function generateStaticParams() {
     const supabase = createClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
     );

     const { data: posts } = await supabase.from("posts").select("slug");

     return (
       posts?.map((post) => ({
         slug: post.slug,
       })) || []
     );
   }
   ```

2. **ビルド時の動作**

   - ビルド時に Supabase からデータを取得
   - 取得したデータに基づいて静的なページを生成
   - 生成されたページは静的ファイルとして保存

3. **利点**
   - データベースの内容に基づいて動的にページを生成
   - ビルド時のデータスナップショットを保持
   - パフォーマンスの向上（静的ファイルの配信）

### 注意点

1. **データの更新頻度**

   - ビルド時のデータが静的ファイルとして保存される
   - 新しいデータを反映するには再ビルドが必要
   - 頻繁な更新がある場合は、以下の方法を検討：
     - 定期的な再ビルドのスケジュール設定
     - インクリメンタル静的再生成（ISR）の使用
     - クライアントサイドでのデータ取得

2. **環境変数の設定**

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. **エラーハンドリング**

   ```typescript
   export async function generateStaticParams() {
     try {
       const supabase = createClient(
         process.env.NEXT_PUBLIC_SUPABASE_URL!,
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
       );

       const { data: posts, error } = await supabase
         .from("posts")
         .select("slug");

       if (error) {
         console.error("Error fetching posts:", error);
         return [];
       }

       return (
         posts?.map((post) => ({
           slug: post.slug,
         })) || []
       );
     } catch (error) {
       console.error("Error in generateStaticParams:", error);
       return [];
     }
   }
   ```

### 代替アプローチ

1. **インクリメンタル静的再生成（ISR）**

   ```typescript
   export const revalidate = 3600; // 1時間ごとに再生成

   export async function generateStaticParams() {
     // ... Supabaseからデータを取得
   }
   ```

2. **クライアントサイドでのデータ取得**
   ```typescript
   // ページコンポーネント内で
   useEffect(() => {
     const fetchData = async () => {
       const { data } = await supabase
         .from("posts")
         .select("*")
         .eq("slug", params.slug)
         .single();
       // データの処理
     };
     fetchData();
   }, [params.slug]);
   ```

## まとめ

静的エクスポートと`generateStaticParams`を組み合わせることで：

1. パフォーマンスの向上

   - 静的な HTML ファイルの配信
   - サーバーサイドの処理が不要

2. セキュリティの強化

   - サーバーサイドの脆弱性リスクが低減
   - 静的ファイルのみの配信

3. コストの削減

   - サーバーコストの削減
   - 静的ホスティングサービスの利用が可能

4. SEO の最適化
   - 静的な HTML ファイルによる検索エンジンへの対応
   - ページロード速度の向上による SEO スコアの改善

これらの機能を活用することで、パフォーマンスとセキュリティに優れたウェブサイトを構築できます。
