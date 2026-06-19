"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { PenTool } from "lucide-react";

const tests = [
  {
    slug: "test-1",
    title: "Test 1",
    color: "text-blue-500",
  },
  {
    slug: "test-2",
    title: "Test 2",
    color: "text-green-500",
  },
  {
    slug: "test-3",
    title: "Test 3",
    color: "text-purple-500",
  },
];

export function TestSelection() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tests.map((test) => (
        <Card
          key={test.slug}
          className="ggroup relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          onClick={() => router.push(`/700-toeic/${test.slug}`)}
        >
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className={`${test.color}`}>
                <PenTool size={28} />
              </div>
              <div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
              </div>
            </div>
            <Button className="w-full">Start Practice</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
