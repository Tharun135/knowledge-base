"use client";

import Link from "next/link";
import { FolderGit2, Calendar, Tag, ArrowRight } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const PROJECTS_DATA = [
  {
    slug: "docpilot",
    title: "DocPilot VS Code Extension",
    description: "AI-powered VS Code extension providing in-editor style guide enforcement, technical grammar review, and Markdown linting.",
    tags: ["AI / LLM", "VS Code Extension", "Python", "TypeScript"]
  },
  {
    slug: "knowledge-orchestrator",
    title: "Docs Agent Orchestrator",
    description: "Automated documentation generation and categorization engine using Retrieval-Augmented Generation (RAG) and specialized LLM agents.",
    tags: ["RAG Architecture", "LangChain", "Python", "GitHub Actions"]
  }
];

export default function ProjectsPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 pb-16 max-w-5xl mx-auto"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-2 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Case Studies & Systems</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Projects</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Detailed technical case studies, AI tools, and architectural overviews of my documentation engineering work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => (
          <motion.div key={project.slug} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Link 
              href={`/projects/${project.slug}`}
              className="group flex flex-col justify-between p-6 rounded-xl border border-border bg-surface hover:border-brand/60 hover:shadow-lg transition-all block h-full"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand/10 text-brand border border-brand/20">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 bg-muted/60 text-muted-foreground rounded flex items-center gap-1 border border-border/30">
                    <Tag className="h-3 w-3 text-brand" />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

