import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Completion | Context Base Learning",
  description: "Master text completion exercises in English",
};

export default function TextCompletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
