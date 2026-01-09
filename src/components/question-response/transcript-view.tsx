interface TranscriptViewProps {
  question: string;
  responses: string[];
  correctResponseIndex: number;
}

export function TranscriptView({
  question,
  responses,
  correctResponseIndex,
}: TranscriptViewProps) {
  return (
    <div className="bg-muted/20 p-6 rounded-xl border border-border/50 text-left space-y-2">
      <p className="font-semibold text-foreground">
        Question:{" "}
        <span className="font-normal italic text-muted-foreground">
          {question}
        </span>
      </p>
      <div className="space-y-1 mt-2">
        {responses.map((resp, idx) => (
          <p
            key={idx}
            className={
              idx === correctResponseIndex
                ? "text-primary font-bold"
                : "text-muted-foreground"
            }
          >
            {String.fromCharCode(65 + idx)}. {resp}
          </p>
        ))}
      </div>
    </div>
  );
}
