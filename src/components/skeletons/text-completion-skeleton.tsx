import { Skeleton } from "@/components/ui/skeleton";

export function TextCompletionSkeleton() {
  return (
    <div className="space-y-6">
      {/* Passage Cards Skeleton */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="p-8 rounded-xl border border-white/10 bg-card space-y-6"
        >
          {/* Passage Title */}
          <Skeleton className="h-7 w-56" />

          {/* Text with blanks */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-8 w-28 rounded-lg" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-8 w-24 rounded-lg" />
              <Skeleton className="h-5 w-28" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-32 rounded-lg" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>

          {/* Questions Panel */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            {Array.from({ length: 3 }).map((_, qIdx) => (
              <div key={qIdx} className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: 4 }).map((_, optIdx) => (
                    <Skeleton key={optIdx} className="h-9 w-full rounded-lg" />
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
