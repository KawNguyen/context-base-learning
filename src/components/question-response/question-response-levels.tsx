"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Trophy,
  BookOpen,
  Brain,
  Star,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/utils";

const LEVELS = [
  {
    id: "A1",
    name: "Beginner",
    desc: "Simple question-response pairs",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    id: "A2",
    name: "Elementary",
    desc: "Everyday conversations & greetings",
    icon: GraduationCap,
    color: "text-green-500",
  },
  {
    id: "B1",
    name: "Intermediate",
    desc: "Common situations & exchanges",
    icon: Brain,
    color: "text-yellow-500",
  },
  {
    id: "B2",
    name: "Upper Intermediate",
    desc: "Detailed responses & opinions",
    icon: Star,
    color: "text-orange-500",
  },
  {
    id: "C1",
    name: "Advanced",
    desc: "Complex interactions & discussions",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    id: "C2",
    name: "Proficiency",
    desc: "Native-level comprehension",
    icon: Trophy,
    color: "text-red-500",
  },
];

export function QuestionResponseLevels() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {LEVELS.map((level) => (
        <Card
          key={level.id}
          className="group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          onClick={() => router.push(`/question-response/${slugify(level.id)}`)}
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className={`${level.color}`}>
                <level.icon size={28} />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">
                  {level.id}
                </Badge>
                <CardTitle className="text-xl">{level.name}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-base mb-6">
              {level.desc}
            </CardDescription>
            <Button className="w-full">Start Practicing</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
