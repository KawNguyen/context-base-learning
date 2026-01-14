import { Skeleton } from "@/components/ui/skeleton";

export function QuizSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div
          key={idx}
          className="p-6 rounded-xl border border-white/10 bg-card space-y-4"
        >
          {/* Question number */}
          <Skeleton className="h-5 w-20" />

          {/* Question text */}
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />

          {/* Options */}
          <div className="space-y-3 pt-2">
            {Array.from({ length: 4 }).map((_, optIdx) => (
              <Skeleton key={optIdx} className="h-12 w-full rounded-xl" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
