"use client";

import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FolderTree,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const customerItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Bookings",
    href: "/dashboard/bookings",
    icon: ClipboardList,
  },
  {
    label: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
];

const technicianItems = [
  {
    label: "Overview",
    href: "/dashboard/technician",
    icon: LayoutDashboard,
  },
  {
    label: "Bookings",
    href: "/dashboard/technician/bookings",
    icon: ClipboardList,
  },
  {
    label: "Availability",
    href: "/dashboard/technician/availability",
    icon: CalendarDays,
  },
  {
    label: "Profile",
    href: "/dashboard/technician/profile",
    icon: UserRound,
  },
];

const adminItems = [
  {
    label: "Overview",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    label: "Bookings",
    href: "/dashboard/admin/bookings",
    icon: ClipboardList,
  },
  {
    label: "Categories",
    href: "/dashboard/admin/categories",
    icon: FolderTree,
  },
];

export function DashboardSidebar() {
  // Temporary role.
  // Later this will come from authenticated user.
  const role = "CUSTOMER";

  const items =
    role === "CUSTOMER"
      ? customerItems
      : role === "TECHNICIAN"
        ? technicianItems
        : adminItems;

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-card md:block">
      <div className="sticky top-0 flex h-screen flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wrench className="size-4" />
            </div>

            <span className="font-bold">
              FixIt<span className="text-primary">Now</span>
            </span>
          </Link>
        </div>

        {/* User */}
        <div className="border-b p-4">
          <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UserRound className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">John Doe</p>

              <p className="text-xs text-muted-foreground">Customer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t p-4">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <LogOut className="size-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
