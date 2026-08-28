import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BookingStatus } from "@/components/dashboard/booking-status";
import { getBookings } from "../../_actions/getBookings";
import { IBooking } from "@/lib/responseType";
import { Booking } from "@/app/(publicGroup)/_types/types";
import { MdDetails } from "react-icons/md";
import Link from "next/link";
import PayNowButton from "@/components/dashboard/pay-now-button";

export default async function CustomerBookingsPage() {
  const result = await getBookings();

  const bookings = result?.data ? result.data : [];
  // console.log(bookings);
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
                <th className="px-5 py-4 text-right text-sm font-medium">
                  Details
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {bookings.map((booking: Booking) => (
                <tr key={booking.id}>
                  <td className="px-5 py-4">
                    <p className="font-medium">{booking?.service?.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {booking.id}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {booking?.technician?.name}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4 text-muted-foreground" />
                      {booking?.bookingDate}
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {booking?.slot}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <BookingStatus status={booking?.status} />
                  </td>

                  <td className="px-5 py-4 text-right">
                    {booking.status === "ACCEPTED" && (
                      <PayNowButton bookingId={booking.id} />
                    )}

                    {booking.status === "COMPLETED" && (
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link href={`/dashboard/bookings/${booking.id}`}>
                      <Button>
                        <ArrowRight />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="divide-y md:hidden">
          {bookings.map((booking: Booking) => (
            <div key={booking.id} className="space-y-4 p-5">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="font-medium">{booking?.service?.title}</p>

                  <p className="text-xs text-muted-foreground">{booking.id}</p>
                </div>

                <BookingStatus status={booking.status} />
              </div>

              <p className="text-sm text-muted-foreground">
                {booking?.technician?.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {booking?.bookingDate} · {booking?.slot}
              </p>
              <div>
                {booking.status === "ACCEPTED" && (
                  <PayNowButton bookingId={booking.id} />
                )}

                {booking.status === "COMPLETED" && (
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                )}
              </div>
              <Link href={`/dashboard/bookings/${booking.id}`}>
                <Button>
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
