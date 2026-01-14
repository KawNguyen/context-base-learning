import { Skeleton } from "@/components/ui/skeleton";

export function ReadingSkeleton() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Passage Cards Skeleton */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="p-8 rounded-xl border border-white/10 bg-card space-y-6"
        >
          {/* Passage Title */}
          <Skeleton className="h-7 w-64" />

          {/* Passage Content */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-9/12" />
          </div>

          {/* Questions */}
          <div className="space-y-6 pt-4">
            {Array.from({ length: 3 }).map((_, qIdx) => (
              <div key={qIdx} className="space-y-3">
                <Skeleton className="h-5 w-3/4" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, optIdx) => (
                    <Skeleton key={optIdx} className="h-10 w-full rounded-lg" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
