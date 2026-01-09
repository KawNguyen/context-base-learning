import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface CompletionCardProps {
  score: number;
  totalItems: number;
  onRestart: () => void;
  onSelectLevel: () => void;
}

export function CompletionCard({
  score,
  totalItems,
  onRestart,
  onSelectLevel,
}: CompletionCardProps) {
  const percentage = Math.round((score / totalItems) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Practice Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center p-8">
          <div className="relative inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-6">
            <Trophy className="text-primary w-16 h-16" />
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
              {percentage}%
            </div>
          </div>
          <p className="text-xl mb-8 font-medium">
            You scored {score} out of {totalItems}!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onRestart} size="lg" className="px-8">
              Try Again
            </Button>
            <Button onClick={onSelectLevel} variant="outline" size="lg">
              Select Another Level
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
