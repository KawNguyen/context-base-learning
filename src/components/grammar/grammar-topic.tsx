"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GrammarTopic } from "@/constants/grammarTopics";
import { useRouter } from "next/navigation";

interface GrammarTopicCardProps {
  topic: GrammarTopic;
  categorySlug: string;
}

export function GrammarTopicCard({ topic, categorySlug }: GrammarTopicCardProps) {
  const router = useRouter();
  return (
    <Card
      className="group cursor-pointer transition-all hover:bg-muted/50 border-white/5 bg-white/5 backdrop-blur-sm"
      onClick={()=> router.push(`/grammar/${categorySlug}/${topic.id}`)}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge
            variant="outline"
            className="text-[10px] uppercase tracking-wider bg-white/5 border-white/10"
          >
            {topic.category}
          </Badge>
        </div>
        <CardTitle className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
          {topic.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm text-muted-foreground/80 mt-1">
          {topic.explanationEn}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-[11px] font-mono text-muted-foreground/50 truncate italic">
          {topic.structure}
        </div>
      </CardContent>
    </Card>
  );
}
