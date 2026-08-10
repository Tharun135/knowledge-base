import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function LearningPage() {
  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Learning Journey</h1>
        <p className="text-lg text-muted-foreground">
          Continuous education, certifications, and skills acquired over time.
        </p>
      </div>

      <div className="border border-dashed border-border bg-surface p-12 rounded-lg text-center flex flex-col items-center gap-4">
        <GraduationCap className="h-10 w-10 text-muted-foreground" />
        <h3 className="text-lg font-medium">Curriculum Assembly</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          Instead of just listing certifications, this module will document chronological continuous learning, linking courses to the practical projects they enabled.
        </p>
        <Link href="/skills" className="bg-brand text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-brand/90 transition-colors mt-2">
          View Current Tech Stack
        </Link>
      </div>
    </div>
  );
}
