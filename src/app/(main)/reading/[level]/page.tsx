import { ReadingInterface } from "@/components/reading/reading-interface";

interface PageProps {
    params: {
        level: string;
    };
}

export default async function ReadingLevelPage({ params }: PageProps) {
    const { level } = await params;
    return <ReadingInterface level={level} />;
}
