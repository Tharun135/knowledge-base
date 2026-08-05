import { Briefcase, Building, Calendar, ChevronRight } from "lucide-react";

export default function JourneyPage() {
  const experiences = [
    {
      company: "Siemens Technology and Services",
      role: "Documentation Engineer / AI Specialist",
      duration: "Sept 2021 - Present",
      description: "Leading documentation automation and Docs-as-Code implementations.",
      highlights: [
        "Architected Docs Agent Orchestrator to unify knowledge across Jira, Confluence, and GitHub.",
        "Built DocPilot VS Code Extension using Python and AI for inline grammar checks.",
        "Reduced documentation publication time from days to minutes using automated CI/CD pipelines.",
        "Spearheaded Developer Experience initiatives for cross-functional 50+ member teams."
      ]
    },
    {
      company: "L&T Technology Services",
      role: "Senior Technical Writer",
      duration: "Jan 2018 - Aug 2021",
      description: "Managed complex industrial software documentation and API guides.",
      highlights: [
        "Created a unified documentation framework for IoT software components.",
        "Collaborated with engineering teams to produce SDK manuals and REST API reference docs.",
        "Mentored junior writers on Markdown best practices and Git version control."
      ]
    },
    {
      company: "ThoughtFocus",
      role: "Technical Writer",
      duration: "Jun 2016 - Dec 2017",
      description: "Developed user manuals for financial and ERP software.",
      highlights: [
        "Migrated legacy MS Word documentation into structured MadCap Flare projects.",
        "Implemented release notes automation from Jira issue tracking."
      ]
    },
    {
      company: "CADES Studec",
      role: "Technical Author",
      duration: "Jan 2014 - May 2016",
      description: "Created aerospace and defense technical publications.",
      highlights: [
        "Authored S1000D compliant maintenance procedures.",
        "Worked closely with Subject Matter Experts to visualize mechanical systems."
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Career Journey</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          My evolution from a traditional Technical Author to an AI-focused Documentation Engineer.
        </p>
      </div>

      <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-brand z-10" />
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1 text-sm font-medium">
                    <Building className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium bg-muted px-3 py-1.5 rounded-md text-foreground w-fit">
                  <Calendar className="h-4 w-4" />
                  {exp.duration}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-brand/30 pl-4 py-1 italic">
                {exp.description}
              </p>

              <ul className="space-y-3 mt-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/90">
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
