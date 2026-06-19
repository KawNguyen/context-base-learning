import { TestSelection } from "@/components/700-toeic/test-selection";

export default async function ComponentName() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">700 Toeic</h1>
        <p className="text-muted-foreground text-lg">
          Choose a part to start learning.
        </p>
      </div>
      <TestSelection />
    </main>
  );
}
