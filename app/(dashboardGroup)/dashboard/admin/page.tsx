import { Activity, DollarSign, UserRound, CalendarCheck } from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";

export default function AdminDashboard() {
  return (
    <div className="p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Administration</p>

        <h1 className="mt-1 text-2xl font-bold md:text-3xl">
          Platform Overview
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor your FixItNow platform.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Users" value="5,240" icon={<UserRound />} />

        <StatCard
          title="Active Bookings"
          value="342"
          icon={<CalendarCheck />}
        />

        <StatCard title="Total Revenue" value="$42,500" icon={<DollarSign />} />

        <StatCard title="Platform Activity" value="94%" icon={<Activity />} />
      </div>
    </div>
  );
}
