import { Terminal, Code, Cpu, LineChart, Shield, Layout, Settings, Rocket } from "lucide-react";
import Link from "next/link";

export default function SkillsPage() {
  const categories = [
    {
      title: "Documentation & Docs-as-Code",
      icon: Layout,
      skills: ["Markdown / MDX", "AsciiDoc", "DITA XML", "Hugo / Docusaurus / Next.js", "Vale (Linting)", "GitHub Pages"]
    },
    {
      title: "Programming & Web",
      icon: Code,
      skills: ["TypeScript / JavaScript", "Python", "React & Next.js", "Tailwind CSS", "HTML5 / CSS3 / SVG", "Node.js"]
    },
    {
      title: "AI & Automation",
      icon: Cpu,
      skills: ["LLM Prompt Engineering", "RAG Systems", "LangChain", "OpenAI API", "Python Scripting", "GitHub Actions"]
    },
    {
      title: "Developer Tools & CI/CD",
      icon: Terminal,
      skills: ["Git & GitHub / GitLab", "Docker", "VS Code Extension API", "Jira / Confluence", "Linux / Bash", "Postman / Swagger"]
    },
    {
      title: "Technical Writing",
      icon: Shield,
      skills: ["API Documentation", "User Guides", "Release Notes", "Architecture Docs", "UX Writing", "Style Guides (Microsoft/Google)"]
    },
    {
      title: "Impact & Strategy",
      icon: LineChart,
      skills: ["Developer Experience (DX)", "Knowledge Management", "Information Architecture", "Content Strategy", "Metrics Tracking"]
    }
  ];

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Technical Skills</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A comprehensive breakdown of my expertise across software engineering, artificial intelligence, and technical documentation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col gap-4 border border-border bg-surface p-6 rounded-lg">
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="bg-brand/10 text-brand p-2 rounded-md">
                <cat.icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">{cat.title}</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {cat.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-border/50 bg-muted/30 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-4 mt-8">
        <Rocket className="h-8 w-8 text-muted-foreground" />
        <h3 className="text-lg font-medium">Want to see these skills in action?</h3>
        <Link href="/projects" className="bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors">
          View Projects
        </Link>
      </div>
    </div>
  );
}
