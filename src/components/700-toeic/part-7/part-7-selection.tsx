"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenText } from "lucide-react";
import { useRouter } from "next/navigation";

const PassageTypes = [
  {
    slug: "single-passage",
    title: "Single Passage",
    desc: "Read a single passage and answer questions about it.",
    icon: BookOpenText,
    color: "text-blue-500",
  },
  {
    slug: "double-passage",
    title: "Double Passage",
    desc: "Read two related passages and answer questions about them.",
    icon: BookOpenText,
    color: "text-green-500",
  },
  {
    slug: "triple-passage",
    title: "Triple Passage",
    desc: "Read three related passages and answer questions about them.",
    icon: BookOpenText,
    color: "text-purple-500",
  },
];

export function Part7Selection({ testSlug }: { testSlug: string }) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PassageTypes.map((passageTypes) => (
        <Card
          key={passageTypes.slug}
          className="ggroup relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          onClick={() =>
            router.push(`/700-toeic/${testSlug}/part-7/${passageTypes.slug}`)
          }
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className={`${passageTypes.color}`}>
                <passageTypes.icon size={28} />
              </div>
              <div>
                <CardTitle className="text-xl">{passageTypes.title}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-base mb-6">
              {passageTypes.desc}
            </CardDescription>
            <Button className="w-full">Start Practice</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
