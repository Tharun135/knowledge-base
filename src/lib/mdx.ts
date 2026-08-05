import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const contentDirectory = path.join(process.cwd(), "content");

export interface DocumentMeta {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  category?: string;
  slug: string;
}

export function getDocumentSlugs(folder: string) {
  const dirPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  return files.filter(file => file.endsWith(".mdx") || file.endsWith(".md")).map(file => file.replace(/\.mdx?$/, ""));
}

export function getDocumentBySlug(folder: string, slug: string) {
  const mdPath = path.join(contentDirectory, folder, `${slug}.md`);
  const mdxPath = path.join(contentDirectory, folder, `${slug}.mdx`);
  
  let fullPath = "";
  if (fs.existsSync(mdPath)) fullPath = mdPath;
  else if (fs.existsSync(mdxPath)) fullPath = mdxPath;
  else return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: { ...data, slug } as DocumentMeta,
    content
  };
}

export function getAllDocuments(folder: string) {
  const slugs = getDocumentSlugs(folder);
  const docs = slugs.map(slug => getDocumentBySlug(folder, slug))
    .filter(doc => doc !== null)
    .sort((a, b) => {
      if (!a?.meta.date || !b?.meta.date) return 0;
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
  return docs;
}
