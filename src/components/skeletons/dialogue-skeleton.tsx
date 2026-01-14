import { Skeleton } from "@/components/ui/skeleton";

export function DialogueSkeleton() {
  return (
    <div className="space-y-6">
      {/* Dialogue Cards Skeleton */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="p-6 rounded-xl border border-white/10 bg-card space-y-6"
        >
          {/* Dialogue Title */}
          <Skeleton className="h-6 w-48" />

          {/* Dialogue Lines */}
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, lineIdx) => (
              <div key={lineIdx} className="flex gap-3">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 flex-1" />
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            {Array.from({ length: 2 }).map((_, qIdx) => (
              <div key={qIdx} className="space-y-3">
                <Skeleton className="h-5 w-2/3" />
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
