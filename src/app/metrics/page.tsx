import { BarChart3, Clock, FileText, Settings, Users, Zap } from "lucide-react";

export default function MetricsPage() {
  const metrics = [
    { title: "Review Effort Reduced", value: "40%", description: "By implementing automated AI linting and pre-commit hooks." },
    { title: "Publishing Time Reduced", value: "95%", description: "From hours of manual PDF generation to a 15-minute CI/CD pipeline." },
    { title: "Apps Documented", value: "25+", description: "Successfully delivered contextual documentation for complex systems." },
    { title: "Automation Coverage", value: "65%", description: "Percentage of manual publication tasks converted into automated scripts." },
    { title: "Support Tickets Deflected", value: "~15%", description: "Estimated reduction after deploying central developer Knowledge Base." },
    { title: "Internal Tools Created", value: "5", description: "Including VS Code extensions, orchestrators, and prompt engines." }
  ];

  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Metrics Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Quantifiable business impact driven by documentation engineering and automation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="flex flex-col gap-2 p-6 rounded-lg border border-border bg-surface">
            <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
            <span className="text-4xl font-bold text-foreground my-1">{metric.value}</span>
            <p className="text-sm text-brand">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="border border-border/50 bg-muted/20 p-8 rounded-lg mt-8 prose prose-zinc dark:prose-invert">
        <h3>How I Measure Success</h3>
        <p>
          In a Docs-as-Code environment, documentation behaves like software. As such, we track it using similar metrics:
        </p>
        <ul>
          <li><strong>Deployment Frequency:</strong> Number of docs releases per week.</li>
          <li><strong>Lead Time:</strong> The time it takes from authoring content to it appearing online.</li>
          <li><strong>Mean Time to Fix:</strong> How quickly we can resolve a documentation bug reported by a user.</li>
          <li><strong>Deflection Rate:</strong> How often our internal documentation prevents a support escalation.</li>
        </ul>
      </div>
    </div>
  );
}
