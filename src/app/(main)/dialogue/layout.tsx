import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Dialogue | Context Base Learning",
  description: "Practice English dialogue conversations",
};

export default function DialogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
