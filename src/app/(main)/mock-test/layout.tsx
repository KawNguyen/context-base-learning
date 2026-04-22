import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mock Test | Context Base Learning",
  description: "Take a comprehensive mock test for English certification",
};

export default function MockTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
