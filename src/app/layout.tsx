import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { getAllDocuments } from "@/lib/mdx";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Career Knowledge Base | Documentation Engineer",
  description: "Documentation portal and single source of truth for my professional career as a Documentation Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Extract all content at build time for the global search menu
  const portfolio = getAllDocuments("portfolio").map(doc => ({ title: doc.meta.title, description: doc.meta.description || "", type: "Documentation", url: `/portfolio/${doc.meta.slug}` }));
  const projects = getAllDocuments("projects").map(doc => ({ title: doc.meta.title, description: doc.meta.description || "", type: "Project", url: `/projects/${doc.meta.slug}` }));
  const articles = getAllDocuments("articles").map(doc => ({ title: doc.meta.title, description: doc.meta.description || "", type: "Article", url: `/articles/${doc.meta.slug}` }));
  const presentations = getAllDocuments("presentations").map(doc => ({ title: doc.meta.title, description: doc.meta.description || "", type: "Presentation", url: `/presentations/${doc.meta.slug}` }));
  const learning = getAllDocuments("learning").map(doc => ({ title: doc.meta.title, description: doc.meta.description || "", type: "Learning", url: `/learning/${doc.meta.slug}` }));
  
  const allContent = [...portfolio, ...projects, ...articles, ...presentations, ...learning];

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-background`}>
        <CommandMenu items={allContent} />
        <div className="flex min-h-screen w-full">
          {/* Sidebar */}
          <div className="hidden md:block w-72 shrink-0">
            <Sidebar />
          </div>
          
          {/* Main content wrapper */}
          <div className="flex flex-col flex-1 min-w-0">
            <Header />
            <main className="flex-1 px-4 md:px-8 py-8 lg:px-12 xl:px-16 mx-auto w-full max-w-6xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
