"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionButtonProps {
    label: string;
    option: string;
    index: number;
    isSelected: boolean;
    isAnswered: boolean;
    isCorrect: boolean;
    isWrong: boolean;
    isBeingRead: boolean;
    onSelect: (index: number) => void;
}

export function OptionButton({
    label,
    option,
    index,
    isSelected,
    isAnswered,
    isCorrect,
    isWrong,
    isBeingRead,
    onSelect,
}: OptionButtonProps) {
    return (
        <Button
            variant={
                isCorrect ? "success" : isWrong ? "destructive" : isSelected ? "default" : "outline"
            }
            type="button"
            onClick={() => onSelect(index)}
            disabled={isAnswered}
            className={cn(
                "flex justify-between items-center p-4 h-auto text-left border-2 transition-colors duration-200",
                !isAnswered && isBeingRead && "border-primary bg-primary/5",
                !isAnswered && !isBeingRead && "hover:border-primary/30",
                isAnswered && "cursor-default"
            )}
        >
            <div className="flex items-start gap-4 flex-1">
                <span className={cn(
                    "flex items-center justify-center size-8 rounded-full border-2 text-sm font-bold shrink-0",
                    isSelected ? "bg-primary text-primary-foreground border-transparent" : "border-muted-foreground/30 text-muted-foreground"
                )}>
                    {label}
                </span>
                <div className="space-y-1 overflow-hidden">
                    {isAnswered ? (
                        <p className="text-lg font-medium leading-tight animate-in fade-in duration-300">
                            {option}
                        </p>
                    ) : (
                        <div className="flex items-center gap-2 h-7">
                            {isBeingRead && (
                                <div className="flex gap-1.5 px-2">
                                    <div className="size-1.5 bg-primary rounded-full animate-pulse" />
                                    <div className="size-1.5 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
                                    <div className="size-1.5 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
                                </div>
                            )}
                            <span className="text-muted-foreground/40 italic text-sm">
                                {isBeingRead ? "Listening..." : "Click to select"}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            {isAnswered && isCorrect && <CheckCircle2 className="text-green-600 size-6 shrink-0 ml-2" />}
            {isAnswered && isWrong && <XCircle className="text-destructive size-6 shrink-0 ml-2" />}
        </Button>
    );
}
