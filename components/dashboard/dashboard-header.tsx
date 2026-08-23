// components/dashboard/dashboard-header.tsx

"use client";

import { Bell, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { DashboardSidebar, DashboardRole } from "./dashboard-sidebar";

interface DashboardHeaderProps {
  role: DashboardRole;
}

export function DashboardHeader({ role }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6 lg:px-8">
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" size="icon" className="size-9">
              <Menu className="size-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-280px p-0 sm:w-[320px]">
            <SheetTitle className="sr-only">Dashboard navigation</SheetTitle>

            <div className="h-dvh">
              <DashboardSidebar role={role} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop title */}
      <div className="hidden lg:block">
        <p className="text-sm font-medium capitalize">{role} Dashboard</p>
      </div>

      {/* Mobile title */}
      <div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
        <span className="font-bold">FixNow</span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="size-9">
          <Bell className="size-5" />

          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  );
}
