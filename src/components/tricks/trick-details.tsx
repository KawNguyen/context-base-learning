"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trick } from "@/constants/tricks";

interface TrickDetailsProps {
  trick: Trick;
}

export function TrickDetails({ trick }: TrickDetailsProps) {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-4 py-1">
            {trick.category}
          </Badge>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          {trick.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {trick.explanationVi}
        </p>
      </div>

      {trick.structure && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
            Cấu trúc nhanh
          </div>
          <div className="text-xl font-mono font-bold text-foreground">
            {trick.structure}
          </div>
        </div>
      )}

      {trick.signs && (
        <div className="p-6 rounded-xl bg-muted/10 border border-white/5 space-y-6">
          <h3 className="text-xl font-semibold">Signs & Indicators</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {trick.signs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-white/5"
              >
                <span className="text-primary font-bold text-lg whitespace-nowrap min-w-25">
                  {item.sign}
                </span>
                <span className="text-sm text-foreground/80">
                  {item.explanationVi}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {trick.rules && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Important Rules</h3>
          <div className="grid gap-4">
            {trick.rules.map((rule, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-muted/10 border border-white/5"
              >
                <h4 className="font-bold text-primary mb-2 text-lg">
                  {rule.title}
                </h4>
                <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                  {rule.contentVi}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {trick.caution && (
        <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20 space-y-3">
          <div className="flex items-center gap-2 text-destructive font-bold">
            <span className="text-lg">⚠️</span>
            <h4>Lưu ý / Bẫy cần tránh</h4>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed italic">
            {trick.caution}
          </p>
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Examples</h3>
        <div className="grid gap-4">
          {trick.examples.map((example, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-muted/5 border border-white/5 hover:bg-muted/10 transition-all"
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

      <div className="text-center py-10">
        <p className="text-sm text-muted-foreground italic">
          &quot;Học cách nhận biết các thành phần câu giúp bạn giải quyết các
          bài tập Word Form một cách nhanh chóng.&quot;
        </p>
      </div>
    </div>
  );
}
