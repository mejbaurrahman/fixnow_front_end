import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import NavBar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex min-h-screen">
        <NavBar />
        <DashboardSidebar />

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
