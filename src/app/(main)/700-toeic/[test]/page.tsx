import { PartSelection } from "@/components/700-toeic/part-selection";

export default async function ComponentName({
  params,
}: {
  params: { test: string };
}) {
  const { test } = await params;
  return <PartSelection testSlug={test} />;
}
