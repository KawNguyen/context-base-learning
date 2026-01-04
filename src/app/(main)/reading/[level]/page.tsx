import { ReadingInterface } from "@/components/reading/reading-interface";
import { unslugify } from "@/lib/utils";

interface PageProps {
  params: {
    level: string;
  };
}

export default async function ReadingLevelPage({ params }: PageProps) {
  const { level } = await params;
  const slug = unslugify(level);
  return <ReadingInterface level={slug} />;
}
