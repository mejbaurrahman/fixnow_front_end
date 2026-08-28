import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="size-10" />
        </div>

        <h1 className="mt-6 text-3xl font-bold">Payment Successful!</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully. Your booking is now
          confirmed.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="/dashboard/bookings" className={buttonVariants()}>
            View Booking
            <ArrowRight />
          </Link>

          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
