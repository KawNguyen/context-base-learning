"use client";

import Image from "next/image";

interface PhotoCardProps {
    imageUrl: string;
}

export function PhotoCard({ imageUrl }: PhotoCardProps) {
    return (
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-card group bg-muted">
            <Image
                src={imageUrl}
                alt="TOEIC Scene"
                fill
                className="object-cover transition-opacity duration-500"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
    );
}
