import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { BookingStatus } from "@/components/dashboard/booking-status";
import { getBookingsByTechnician } from "../_actions/getBookingsByTechnician";
import { BookingStatusAction } from "@/components/technicians/booking-status-action";
import { IBooking } from "../_types/typesInTechinicianDashboard";

export default async function TechnicianBookingsPage() {
  const result = await getBookingsByTechnician();

  const bookings = result?.data || [];

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">My Bookings</h1>

        <p className="text-muted-foreground">
          Manage customer service requests
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-5 py-4 text-left">Customer</th>

                  <th className="px-5 py-4 text-left">Service</th>

                  <th className="px-5 py-4">Date</th>

                  <th className="px-5 py-4">Status</th>

                  <th className="px-5 py-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {bookings.map((booking: IBooking) => (
                  <tr key={booking.id}>
                    <td className="px-5 py-4">
                      <p className="font-medium">{booking?.customer.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {booking?.customer.phone}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-medium">{booking?.service.title}</p>

                      <p className="text-sm text-muted-foreground">
                        ৳{booking.totalAmount}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="size-4" />

                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </div>

                      <span className="text-sm text-muted-foreground">
                        {booking?.slot}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <BookingStatus status={booking?.status} />
                    </td>

                    <td className="px-5 py-4">
                      <BookingStatusAction
                        bookingId={booking.id}
                        status={booking.status}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
