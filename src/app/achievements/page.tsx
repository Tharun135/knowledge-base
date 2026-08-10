import { Award, CheckCircle2, Medal, Rocket, Star, Target, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
  const achievements = [
    {
      category: "Innovation & Automation",
      icon: Rocket,
      items: [
        {
          title: "DocPilot VS Code Extension",
          description: "Developed and deployed an internal AI documentation linting tool that reduced review time by 40%.",
          date: "Q2 2024",
          highlight: true
        },
        {
          title: "Docs Agent Orchestrator",
          description: "Architected a RAG-based pipeline unifying knowledge from Confluence, GitHub, and Jira.",
          date: "Q4 2023"
        }
      ]
    },
    {
      category: "Process & Quality",
      icon: Target,
      items: [
        {
          title: "Documentation CI/CD Pipeline",
          description: "Implemented automated publishing pipelines, reducing deployment times from 2 days to 15 minutes.",
          date: "Q1 2023",
          highlight: true
        },
        {
          title: "Enterprise Style Guide Unification",
          description: "Standardized the API and User Manual style guides for 50+ developers, utilizing Vale for enforcement.",
          date: "Q3 2022"
        }
      ]
    },
    {
      category: "Leadership & Mentoring",
      icon: Users,
      items: [
        {
          title: "Knowledge Sharing Sessions",
          description: "Conducted 10+ internal workshops on Docs-as-Code workflows and Prompt Engineering for engineers.",
          date: "2023 - 2024"
        },
        {
          title: "Technical Writing Mentorship",
          description: "Mentored 3 junior technical writers, upskilling them in Git, Markdown, and static site generators.",
          date: "2021 - 2022"
        }
      ]
    },
    {
      category: "Awards & Recognition",
      icon: Award,
      items: [
        {
          title: "Excellence in Developer Experience",
          description: "Awarded by Engineering Leadership for significantly improving internal documentation standards.",
          date: "2023"
        },
        {
          title: "Best Process Improvement Initiative",
          description: "Recognized for migrating legacy MS Word documentation into a scalable Markdown CI/CD pipeline.",
          date: "2020"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Achievements</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Major milestones, awards, and measurable impacts throughout my career as a Documentation Engineer.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {achievements.map((group, idx) => (
          <section key={idx} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 border-b border-border/50 pb-2">
              <group.icon className="h-6 w-6 text-brand" />
              {group.category}
            </h2>
            <div className="flex flex-col gap-4 mt-2">
              {group.items.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col gap-2 p-5 rounded-lg border ${item.highlight ? 'border-brand/50 bg-brand/5' : 'border-border bg-surface'}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-medium text-foreground text-lg leading-tight flex items-start gap-2">
                      {item.highlight ? <Star className="h-4 w-4 text-brand shrink-0 mt-1 fill-brand/20" /> : <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />}
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="border border-border/50 bg-muted/20 p-8 rounded-lg mt-6 flex flex-col items-center text-center gap-4">
        <TrendingUp className="h-8 w-8 text-brand" />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Measurable Impact</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            I believe achievements mean nothing without data. Explore my metrics dashboard to see the exact numbers behind these initiatives.
          </p>
        </div>
        <Link href="/metrics" className="bg-foreground text-background px-6 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors mt-2">
          View Metrics Dashboard
        </Link>
      </div>
    </div>
  );
}
