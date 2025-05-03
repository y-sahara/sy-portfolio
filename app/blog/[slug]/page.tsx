import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
    content: `
## Introduction

Next.js is a powerful React framework that provides various features for building robust web applications. This blog post will guide you through setting up a Next.js project and leveraging its key features.

### Getting Started

To create a new Next.js application, you can use the following command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will set up a new Next.js project with the latest features and best practices.

### Key Features

Next.js offers several key features that make it an excellent choice for React development:

1. **Server-Side Rendering (SSR)** - Renders pages on the server for improved SEO and performance
2. **Static Site Generation (SSG)** - Pre-renders pages at build time for fast loading
3. **Incremental Static Regeneration (ISR)** - Updates static pages after deployment without rebuilding the entire site
4. **API Routes** - Create API endpoints as part of your Next.js application
5. **File-based Routing** - Simplified routing based on the file system

### Conclusion

Next.js is a powerful framework that simplifies building React applications with excellent performance and developer experience. Whether you're building a simple blog or a complex web application, Next.js provides the tools you need to create a great user experience.
    `,
  },
  {
    id: '2',
    title: 'The Power of Tailwind CSS',
    description: 'Discover how Tailwind CSS can transform your workflow and speed up your development process.',
    date: '2023-07-22',
    category: 'Design',
    tags: ['CSS', 'Tailwind', 'Design'],
    slug: 'the-power-of-tailwind-css',
    content: `
## Why Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It provides low-level utility classes that let you build completely custom designs.

### Key Benefits

1. **Faster Development** - Apply styles directly in your markup without switching between files
2. **Consistency** - Predefined design system with spacing, colors, and typography
3. **Responsive Design** - Built-in responsive utilities make it easy to create responsive layouts
4. **Dark Mode** - Simple implementation of dark mode with minimal effort
5. **Custom Design** - Complete control over the design without fighting the framework

### Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### Conclusion

Tailwind CSS provides a different approach to styling your applications. Its utility-first methodology can significantly speed up your development process while maintaining design consistency across your project.
    `,
  },
  {
    id: '3',
    title: 'Modern Authentication Strategies',
    description: 'Explore different authentication strategies for your web applications and their pros and cons.',
    date: '2023-08-10',
    category: 'Security',
    tags: ['Auth', 'Security', 'Web'],
    slug: 'modern-authentication-strategies',
    content: `
## Authentication in Modern Web Applications

Authentication is a critical aspect of web applications. This post explores various authentication strategies and helps you choose the right one for your application.

### Common Authentication Methods

1. **JWT (JSON Web Tokens)** - Stateless authentication using signed tokens
2. **OAuth 2.0** - Authorization framework that enables third-party applications to obtain limited access
3. **OpenID Connect** - Identity layer built on top of OAuth 2.0
4. **Session-based Authentication** - Server-side sessions with cookies
5. **Passwordless Authentication** - Email links, SMS codes, or biometrics

### Security Considerations

When implementing authentication, consider these security best practices:

- Implement proper password hashing
- Use HTTPS for all authentication endpoints
- Implement proper CORS policies
- Add rate limiting to prevent brute force attacks
- Set secure and HTTP-only flags for cookies

### Conclusion

Choosing the right authentication strategy depends on your application's requirements, security needs, and user experience considerations. Modern authentication libraries and services can help you implement secure authentication with less effort.
    `,
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <article className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>
            } else if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>
            } else if (line.startsWith('- ')) {
              return <li key={index} className="ml-6 mb-2">{line.replace('- ', '')}</li>
            } else if (line.startsWith('```')) {
              return <pre key={index} className="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code>{line.replace('```bash', '')}</code></pre>
            } else if (line.trim() === '') {
              return <br key={index} />
            } else {
              return <p key={index} className="mb-4">{line}</p>
            }
          })}
        </div>

        <footer className="border-t pt-6">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}