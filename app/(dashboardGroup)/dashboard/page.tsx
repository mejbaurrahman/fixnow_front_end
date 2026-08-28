import { CalendarCheck, CheckCircle2, Clock3, DollarSign } from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { BookingStatus } from "@/components/dashboard/booking-status";
import { getMe } from "@/service/getMe";
import { getBookings } from "../_actions/getBookings";
import { IBooking } from "@/lib/responseType";

export default async function CustomerDashboard() {
  const user = await getMe();
  const result = await getBookings();
  const bookings = result?.data ? result.data : [];
  const completedBooking = bookings.filter(
    (booking: IBooking) => booking.status == "COMPLETED",
  );

  const totalEarnings = bookings?.reduce((total: number, booking: IBooking) => {
    if (["PAID", "IN_PROGRESS", "COMPLETED"].includes(booking.status)) {
      return total + booking.totalAmount;
    }

    return total;
  }, 0);
  return (
    <div className="p-4 md:p-8">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back,</p>

        <h1 className="text-2xl font-bold md:text-3xl">
          {user?.data?.profile?.name} 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here's what's happening with your activities
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Bookings"
          value={bookings.length}
          icon={<CalendarCheck />}
        />

        <StatCard
          title="Completed"
          value={completedBooking.length}
          icon={<CheckCircle2 />}
        />

        <StatCard
          title="Total Spent"
          value={totalEarnings}
          icon={<DollarSign />}
        />
      </div>
    </div>
  );
}
