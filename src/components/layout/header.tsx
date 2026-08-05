"use client";

import Link from "next/link";
import { Menu, Search, Mail, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 ${scrolled ? "bg-background/80 border-b border-border/50" : "bg-transparent border-b border-transparent"}`}>
      <div className="flex h-16 items-center px-4 md:px-6 layout-padding">
        <button className="md:hidden mr-4 p-2 text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>

        <div className="flex flex-1 items-center gap-4">
          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-muted/50 border border-border rounded-md pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-all"
            />
            <div className="absolute right-2.5 text-xs text-muted-foreground border border-border rounded px-1.5 bg-background">
              Ctrl K
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
