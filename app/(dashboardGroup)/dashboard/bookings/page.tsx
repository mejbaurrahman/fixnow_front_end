import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BookingStatus } from "@/components/dashboard/booking-status";

export default function CustomerBookingsPage() {
  const bookings = [
    {
      id: "BK-1001",
      service: "Home Cleaning",
      technician: "Abdul Karim",
      date: "Aug 25, 2026",
      time: "10:00 AM",
      status: "ACCEPTED" as const,
    },
    {
      id: "BK-1002",
      service: "Plumbing Repair",
      technician: "Rahim Ahmed",
      date: "Aug 27, 2026",
      time: "02:00 PM",
      status: "PAID" as const,
    },
    {
      id: "BK-1003",
      service: "Electrical Service",
      technician: "Hasan Mahmud",
      date: "Aug 20, 2026",
      time: "11:00 AM",
      status: "COMPLETED" as const,
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold md:text-3xl">My Bookings</h1>

      <p className="mt-2 text-muted-foreground">
        Track and manage all your service bookings.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border bg-card">
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead className="border-b bg-muted/40">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-medium">
                  Booking
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Technician
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Date
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-5 py-4">
                    <p className="font-medium">{booking.service}</p>

                    <p className="text-xs text-muted-foreground">
                      {booking.id}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm">{booking.technician}</td>

                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4 text-muted-foreground" />
                      {booking.date}
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {booking.time}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <BookingStatus status={booking.status} />
                  </td>

                  <td className="px-5 py-4 text-right">
                    {booking.status === "ACCEPTED" && (
                      <Button size="sm">Pay Now</Button>
                    )}

                    {booking.status === "COMPLETED" && (
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="divide-y md:hidden">
          {bookings.map((booking) => (
            <div key={booking.id} className="space-y-4 p-5">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="font-medium">{booking.service}</p>

                  <p className="text-xs text-muted-foreground">{booking.id}</p>
                </div>

                <BookingStatus status={booking.status} />
              </div>

              <p className="text-sm text-muted-foreground">
                {booking.technician}
              </p>

              <p className="text-sm text-muted-foreground">
                {booking.date} · {booking.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
