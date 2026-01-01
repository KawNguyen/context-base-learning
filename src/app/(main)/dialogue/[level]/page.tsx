import { DialogueInterface } from "@/components/dialogue/dialogue-interface";

interface PageProps {
    params: {
        level: string;
    };
}

export default async function DialogueLevelPage({ params }: PageProps) {
    const { level } = await params;
    return <DialogueInterface level={level} />;
}
