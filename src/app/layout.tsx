import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

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
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-background`}>
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
