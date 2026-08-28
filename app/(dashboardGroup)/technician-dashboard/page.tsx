import {
  BriefcaseBusiness,
  CalendarClock,
  DollarSign,
  Users,
} from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { BookingStatus } from "@/components/dashboard/booking-status";
import { getMe } from "@/service/getMe";
import { getBookingsByTechnician } from "./_actions/getBookingsByTechnician";
import { IBooking } from "./_types/typesInTechinicianDashboard";

export default async function TechnicianDashboard() {
  const user = await getMe();
  const result = await getBookingsByTechnician();
  const bookings = result?.data;
  const upcomingJobs = (bookings ?? []).filter((booking: IBooking) =>
    ["PAID", "IN_PROGRESS"].includes(booking.status),
  );

  const requestJobs = (bookings ?? []).filter(
    (booking: IBooking) => booking.status === "REQUESTED",
  );

  const earnings = (bookings ?? []).reduce(
    (total: number, booking: IBooking) => {
      if (["PAID", "IN_PROGRESS", "COMPLETED"].includes(booking.status)) {
        return total + booking.totalAmount;
      }

      return total;
    },
    0,
  );
  return (
    <div className="p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Technician Dashboard</p>

        <h1 className="mt-1 text-2xl font-bold md:text-3xl">
          Welcome {user?.data?.profile.name}, 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your jobs, bookings and earnings.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Upcoming Jobs"
          value={upcomingJobs.length}
          icon={<BriefcaseBusiness />}
        />

        <StatCard
          title="Pending Requests"
          value={requestJobs.length}
          icon={<CalendarClock />}
        />

        <StatCard
          title="Total Customers"
          value={bookings.length}
          icon={<Users />}
        />

        <StatCard
          title="Total Earnings"
          value={`৳${earnings}`}
          icon={<span className="text-xl font-bold">৳</span>}
        />
      </div>
    </div>
  );
}
