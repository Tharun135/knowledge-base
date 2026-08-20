"use client";

import { useState } from "react";
import { 
  FileText, 
  Search, 
  BookOpen, 
  Code2, 
  Sparkles, 
  ExternalLink,
  ArrowRight,
  FileCode,
  Terminal,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { ApiPlayground } from "@/components/portfolio/ApiPlayground";
import { StyleGuideSection } from "@/components/portfolio/StyleGuideCard";
import { DocSampleModal, SAMPLE_DOCUMENTS, DocSample } from "@/components/portfolio/DocSampleModal";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSample, setSelectedSample] = useState<DocSample | null>(null);

  const categories = ["All", "API Reference", "User Manual", "Style Guide", "Runbook & Ops", "SDK Guide"];

  const filteredSamples = SAMPLE_DOCUMENTS.filter((doc) => {
    const matchesCategory = activeCategory === "All" || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-12 pb-16 max-w-5xl mx-auto">
      {/* Hero Header */}
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-brand font-mono text-xs uppercase font-medium tracking-wider px-3 py-1 bg-brand/10 w-fit rounded-full">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Siemens Industrial Edge Documentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Documentation Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Published technical manuals, connector specifications, REST API guides, and operations runbooks for the Siemens Industrial Edge Apps ecosystem.
        </p>

        {/* Portfolio Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-2">
          <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-1">
            <span className="text-2xl font-bold font-mono text-brand">7</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Featured Edge Apps
            </span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-1">
            <span className="text-2xl font-bold font-mono text-foreground">100%</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Fluid Topics Links
            </span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-1">
            <span className="text-2xl font-bold font-mono text-foreground">3</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Live API Explorers
            </span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-1">
            <span className="text-2xl font-bold font-mono text-brand">99.8%</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Accuracy Index
            </span>
          </div>
        </div>
      </div>

      {/* Feature 1: Interactive API Specification Playground */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code2 className="h-6 w-6 text-brand" />
            Interactive Industrial Edge API Playground
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore live REST API endpoint specifications for IIH Essentials, SIMATIC S7+ Connector, and Ethernet IP Connector.
          </p>
        </div>

        <ApiPlayground />
      </section>

      {/* Feature 2: Siemens Style Guide & Editorial Governance */}
      <section className="flex flex-col gap-4 pt-4 border-t border-border/60">
        <StyleGuideSection />
      </section>

      {/* Feature 3: Published Siemens Edge Apps Documentation Grid */}
      <section className="flex flex-col gap-6 pt-4 border-t border-border/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <FileText className="h-6 w-6 text-brand" />
              Published Edge Apps Documentation
            </h2>
            <p className="text-sm text-muted-foreground">
              Click any document card below to open its official publication directly on Siemens Fluid Topics.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-muted/50 border border-border rounded-lg outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                activeCategory === cat
                  ? "bg-brand text-white border-brand shadow-sm font-semibold"
                  : "bg-surface text-muted-foreground border-border hover:border-brand/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Samples */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSamples.length > 0 ? (
            filteredSamples.map((sample) => (
              <a
                key={sample.id}
                href={sample.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 border border-border bg-surface rounded-xl hover:border-brand/60 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-brand/10 text-brand">
                      {sample.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{sample.readTime}</span>
                  </div>

                  <div className="font-bold text-lg text-foreground group-hover:text-brand transition-colors flex items-center gap-2">
                    <span>{sample.title}</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-brand" />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {sample.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {sample.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono bg-muted/60 text-muted-foreground rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <FileCode className="h-3.5 w-3.5 text-brand" /> {sample.format}
                    </span>

                    <span className="text-xs font-semibold text-brand group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Open in Fluid Topics <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed border-border rounded-lg">
              No documentation samples match your search criteria.
            </div>
          )}
        </div>
      </section>

      {/* Docs-as-Code Quick Links / Action Footer */}
      <section className="p-8 border border-border bg-surface rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex flex-col gap-2 max-w-xl">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Cpu className="h-5 w-5 text-brand" />
            Siemens Industrial Operations X Official Documentation
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Visit the official Siemens Industrial Edge product directory to access live product manuals, release notes, and download links.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="https://docs.industrial-operations-x.siemens.cloud/p/industrial-edge-edge-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-brand/90 transition-colors shadow-sm"
          >
            Siemens Operations X Portal
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Interactive Modal Reader */}
      <DocSampleModal sample={selectedSample} onClose={() => setSelectedSample(null)} />
    </div>
  );
}
