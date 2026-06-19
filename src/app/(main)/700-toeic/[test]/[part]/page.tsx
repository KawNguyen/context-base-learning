import { Part5 } from "@/components/700-toeic/part-5";
import { Part6 } from "@/components/700-toeic/part-6";
import { Part7 } from "@/components/700-toeic/part-7";

export default async function ComponentName({
  params,
}: {
  params: { test: string; part: string };
}) {
  const { part, test } = await params;
  return part === "part-5" ? (
    <Part5 testSlug={test} />
  ) : part === "part-6" ? (
    <Part6 testSlug={test} />
  ) : part === "part-7" ? (
    <Part7 testSlug={test} />
  ) : null;
}
