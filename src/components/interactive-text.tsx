"use client";

import { useInteractiveText } from "@/hooks/use-interactive-text";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { pronounceWord } from "@/lib/speech";

interface InteractiveTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function InteractiveText({
  text,
  className = "text-base leading-relaxed whitespace-pre-line",
  as: Component = "span",
}: InteractiveTextProps) {
  const { words } = useInteractiveText(text);

  return (
    <Component className={className}>
      {words.map((word, index) => {
        if (!word.isTranslatable) {
          return <span key={index}>{word.raw}</span>;
        }

        return (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <span className="cursor-pointer hover:text-primary transition-colors underline decoration-dotted underline-offset-4">
                {word.raw}
              </span>
            </PopoverTrigger>

            <PopoverContent className="w-60 text-sm" side="top">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-base font-semibold">{word.normalized}</h4>
                <Badge variant={"outline"} className="text-xs">
                  {word.word?.partOfSpeech || "Unknown"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {word.word?.phonetic}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    pronounceWord(word.normalized);
                  }}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <Separator className="my-2" />
              <div className="text-sm text-muted-foreground">
                {word.word ? word.word.meaningVi : "No definition found."}
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </Component>
  );
}
