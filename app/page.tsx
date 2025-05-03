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
          <div className="md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">日々学んだものであったり</span>
            <br />
            <span className="text-primary">つくったものであったり</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome to my personal technology portfolio. I create elegant web
            applications and share insights through my blog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/portfolio">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Insights and tutorials from my tech journey
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link href="/blog" className="flex items-center gap-2">
                View all posts <ArrowRight className="h-4 w-4" />
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
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing my latest work and applications
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link href="/portfolio" className="flex items-center gap-2">
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary/5 border-y">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/about#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
