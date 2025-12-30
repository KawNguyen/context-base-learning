"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
];

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/vi") ? "vi" : "en";
  const [pendingLocale, setPendingLocale] = useState<string | null>(null);

  useEffect(() => {
    if (!pendingLocale) return;

    document.cookie = `cbl_locale=${pendingLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
  }, [pendingLocale]);

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|vi)/, "");
    setPendingLocale(newLocale);
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {currentLocale.toUpperCase()}
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={currentLocale === lang.code ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
