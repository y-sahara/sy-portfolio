import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data for portfolio projects
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    slug: 'ecommerce-platform',
    features: [
      'User authentication and account management',
      'Product catalog with categories and search',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order management and tracking',
    ],
    challenges: [
      'Implementing a responsive design that works across all devices',
      'Creating a seamless checkout experience',
      'Integrating with the Stripe API for payment processing',
      'Optimizing performance for fast page loads',
    ],
    solutions: [
      'Used Next.js for server-side rendering and static site generation',
      'Implemented Tailwind CSS for responsive design',
      'Created reusable components for consistent UI',
      'Optimized images and code for performance',
    ],
    gallery: [
      'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
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
    features: [
      'User authentication and team management',
      'Project and task creation',
      'Real-time collaboration',
      'Task assignment and due dates',
      'Progress tracking and reporting',
    ],
    challenges: [
      'Implementing real-time updates with Firebase',
      'Managing complex state across the application',
      'Creating an intuitive user interface',
      'Optimizing for performance with large datasets',
    ],
    solutions: [
      'Used Firebase Realtime Database for real-time updates',
      'Implemented React Context API and custom hooks for state management',
      'Created a responsive design with Tailwind CSS',
      'Optimized rendering with React.memo and useMemo',
    ],
    gallery: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
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
    features: [
      'Text-to-image generation using OpenAI API',
      'Customization options for image style and size',
      'Image gallery for saving and sharing generated images',
      'User authentication and saved history',
    ],
    challenges: [
      'Integrating with the OpenAI API',
      'Managing API rate limits and costs',
      'Creating a user-friendly interface for prompt creation',
      'Optimizing image loading and rendering',
    ],
    solutions: [
      'Implemented a Node.js backend to handle API requests',
      'Created a queue system for managing API requests',
      'Designed an intuitive interface for entering prompts',
      'Used lazy loading and optimization for images',
    ],
    gallery: [
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2882553/pexels-photo-2882553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
]

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

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
    )
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <div className="flex gap-4 ml-auto">
              <Button asChild variant="outline" size="sm">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> View Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
              {project.gallery.slice(1, 3).map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
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
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                    {index + 1}
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
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 mr-2 mt-1.5"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start text-sm">
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
          <h2 className="text-2xl font-bold mb-4">Want to see more projects?</h2>
          <Button asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}