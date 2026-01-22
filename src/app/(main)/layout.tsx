import AppSidebar from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainHeader } from "@/components/main-header";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <MainHeader />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
