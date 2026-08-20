"use client";

import Link from "next/link";
import { ArrowRight, Book, Briefcase, Code, FileText, Settings2, Terminal } from "lucide-react";
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


export default function Home() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12 pb-16"
    >
      {/* Hero Section */}
      <section className="flex flex-col gap-6 max-w-4xl pt-8 md:pt-12">
        <motion.div variants={itemVariants} className="flex items-center gap-2 text-brand font-medium tracking-sm text-sm uppercase px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Terminal className="h-4 w-4" />
          <span>Documentation Engineer</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Building AI-powered documentation systems for enterprise software.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          I combine technical writing, Docs-as-Code, Python, automation, and AI to build scalable documentation systems that improve quality, consistency, and developer experience.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand/90 transition-colors shadow-sm">
              View Documentation Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/about" className="inline-flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted/80 border border-border transition-colors">
              Read My Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Statistics */}
      <motion.section variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8 border-y border-border">
        <StatCard label="Years of Experience" value="8+" />
        <StatCard label="Companies Worked" value="4" />
        <StatCard label="Apps Documented" value="25+" />
        <StatCard label="Automation Projects" value="12" />
        <StatCard label="AI Tools Developed" value="5" />
      </motion.section>

      {/* Featured Areas */}
      <motion.section variants={itemVariants} className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Core Capabilities</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard 
            title="Docs-as-Code"
            description="Implementing modern Markdown/MDX workflows, CI/CD integrations with Git, and unified build systems for documentation portals."
            icon={Code}
            href="/skills#docs-as-code"
          />
          <FeatureCard 
            title="AI & Automation"
            description="Building Prompt Libraries, Documentation Agents, LLM-based proofreading tools, and automated pipelines."
            icon={Settings2}
            href="/automation"
          />
          <FeatureCard 
            title="Developer Experience"
            description="Improving developer autonomy through internal knowledge bases, unified templates, and comprehensive API docs."
            icon={FileText}
            href="/portfolio"
          />
        </div>
      </motion.section>

      {/* Recent Activity / Featured Projects snippet */}
      <motion.section variants={itemVariants} className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-brand hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Mock project card 1 */}
          <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
            <Link href="/projects/docpilot" className="group rounded-lg border border-border bg-surface p-6 hover:border-brand/50 transition-all flex flex-col gap-4 relative overflow-hidden shadow-sm hover:shadow-md block h-full">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-medium px-2 py-1 bg-brand/10 text-brand rounded-full">AI Project</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                  <Settings2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">DocPilot Extension</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                VS Code extension leveraging AI to provide in-editor documentation review, style guide enforcement, and grammar checks.
              </p>
            </Link>
          </motion.div>
          
          {/* Mock project card 2 */}
          <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
            <Link href="/projects/knowledge-orchestrator" className="group rounded-lg border border-border bg-surface p-6 hover:border-brand/50 transition-all flex flex-col gap-4 relative overflow-hidden shadow-sm hover:shadow-md block h-full">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-medium px-2 py-1 bg-brand/10 text-brand rounded-full">System Architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                  <Book className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Docs Agent Orchestrator</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Automated documentation generation and categorization engine that uses RAG and specialized agents.
              </p>
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-1 p-3 rounded-lg border border-transparent hover:border-border/50 transition-colors"
    >
      <span className="text-3xl font-bold tracking-tighter text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

function FeatureCard({ title, description, icon: Icon, href }: { title: string; description: string; icon: any; href: string }) {
  return (
    <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
      <Link href={href} className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-surface hover:bg-muted/50 hover:border-brand/40 transition-all shadow-sm block h-full">
        <Icon className="h-6 w-6 text-brand" />
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}

