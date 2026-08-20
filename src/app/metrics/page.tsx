"use client";

import { BarChart3, Clock, FileText, Settings, Users, Zap, TrendingUp, Award } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function MetricsPage() {
  const metrics = [
    { title: "Review Effort Reduced", value: "40%", percentage: 40, description: "By implementing automated AI linting and pre-commit hooks." },
    { title: "Publishing Time Reduced", value: "95%", percentage: 95, description: "From hours of manual PDF generation to a 15-minute CI/CD pipeline." },
    { title: "Apps Documented", value: "25+", percentage: 85, description: "Successfully delivered contextual documentation for complex systems." },
    { title: "Automation Coverage", value: "65%", percentage: 65, description: "Percentage of manual publication tasks converted into automated scripts." },
    { title: "Support Tickets Deflected", value: "~15%", percentage: 30, description: "Estimated reduction after deploying central developer Knowledge Base." },
    { title: "Internal Tools Created", value: "5 Tools", percentage: 90, description: "Including VS Code extensions, orchestrators, and prompt engines." }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 pb-16 max-w-4xl"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>Quantified Engineering Impact</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Metrics Dashboard</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Quantifiable business impact driven by documentation engineering, automation, and AI.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between p-6 rounded-xl border border-border bg-surface hover:border-brand/50 hover:shadow-md transition-all group"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{metric.title}</h3>
              <span className="text-4xl font-bold font-mono text-foreground my-1 group-hover:text-brand transition-colors">
                {metric.value}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
            </div>

            {/* Animated Gauge Bar */}
            <div className="mt-4 pt-3 border-t border-border/50 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Impact Scale</span>
                <span className="text-brand font-semibold">{metric.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.percentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" as const }}
                  className="h-full bg-brand rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="border border-border/60 bg-muted/20 p-8 rounded-xl mt-4 prose prose-zinc dark:prose-invert max-w-none shadow-sm">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Award className="h-5 w-5 text-brand" />
          How I Measure Success
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          In a Docs-as-Code environment, documentation behaves like software. As such, we track it using similar software engineering metrics:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/90 not-prose list-none p-0 mt-4">
          <li className="p-3 bg-surface border border-border rounded-lg flex flex-col gap-1">
            <strong className="text-brand font-semibold">Deployment Frequency</strong>
            <span className="text-xs text-muted-foreground">Number of documentation releases delivered per week via CI/CD.</span>
          </li>
          <li className="p-3 bg-surface border border-border rounded-lg flex flex-col gap-1">
            <strong className="text-brand font-semibold">Lead Time</strong>
            <span className="text-xs text-muted-foreground">The time elapsed from authoring content to automated online deployment.</span>
          </li>
          <li className="p-3 bg-surface border border-border rounded-lg flex flex-col gap-1">
            <strong className="text-brand font-semibold">Mean Time to Fix (MTTF)</strong>
            <span className="text-xs text-muted-foreground">How quickly documentation bugs reported by developers are patched.</span>
          </li>
          <li className="p-3 bg-surface border border-border rounded-lg flex flex-col gap-1">
            <strong className="text-brand font-semibold">Deflection Rate</strong>
            <span className="text-xs text-muted-foreground">How often central developer docs prevent internal support escalations.</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

