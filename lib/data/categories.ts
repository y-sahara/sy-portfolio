import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Web開発に関する記事",
    color: "#3498db",
  },
  {
    id: "design",
    name: "Design",
    description: "デザインに関する記事",
    color: "#e74c3c",
  },
  {
    id: "programming",
    name: "Programming",
    description: "プログラミングに関する記事",
    color: "#2ecc71",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function addCategory(category: Omit<Category, "id">): Category {
  const id = category.name.toLowerCase().replace(/\s+/g, "-");
  const newCategory: Category = { ...category, id };
  categories.push(newCategory);
  return newCategory;
}

export function updateCategory(
  id: string,
  updatedCategory: Partial<Omit<Category, "id">>
): Category | undefined {
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return undefined;
  categories[index] = { ...categories[index], ...updatedCategory };
  return categories[index];
}

export function deleteCategory(id: string): boolean {
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return false;
  categories.splice(index, 1);
  return true;
}
