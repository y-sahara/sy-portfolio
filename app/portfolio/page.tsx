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
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Mock data for portfolio projects
const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    image:
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "ecommerce-platform",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with real-time collaboration.",
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "task-management-app",
  },
  {
    id: "3",
    title: "AI Image Generator",
    description:
      "An application that leverages AI to generate unique images based on text prompts.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["OpenAI API", "Node.js", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "ai-image-generator",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing and analyzing social media accounts and performance.",
    image:
      "https://images.pexels.com/photos/7691466/pexels-photo-7691466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Vue.js", "Chart.js", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "social-media-dashboard",
  },
  {
    id: "5",
    title: "Weather Application",
    description:
      "A real-time weather application with forecasts, radar maps, and location-based services.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Weather API", "Geolocation"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "weather-application",
  },
  {
    id: "6",
    title: "Personal Finance Tracker",
    description:
      "An application for tracking personal finances, expenses, and creating financial goals.",
    image:
      "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "personal-finance-tracker",
  },
];

// Available categories for filtering
const categories = ["All", "Web", "Mobile", "Design", "AI"];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my projects and applications built with modern
            technologies.
          </p>
        </header>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2">
                <Link href={`/portfolio/${project.id}`}>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base mb-4">
                  {project.description}
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
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link
                    href={project.liveUrl}
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
      </div>
    </div>
  );
}
