import { Post } from "../types";

export const posts: Post[] = [
  {
    id: "building-react-applications-with-nextjs",
    title: "Building React Applications with Next.js",
    date: "2023-06-15",
    coverImage: "/images/posts/nextjs.jpg",
    excerpt:
      "Learn how to build scalable and performant applications using Next.js and React.",
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
    category: "web-development",
    tags: ["React", "Next.js", "Frontend"],
    author: {
      name: "John Doe",
      picture: "/images/authors/john-doe.jpg",
    },
    ogImage: {
      url: "/images/posts/nextjs-og.jpg",
    },
  },
  {
    id: "the-power-of-tailwind-css",
    title: "The Power of Tailwind CSS",
    date: "2023-07-22",
    coverImage: "/images/posts/tailwind.jpg",
    excerpt:
      "Discover how Tailwind CSS can transform your workflow and speed up your development process.",
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
    category: "design",
    tags: ["CSS", "Tailwind", "Design"],
    author: {
      name: "Jane Smith",
      picture: "/images/authors/jane-smith.jpg",
    },
    ogImage: {
      url: "/images/posts/tailwind-og.jpg",
    },
  },
  {
    id: "modern-authentication-strategies",
    title: "Modern Authentication Strategies",
    date: "2023-08-10",
    coverImage: "/images/posts/auth.jpg",
    excerpt:
      "Explore different authentication strategies for your web applications and their pros and cons.",
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
    category: "programming",
    tags: ["Auth", "Security", "Web"],
    author: {
      name: "John Doe",
      picture: "/images/authors/john-doe.jpg",
    },
    ogImage: {
      url: "/images/posts/auth-og.jpg",
    },
  },
  {
    id: "state-management-in-react-applications",
    title: "State Management in React Applications",
    date: "2023-09-05",
    coverImage: "/images/posts/state.jpg",
    excerpt:
      "An overview of different state management approaches in React and when to use each one.",
    content: `
## State Management in React

State management is a crucial aspect of building complex React applications. This post explores various approaches to managing state in React applications.

### Common State Management Solutions

1. **React Context API** - Built-in solution for sharing state across components
2. **Redux** - Popular state management library with a centralized store
3. **MobX** - Reactive state management with minimal boilerplate
4. **Zustand** - Lightweight state management with hooks
5. **Jotai** - Atomic state management for React

### Choosing the Right Solution

When selecting a state management solution, consider:

- Application size and complexity
- Team experience and preferences
- Performance requirements
- Developer experience
- Community support and ecosystem

### Conclusion

The choice of state management solution should align with your project's needs and team's expertise. Modern React applications have multiple options for managing state effectively.
    `,
    category: "web-development",
    tags: ["React", "State Management", "Frontend"],
    author: {
      name: "Jane Smith",
      picture: "/images/authors/jane-smith.jpg",
    },
    ogImage: {
      url: "/images/posts/state-og.jpg",
    },
  },
  {
    id: "building-a-rest-api-with-nodejs",
    title: "Building a REST API with Node.js",
    date: "2023-10-18",
    coverImage: "/images/posts/nodejs.jpg",
    excerpt:
      "Step-by-step guide to creating a robust REST API using Node.js, Express, and MongoDB.",
    content: `
## Building REST APIs with Node.js

Node.js is a popular choice for building RESTful APIs. This post provides a comprehensive guide to creating robust APIs using Node.js and Express.

### Key Components

1. **Express.js** - Web framework for Node.js
2. **MongoDB** - NoSQL database for storing data
3. **Mongoose** - ODM for MongoDB
4. **JWT** - Authentication and authorization
5. **Express Validator** - Request validation

### Best Practices

When building REST APIs, follow these best practices:

- Use proper HTTP methods and status codes
- Implement proper error handling
- Add request validation
- Use middleware effectively
- Document your API
- Implement proper security measures

### Conclusion

Building a REST API with Node.js requires careful consideration of various aspects. Following best practices and using the right tools can help create maintainable and scalable APIs.
    `,
    category: "programming",
    tags: ["Node.js", "Express", "API"],
    author: {
      name: "John Doe",
      picture: "/images/authors/john-doe.jpg",
    },
    ogImage: {
      url: "/images/posts/nodejs-og.jpg",
    },
  },
  {
    id: "responsive-design-best-practices",
    title: "Responsive Design Best Practices",
    date: "2023-11-30",
    coverImage: "/images/posts/responsive.jpg",
    excerpt:
      "Learn the latest techniques and best practices for creating responsive web designs.",
    content: `
## Responsive Design Best Practices

Creating responsive designs that work across all devices is essential in modern web development. This post covers the latest techniques and best practices.

### Key Principles

1. **Mobile-First Approach** - Start with mobile design and scale up
2. **Fluid Grids** - Use relative units for layout
3. **Flexible Images** - Ensure images scale properly
4. **Media Queries** - Apply different styles based on screen size
5. **Performance Optimization** - Optimize for different devices

### Implementation Tips

When implementing responsive designs:

- Use CSS Grid and Flexbox
- Implement proper breakpoints
- Test across multiple devices
- Consider touch interactions
- Optimize images and assets
- Use modern CSS features

### Conclusion

Responsive design is no longer optional but a necessity. Following these best practices can help create websites that provide a great user experience across all devices.
    `,
    category: "design",
    tags: ["CSS", "Responsive", "UI/UX"],
    author: {
      name: "Jane Smith",
      picture: "/images/authors/jane-smith.jpg",
    },
    ogImage: {
      url: "/images/posts/responsive-og.jpg",
    },
  },
];

export const getFeaturedPosts = () => {
  return posts.slice(0, 3); // 最初の3つの投稿をフィーチャード投稿として返す
};

export const getAllPosts = () => {
  return posts;
};

export const getCategories = () => {
  const categories = new Set(posts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
};

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category);
}

export function addPost(post: Omit<Post, "id">): Post {
  const id = post.title.toLowerCase().replace(/\s+/g, "-");
  const newPost: Post = { ...post, id };
  posts.push(newPost);
  return newPost;
}

export function updatePost(
  id: string,
  updatedPost: Partial<Omit<Post, "id">>
): Post | undefined {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  posts[index] = { ...posts[index], ...updatedPost };
  return posts[index];
}

export function deletePost(id: string): boolean {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}
