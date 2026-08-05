import { Download, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-8 pb-16 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Resume Center</h1>
          <p className="text-muted-foreground">Generated dynamically from my Career Knowledge Base.</p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-md hover:bg-muted/80 transition-colors border border-border">
            <Printer className="h-4 w-4" />
            Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand text-white text-sm font-medium rounded-md hover:bg-brand/90 transition-colors">
            <Download className="h-4 w-4" />
            PDF Export
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {["Documentation Engineer", "Technical Writer", "Knowledge Manager"].map((type, i) => (
          <Link key={i} href="#" className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${i === 0 ? "bg-brand/10 text-brand outline outline-1 outline-brand/50" : "bg-surface border border-border text-muted-foreground hover:text-foreground"}`}>
            {type} Set
          </Link>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-lg p-8 md:p-12 shadow-sm font-sans flex flex-col gap-8 print:border-none print:shadow-none print:p-0">
        <header className="flex flex-col items-center text-center gap-2 border-b border-border pb-6">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Your Name</h2>
          <p className="text-brand font-medium tracking-widest text-sm uppercase">Documentation Engineer</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
            <span>your.email@example.com</span>
            <span>•</span>
            <span>github.com/yourusername</span>
            <span>•</span>
            <span>linkedin.com/in/yourusername</span>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-wider border-b border-border/50 pb-2">Profile Summary</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Documentation Engineer with 8+ years of experience bridging the gap between complex software systems and user understanding. Specializing in Docs-as-Code workflows, generative AI pipelines for documentation, and overall Developer Experience (DX) improvements. Proven track record of reducing publication times and standardizing enterprise-wide documentation architectures.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase tracking-wider border-b border-border/50 pb-2">Core Competencies</h3>
          <ul className="grid grid-cols-2 text-sm text-muted-foreground gap-2">
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">Docs-as-Code (Markdown, MDX, Next.js)</li>
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">Generative AI & LLM Prompts</li>
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">Python & TypeScript Scripting</li>
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">Information Architecture & UX Writing</li>
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">CI/CD Pipelines (Git, Jenkins, Actions)</li>
            <li className="flex items-center gap-2 before:h-1 before:w-1 before:bg-brand before:rounded-full">API Documentation & Swagger</li>
          </ul>
        </section>
        
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border border-dashed italic">
          This resume is a live representation of the Career Knowledge Base.
        </div>
      </div>
    </div>
  );
}
