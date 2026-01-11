"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { ChevronRight, FileText, GraduationCap } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { slugify } from "@/lib/utils";

interface PassageCardProps {
  passage: TextCompletionPassage;
}

export function PassageCard({ passage }: PassageCardProps) {
  const router = useRouter();
  const params = useParams();
  const level = params.level as string;

  // Create a preview of the content without the gaps
  const previewContent = passage.content.replace(/\{\{\d+\}\}/g, "___");

  const handleClick = () => {
    router.push(`/text-completion/${level}/${slugify(passage.id)}`);
  };

  return (
    <Card
      className="group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
      onClick={handleClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
        </div>
        <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
          {passage.title}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 grow">
        <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed whitespace-pre-line">
          {previewContent}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto border-t border-border/50 flex items-center justify-between text-xs font-medium text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" />
            {passage.questions.length} gaps
          </span>
        </div>
        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
          <span className="mr-1">Start</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
