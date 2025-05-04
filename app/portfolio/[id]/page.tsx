import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectById } from "@/lib/data/projects";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-5xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/portfolio" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 ml-auto">
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> View Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery?.slice(1, 3).map((image) => (
                <div
                  key={image}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-2 mb-8">
              {project.features?.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                    {project.features?.indexOf(feature) + 1}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="space-y-2 mb-4">
                  {project.challenges?.map((challenge) => (
                    <li key={challenge} className="flex items-start text-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 mr-2 mt-1.5"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                <ul className="space-y-2">
                  {project.solutions?.map((solution) => (
                    <li key={solution} className="flex items-start text-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-2 mt-1.5"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Want to see more projects?
          </h2>
          <Button asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
