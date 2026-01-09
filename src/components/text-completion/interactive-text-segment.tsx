import { useInteractiveText } from "@/hooks/use-interactive-text";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface InteractiveTextSegmentProps {
  text: string;
}

export function InteractiveTextSegment({ text }: InteractiveTextSegmentProps) {
  const { words } = useInteractiveText(text);

  return (
    <>
      {words.map((word, i) => {
        if (!word.isTranslatable) {
          return (
            <span key={i} className="whitespace-pre-wrap">
              {word.raw}
            </span>
          );
        }
        return (
          <Popover key={i}>
            <PopoverTrigger asChild>
              <span className="cursor-pointer hover:text-primary transition-colors hover:bg-primary/10 rounded px-0.5">
                {word.raw}
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-60 text-sm">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-base font-semibold">{word.normalized}</h4>
                <Badge variant={"outline"} className="text-xs">
                  {word.word?.partOfSpeech || "Unknown"}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {word.word?.phonetic}
              </div>
              <Separator className="my-2" />
              <div className="text-sm text-muted-foreground">
                {word.word ? word.word.meaningVi : "No definition found."}
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </>
  );
}
