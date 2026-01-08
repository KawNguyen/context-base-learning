"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComprehensionExercise } from "@/constants/listening/types";
import { useRouter } from "next/navigation";
import { BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { CEFRLevel } from "@/types";
import CEFRBadge from "../cefr-badge";

interface ListeningPassageSelectionProps {
    level: CEFRLevel;
    passages: ComprehensionExercise[];
    levelSlug: string;
}

export function ListeningPassageSelection({
    level,
    passages,
    levelSlug,
}: ListeningPassageSelectionProps) {
    const router = useRouter();

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-3">Select a Passage</h1>
                    <p className="text-muted-foreground text-lg">
                        Choose one of the {passages.length} passages to practice your comprehension.
                    </p>
                </div>
                <CEFRBadge level={level} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {passages.map((passage, index) => (
                    <Card
                        key={passage.id}
                        className="group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        onClick={() => router.push(`/listening/${levelSlug}/comprehension/${passage.id}`)}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Passage {index + 1}</span>
                                <BookOpen size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{passage.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                            <CardDescription className="line-clamp-2 text-sm italic">
                                "{passage.content.substring(0, 100)}..."
                            </CardDescription>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <CheckCircle2 size={14} className="text-green-500" />
                                    6 Questions
                                </div>
                                <Button className="w-full group-hover:translate-x-1 transition-transform" variant="outline" size="sm">
                                    Start Practice <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <Button variant="ghost" onClick={() => router.push(`/listening/${levelSlug}`)}>
                    Back to Mode Selection
                </Button>
            </div>
        </div>
    );
}
