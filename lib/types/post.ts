export type Post = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  description?: string;
};

export type PostPreview = Omit<Post, "content">;
