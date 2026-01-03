import WordDetail from "@/components/vocab/word-detail";
import { AllVocabData, VocabularyWord } from "@/constants/vocabulary";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { word: string } }) {
  const vocab = await params;
  const wordData = AllVocabData.find(
    (w: VocabularyWord) => w.slug === vocab.word,
  );

  console.log(vocab.word);

  if (!wordData) {
    notFound();
  }

  return <WordDetail word={wordData} />;
}
