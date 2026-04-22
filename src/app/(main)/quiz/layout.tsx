import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Quiz | Context Base Learning",
  description: "Test your English knowledge with interactive quizzes",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
