import { CreditCard } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getBookings } from "../../_actions/getBookings";
import { IBooking } from "@/lib/responseType";
import { Booking } from "../../_types/types";

export default async function PaymentsPage() {
  const result = await getBookings();
  const bookings = result?.data ? result.data : [];

  const myPaidBookings = bookings?.filter(
    (booking: IBooking) =>
      booking?.status != "ACCEPTED" || "DECLINED" || "REQUESTED" || "CANCELLED",
  );

  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CreditCard className="size-5" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Payment History</h1>

          <p className="text-sm text-muted-foreground">
            View your previous transactions.
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border bg-card">
        <table className="w-full min-w-700px">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-5 py-4 text-left text-sm">ID</th>
              <th className="px-5 py-4 text-left text-sm">Technician</th>

              <th className="px-5 py-4 text-left text-sm">Service</th>

              <th className="px-5 py-4 text-left text-sm">Date</th>

              <th className="px-5 py-4 text-left text-sm">Amount</th>

              <th className="px-5 py-4 text-left text-sm">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {myPaidBookings.map((payment: Booking) => (
              <tr key={payment.id}>
                <td className="px-5 py-4">
                  <p className="font-medium">{payment.id.slice(-8)}</p>
                </td>

                <td className="px-5 py-4 text-sm">{payment.technician.name}</td>
                <td className="px-5 py-4 text-sm">{payment.service.title}</td>

                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {payment.updatedAt}
                </td>

                <td className="px-5 py-4 font-semibold">
                  {payment.totalAmount}
                </td>

                <td className="px-5 py-4">
                  <Badge variant="secondary">{payment.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
