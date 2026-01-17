"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookA,
  BookOpen,
  Headphones,
  GraduationCap,
  MessageSquare,
  PenTool,
  Search,
  WholeWord,
  Image,
  FileText,
  AudioLines,
  TestTube2,
  Lightbulb,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavMain from "@/components/sidebar/nav-main";
import { grammarTopics } from "@/constants/grammarTopics";
import { tricks } from "@/constants/tricks";
import { getCategorySlug } from "@/lib/utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const _first = pathname?.split("/")[1] || "";
  const supportedLocales = ["en", "vi"];
  const locale = supportedLocales.includes(_first) ? _first : "";
  const homeHref = locale ? `/${locale}/` : "/";

  const data = {
    navMain: [
      { title: "Vocabulary", url: "/vocabulary", icon: BookA },
      { title: "Grammar", url: "/grammar", icon: BookOpen },
      { title: "Tricks", url: "/tricks", icon: Lightbulb },
      { title: "Irregular Verbs", url: "/irregular-verbs", icon: WholeWord },
      { title: "Quiz", url: "/quiz", icon: PenTool },
      { title: "Reading", url: "/reading", icon: GraduationCap },
      { title: "Listening", url: "/listening", icon: Headphones },
      { title: "Dialogue", url: "/dialogue", icon: MessageSquare },
      { title: "Describe Picture", url: "/describe-picture", icon: Image },
      { title: "Text Completion", url: "/text-completion", icon: FileText },
      { title: "Mock Test", url: "/mock-test", icon: TestTube2, tag: "beta" },
      {
        title: "Question Response",
        url: "/question-response",
        icon: AudioLines,
      },
    ],
  };

  const categories = Array.from(new Set(grammarTopics.map((t) => t.category)));
  const trickCategories = Array.from(new Set(tricks.map((t) => t.category)));

  const navItems = data.navMain.map((it) => {
    if (it.url !== "/grammar" && it.url !== "/tricks") {
      const linkHref = locale ? `/${locale}${it.url}` : it.url;
      return {
        title: it.title,
        url: linkHref,
        icon: it.icon,
        tag: (it as any).tag,
        isActive: pathname === linkHref,
      };
    }

    if (it.url === "/grammar") {
      const items = categories.map((c) => {
        const catSlug = getCategorySlug(c);
        const urlPath = `/grammar/${catSlug}`;
        const url = locale ? `/${locale}${urlPath}` : urlPath;
        return { title: c, url };
      });

      const isActive = pathname?.includes("/grammar") ?? false;
      const itemUrl = locale ? `/${locale}${it.url}` : it.url;
      return { title: it.title, url: itemUrl, icon: it.icon, items, isActive };
    }

    // Tricks item: build categories as subitems
    const items = trickCategories.map((c) => {
      const catSlug = getCategorySlug(c);
      const urlPath = `/tricks/${catSlug}`;
      const url = locale ? `/${locale}${urlPath}` : urlPath;
      return { title: c, url };
    });

    const isActive = pathname?.includes("/tricks") ?? false;
    const itemUrl = locale ? `/${locale}${it.url}` : it.url;
    return { title: it.title, url: itemUrl, icon: it.icon, items, isActive };
  });

  return (
    <Sidebar variant="inset" collapsible="icon" {...props} className="border-r">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={homeHref}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Search className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Search</span>
                  <span className="truncate text-xs">
                    Find words and topics
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
