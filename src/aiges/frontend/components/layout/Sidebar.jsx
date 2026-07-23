"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe2,
  BrainCircuit,
  FileText,
  Settings,
  ShieldHalf,
  ChartBarIncreasingIcon,
  PersonStandingIcon,
  ChartScatterIcon,
  MonitorCheckIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Country Risk Explorer", href: "/country", icon: Globe2 },
  { label: "Scenarios", href: "/scenarios", icon: BrainCircuit },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Agent Monitor", href: "/agent", icon: MonitorCheckIcon },
  { label: "Anomaly Alert Console", href: "/anomaly", icon: ChartScatterIcon },
  { label: "Forecast Viewer", href: "/forecast", icon: ChartBarIncreasingIcon },
  { label: "Explainability Panel", href: "/explain", icon: PersonStandingIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-background md:flex">
      <div className="flex h-14 items-center gap-2 border-b border-border px-4">
        <ShieldHalf className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-sm font-semibold tracking-tight">Aegis</span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3">
        <p className="px-1 text-[11px] text-muted-foreground">
          v0.5.0 · scaffold
        </p>
      </div>
    </aside>
  );
}
