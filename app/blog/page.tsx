import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Search } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock data for blog posts
const posts = [
  {
    id: '1',
    title: 'Building React Applications with Next.js',
    description: 'Learn how to build scalable and performant applications using Next.js and React.',
    date: '2023-06-15',
    category: 'Development',
    tags: ['React', 'Next.js', 'Frontend'],
    slug: 'building-react-applications-with-nextjs',
  },
  {
    id: '2',
    title: 'The Power of Tailwind CSS',
    description: 'Discover how Tailwind CSS can transform your workflow and speed up your development process.',
    date: '2023-07-22',
    category: 'Design',
    tags: ['CSS', 'Tailwind', 'Design'],
    slug: 'the-power-of-tailwind-css',
  },
  {
    id: '3',
    title: 'Modern Authentication Strategies',
    description: 'Explore different authentication strategies for your web applications and their pros and cons.',
    date: '2023-08-10',
    category: 'Security',
    tags: ['Auth', 'Security', 'Web'],
    slug: 'modern-authentication-strategies',
  },
  {
    id: '4',
    title: 'State Management in React Applications',
    description: 'An overview of different state management approaches in React and when to use each one.',
    date: '2023-09-05',
    category: 'Development',
    tags: ['React', 'State Management', 'Frontend'],
    slug: 'state-management-in-react-applications',
  },
  {
    id: '5',
    title: 'Building a REST API with Node.js',
    description: 'Step-by-step guide to creating a robust REST API using Node.js, Express, and MongoDB.',
    date: '2023-10-18',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API'],
    slug: 'building-a-rest-api-with-nodejs',
  },
  {
    id: '6',
    title: 'Responsive Design Best Practices',
    description: 'Learn the latest techniques and best practices for creating responsive web designs.',
    date: '2023-11-30',
    category: 'Design',
    tags: ['CSS', 'Responsive', 'UI/UX'],
    slug: 'responsive-design-best-practices',
  },
]

// Available categories for filtering
const categories = ['All', 'Development', 'Design', 'Security', 'Backend']

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </header>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
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
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}