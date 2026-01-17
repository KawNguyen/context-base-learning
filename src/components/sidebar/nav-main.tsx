"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
    tag?: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Features</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const hasSub = Array.isArray(item.items) && item.items.length > 0;
          const forceSingle = item.title === "Quiz" || item.title === "Reading";

          if (hasSub && !forceSingle) {
            // Check if any sub-item is currently active or if pathname starts with sub-item url
            const hasActiveSubItem = item.items?.some(
              (subItem) =>
                pathname === subItem.url ||
                pathname?.startsWith(subItem.url + "/"),
            );
            const isParentActive = item.isActive || hasActiveSubItem;

            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={isParentActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isParentActive}
                      className="cursor-pointer"
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      {item.tag && (
                        <Badge
                          variant="outline"
                          className="ml-auto bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200"
                        >
                          {item.tag}
                        </Badge>
                      )}
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const isSubActive =
                          pathname === subItem.url ||
                          pathname?.startsWith(subItem.url + "/");
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubActive}
                            >
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          // Render as single menu item (no submenu)
          const isSingleActive =
            pathname === item.url || pathname?.startsWith(item.url + "/");
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={isSingleActive}
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-2 w-full"
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item.tag && (
                    <Badge
                      variant="outline"
                      className="ml-auto bg-linear-to-r from-white to-blue-300 text-blue-500  rounded-full border border-blue-200"
                    >
                      {item.tag}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default NavMain;
