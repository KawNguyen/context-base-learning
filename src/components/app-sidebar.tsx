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
  Camera,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavMain from "@/components/nav-main";
import { grammarTopics } from "@/constants/grammarTopics";
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
      { title: "Irregular Verbs", url: "/irregular-verbs", icon: WholeWord },
      { title: "Quiz", url: "/quiz", icon: PenTool },
      { title: "Reading", url: "/reading", icon: GraduationCap },
      { title: "Listening", url: "/listening", icon: Headphones },
      { title: "Dialogue", url: "/dialogue", icon: MessageSquare },
      { title: "Image Description", url: "/image-description", icon: Camera },
    ],
  };

  const categories = Array.from(new Set(grammarTopics.map((t) => t.category)));

  const navItems = data.navMain.map((it) => {
    if (it.url !== "/grammar") {
      const linkHref = locale ? `/${locale}${it.url}` : it.url;
      return {
        title: it.title,
        url: linkHref,
        icon: it.icon,
        isActive: pathname === linkHref,
      };
    }

    // Grammar item: build categories as subitems
    const items = categories.map((c) => {
      const catSlug = getCategorySlug(c);
      const urlPath = `/grammar/${catSlug}`;
      const url = locale ? `/${locale}${urlPath}` : urlPath;
      return { title: c, url };
    });

    const isActive = pathname?.includes("/grammar") ?? false;
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
