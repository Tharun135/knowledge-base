import { Mic2 } from "lucide-react";
import Link from "next/link";

export default function PresentationsPage() {
  return (
    <div className="flex flex-col gap-10 pb-16 max-w-4xl">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Presentations</h1>
        <p className="text-lg text-muted-foreground">
          Knowledge-sharing sessions, internal talks, and conference presentations.
        </p>
      </div>

      <div className="border border-dashed border-border bg-surface p-12 rounded-lg text-center flex flex-col items-center gap-4">
        <Mic2 className="h-10 w-10 text-muted-foreground" />
        <h3 className="text-lg font-medium">Session Archives Coming Soon</h3>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          Slide decks and recordings from talks on Docs-as-Code setups, Markdown migration strategies, and developer empowerment will be organized here shortly.
        </p>
        <Link href="/about" className="bg-brand text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-brand/90 transition-colors mt-2">
          Read My Philosophy
        </Link>
      </div>
    </div>
  );
}
