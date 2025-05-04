import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    date: "2023-06-15",
    coverImage: "/images/projects/portfolio.jpg",
    excerpt: "A modern portfolio website built with Next.js and Tailwind CSS",
    content: `
## Overview

This portfolio website showcases my work and skills as a web developer. It's built using modern technologies and follows best practices for performance and accessibility.

### Features

- Responsive design
- Dark mode support
- Blog functionality
- Project showcase
- Contact form
- SEO optimized

### Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- MDX
- Vercel (Hosting)
    `,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio.example.com",
    ogImage: {
      url: "/images/projects/portfolio-og.jpg",
    },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export const getFeaturedProjects = () => {
  return projects.slice(0, 3); // 最初の3つの投稿をフィーチャード投稿として返す
};

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function addProject(project: Omit<Project, "id">): Project {
  const id = project.title.toLowerCase().replace(/\s+/g, "-");
  const newProject: Project = { ...project, id };
  projects.push(newProject);
  return newProject;
}

export function updateProject(
  id: string,
  updatedProject: Partial<Omit<Project, "id">>
): Project | undefined {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  projects[index] = { ...projects[index], ...updatedProject };
  return projects[index];
}

export function deleteProject(id: string): boolean {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
}
