"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trick } from "@/constants/tricks";
import { useRouter } from "next/navigation";

interface TrickCardProps {
    trick: Trick;
    categorySlug: string;
}

export function TrickCard({
    trick,
    categorySlug,
}: TrickCardProps) {
    const router = useRouter();
    return (
        <Card
            className="group cursor-pointer transition-all hover:bg-muted/30 border border-white/10"
            onClick={() => router.push(`/tricks/${categorySlug}/${trick.id}`)}
        >
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                    <Badge
                        variant="secondary"
                        className="text-[10px] uppercase tracking-wider"
                    >
                        {trick.category}
                    </Badge>
                </div>
                <CardTitle className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                    {trick.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm text-muted-foreground mt-1">
                    {trick.explanationVi}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-[11px] text-muted-foreground/60 truncate italic">
                    {trick.examples[0]?.en}
                </div>
            </CardContent>
        </Card>
    );
}
