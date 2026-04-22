import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Response | Context Base Learning",
  description: "Practice English question and response exercises",
};

export default function QuestionResponseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
