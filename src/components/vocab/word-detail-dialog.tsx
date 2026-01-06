"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { VocabularyWord } from "@/constants/vocabulary";

interface WordDetailDialogProps {
  word: VocabularyWord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WordDetailDialog({
  word,
  open,
  onOpenChange,
}: WordDetailDialogProps) {
  if (!word) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-0 rounded-lg shadow-xl">
        <DialogHeader className="sr-only">
           <DialogTitle>{word.word}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/50 rounded-t-lg sticky top-0 z-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{word.word}</h2>
            <p className="text-sm text-muted-foreground italic">
              {word.phonetic}
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-muted transition-colors text-foreground"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="text-sm text-muted-foreground">
            {word.partOfSpeech}
          </div>

          {/* English Definition */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">English Meaning</h3>
            <p className="text-base text-foreground leading-relaxed">
              {word.meaningEn}
            </p>
          </div>

          {/* Vietnamese Definition */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              Vietnamese Meaning
            </h3>
            <p className="text-base text-foreground leading-relaxed">
              {word.meaningVi}
            </p>
          </div>

          {/* English Example */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Example (English)</h3>
            <p className="text-base text-foreground italic leading-relaxed bg-muted p-3 rounded-md">
              {word.exampleEn}
            </p>
          </div>

          {/* Vietnamese Example */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              Example (Vietnamese)
            </h3>
            <p className="text-base text-foreground italic leading-relaxed bg-muted p-3 rounded-md">
              {word.exampleVi}
            </p>
          </div>

          {/* Categories */}
          {word.categories && word.categories.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {word.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
