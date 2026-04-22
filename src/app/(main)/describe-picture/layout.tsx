import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Description | Context Base Learning",
  description: "Describe English pictures in detail",
};

export default function DescribePictureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
