import { getDocumentBySlug, getDocumentSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MarkdownViewer } from "@/components/ui/MarkdownViewer";
import Link from "next/link";
import { ArrowLeft, Calendar, LayoutTemplate, Tag, ExternalLink } from "lucide-react";

type Params = Promise<{ slug: string }>;

export default async function PortfolioDocPage({ params }: { params: Params }) {
  const { slug } = await params;
  const doc = getDocumentBySlug("portfolio", slug);

  if (!doc) {
    notFound();
  }

  const portalUrl = (doc.meta as any).portalUrl || "https://docs.industrial-operations-x.siemens.cloud/p/industrial-edge-edge-apps";

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-16">
      <div className="flex items-center justify-between">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors mb-2 font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Documentation Portfolio
        </Link>

        <a 
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand/10 text-brand border border-brand/20 rounded-md text-xs font-medium hover:bg-brand/20 transition-colors"
        >
          View in Siemens Portal
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-brand/10 text-brand rounded-full">
            {doc.meta.category || "Documentation"}
          </span>
          <span className="text-xs font-mono text-muted-foreground">Published Document</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{doc.meta.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{doc.meta.description}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-xs mt-2">
          {doc.meta.date && (
            <div className="flex items-center gap-1.5 text-muted-foreground bg-muted px-3 py-1.5 rounded-md font-mono">
              <Calendar className="h-3.5 w-3.5 text-brand" />
              Updated: {new Date(doc.meta.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
          )}
        </div>
      </header>

      <main className="pt-4">
        <MarkdownViewer content={doc.content} />
      </main>

      <div className="border-t border-border mt-12 pt-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          {doc.meta.tags?.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-muted rounded-md text-xs font-mono text-muted-foreground flex items-center gap-1">
              <Tag className="h-3 w-3 text-brand" />
              #{tag}
            </span>
          ))}
        </div>

        <a 
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md font-medium text-xs hover:bg-foreground/90 transition-colors"
        >
          Open Official Siemens Portal Document
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getDocumentSlugs("portfolio");
  return slugs.map((slug) => ({ slug }));
}
