"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export interface SearchItem {
  title: string;
  description: string;
  type: string;
  url: string;
}

export function CommandMenu({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-24" 
          onClick={() => setOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl bg-surface border border-border rounded-xl shadow-2xl overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-full rounded-xl bg-surface flex flex-col" label="Global Command Menu">
              <div className="flex items-center border-b border-border px-4" cmdk-input-wrapper="">
                <Search className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <Command.Input
                  className="flex h-14 w-full rounded-none bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                  placeholder="Search documentation, projects, and articles... (Esc to close)"
                  autoFocus
                />
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                
                <Command.Group heading="All Content" className="px-2 py-1 text-xs font-medium text-muted-foreground">
                  {items.map((item) => (
                    <Command.Item
                      key={item.url}
                      onSelect={() => {
                        router.push(item.url);
                        setOpen(false);
                      }}
                      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-muted aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{item.title}</span>
                          <span className="text-xs bg-muted-foreground/10 px-2 py-0.5 rounded text-muted-foreground">{item.type}</span>
                        </div>
                        {item.description && (
                          <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                        )}
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

