// components/dashboard/dashboard-sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  Users,
  Tags,
  Settings,
  UserRound,
  Clock3,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type DashboardRole = "customer" | "technician" | "admin";

const menuItems = {
  customer: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Bookings",
      href: "/dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
  ],

  technician: [
    {
      title: "Overview",
      href: "/technician-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      href: "/technician-dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Availability",
      href: "/technician-dashboard/availability",
      icon: Clock3,
    },
    {
      title: "Profile",
      href: "/technician-dashboard/profile",
      icon: UserRound,
    },
  ],

  admin: [
    {
      title: "Overview",
      href: "/admin-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/admin-dashboard/users",
      icon: Users,
    },
    {
      title: "Bookings",
      href: "/admin-dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Categories",
      href: "/admin-dashboard/categories",
      icon: Tags,
    },
  ],
};

interface DashboardSidebarProps {
  role: DashboardRole;
  onNavigate?: () => void;
}

export function DashboardSidebar({ role, onNavigate }: DashboardSidebarProps) {
  const pathname = usePathname();

  const items = menuItems[role];

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center border-b px-5">
        <Link href="/" onClick={onNavigate} className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wrench className="size-5" />
          </div>

          <span className="text-xl font-bold tracking-tight">FixItNow</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {role} panel
        </p>

        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                item.href !== "/admin-dashboard" &&
                item.href !== "/technician-dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Settings */}
      <div className="shrink-0 border-t p-4">
        <Link
          href="/settings"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Settings className="size-4 shrink-0" />

          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
