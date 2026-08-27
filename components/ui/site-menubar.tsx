"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  CircleUserRound,
  Compass,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Settings,
  Sparkles,
  User,
  WrenchOff,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IUserResponse, NavbarProps } from "@/lib/responseType";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/service/logout";
import { MdDashboard } from "react-icons/md";

export type MenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

// const defaultMenuItems: MenuItem[] = [
//   { label: "Discover", href: "#discover" },
//   { label: "Features", href: "#features" },
//   { label: "Pricing", href: "#pricing" },
// ];

type SiteMenubarProps = {
  siteName: string;
  menuItems: MenuItem[];
  isLoggedIn?: boolean;
  onLogout?: () => void;
  user?: IUserResponse;
};

const userMenuItems: UserMenuItem[] = [
  {
    label: "Dashboard",
    action: "dashboard",
    type: "button",
    icon: MdDashboard,
  },
  {
    label: "Profile",
    action: "profile",
    href: "/profile",
    type: "link",
    icon: CircleUserRound,
  },
  {
    label: "Settings",
    action: "settings",
    href: "/settings",
    type: "link",
    icon: Settings,
  },
  {
    label: "Logout",
    action: "logout",
    type: "button",
    icon: X,
  },
];

type UserMenuItem =
  | {
      label: string;
      action: string;
      type: "link";
      href: string;
      icon: React.ComponentType<{ className?: string }>;
    }
  | {
      label: string;
      action: string;
      type: "button";
      icon: React.ComponentType<{ className?: string }>;
    };

export function SiteMenubar({
  siteName,
  menuItems,
  onLogout,
  user,
}: SiteMenubarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  const handleUserMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user?.data.profile.role === "CUSTOMER") {
        router.push("/dashboard");
      } else if (user?.data.profile.role === "TECHNICIAN") {
        router.push("/technician-dashboard");
      } else if (user?.data.profile.role === "ADMIN") {
        router.push("/admin-dashboard");
      }

      return;
    }

    if (action == "profile") {
      router.push("/profile");
    }

    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="w-full">
        <div className="mx-auto flex h-20 max-w-9xl items-center justify-between px-2 md:px-2">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${siteName} home`}
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
              <WrenchOff className="size-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">
              {siteName}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {user?.success ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  className="gap-2 rounded-full pl-2 pr-3"
                  aria-expanded={profileOpen}
                  aria-haspopup="menu"
                  onClick={() => setProfileOpen((open) => !open)}
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-foreground">
                    <CircleUserRound className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm">Account</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${profileOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </Button>
                {profileOpen && (
                  <div
                    className="absolute right-0 top-12 w-60 rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-xl"
                    role="menu"
                  >
                    <div className="border-b border-border px-3 py-3">
                      <p className="text-sm font-semibold">
                        {user?.data.profile.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user?.data.profile.role}
                      </p>
                    </div>
                    <div className="pt-2">
                      {userMenuItems.map((item) => {
                        const Icon = item.icon;

                        if (item.type === "link") {
                          return (
                            <Link
                              key={item.action}
                              href={item.href}
                              onClick={() => handleUserMenuAction(item.action)}
                              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-secondary"
                            >
                              <Icon className="size-4" />
                              {item.label}
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={item.action}
                            type="button"
                            onClick={() => handleUserMenuAction(item.action)}
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm hover:bg-secondary cursor-pointer"
                          >
                            <Icon className="size-4" />
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Log in
              </Link>
            )}
          </div>

          <button
            type="button"
            className="rounded-lg p-2 hover:bg-secondary md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/70 px-5 pb-5 md:hidden">
          <nav
            className="flex flex-col gap-1 pt-3"
            aria-label="Mobile navigation"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              {user?.success ? (
                <>
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;

                    if (item.type === "link") {
                      return (
                        <Link
                          key={item.action}
                          href={item.href}
                          onClick={() => handleUserMenuAction(item.action)}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-secondary"
                        >
                          <Icon className="size-4" />
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <button
                        key={item.action}
                        type="button"
                        onClick={() => handleUserMenuAction(item.action)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm hover:bg-secondary cursor-pointer"
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </button>
                    );
                  })}
                </>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex h-8 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  Log in
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export const menuIcons = { Compass, FileText, HelpCircle };
