"use client";

import { Briefcase, Building, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

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
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 pb-16 max-w-4xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-3 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Professional Experience</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Career Journey</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          My evolution from a traditional Technical Author to an AI-focused Documentation Engineer.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative ml-3 md:ml-6 pl-2">
        {/* Animated Drawing Vertical Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand via-brand/60 to-border origin-top"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12 group">
              {/* Glowing Pulse Node Circle */}
              <motion.div 
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-[10px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-brand shadow-[0_0_12px_rgba(20,184,166,0.6)] z-10 cursor-pointer"
              />
              
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-surface hover:border-brand/40 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/50 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 text-sm font-medium">
                      <Building className="h-4 w-4 text-brand" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium bg-brand/10 text-brand px-3 py-1.5 rounded-full border border-brand/20 w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-brand/40 pl-4 py-1 italic bg-muted/20 rounded-r-md">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 mt-1">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                      className="flex gap-3 text-sm text-foreground/90"
                    >
                      <ChevronRight className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

