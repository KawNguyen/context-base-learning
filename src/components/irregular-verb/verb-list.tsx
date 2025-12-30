"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { irregularVerbs } from "@/constants/irregularVerbs"

export function VerbList() {
    const [search, setSearch] = useState("")

    const filteredVerbs = useMemo(() => {
        const query = search.toLowerCase().trim()
        if (!query) return irregularVerbs

        return irregularVerbs.filter(
            (verb) =>
                verb.base.toLowerCase().includes(query) ||
                verb.past.toLowerCase().includes(query) ||
                verb.participle.toLowerCase().includes(query) ||
                verb.meaning.toLowerCase().includes(query),
        )
    }, [search])

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                    placeholder="Tìm kiếm động từ (V1, V2, V3) hoặc ý nghĩa..."
                    className="pl-10 h-12 bg-card border-border rounded-xl shadow-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="font-bold text-foreground w-[20%]">Nguyên thể (V1)</TableHead>
                            <TableHead className="font-bold text-foreground w-[20%]">Quá khứ (V2)</TableHead>
                            <TableHead className="font-bold text-foreground w-[20%]">Phân từ II (V3)</TableHead>
                            <TableHead className="font-bold text-foreground">Ý nghĩa</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredVerbs.length > 0 ? (
                            filteredVerbs.map((verb) => (
                                <TableRow key={verb.base} className="hover:bg-muted/30 transition-colors">
                                    <TableCell className="font-bold text-primary text-base">{verb.base}</TableCell>
                                    <TableCell className="font-medium font-mono">{verb.past}</TableCell>
                                    <TableCell className="font-medium font-mono">{verb.participle}</TableCell>
                                    <TableCell className="text-muted-foreground italic">{verb.meaning}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                                    Không tìm thấy kết quả phù hợp cho "{search}"
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="text-xs text-muted-foreground text-right px-2 italic">
                Đang hiển thị {filteredVerbs.length} động từ
            </div>
        </div>
    )
}
