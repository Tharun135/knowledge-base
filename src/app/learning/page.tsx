import Link from "next/link";
import { getAllDocuments } from "@/lib/mdx";
import { GraduationCap, Calendar, Tag } from "lucide-react";

export default function LearningPage() {
  const learnings = getAllDocuments("learning");

  return (
    <div className="flex flex-col gap-8 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Learning Journey</h1>
        <p className="text-lg text-muted-foreground">Continuous education, certifications, and skills acquired over time.</p>
      </div>

      <div className="flex flex-col gap-4">
        {learnings.length > 0 ? (
          learnings.map((learningItem, i) => (
            <Link 
              key={i} 
              href={`/learning/${learningItem?.meta.slug}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 hover:border-brand transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{learningItem?.meta.title}</h3>
                    {learningItem?.meta.date && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(learningItem.meta.date).toLocaleDateString("en-US", { month: "short", year: "numeric", day: "numeric" })}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {learningItem?.meta.description}
                  </p>
                  {learningItem?.meta.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {learningItem.meta.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-12 text-center text-muted-foreground border border-dashed border-border rounded-lg">
            No learning journey items found. Add markdown files to <code>content/learning/</code>.
          </div>
        )}
      </div>
    </div>
  );
}
