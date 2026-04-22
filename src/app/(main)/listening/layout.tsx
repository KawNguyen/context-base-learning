import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Listening | Context Base Learning",
  description: "Improve your English listening skills",
};

export default function ListeningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
