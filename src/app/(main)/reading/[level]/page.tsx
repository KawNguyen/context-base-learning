import { PassageSelection } from "@/components/reading/passage-selection";
import { unslugify } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function ReadingLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

  return <PassageSelection level={cefrLevel} />;
}
