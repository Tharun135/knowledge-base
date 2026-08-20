"use client";

import { ArrowRight, Code, Database, Server, User, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function AboutPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12 pb-16 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Terminal className="h-3.5 w-3.5" />
          <span>Background & Philosophy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">About Me</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Technical Writer turned Documentation Engineer. I believe documentation is a software engineering discipline that requires the same rigour as writing code.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-foreground">Professional Story</h2>
        <p className="text-muted-foreground leading-relaxed">
          My journey started in traditional technical authoring for the aerospace and defense sectors, where rigorous compliance and exhaustive manuals were the standard. While this taught me discipline and the importance of structural integrity, I always felt the delivery mechanisms were outdated.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As I shifted into the software industry, I realized developers were frustrated with documentation because it was disconnected from their daily workflows. The "Docs-as-Code" movement opened my eyes. Suddenly, documentation wasn't just a PDF exported at the end of a sprint—it was a dynamic system living alongside the codebase.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Over the years, I taught myself <strong className="text-foreground">Python</strong>, <strong className="text-foreground">TypeScript</strong>, and <strong className="text-foreground">React</strong>. I stopped just <em>writing</em> the docs and started <em>building</em> the systems that deliver them. Today, I combine generative AI, continuous integration, and modern frontend frameworks to build scalable Knowledge Bases for enterprise software.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-xl shadow-sm hover:border-brand/40 transition-all"
        >
          <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
            <Server className="h-5 w-5 text-brand" />
            Career Philosophy
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Eliminate friction. If developers find it hard to write docs, they won't. By providing stellar templates, AI-assisted review tools, and automated pipelines, we can make documentation an effortless byproduct of good engineering.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-xl shadow-sm hover:border-brand/40 transition-all"
        >
          <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
            <User className="h-5 w-5 text-brand" />
            Work Style
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Highly autonomous and inherently curious. I thrive in cross-functional environments where I can act as the bridge between engineering, product management, and the end user.
          </p>
        </motion.div>
      </motion.div>

      {/* Interest Pills */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-6 border-t border-border">
        <h2 className="text-2xl font-bold text-foreground">Current Technical Interests</h2>
        <div className="flex flex-wrap gap-2.5">
          {["Retrieval-Augmented Generation (RAG)", "Agentic Workflows", "Developer Portals", "Static Site Generators", "Automated Linting", "LLM Prompt Libraries"].map((interest, i) => (
            <motion.span 
              key={i} 
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-muted/60 text-foreground text-xs font-mono font-medium rounded-lg border border-border/50 hover:border-brand hover:text-brand transition-all cursor-pointer"
            >
              #{interest}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA Footer */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between border border-border/60 bg-muted/20 p-6 rounded-xl gap-4 shadow-sm">
        <div>
          <h3 className="font-bold text-foreground">Ready to see my work?</h3>
          <p className="text-xs text-muted-foreground mt-1">Explore my career timeline to see how these philosophies translate into experience.</p>
        </div>
        <Link href="/journey" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg font-semibold text-xs hover:bg-brand/90 transition-colors shadow-sm shrink-0">
          View Career Journey
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

    </motion.div>
  );
}

