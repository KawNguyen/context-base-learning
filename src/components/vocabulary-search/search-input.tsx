"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Search className="h-6 w-6" />
          Search Vocabulary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Nhập từ tiếng Anh hoặc tiếng Việt..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="text-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
}
