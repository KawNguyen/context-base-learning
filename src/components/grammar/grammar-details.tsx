import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GrammarTopic } from "@/constants/grammarTopics";
import { QuizSection } from "./quiz-section";

interface GrammarDetailsProps {
  topic: GrammarTopic;
}

export function GrammarDetails({ topic }: GrammarDetailsProps) {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
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
        <div className="space-y-4">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {topic.explanationVi}
          </p>
          {topic.keywords && (
            <div className="flex flex-wrap gap-2 pt-1">
              {topic.keywords.map((kw) => (
                <Badge
                  key={kw}
                  variant="outline"
                  className="bg-primary/10 border-primary/20 text-primary"
                >
                  {kw}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Structure
        </h3>
        <div className="text-xl text-primary font-semibold">
          {topic.structure}
        </div>
      </div>

      {(topic.signalsEn || topic.signalsVi || topic.detailedSigns) && (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Signs & Indicators
          </h3>
          <div className="space-y-4">
            {(topic.signalsEn || topic.signalsVi) && (
              <div className="space-y-2">
                {topic.signalsEn && (
                  <div className="text-base text-foreground/90 font-medium">
                    {topic.signalsEn}
                  </div>
                )}
                {topic.signalsVi && (
                  <div className="text-sm text-muted-foreground italic">
                    {topic.signalsVi}
                  </div>
                )}
              </div>
            )}

            {topic.detailedSigns && (
              <div className="grid gap-3 pt-2">
                {topic.detailedSigns.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-primary font-bold whitespace-nowrap">{item.sign}:</span>
                    <span className="text-sm text-foreground/80">{item.explanationVi}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {topic.usageRules && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Usage Scenarios</h3>
          <div className="grid gap-4">
            {topic.usageRules.map((rule, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-muted/20 border border-white/5">
                <h4 className="font-semibold text-primary mb-2 text-lg">{rule.title}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{rule.contentVi}</p>
              </div>
            ))}
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

      <QuizSection key={topic.title} topic={topic} />
    </div>
  );
}
