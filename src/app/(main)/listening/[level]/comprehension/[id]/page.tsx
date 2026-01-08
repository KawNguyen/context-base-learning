import { ListeningInterface } from "@/components/listening/listening-interface";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { LISTENING_DATA } from "@/constants/listening/data";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        level: string;
        id: string;
    }>;
}

export default async function ListeningPassagePracticePage({ params }: PageProps) {
    const { level, id } = await params;
    const cefrLevel = unslugify(level).toUpperCase() as CEFRLevel;

    const levelData = LISTENING_DATA[level.toLowerCase()];

    if (!levelData) {
        return notFound();
    }

    // Find the specific passage
    const passage = levelData.comprehensions.find(p => p.id === id);

    if (!passage) {
        return notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <ListeningInterface
                exercises={[passage]}
                level={cefrLevel}
                type="comprehension"
            />
        </main>
    );
}
