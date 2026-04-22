import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Grammar | Context Base Learning",
  description: "Master English grammar rules and concepts",
};

export default function GrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
