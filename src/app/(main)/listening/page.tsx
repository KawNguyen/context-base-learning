import { ListeningLevels } from "@/components/listening/listening-levels";

export default function ListeningPage() {
    return (
        <main>
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-3">Listening Levels</h1>
                <p className="text-muted-foreground text-lg">
                    Choose your English proficiency level to start practicing listening.
                </p>
            </div>
            <ListeningLevels />
        </main>
    );
}
