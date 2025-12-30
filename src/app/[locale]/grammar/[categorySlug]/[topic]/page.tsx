import { GrammarDetails } from "@/components/grammar/grammar-details";
import { grammarTopics } from "@/constants/grammarTopics";
import { notFound } from "next/navigation";

export default async function TopicPage(props: { params: { topic: string } }) {
  const { topic } = await props.params;
  const topicData = grammarTopics.find((t) => t.id === topic);

  if (!topicData) {
    notFound();
  }

  return <GrammarDetails topic={topicData} />;
}
