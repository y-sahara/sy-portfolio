import Image from "next/image";
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
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={project.ogImage.url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-base mb-4">
              {project.excerpt}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-4">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link
                href={project.demoUrl ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" /> Code
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link
                href={project.demoUrl ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
