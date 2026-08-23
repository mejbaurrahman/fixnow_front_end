import { CreditCard } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-1001",
      booking: "BK-1001",
      service: "Home Cleaning",
      amount: "$45",
      date: "Aug 20, 2026",
      status: "Paid",
    },
    {
      id: "PAY-1002",
      booking: "BK-1002",
      service: "Plumbing Repair",
      amount: "$60",
      date: "Aug 18, 2026",
      status: "Paid",
    },
  ];

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
        <table className="w-full min-w-[700px]">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-5 py-4 text-left text-sm">Payment ID</th>

              <th className="px-5 py-4 text-left text-sm">Service</th>

              <th className="px-5 py-4 text-left text-sm">Date</th>

              <th className="px-5 py-4 text-left text-sm">Amount</th>

              <th className="px-5 py-4 text-left text-sm">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-5 py-4">
                  <p className="font-medium">{payment.id}</p>

                  <p className="text-xs text-muted-foreground">
                    {payment.booking}
                  </p>
                </td>

                <td className="px-5 py-4 text-sm">{payment.service}</td>

                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {payment.date}
                </td>

                <td className="px-5 py-4 font-semibold">{payment.amount}</td>

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
