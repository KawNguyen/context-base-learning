import AppSidebar from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <DynamicBreadcrumb />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
