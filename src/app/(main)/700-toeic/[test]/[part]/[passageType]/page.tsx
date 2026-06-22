import { Part7 } from "@/components/700-toeic/part-7/part-7";

export default async function ComponentName({
  params,
}: {
  params: { test: string; part: string; passageType: string };
}) {
  const { test, passageType } = await params;

  return <Part7 testSlug={test} passageType={passageType} />;
}
