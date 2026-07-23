import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/Card";
import { Globe2 } from "lucide-react";

export default function CountriesPage() {
  return (
    <AppLayout title="Countries">
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
          <Globe2 className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
          <p className="text-sm font-medium">Country risk profiles are coming soon</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            This view will surface per-country risk scores once Hermes
            integration lands in a future release.
          </p>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
