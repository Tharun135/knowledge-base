import { Settings2, Cpu, Bot, Workflow } from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
  const areas = [
    {
      title: "LLM Workflows & RAG",
      icon: Bot,
      description: "Implementing localized Retrieval-Augmented Generation systems to query documentation repositories, creating AI assistants that answer developer queries instantly."
    },
    {
      title: "Documentation CI/CD",
      icon: Workflow,
      description: "Building automated pipelines using GitHub Actions, ensuring that every code commit triggering documentation changes auto-publishes within minutes."
    },
    {
      title: "Automated Review Engines",
      icon: Cpu,
      description: "Developing intelligent linters (DocPilot) that enforce style guides, check terminology, and provide real-time feedback to technical writers inside their IDE."
    },
    {
      title: "API Syncing & Generation",
      icon: Settings2,
      description: "Scripting Python/Node automations that parse Swagger/OpenAPI files and automatically transform them into MDX components for developer portals."
    }
  ];

  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">AI & Automation</h1>
        <p className="text-lg text-muted-foreground">
          Transforming manual documentation tasks into intelligent, automated engineering workflows.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert">
        <p className="lead">
          In modern software development, documentation cannot rely entirely on manual human effort. By leveraging Large Language Models (LLMs) and automated pipelines, we can scale documentation operations to match engineering velocity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        {areas.map((area, i) => (
          <div key={i} className="flex flex-col gap-3 p-6 border border-border bg-surface rounded-lg hover:border-brand/50 transition-colors">
            <div className="bg-brand/10 w-fit p-2 rounded-md text-brand mb-2">
              <area.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">{area.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-8 border-t border-border pt-8">
        <h2 className="text-2xl font-bold">Featured Automation Projects</h2>
        <div className="flex gap-4">
          <Link href="/projects/knowledge-orchestrator" className="inline-flex items-center text-brand hover:underline font-medium text-sm">
            Docs Agent Orchestrator →
          </Link>
          <Link href="/projects/docpilot" className="inline-flex items-center text-brand hover:underline font-medium text-sm">
            DocPilot VS Code Extension →
          </Link>
        </div>
      </div>
    </div>
  );
}
