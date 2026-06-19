"use client";

import { PenLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const parts = [
  {
    slug: "part-5",
    title: "Part 5 - Incomplete Sentences",
    desc: "Focus on grammar and vocabulary in sentence completion.",
    icon: PenLine,
    color: "text-blue-500",
  },
  {
    slug: "part-6",
    title: "Part 6 - Text Completion",
    desc: "Practice filling in blanks within a passage.",
    icon: PenLine,
    color: "text-green-500",
  },
  {
    slug: "part-7",
    title: "Part 7 - Reading Comprehension",
    desc: "Improve reading skills with various question types.",
    icon: PenLine,
    color: "text-purple-500",
  },
];

export function PartSelection({ testSlug }: { testSlug: string }) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {parts.map((part) => (
        <Card
          key={part.slug}
          className="ggroup relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          onClick={() => router.push(`/700-toeic/${testSlug}/${part.slug}`)}
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className={`${part.color}`}>
                <part.icon size={28} />
              </div>
              <div>
                <CardTitle className="text-xl">{part.title}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-base mb-6">
              {part.desc}
            </CardDescription>
            <Button className="w-full">Start Practice</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
