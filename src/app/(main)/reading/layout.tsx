import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Reading | Context Base Learning",
  description: "Enhance your English reading comprehension skills",
};

export default function ReadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
