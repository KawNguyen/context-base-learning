import { Quiz } from "@/components/irregular-verb/quiz";
import { VerbList } from "@/components/irregular-verb/verb-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BrainCircuit } from "lucide-react";

export default function IrregularVerbsPage() {
  return (
    <section className="">
      <Tabs defaultValue="list" className="space-y-6">
        <div className="flex justify-center">
          <TabsList className="bg-card border border-border h-14 p-1 rounded-2xl shadow-sm">
            <TabsTrigger
              value="list"
              className="rounded-xl px-8 h-full gap-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BookOpen className="h-4 w-4" /> List
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="rounded-xl px-8 h-full gap-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BrainCircuit className="h-4 w-4" /> Quiz
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="list"
          className="animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none"
        >
          <VerbList />
        </TabsContent>

        <TabsContent
          value="quiz"
          className="animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none"
        >
          <Quiz />
        </TabsContent>
      </Tabs>
    </section>
  );
}
