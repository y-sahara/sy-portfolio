import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { getFeaturedPosts } from "@/lib/data/posts";

export default function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`} className="group">
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors duration-200 mt-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="text-sm text-primary font-medium">
              Read article
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
