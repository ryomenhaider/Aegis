"use client";

import { Search, Bell, CircleUserRound } from "lucide-react";

export function Navbar({ title }) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      <h1 className="text-sm font-medium">{title}</h1>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded border border-border bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground sm:flex">
          <Search className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>Search…</span>
          <kbd className="ml-6 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            ⌘K
          </kbd>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded px-1.5 py-1 hover:bg-muted"
          aria-label="User menu"
        >
          <CircleUserRound className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
