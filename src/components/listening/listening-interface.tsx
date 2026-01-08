"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DictationExercise, ComprehensionExercise, ListeningType } from "@/constants/listening/types";
import { useRouter, useParams } from "next/navigation";
import {
    CheckCircle2Icon,
    Play,
    Pause,
    RotateCcw,
    AudioLines,
    Trophy,
    History,
    XCircleIcon,
    ArrowLeft
} from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { useSpeech } from "@/hooks/use-speech";
import { Slider } from "../ui/slider";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface ListeningInterfaceProps {
    exercises: (DictationExercise | ComprehensionExercise)[];
    level: CEFRLevel;
    type: ListeningType;
}

export function ListeningInterface({
    exercises: initialExercises,
    level,
    type,
}: ListeningInterfaceProps) {
    const router = useRouter();
    const params = useParams();
    const levelSlug = params.level as string;

    const { speak, pause, resume, stop, isSpeaking, isPaused } = useSpeech();

    // Internal state for exercises (to allow shuffling for dictation)
    const [exercises, setExercises] = useState<(DictationExercise | ComprehensionExercise)[]>([]);
    const [initialized, setInitialized] = useState(false);

    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [userInput, setUserInput] = useState("");
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [showTranscript, setShowTranscript] = useState(false);

    // Initialize and shuffle if needed
    useEffect(() => {
        if (type === "dictation") {
            const shuffled = [...initialExercises].sort(() => Math.random() - 0.5);
            setExercises(shuffled);
        } else {
            setExercises(initialExercises);
        }
        setInitialized(true);
    }, [initialExercises, type]);

    const currentExercise = exercises[currentExerciseIndex];

    const totalItems = type === "dictation"
        ? exercises.length
        : exercises.length * 6;

    const currentProgress = type === "dictation"
        ? currentExerciseIndex
        : (currentExerciseIndex * 6) + currentQuestionIndex;

    const normalizeText = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
            .replace(/\s{2,}/g, " ")
            .trim();
    };

    const handlePlay = () => {
        if (!currentExercise) return;
        if (isPaused) {
            resume();
        } else {
            speak(currentExercise.content, { rate: speed });
        }
    };

    const handleCheck = () => {
        if (type === "dictation") {
            const exercise = currentExercise as DictationExercise;
            const isCorrect = normalizeText(userInput) === normalizeText(exercise.answer);
            if (isCorrect) setScore(score + 1);
            setShowResult(true);
        } else {
            const exercise = currentExercise as ComprehensionExercise;
            const currentQuestion = exercise.questions[currentQuestionIndex];
            if (selectedOption === null) return;

            const isCorrect = selectedOption === currentQuestion.correct;
            if (isCorrect) setScore(score + 1);
            setShowResult(true);
        }
        stop();
    };

    const handleNext = () => {
        if (type === "dictation") {
            if (currentExerciseIndex < exercises.length - 1) {
                setCurrentExerciseIndex(currentExerciseIndex + 1);
                setUserInput("");
                setShowResult(false);
            } else {
                setCompleted(true);
            }
        } else {
            const exercise = currentExercise as ComprehensionExercise;
            if (currentQuestionIndex < exercise.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setShowResult(false);
            } else if (currentExerciseIndex < exercises.length - 1) {
                setCurrentExerciseIndex(currentExerciseIndex + 1);
                setCurrentQuestionIndex(0);
                setSelectedOption(null);
                setShowResult(false);
                setShowTranscript(false);
            } else {
                setCompleted(true);
            }
        }
        stop();
    };

    const handleRestart = () => {
        if (type === "dictation") {
            setExercises([...initialExercises].sort(() => Math.random() - 0.5));
        }
        setCurrentExerciseIndex(0);
        setCurrentQuestionIndex(0);
        setUserInput("");
        setSelectedOption(null);
        setShowResult(false);
        setScore(0);
        setCompleted(false);
        setShowTranscript(false);
        stop();
    };

    if (!initialized || !currentExercise) {
        return (
            <div className="flex items-center justify-center p-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (completed) {
        const percentage = Math.round((score / totalItems) * 100);
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                            Practice Complete!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center p-8">
                        <div className="relative inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-6">
                            <Trophy className="text-primary w-16 h-16" />
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                                {percentage}%
                            </div>
                        </div>
                        <p className="text-xl mb-8 font-medium">
                            You scored {score} out of {totalItems}!
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button onClick={handleRestart} size="lg" className="px-8">
                                Try Again
                            </Button>
                            <Button
                                onClick={() => router.push(`/listening/${levelSlug}`)}
                                variant="outline"
                                size="lg"
                            >
                                {type === "dictation" ? "Back to Mode Selection" : "Select Another Passage"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.push(`/listening/${levelSlug}`)}
                        className="rounded-full"
                    >
                        <ArrowLeft size={20} />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold mb-1">
                            {type === "dictation" ? "Dictation Practice" : "Comprehension Practice"}
                        </h1>
                        <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Level {level}</p>
                    </div>
                </div>
                <CEFRBadge level={level} />
            </div>

            <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">
                        Progress: {currentProgress + 1} / {totalItems}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {Math.round(((currentProgress + 1) / totalItems) * 100)}%
                    </p>
                </div>
                <Progress
                    value={((currentProgress + 1) / totalItems) * 100}
                    className="h-2"
                />
            </div>

            <Card className="shadow-lg border-primary/20 bg-card/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <AudioLines className="h-5 w-5 text-primary" />
                        {currentExercise.title} {type === "comprehension" && `(Question ${currentQuestionIndex + 1}/6)`}
                    </CardTitle>
                    {type === "comprehension" && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowTranscript(!showTranscript)}
                            className="text-muted-foreground gap-1.5 h-8"
                        >
                            <History size={16} />
                            {showTranscript ? "Hide Transcript" : "Show Transcript"}
                        </Button>
                    )}
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-muted/40 rounded-2xl border-2 border-dashed border-primary/20">
                        <div className="flex items-center gap-6 mb-8">
                            <Button
                                variant={isSpeaking && !isPaused ? "secondary" : "default"}
                                size="icon"
                                className="h-16 w-16 rounded-full shadow-lg active:scale-95 transition-all"
                                onClick={isSpeaking && !isPaused ? pause : handlePlay}
                            >
                                {isSpeaking && !isPaused ? (
                                    <Pause className="h-8 w-8 text-primary-foreground" />
                                ) : (
                                    <Play className="h-8 w-8 ml-1 text-primary-foreground" />
                                )}
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="h-12 w-12 rounded-full hover:bg-muted"
                                onClick={() => { stop(); handlePlay(); }}
                                disabled={!isSpeaking && !isPaused}
                            >
                                <RotateCcw className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="w-full max-w-xs space-y-4">
                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                <span>Speed Boost</span>
                                <span className="text-primary font-bold">{speed}x</span>
                            </div>
                            <Slider
                                value={[speed]}
                                min={0.5}
                                max={1.5}
                                step={0.25}
                                onValueChange={(val) => setSpeed(val[0])}
                            />
                            <div className="flex justify-between text-[10px] font-black text-muted-foreground/50 px-1 uppercase tracking-tighter">
                                <span>Slow Mode</span>
                                <span>Regular</span>
                                <span>Pro Speed</span>
                            </div>
                        </div>
                    </div>

                    {showTranscript && type === "comprehension" && (
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl italic text-muted-foreground animate-in zoom-in-95 duration-300">
                            {(currentExercise as ComprehensionExercise).transcript}
                        </div>
                    )}

                    <div className="space-y-6">
                        {type === "dictation" ? (
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-primary/70 ml-1">Write down what you heard</label>
                                <Input
                                    placeholder="Type here..."
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    disabled={showResult}
                                    className="text-lg py-10 bg-background/50 border-primary/20 focus-visible:ring-primary/30 text-center"
                                    onKeyDown={(e) => e.key === "Enter" && !showResult && handleCheck()}
                                    autoFocus
                                />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-primary/70 ml-1">
                                    {(currentExercise as ComprehensionExercise).questions[currentQuestionIndex].question}
                                </label>
                                <div className="grid gap-3">
                                    {(currentExercise as ComprehensionExercise).questions[currentQuestionIndex].options.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant={selectedOption === index ? "default" : "outline"}
                                            className={`justify-start h-auto py-5 px-6 text-left border-primary/10 hover:border-primary/40 transition-all ${selectedOption === index ? "shadow-md bg-primary text-primary-foreground scale-[1.02]" : "bg-card/30"
                                                }`}
                                            onClick={() => setSelectedOption(index)}
                                            disabled={showResult}
                                        >
                                            <span className={`mr-4 h-7 w-7 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${selectedOption === index ? "bg-primary-foreground text-primary border-transparent" : "bg-muted text-muted-foreground"
                                                }`}>
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                            <span className="text-base font-medium">{option}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!showResult ? (
                            <div className="flex justify-end pt-4">
                                <Button
                                    size="lg"
                                    onClick={handleCheck}
                                    disabled={type === "dictation" ? !userInput.trim() : selectedOption === null}
                                    className="px-12 font-bold shadow-lg shadow-primary/20"
                                >
                                    Verify My Answer
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
                                <Alert variant={
                                    (type === "dictation"
                                        ? (normalizeText(userInput) === normalizeText((currentExercise as DictationExercise).answer) ? "success" : "destructive")
                                        : (selectedOption === (currentExercise as ComprehensionExercise).questions[currentQuestionIndex].correct ? "success" : "destructive")) as any
                                } className="bg-background/80 backdrop-blur-sm shadow-xl border-2">
                                    {(type === "dictation"
                                        ? (normalizeText(userInput) === normalizeText((currentExercise as DictationExercise).answer))
                                        : (selectedOption === (currentExercise as ComprehensionExercise).questions[currentQuestionIndex].correct)) ? (
                                        <CheckCircle2Icon className="h-5 w-5" />
                                    ) : (
                                        <XCircleIcon className="h-5 w-5" />
                                    )}
                                    <AlertTitle className="text-lg font-black uppercase tracking-tight">
                                        {type === "dictation"
                                            ? (normalizeText(userInput) === normalizeText((currentExercise as DictationExercise).answer) ? "Spot On!" : "Oops! Not Quite")
                                            : (selectedOption === (currentExercise as ComprehensionExercise).questions[currentQuestionIndex].correct ? "Perfect!" : "Try Again!")
                                        }
                                    </AlertTitle>
                                    <AlertDescription className="mt-3">
                                        <div className="space-y-4">
                                            {type === "dictation" && (
                                                <div>
                                                    <p className="text-[10px] font-black uppercase text-muted-foreground/60 mb-1 tracking-widest">Correct Transcript:</p>
                                                    <p className="p-4 bg-muted/30 rounded-xl italic text-foreground font-semibold border border-border/50 text-center text-lg">
                                                        "{(currentExercise as DictationExercise).answer}"
                                                    </p>
                                                </div>
                                            )}
                                            {type === "comprehension" && (
                                                <div className="bg-muted/20 p-4 rounded-xl border border-border/50">
                                                    <p className="text-[10px] font-black uppercase text-muted-foreground/60 mb-2 tracking-widest">Reflect & Learn:</p>
                                                    <p className="text-foreground leading-relaxed font-medium">
                                                        {(currentExercise as ComprehensionExercise).questions[currentQuestionIndex].explanation}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </AlertDescription>
                                </Alert>
                                <div className="flex justify-end">
                                    <Button size="lg" onClick={handleNext} className="px-14 font-bold group shadow-lg shadow-primary/20">
                                        {currentExerciseIndex === exercises.length - 1 && (type === "dictation" || currentQuestionIndex === 5) ? "Finish Session" : "Continue"}
                                        <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rotate-180" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
