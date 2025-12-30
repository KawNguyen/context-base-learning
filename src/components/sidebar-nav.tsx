import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, PenTool, Search } from "lucide-react";

const navItems = [
  {
    title: "Dictionary",
    href: "/",
    icon: Search,
  },
  {
    title: "Quiz",
    href: "/quiz",
    icon: PenTool,
  },
  {
    title: "Grammar",
    href: "/grammar",
    icon: BookOpen,
  },
  {
    title: "Reading",
    href: "/reading",
    icon: GraduationCap,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  const locale = pathname?.split("/")[1] || "";

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const linkHref = locale ? `/${locale}${item.href}` : item.href;
        return (
          <Link key={item.href} href={linkHref}>
            <Button
              variant={pathname === linkHref ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === linkHref && "bg-primary text-primary-foreground"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
