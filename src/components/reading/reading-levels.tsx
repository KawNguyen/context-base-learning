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
    desc: "Short, simple texts on familiar topics",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    id: "A2",
    name: "Elementary",
    desc: "Simple texts about everyday life",
    icon: GraduationCap,
    color: "text-green-500",
  },
  {
    id: "B1",
    name: "Intermediate",
    desc: "Texts on work, school, and leisure",
    icon: Brain,
    color: "text-yellow-500",
  },
  {
    id: "B2",
    name: "Upper Intermediate",
    desc: "Complex texts on concrete/abstract topics",
    icon: Star,
    color: "text-orange-500",
  },
  {
    id: "C1",
    name: "Advanced",
    desc: "Long, demanding texts & implicit meaning",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    id: "C2",
    name: "Proficiency",
    desc: "Complex descriptive & literary texts",
    icon: Trophy,
    color: "text-red-500",
  },
];

export function ReadingLevels() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {LEVELS.map((level) => (
        <Card
          key={level.id}
          className="group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          onClick={() => router.push(`/reading/${slugify(level.id)}`)}
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
            <Button className="w-full">Start Reading</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
