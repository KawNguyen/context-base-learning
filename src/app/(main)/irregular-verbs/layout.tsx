import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irregular Verbs | Context Base Learning",
  description: "Learn and practice English irregular verbs",
};

export default function IrregularVerbsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
