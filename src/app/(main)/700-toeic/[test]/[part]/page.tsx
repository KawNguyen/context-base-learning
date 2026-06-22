import { Part5 } from "@/components/700-toeic/part-5";
import { Part6 } from "@/components/700-toeic/part-6";
import { Part7Selection } from "@/components/700-toeic/part-7/part-7-selection";
import { notFound } from "next/navigation";

const PART_COMPONENTS = {
  "part-5": Part5,
  "part-6": Part6,
  "part-7": Part7Selection,
} as const;

export default async function Page({
  params,
}: {
  params: {
    test: string;
    part: string;
  };
}) {
  const { test, part } = await params;

  const Component = PART_COMPONENTS[part as keyof typeof PART_COMPONENTS];

  if (!Component) {
    notFound();
  }

  return <Component testSlug={test} />;
}
