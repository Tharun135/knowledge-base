"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Book, 
  Briefcase, 
  Code, 
  FileText, 
  FolderGit2, 
  GraduationCap, 
  Lightbulb, 
  LineChart, 
  Mic2, 
  PenTool, 
  Search, 
  Settings2,
  Terminal
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Overview", href: "/", icon: Book, section: "Getting Started" },
  { name: "About Me", href: "/about", icon: Terminal, section: "Getting Started" },
  { name: "Career Journey", href: "/journey", icon: Briefcase, section: "Experience" },
  { name: "Achievements", href: "/achievements", icon: Lightbulb, section: "Experience" },
  { name: "Projects", href: "/projects", icon: FolderGit2, section: "Portfolio" },
  { name: "Documentation", href: "/portfolio", icon: FileText, section: "Portfolio" },
  { name: "AI & Automation", href: "/automation", icon: Settings2, section: "Portfolio" },
  { name: "Technical Skills", href: "/skills", icon: Code, section: "Knowledge" },
  { name: "Metrics Dashboard", href: "/metrics", icon: LineChart, section: "Knowledge" },
  { name: "Presentations", href: "/presentations", icon: Mic2, section: "Knowledge" },
  { name: "Articles", href: "/articles", icon: PenTool, section: "Knowledge" },
  { name: "Learning Journey", href: "/learning", icon: GraduationCap, section: "Knowledge" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const sections = Array.from(new Set(navigation.map(n => n.section)));

  const filteredNavigation = navigation.filter(n => 
    n.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-72 flex flex-col border-r border-border bg-background transition-transform duration-300 md:translate-x-0 -translate-x-full">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Book className="h-5 w-5 text-brand" />
          <span>Knowledge Base</span>
        </Link>
      </div>
      
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search docs..."
            className="w-full rounded-md border border-border bg-muted/50 pl-9 pr-4 py-1.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
        {sections.map(section => {
          const items = filteredNavigation.filter(n => n.section === section);
          if (items.length === 0) return null;

          return (
            <div key={section}>
              <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section}
              </h4>
              <ul className="space-y-1">
                {items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-brand/10 text-brand"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <item.icon className={cn(
                          "h-4 w-4 shrink-0 transition-colors",
                          isActive ? "text-brand" : "text-muted-foreground group-hover:text-foreground"
                        )} />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-border">
        <Link 
          href="/resume" 
          className="flex items-center justify-center gap-2 w-full rounded-md bg-foreground text-background py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Resume Center
        </Link>
      </div>
    </aside>
  );
}
