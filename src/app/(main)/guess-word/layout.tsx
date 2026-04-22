import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guess Word Game | Context Base Learning",
  description: "Guess the English word from its Vietnamese meaning",
};

export default function GuessWordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
