import { getDocumentBySlug, getDocumentSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MarkdownViewer } from "@/components/ui/MarkdownViewer";
import Link from "next/link";
import { ArrowLeft, Calendar, LayoutTemplate, Tag } from "lucide-react";

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getDocumentBySlug("articles", slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl pb-16">
      <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors mb-2">
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>
      
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{article.meta.title}</h1>
        <p className="text-xl text-muted-foreground">{article.meta.description}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm mt-4">
          {article.meta.date && (
            <div className="flex items-center gap-1.5 text-muted-foreground bg-muted px-3 py-1.5 rounded-md">
              <Calendar className="h-4 w-4" />
              {new Date(article.meta.date).toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}
            </div>
          )}
          {article.meta.category && (
            <div className="flex items-center gap-1.5 text-brand bg-brand/10 px-3 py-1.5 rounded-md">
              <LayoutTemplate className="h-4 w-4" />
              {article.meta.category}
            </div>
          )}
        </div>
      </header>

      <main className="pt-4">
        <MarkdownViewer content={article.content} />
      </main>

      {article.meta.tags && (
        <div className="border-t border-border mt-12 pt-8 flex gap-2">
          {article.meta.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium flex items-center gap-1 text-muted-foreground">
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getDocumentSlugs("articles");
  return slugs.map((slug) => ({ slug }));
}
