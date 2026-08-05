import { ArrowRight, Code, Database, Server, User } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Technical Writer turned Documentation Engineer. I believe documentation is a software engineering discipline that requires the same rigour as writing code.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <h2>Professional Story</h2>
        <p>
          My journey started in traditional technical authoring for the aerospace and defense sectors, where rigorous compliance and exhaustive manuals were the standard. While this taught me discipline and the importance of structural integrity, I always felt the delivery mechanisms were outdated.
        </p>
        <p>
          As I shifted into the software industry, I realized developers were frustrated with documentation because it was disconnected from their daily workflows. The "Docs-as-Code" movement opened my eyes. Suddenly, documentation wasn't just a PDF exported at the end of a sprint—it was a dynamic system living alongside the codebase.
        </p>
        <p>
          Over the years, I taught myself <strong>Python</strong>, <strong>TypeScript</strong>, and <strong>React</strong>. I stopped just <em>writing</em> the docs and started <em>building</em> the systems that deliver them. Today, I combine generative AI, continuous integration, and modern frontend frameworks to build scalable Knowledge Bases for enterprise software.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Server className="h-5 w-5 text-brand" />
            Career Philosophy
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Eliminate friction. If developers find it hard to write docs, they won't. By providing stellar templates, AI-assisted review tools, and automated pipelines, we can make documentation an effortless byproduct of good engineering.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <User className="h-5 w-5 text-brand" />
            Work Style
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Highly autonomous and inherently curious. I thrive in cross-functional environments where I can act as the bridge between engineering, product management, and the end user.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-8 border-t border-border">
        <h2 className="text-2xl font-bold">Current Interests</h2>
        <div className="flex flex-wrap gap-3">
          {["Retrieval-Augmented Generation (RAG)", "Agentic Workflows", "Developer Portals", "Static Site Generators", "Automated Linting"].map((interest, i) => (
            <span key={i} className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full border border-border/50 hover:border-brand transition-colors">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border border-border/50 bg-muted/20 p-6 rounded-lg mt-4">
        <div>
          <h3 className="font-semibold">Ready to see my work?</h3>
          <p className="text-sm text-muted-foreground mt-1">Explore my career timeline to see how these philosophies translate into experience.</p>
        </div>
        <Link href="/journey" className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors">
          View Career Journey
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </div>
  );
}
