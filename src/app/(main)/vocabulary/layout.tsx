import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Vocabulary | Context Base Learning",
  description: "Expand your English vocabulary with practical lessons",
};

export default function VocabularyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
