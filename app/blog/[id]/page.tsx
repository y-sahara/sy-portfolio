import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { getAllPosts, getPostById } from "@/lib/data/posts";

// 静的エクスポート時に生成するパラメータを指定
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <article className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {post.content?.split("\n").map((line) => {
            const uniqueKey = `${line.substring(0, 10)}-${Math.random()
              .toString(36)
              .substring(2, 9)}`;

            if (line.startsWith("## ")) {
              return (
                <h2 key={uniqueKey} className="text-2xl font-bold mt-8 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            } else if (line.startsWith("### ")) {
              return (
                <h3 key={uniqueKey} className="text-xl font-bold mt-6 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            } else if (line.startsWith("- ")) {
              return (
                <li key={uniqueKey} className="ml-6 mb-2">
                  {line.replace("- ", "")}
                </li>
              );
            } else if (line.startsWith("```")) {
              return (
                <pre
                  key={uniqueKey}
                  className="bg-muted p-4 rounded-md my-4 overflow-x-auto"
                >
                  <code>{line.replace("```bash", "")}</code>
                </pre>
              );
            } else if (line.trim() === "") {
              return <br key={uniqueKey} />;
            } else {
              return (
                <p key={uniqueKey} className="mb-4">
                  {line}
                </p>
              );
            }
          })}
        </div>

        <footer className="border-t pt-6">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
