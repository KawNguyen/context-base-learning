import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Tricks | Context Base Learning",
  description: "Learn useful English tips and tricks",
};

export default function TricksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
