import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Globe2,
  AlertTriangle,
  BellRing,
  Database,
  CircleCheck,
  CircleDot,
} from "lucide-react";

const STATS = [
  { label: "Total Countries", value: "214", icon: Globe2, delta: "tracked" },
  { label: "Risk Signals", value: "1,482", icon: AlertTriangle, delta: "last 24h" },
  { label: "Active Alerts", value: "37", icon: BellRing, delta: "unresolved" },
  { label: "Data Sources", value: "12", icon: Database, delta: "connected" },
];

const ACTIVITY = [
  { text: "Anomaly flagged for Argentina — inflation volatility", time: "12m ago" },
  { text: "Forecast refreshed for 8 countries in APAC region", time: "48m ago" },
  { text: "New data connector synced from Hermes", time: "1h ago" },
  { text: "Risk score recalculated for Ukraine", time: "3h ago" },
];

const SYSTEM_STATUS = [
  { name: "Hermes data layer", status: "operational" },
  { name: "Risk scoring engine", status: "operational" },
  { name: "Forecasting service", status: "operational" },
  { name: "Atlas integration", status: "not connected" },
];

const COMING_SOON = [
  "Global risk heatmap",
  "Anomaly detection console",
  "Scenario simulation lab",
  "RAG-powered report studio",
];

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-0">
                <CardTitle>{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-2xl font-semibold tabular">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.delta}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-0">
            {ACTIVITY.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-t border-border py-3 first:border-t-0"
              >
                <p className="text-sm">{item.text}</p>
                <span className="shrink-0 pl-4 font-mono text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-0">
            {SYSTEM_STATUS.map((item) => {
              const isUp = item.status === "operational";
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-t border-border py-3 first:border-t-0"
                >
                  <span className="text-sm">{item.name}</span>
                  <Badge variant={isUp ? "default" : "outline"} className="gap-1">
                    {isUp ? (
                      <CircleCheck className="h-3 w-3" strokeWidth={2} />
                    ) : (
                      <CircleDot className="h-3 w-3" strokeWidth={2} />
                    )}
                    {item.status}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {COMING_SOON.map((feature) => (
                <Badge key={feature} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
