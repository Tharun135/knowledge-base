import { PenTool } from "lucide-react";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Articles & Research</h1>
        <p className="text-lg text-muted-foreground">
          Technical articles, documentation tips, AI experiments, and long-form writing.
        </p>
      </div>

      <div className="border border-dashed border-border bg-surface p-12 rounded-lg text-center flex flex-col items-center gap-4">
        <PenTool className="h-10 w-10 text-muted-foreground" />
        <h3 className="text-lg font-medium">Gathering Notes</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          Technical writing is heavily reliant on structured thoughts and experiments. This section will host my engineering blog and research logs on the evolution of developer portals.
        </p>
        <Link href="/projects" className="bg-muted text-foreground border border-border px-4 py-2 rounded-md font-medium text-sm hover:bg-muted/80 transition-colors mt-2">
          View Projects Meanwhile
        </Link>
      </div>
    </div>
  );
}
