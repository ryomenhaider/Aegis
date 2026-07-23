import Link from "next/link";
import { ShieldHalf, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-14 items-center justify-between border-b border-border px-4 md:px-6">
        <div className="flex items-center gap-2">
          <ShieldHalf className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-sm font-semibold tracking-tight">Aegis</span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          v0.5.0
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Risk Intelligence
        </span>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Aegis
        </h1>

        <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
          AI-powered risk intelligence and decision-support platform.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Open Dashboard
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
      </main>

      <footer className="border-t border-border px-4 py-3 text-center md:px-6">
        <span className="font-mono text-[11px] text-muted-foreground">
          Aegis · scaffold build
        </span>
      </footer>
    </div>
  );
}
