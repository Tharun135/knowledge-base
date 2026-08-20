"use client";

import { Download, Printer, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

export default function ResumePage() {
  const [activeType, setActiveType] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 pb-16 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
            <FileText className="h-3.5 w-3.5" />
            <span>Interactive Resume Center</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Resume Center</h1>
          <p className="text-muted-foreground text-sm">Generated dynamically from my Career Knowledge Base.</p>
        </div>
        
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-surface text-foreground text-xs font-semibold rounded-lg hover:bg-muted transition-colors border border-border shadow-sm cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            Print
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-brand text-white text-xs font-semibold rounded-lg hover:bg-brand/90 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="h-4 w-4" />
            PDF Export
          </motion.button>
        </div>
      </motion.div>

      {/* Role Filter Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        {["Documentation Engineer", "Technical Writer", "Knowledge Manager"].map((type, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveType(i)}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-colors border ${
              activeType === i
                ? "bg-brand text-white border-brand shadow-sm font-semibold"
                : "bg-surface text-muted-foreground border-border hover:border-brand/40 hover:text-foreground"
            }`}
          >
            {type} Profile
          </motion.button>
        ))}
      </motion.div>

      {/* Main Printable Resume Sheet */}
      <motion.div 
        variants={itemVariants}
        className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-md font-sans flex flex-col gap-8 print:border-none print:shadow-none print:p-0"
      >
        <header className="flex flex-col items-center text-center gap-2 border-b border-border pb-6">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-foreground">Documentation Engineer</h2>
          <p className="text-brand font-mono font-medium tracking-widest text-xs uppercase">Enterprise Software & AI Systems</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground mt-2">
            <span>your.email@example.com</span>
            <span>•</span>
            <span>github.com/Tharun135/knowledge-base</span>
            <span>•</span>
            <span>linkedin.com/in/yourusername</span>
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">Profile Summary</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Documentation Engineer with 8+ years of experience bridging the gap between complex industrial software systems and user understanding. Specializing in Docs-as-Code workflows, generative AI pipelines for documentation, and overall Developer Experience (DX) improvements. Proven track record of reducing publication times from days to minutes and standardizing enterprise-wide documentation architectures.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">Core Competencies</h3>
          <ul className="grid sm:grid-cols-2 text-xs text-muted-foreground gap-3">
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">Docs-as-Code (Markdown, MDX, Next.js)</motion.li>
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">Generative AI & LLM Prompts</motion.li>
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">Python & TypeScript Scripting</motion.li>
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">Information Architecture & UX Writing</motion.li>
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">CI/CD Pipelines (Git, Jenkins, Actions)</motion.li>
            <motion.li whileHover={{ x: 3 }} className="flex items-center gap-2 before:h-1.5 before:w-1.5 before:bg-brand before:rounded-full">API Documentation & OpenAPI Specifications</motion.li>
          </ul>
        </section>
        
        <div className="text-center text-xs font-mono text-muted-foreground pt-6 border-t border-border border-dashed italic">
          This resume is a live representation of the Career Knowledge Base.
        </div>
      </motion.div>
    </motion.div>
  );
}

