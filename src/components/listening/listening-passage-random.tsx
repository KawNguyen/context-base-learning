"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { ComprehensionExercise } from "@/constants/listening/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { Skeleton } from "../ui/skeleton";

interface ListeningPassageRandomProps {
  level: CEFRLevel;
}

export function ListeningPassageRandom({ level }: ListeningPassageRandomProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [passages, setPassages] = useState<ComprehensionExercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch random passages from API
  useEffect(() => {
    const fetchPassages = async () => {
      setIsLoading(true);
      setError(null);
      const items: ComprehensionExercise[] = [];

      try {
        // Fetch multiple passages (let's say 6 for selection)
        for (let i = 0; i < 6; i++) {
          const response = await fetch(
            `/api/listening/${level}/comprehension/random`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch passages");
          }
          const data = await response.json();
          items.push(data);
        }

        setPassages(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPassages();
  }, [level]);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-6 w-96" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Card key={idx} className="border-border/50 bg-card/50">
              <CardHeader>
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-6 w-full" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-3">Select a Passage</h1>
          <p className="text-muted-foreground text-lg">
            Choose one of the {passages.length} passages to practice your
            comprehension.
          </p>
        </div>
        <CEFRBadge level={level} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passages.map((passage, index) => (
          <Card
            key={passage.id}
            className="group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            onClick={() =>
              router.push(`/listening/${levelSlug}/comprehension/${passage.id}`)
            }
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Passage {index + 1}
                </span>
                <BookOpen
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {passage.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="grow flex flex-col justify-between space-y-4">
              <CardDescription className="line-clamp-2 text-sm italic">
                &quot;{passage.content.substring(0, 100)}...&quot;
              </CardDescription>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <CheckCircle2 size={14} className="text-green-500" />
                  {passage.questions.length} Questions
                </div>
                <Button
                  className="w-full group-hover:translate-x-1 transition-transform"
                  variant="outline"
                  size="sm"
                >
                  Start Practice <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          variant="ghost"
          onClick={() => router.push(`/listening/${levelSlug}`)}
        >
          Back to Mode Selection
        </Button>
      </div>
    </div>
  );
}
