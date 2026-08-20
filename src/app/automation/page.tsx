"use client";

import { Settings2, Cpu, Bot, Workflow, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

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
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 pb-16 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-3 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Settings2 className="h-3.5 w-3.5" />
          <span>Intelligent Systems</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">AI & Automation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Transforming manual documentation tasks into intelligent, automated engineering workflows.
        </p>
      </motion.div>

      {/* Intro */}
      <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed text-base">
          In modern software development, documentation cannot rely entirely on manual human effort. By leveraging Large Language Models (LLMs) and automated pipelines, we can scale documentation operations to match engineering velocity.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        {areas.map((area, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col gap-3 p-6 border border-border bg-surface rounded-xl hover:border-brand/50 hover:shadow-md transition-all group"
          >
            <div className="bg-brand/10 border border-brand/20 w-fit p-2.5 rounded-lg text-brand mb-1">
              <area.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-brand transition-colors">{area.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects Links */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-4 border-t border-border pt-8">
        <h2 className="text-xl font-bold text-foreground">Featured Automation Projects</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects/knowledge-orchestrator" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-surface border border-border px-4 py-2 rounded-lg text-brand hover:border-brand/40 transition-colors shadow-sm">
            <span>Docs Agent Orchestrator</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link href="/projects/docpilot" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-surface border border-border px-4 py-2 rounded-lg text-brand hover:border-brand/40 transition-colors shadow-sm">
            <span>DocPilot VS Code Extension</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

