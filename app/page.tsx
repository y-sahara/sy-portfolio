import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturedPosts from "@/components/home/featured-posts";
import FeaturedProjects from "@/components/home/featured-projects";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xl md:text-3xl font-bold tracking-tight mb-6">
            SYのポートフォリオページ
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            日々学んだものであったり、作ったものであったり。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button asChild size="lg" className="gap-2">
              <Link href="/portfolio">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24 px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                直近の記事
              </h2>
              <p className="text-muted-foreground">
                学んだものの記録。たまに感想
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link href="/blog" className="flex items-center gap-2">
                すべてのPost <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FeaturedPosts />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                直近のプロジェクト
              </h2>
              <p className="text-muted-foreground">つくったものの記録。</p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link href="/portfolio" className="flex items-center gap-2">
                すべてのプロジェクト <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          {/* <FeaturedProjects /> */}
        </div>
      </section>
    </div>
  );
}
