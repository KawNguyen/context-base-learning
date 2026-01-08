"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

interface PhotoCardProps {
  imageUrl: string;
}

export function PhotoCard({ imageUrl }: PhotoCardProps) {
  return (
    <AspectRatio ratio={4 / 3} className="relative w-full overflow-hidden rounded-lg bg-gray-200">
      <Image
        src={imageUrl}
        alt="TOEIC Scene"
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
    </AspectRatio>
  );
}
