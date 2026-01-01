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

const LEVELS = [
  {
    id: "A1",
    name: "Beginner",
    desc: "Simple greetings & introductions",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    id: "A2",
    name: "Elementary",
    desc: "Routine tasks & social interactions",
    icon: GraduationCap,
    color: "text-green-500",
  },
  {
    id: "B1",
    name: "Intermediate",
    desc: "Dealing with problems & travel",
    icon: Brain,
    color: "text-yellow-500",
  },
  {
    id: "B2",
    name: "Upper Intermediate",
    desc: "Discussions on abstract topics",
    icon: Star,
    color: "text-orange-500",
  },
  {
    id: "C1",
    name: "Advanced",
    desc: "Complex professional interactions",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    id: "C2",
    name: "Proficiency",
    desc: "Nuanced & sophisticated conversations",
    icon: Trophy,
    color: "text-red-500",
  },
];

export function DialogueLevels() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {LEVELS.map((level) => (
        <Card
          key={level.id}
          className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden"
          onClick={() => router.push(`/dialogue/${level.id}`)}
        >
          <CardContent className="pt-6">
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
            <Button className="w-full group-hover:-translate-y-0.5 transition-transform">
              Start Practice
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
