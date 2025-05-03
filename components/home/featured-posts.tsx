import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock data for featured posts
const featuredPosts = [
  {
    id: '1',
    title: 'Building React Applications with Next.js',
    description: 'Learn how to build scalable and performant applications using Next.js and React.',
    date: '2023-06-15',
    category: 'Development',
    slug: 'building-react-applications-with-nextjs',
  },
  {
    id: '2',
    title: 'The Power of Tailwind CSS',
    description: 'Discover how Tailwind CSS can transform your workflow and speed up your development process.',
    date: '2023-07-22',
    category: 'Design',
    slug: 'the-power-of-tailwind-css',
  },
  {
    id: '3',
    title: 'Modern Authentication Strategies',
    description: 'Explore different authentication strategies for your web applications and their pros and cons.',
    date: '2023-08-10',
    category: 'Security',
    slug: 'modern-authentication-strategies',
  },
]

export default function FeaturedPosts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
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
            <CardFooter className="text-sm text-primary font-medium">
              Read article
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}