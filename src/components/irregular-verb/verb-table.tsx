"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { irregularVerbs } from "@/constants/irregularVerbs"

export function VerbTable() {
    const [search, setSearch] = React.useState("")

    const filteredVerbs = React.useMemo(() => {
        return irregularVerbs.filter((verb) =>
            Object.values(verb).some((val) => val.toLowerCase().includes(search.toLowerCase())),
        )
    }, [search])

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Tìm kiếm động từ hoặc ý nghĩa..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="font-bold w-[20%]">Base (V1)</TableHead>
                            <TableHead className="font-bold w-[20%]">Past (V2)</TableHead>
                            <TableHead className="font-bold w-[20%]">Participle (V3)</TableHead>
                            <TableHead className="font-bold">Meaning</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredVerbs.length > 0 ? (
                            filteredVerbs.map((verb) => (
                                <TableRow key={verb.base} className="hover:bg-muted/30">
                                    <TableCell className="font-medium text-primary">{verb.base}</TableCell>
                                    <TableCell>{verb.past}</TableCell>
                                    <TableCell>{verb.participle}</TableCell>
                                    <TableCell className="text-muted-foreground italic">{verb.meaning}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                    Không tìm thấy kết quả nào.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="text-xs text-muted-foreground text-right px-1">
                Hiển thị {filteredVerbs.length} trên tổng số {irregularVerbs.length} động từ
            </div>
        </div>
    )
}
