import Link from "next/link";
import { ArrowLeft, CircleX } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-100 text-red-600">
          <CircleX className="size-10" />
        </div>

        <h1 className="mt-6 text-3xl font-bold">Payment Cancelled</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment was cancelled. Don't worry, your booking hasn't been
          charged.
        </p>

        <div className="mt-8">
          <Link
            href="/dashboard/customer/bookings"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <ArrowLeft />
            Back to Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}
