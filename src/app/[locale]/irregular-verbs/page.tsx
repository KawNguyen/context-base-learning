import { Quiz } from "@/components/irregular-verb/quiz"
import { VerbList } from "@/components/irregular-verb/verb-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BrainCircuit } from "lucide-react"

export default function IrregularVerbsPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden border-b border-border bg-card/50">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <BrainCircuit className="h-4 w-4" />
                        Học tập thông minh
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
                        Động từ <span className="text-primary italic">Bất quy tắc</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Tra cứu và luyện tập danh sách động từ bất quy tắc tiếng Anh phổ biến nhất với giao diện trực quan và bài
                        tập tương tác.
                    </p>
                </div>

                {/* Background Accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/40 blur-[150px] rounded-full" />
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <Tabs defaultValue="list" className="space-y-12">
                    <div className="flex justify-center">
                        <TabsList className="bg-card border border-border h-14 p-1 rounded-2xl shadow-sm">
                            <TabsTrigger
                                value="list"
                                className="rounded-xl px-8 h-full gap-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <BookOpen className="h-4 w-4" /> Danh sách
                            </TabsTrigger>
                            <TabsTrigger
                                value="quiz"
                                className="rounded-xl px-8 h-full gap-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <BrainCircuit className="h-4 w-4" /> Luyện tập
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none">
                        <VerbList />
                    </TabsContent>

                    <TabsContent value="quiz" className="animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none">
                        <Quiz />
                    </TabsContent>
                </Tabs>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                        © 2025 English Mastery. Công cụ học tập động từ bất quy tắc.
                    </p>
                </div>
            </footer>
        </main>
    )
}
