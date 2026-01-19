import { VocabularyList } from "@/components/vocab/vocabulary-list";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const vocab = await params;

  return <VocabularyList categorySlug={vocab.category} />;
}
