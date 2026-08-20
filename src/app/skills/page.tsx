"use client";

import { useState } from "react";
import { Terminal, Code, Cpu, LineChart, Shield, Layout, Settings, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    {
      title: "Documentation & Docs-as-Code",
      icon: Layout,
      group: "Docs-as-Code",
      skills: [
        { name: "Markdown / MDX", level: 95 },
        { name: "AsciiDoc", level: 85 },
        { name: "DITA XML", level: 80 },
        { name: "Hugo / Docusaurus / Next.js", level: 90 },
        { name: "Vale (Linting)", level: 88 },
        { name: "GitHub Pages", level: 95 }
      ]
    },
    {
      title: "Programming & Web",
      icon: Code,
      group: "Engineering",
      skills: [
        { name: "TypeScript / JavaScript", level: 88 },
        { name: "Python", level: 92 },
        { name: "React & Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3 / SVG", level: 95 },
        { name: "Node.js", level: 82 }
      ]
    },
    {
      title: "AI & Automation",
      icon: Cpu,
      group: "AI & Automation",
      skills: [
        { name: "LLM Prompt Engineering", level: 95 },
        { name: "RAG Systems", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "OpenAI API", level: 90 },
        { name: "Python Scripting", level: 95 },
        { name: "GitHub Actions", level: 90 }
      ]
    },
    {
      title: "Developer Tools & CI/CD",
      icon: Terminal,
      group: "Engineering",
      skills: [
        { name: "Git & GitHub / GitLab", level: 95 },
        { name: "Docker", level: 82 },
        { name: "VS Code Extension API", level: 88 },
        { name: "Jira / Confluence", level: 90 },
        { name: "Linux / Bash", level: 85 },
        { name: "Postman / Swagger", level: 92 }
      ]
    },
    {
      title: "Technical Writing",
      icon: Shield,
      group: "Docs-as-Code",
      skills: [
        { name: "API Documentation", level: 98 },
        { name: "User Guides", level: 95 },
        { name: "Release Notes", level: 92 },
        { name: "Architecture Docs", level: 88 },
        { name: "UX Writing", level: 85 },
        { name: "Style Guides (MS/Google)", level: 95 }
      ]
    },
    {
      title: "Impact & Strategy",
      icon: LineChart,
      group: "Strategy",
      skills: [
        { name: "Developer Experience (DX)", level: 92 },
        { name: "Knowledge Management", level: 95 },
        { name: "Information Architecture", level: 90 },
        { name: "Content Strategy", level: 88 },
        { name: "Metrics Tracking", level: 85 }
      ]
    }
  ];

  const filterTabs = ["All", "Docs-as-Code", "AI & Automation", "Engineering", "Strategy"];

  const filteredCategories = categories.filter(
    (cat) => activeFilter === "All" || cat.group === activeFilter
  );

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 pb-16 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-3 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Code className="h-3.5 w-3.5" />
          <span>Technical Stack & Capabilities</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Technical Skills</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A comprehensive breakdown of my expertise across software engineering, artificial intelligence, and technical documentation.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
        {filterTabs.map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-colors border ${
              activeFilter === tab
                ? "bg-brand text-white border-brand shadow-sm font-semibold"
                : "bg-surface text-muted-foreground border-border hover:border-brand/40 hover:text-foreground"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid of Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat) => (
            <motion.div 
              layout
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col gap-4 border border-border bg-surface p-6 rounded-xl shadow-sm hover:border-brand/40 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <div className="bg-brand/10 text-brand p-2.5 rounded-lg border border-brand/20">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-foreground">{cat.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {cat.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-1.5 p-2 rounded-lg bg-muted/30 border border-border/40"
                  >
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-[10px] font-mono text-brand">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" as const }}
                        className="h-full bg-brand rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Footer */}
      <motion.div variants={itemVariants} className="border border-border/60 bg-muted/20 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 mt-4 shadow-sm">
        <Rocket className="h-8 w-8 text-brand" />
        <h3 className="text-xl font-bold text-foreground">Want to see these skills in action?</h3>
        <p className="text-xs text-muted-foreground max-w-md">
          Explore real-world applications, VS Code extensions, and AI documentation orchestrators in the projects portfolio.
        </p>
        <Link href="/projects" className="bg-brand text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-brand/90 transition-colors shadow-sm inline-flex items-center gap-2">
          View Featured Projects
        </Link>
      </motion.div>
    </motion.div>
  );
}

