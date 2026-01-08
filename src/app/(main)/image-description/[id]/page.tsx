import { ImageDescriptionInterface } from "@/components/image-description/image-description-interface";
import { notFound } from "next/navigation";
import { imageQuestions } from "@/constants/imageQuestions";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ImageExercisePage({ params }: PageProps) {
  const { id } = await params;
  const questionId = parseInt(id);
  const questionIndex = imageQuestions.findIndex((q) => q.id === questionId);

  if (questionIndex === -1) {
    notFound();
  }

  return (
    <main className="container py-6 max-w-full mx-auto px-4">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold pl-4 border-primary/20">
            Practice Session
          </h1>
        </div>
      </div>

      <ImageDescriptionInterface initialIndex={questionIndex} />
    </main>
  );
}
