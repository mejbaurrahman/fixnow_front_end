// components/dashboard/dashboard-mobile-header.tsx

"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { AdminSidebar } from "./admin/admin-sidebar";

export function DashboardMobileHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b bg-background/95 px-4 backdrop-blur lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-0">
          <AdminSidebar />
        </SheetContent>
      </Sheet>

      <Link href="/dashboard/admin" className="ml-3 font-bold text-lg">
        FixItNow
      </Link>
    </header>
  );
}
