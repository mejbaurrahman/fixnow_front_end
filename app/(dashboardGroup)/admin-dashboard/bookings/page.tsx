import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { BookingStatus } from "@/components/dashboard/booking-status";

import { getBookingsByAdmin } from "../../_actions/getBookings";
import { IRBookingByADMIN } from "../../_types/admin-dasboard-types.";

export default async function AdminBookingsPage() {
  const result = await getBookingsByAdmin();

  const bookings: IRBookingByADMIN[] = result?.data || [];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Bookings Management</h1>

        <p className="mt-2 text-muted-foreground">
          Manage all customer bookings
        </p>
      </div>

      <div className="hidden overflow-hidden rounded-xl border md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/40">
              <tr>
                <th className="p-4 text-left">Booking ID</th>

                <th className="text-left">Customer</th>

                <th className="text-left">Technician</th>

                <th className="text-left">Service</th>

                <th className="text-left">Amount</th>

                <th className="text-left">Status</th>

                <th className="text-right pr-4">view</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking: IRBookingByADMIN) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-4 font-medium">#{booking.id.slice(-8)}</td>

                  <td>{booking.customer.name}</td>

                  <td>{booking.technician.name}</td>

                  <td>{booking.service.title}</td>

                  <td>৳{booking.totalAmount}</td>

                  <td>
                    <BookingStatus status={booking.status} />
                  </td>

                  <td className="pr-4 text-right">
                    <Link href={`/admin-dashboard/bookings/${booking.id}`}>
                      <Button size="icon">
                        <ArrowRight className="size-4 cursor-pointer" />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-4 md:hidden">
        {bookings.map((booking) => (
          <div key={booking.id} className="rounded-xl border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Booking ID</p>

                <p className="font-semibold">#{booking.id.slice(-8)}</p>
              </div>

              <BookingStatus status={booking.status} />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Customer</span>

                <span className="font-medium">{booking.customer.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Technician</span>

                <span className="font-medium">{booking.technician.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>

                <span className="font-medium text-right">
                  {booking.service.title}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount</span>

                <span className="font-semibold">৳{booking.totalAmount}</span>
              </div>
            </div>

            <Link href={`/dashboard/admin/bookings/${booking.id}`}>
              <Button className="w-full" variant="outline">
                View Details
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
