import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shuffle, List } from "lucide-react";
import CEFRBadge from "@/components/cefr-badge";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function QuestionResponseLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const exercises = QUESTION_RESPONSE_DATA[level];

  if (!exercises || exercises.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Question - Response</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
            Level {cefrLevel}
          </p>
        </div>
        <CEFRBadge level={cefrLevel} />
      </div>

      <div className="grid gap-4">
        {/* Random Practice Mode */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shuffle className="h-5 w-5 text-primary" />
              Random Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Practice 10 random questions from this level
            </p>
            <Link href={`/question-response/${level}/random`}>
              <Button size="lg" className="w-full">
                Start Random Practice
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Exercise List Mode */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <List className="h-5 w-5 text-primary" />
              Practice by Exercise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Choose a specific exercise to practice
            </p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {exercises.map((exercise, index) => (
                <Link
                  key={exercise.id}
                  href={`/question-response/${level}/${exercise.id}`}
                >
                  <Button
                    variant="outline"
                    className="w-full h-12 hover:bg-primary hover:text-primary-foreground"
                  >
                    {index + 1}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
