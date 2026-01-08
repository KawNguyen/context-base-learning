"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { imageQuestions } from "@/constants/imageQuestions";
import { Play } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";

export function ImageGallery() {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {imageQuestions.map((q) => (
                <Card
                    key={q.id}
                    className="pt-0 overflow-hidden group relative flex flex-col h-full cursor-pointer border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                    onClick={() => router.push(`/image-description/${q.id}`)}
                >
                    <CardContent className="relative w-full p-0">
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={q.imageUrl}
                                alt={`Photo ${q.id}`}
                                fill
                                className="object-cover h-full w-full"
                            />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-primary p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <Play size={24} className="text-primary-foreground fill-current" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="">
                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Photo {q.id}
                        </span>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
