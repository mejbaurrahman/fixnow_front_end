import {
  BriefcaseBusiness,
  CalendarClock,
  DollarSign,
  Users,
} from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { BookingStatus } from "@/components/dashboard/booking-status";

export default function TechnicianDashboard() {
  return (
    <div className="p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Technician Dashboard</p>

        <h1 className="mt-1 text-2xl font-bold md:text-3xl">
          Good morning, Abdul 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your jobs, bookings and earnings.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Upcoming Jobs"
          value="8"
          icon={<BriefcaseBusiness />}
        />

        <StatCard title="Pending Requests" value="4" icon={<CalendarClock />} />

        <StatCard title="Total Customers" value="126" icon={<Users />} />

        <StatCard title="Total Earnings" value="$8,450" icon={<DollarSign />} />
      </div>

      <div className="mt-8 rounded-xl border bg-card">
        <div className="border-b p-5">
          <h2 className="font-semibold">Incoming bookings</h2>

          <p className="text-sm text-muted-foreground">
            Review and manage customer requests.
          </p>
        </div>

        <div className="divide-y">
          {[
            {
              customer: "Rahim Ahmed",
              service: "Plumbing Repair",
              date: "Aug 25, 2026",
              status: "REQUESTED" as const,
            },
            {
              customer: "Karim Hasan",
              service: "Pipe Installation",
              date: "Aug 27, 2026",
              status: "PAID" as const,
            },
            {
              customer: "Nadia Islam",
              service: "Bathroom Repair",
              date: "Aug 29, 2026",
              status: "IN_PROGRESS" as const,
            },
          ].map((booking) => (
            <div
              key={booking.customer}
              className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p className="font-medium">{booking.service}</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {booking.customer} · {booking.date}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <BookingStatus status={booking.status} />

                {booking.status === "REQUESTED" && (
                  <>
                    <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                      Accept
                    </button>

                    <button className="rounded-md border px-3 py-2 text-sm font-medium">
                      Decline
                    </button>
                  </>
                )}

                {booking.status === "PAID" && (
                  <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                    Start Job
                  </button>
                )}

                {booking.status === "IN_PROGRESS" && (
                  <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
