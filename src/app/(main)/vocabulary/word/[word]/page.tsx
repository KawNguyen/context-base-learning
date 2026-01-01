import WordDetail from "@/components/vocab/word-detail";
import { allVocabulary, VocabularyWord } from "@/constants/vocabulary";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { word: string } }) {
  const vocab = await params;
  const wordData = allVocabulary.find(
    (w: VocabularyWord) => w.slug === vocab.word,
  );

  console.log(vocab.word);

  if (!wordData) {
    notFound();
  }

  return <WordDetail word={wordData} />;
}
