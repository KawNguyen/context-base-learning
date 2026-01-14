import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function QuestionResponseSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Card key={idx} className="border-white/10 bg-card">
          <CardHeader className="border-b border-white/10">
            <Skeleton className="h-6 w-64" />
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Audio player skeleton */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-2 w-full" />
              </div>
            </div>
            {/* Options skeleton */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-16 w-full rounded-xl" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
