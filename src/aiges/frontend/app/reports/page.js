import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/Card";
import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <AppLayout title="Reports">
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
          <FileText className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
          <p className="text-sm font-medium">Report generation is coming soon</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            The RAG-powered report studio will let you generate and export
            intelligence reports from this view.
          </p>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
