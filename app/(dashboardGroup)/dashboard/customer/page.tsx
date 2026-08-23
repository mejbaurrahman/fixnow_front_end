import { CalendarCheck, CheckCircle2, Clock3, DollarSign } from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { BookingStatus } from "@/components/dashboard/booking-status";

export default function CustomerDashboard() {
  return (
    <div className="p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back,</p>

        <h1 className="text-2xl font-bold md:text-3xl">John 👋</h1>

        <p className="mt-2 text-muted-foreground">
          Here's what's happening with your bookings.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Bookings" value="24" icon={<CalendarCheck />} />

        <StatCard title="Active Bookings" value="3" icon={<Clock3 />} />

        <StatCard title="Completed" value="21" icon={<CheckCircle2 />} />

        <StatCard title="Total Spent" value="$1,240" icon={<DollarSign />} />
      </div>

      <div className="mt-8 rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="font-semibold">Recent bookings</h2>

            <p className="text-sm text-muted-foreground">
              Your latest service requests
            </p>
          </div>
        </div>

        <div className="divide-y">
          {[
            {
              service: "Home Cleaning",
              technician: "Abdul Karim",
              status: "ACCEPTED",
              date: "Aug 25, 2026",
            },
            {
              service: "Plumbing Repair",
              technician: "Rahim Ahmed",
              status: "PAID",
              date: "Aug 27, 2026",
            },
            {
              service: "Electrical Service",
              technician: "Hasan Mahmud",
              status: "COMPLETED",
              date: "Aug 20, 2026",
            },
          ].map((booking) => (
            <div
              key={booking.service}
              className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">{booking.service}</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {booking.technician} · {booking.date}
                </p>
              </div>

              <BookingStatus
                status={
                  booking.status as
                    | "REQUESTED"
                    | "ACCEPTED"
                    | "DECLINED"
                    | "PAID"
                    | "IN_PROGRESS"
                    | "COMPLETED"
                    | "CANCELLED"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
