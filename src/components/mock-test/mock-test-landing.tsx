"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Timer, BookOpen, Layers } from "lucide-react";
import { CEFRLevel } from "@/types";
import { ExamSettings } from "@/types/mock-exam";
import { generateMockExam } from "@/utils/exam-generator";
import { MockTestInterface } from "@/components/mock-test/mock-test-interface";

export function MockTestLanding() {
  const [settings, setSettings] = useState<ExamSettings>({
    length: 100,
    levelMix: true,
    targetLevel: "B1",
  });
  const [exam, setExam] = useState<ReturnType<typeof generateMockExam> | null>(
    null
  );

  const handleStart = () => {
    const generatedExam = generateMockExam(settings);
    setExam(generatedExam);
  };

  if (exam) {
    return <MockTestInterface exam={exam} onExit={() => setExam(null)} />;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black tracking-tight text-primary uppercase italic">
          TOEIC Mock Test <span className="text-foreground">Arena</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Challenge yourself with a realistic TOEIC exam environment. Randomly
          generated questions, timed pressure, and detailed analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <Trophy className="w-10 h-10 text-primary mx-auto mb-2" />
            <CardTitle>Global Ranking</CardTitle>
            <CardDescription>Compare your scores with others</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <Timer className="w-10 h-10 text-primary mx-auto mb-2" />
            <CardTitle>Real Pressure</CardTitle>
            <CardDescription>
              Timed sections just like the real exam
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-2" />
            <CardTitle>Adaptive Learning</CardTitle>
            <CardDescription>Targeted review for weak areas</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-2 shadow-xl overflow-hidden">
        <div className="bg-primary/10 px-6 py-4 border-b flex items-center justify-between">
          <h2 className="font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Exam Configuration
          </h2>
          <Badge variant="outline" className="bg-background">
            {settings.length} Questions
          </Badge>
        </div>
        <CardContent className="p-8 space-y-8">
          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Select Test Length
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[50, 100, 200].map((len) => (
                <Button
                  key={len}
                  variant={settings.length === len ? "default" : "outline"}
                  className="h-20 flex flex-col gap-1 border-2"
                  onClick={() =>
                    setSettings({ ...settings, length: len as 50 | 100 | 200 })
                  }
                >
                  <span className="text-xl font-black">{len}</span>
                  <span className="text-[10px] uppercase font-bold opacity-70">
                    {len === 50
                      ? "Mini Test"
                      : len === 100
                      ? "Half Test"
                      : "Full Exam"}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Difficulty Setting
              </label>
              <div className="flex gap-2">
                <Button
                  variant={settings.levelMix ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setSettings({ ...settings, levelMix: true })}
                >
                  Mixed Levels
                </Button>
                <Button
                  variant={!settings.levelMix ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setSettings({ ...settings, levelMix: false })}
                >
                  Targeted Level
                </Button>
              </div>
            </div>

            {!settings.levelMix && (
              <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Target CEFR Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
                    <Button
                      key={lvl}
                      size="sm"
                      variant={
                        settings.targetLevel === lvl ? "secondary" : "ghost"
                      }
                      className={`font-black ${
                        settings.targetLevel === lvl
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() =>
                        setSettings({
                          ...settings,
                          targetLevel: lvl as CEFRLevel,
                        })
                      }
                    >
                      {lvl}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg border">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Exam Structure
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold">Listening:</span> Parts 1-4
                </div>
                <div>
                  <span className="font-bold">Reading:</span> Parts 5-7
                </div>
                <div className="col-span-2 mt-2 pt-2 border-t">
                  <span className="font-bold">Time:</span>{" "}
                  {settings.length === 200
                    ? "120 mins"
                    : settings.length === 100
                    ? "60 mins"
                    : "30 mins"}
                </div>
              </div>
            </div>
            <Button
              className="w-full h-16 text-xl font-black uppercase tracking-tighter italic group shadow-lg shadow-primary/20"
              onClick={handleStart}
            >
              Generate & Start Mock Exam
              <Trophy className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Realistic TOEIC exam simulation. Disable notifications for the
              best experience.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
