"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

interface ResultViewProps {
    score: number;
    total: number;
    onReset: () => void;
}

export function ResultView({ score, total, onReset }: ResultViewProps) {
    const accuracy = Math.round((score / total) * 100);

    return (
        <div className="max-w-2xl mx-auto p-6 animate-in fade-in zoom-in duration-500">
            <Card className="text-center p-8 border-2 shadow-2xl bg-card">
                <div className="flex justify-center mb-6">
                    <div className="p-6 bg-primary/10 rounded-full">
                        <Trophy size={64} className="text-primary" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Practice Complete!</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    You scored {score} out of {total}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-muted rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                        <p className="text-2xl font-bold">{accuracy}%</p>
                    </div>
                    <div className="p-4 bg-muted rounded-xl">
                        <p className="text-sm text-muted-foreground mb-1">Questions</p>
                        <p className="text-2xl font-bold">{total}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link href="/image-description" className="flex-1">
                        <Button variant="outline" className="w-full h-12 text-lg">
                            <Home className="mr-2" size={20} /> Gallery
                        </Button>
                    </Link>
                    <Button className="flex-1 h-12 text-lg" onClick={onReset}>
                        <RotateCcw className="mr-2" size={20} /> Retry
                    </Button>
                </div>
            </Card>
        </div>
    );
}
