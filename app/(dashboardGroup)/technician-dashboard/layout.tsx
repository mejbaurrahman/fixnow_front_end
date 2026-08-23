import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function TechnicianDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-muted/30">
      <div className="flex min-h-dvh">
        {/* Desktop Sidebar */}
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-background lg:block">
          <DashboardSidebar role="technician" />
        </aside>

        {/* Main */}
        <div className="flex min-h-dvh min-w-0 flex-1 flex-col lg:pl-2">
          <DashboardHeader role="technician" />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-[1600px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
