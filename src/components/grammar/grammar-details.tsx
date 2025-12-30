import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GrammarTopic } from "@/constants/grammarTopics";
import { QuizSection } from "./quiz-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";

interface GrammarDetailsProps {
  topic: GrammarTopic;
}

export function GrammarDetails({ topic }: GrammarDetailsProps) {
  const lowercaseCategory = topic.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-700">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <div>Grammar</div>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/grammar/${lowercaseCategory}`}>{topic.category}</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="bg-primary/10 border-primary/20 text-primary"
          >
            {topic.category}
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{topic.title}</h2>
        <div className="space-y-2">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {topic.explanationEn}
          </p>
          <p className="text-muted-foreground italic leading-relaxed">
            {topic.explanationVi}
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Structure
        </h3>
        <div className="text-xl font-mono text-primary font-semibold">
          {topic.structure}
        </div>
      </div>

      {(topic.signalsEn || topic.signalsVi) && (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Signs of Identification / Dấu hiệu nhận biết
          </h3>
          <div className="space-y-2">
            {topic.signalsEn && <div className="text-base text-foreground/90">{topic.signalsEn}</div>}
            {topic.signalsVi && <div className="text-sm text-muted-foreground italic">{topic.signalsVi}</div>}
          </div>
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-xl font-medium">Examples</h3>
        <div className="grid gap-4">
          {topic.examples.map((example, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-muted/30 border border-white/5 hover:bg-muted/50 transition-colors"
            >
              <div className="text-lg font-medium text-foreground mb-1">
                {example.en}
              </div>
              <div className="text-sm text-muted-foreground">{example.vi}</div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/10" />

      <QuizSection topic={topic} />
    </div>
  );
}
