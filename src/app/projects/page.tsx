import Link from "next/link";
import { getAllDocuments } from "@/lib/mdx";
import { FolderGit2, Calendar, Tag } from "lucide-react";

export default function ProjectsPage() {
  const projects = getAllDocuments("projects");

  return (
    <div className="flex flex-col gap-8 pb-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground">Detailed technical case studies and architectural overviews of my work.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <Link 
              key={i} 
              href={`/projects/${project?.meta.slug}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 hover:border-brand transition-colors"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-brand/10 text-brand">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">{project?.meta.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {project?.meta.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project?.meta.tags?.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed border-border rounded-lg">
            No projects found. Add markdown files to <code>content/projects/</code>.
          </div>
        )}
      </div>
    </div>
  );
}
