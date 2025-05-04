export type Project = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  ogImage: {
    url: string;
  };
  description?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  gallery?: string[];
};

export type ProjectPreview = Omit<Project, "content">;
