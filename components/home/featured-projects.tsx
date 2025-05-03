import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock data for featured projects
const featuredProjects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    slug: 'ecommerce-platform',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects with real-time collaboration.',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    slug: 'task-management-app',
  },
  {
    id: '3',
    title: 'AI Image Generator',
    description: 'An application that leverages AI to generate unique images based on text prompts.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['OpenAI API', 'Node.js', 'React'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    slug: 'ai-image-generator',
  },
]

export default function FeaturedProjects() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden flex flex-col h-full">
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
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-base mb-4">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-4">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github className="h-4 w-4" /> Code
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" /> Demo
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}