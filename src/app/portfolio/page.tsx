import { FileText } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Documentation Portfolio</h1>
        <p className="text-lg text-muted-foreground">
          A showcase of manuals, API guides, and system documentation.
        </p>
      </div>

      <div className="border border-dashed border-border bg-surface p-12 rounded-lg text-center flex flex-col items-center gap-4">
        <FileText className="h-10 w-10 text-muted-foreground" />
        <h3 className="text-lg font-medium">Content Curation in Progress</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          I am currently migrating my documentation samples from previous hosting into this Knowledge Base. This section will feature API References, User Manual excerpts, and Style Guide examples.
        </p>
        <Link href="/projects" className="bg-foreground text-background px-4 py-2 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors mt-2">
          View Engineering Projects
        </Link>
      </div>
    </div>
  );
}
