"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { createPayment } from "@/app/(dashboardGroup)/_actions/createPayment";

export default function PayNowButton({ bookingId }: { bookingId: string }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const result = await createPayment(bookingId);

      window.location.href = result.data.paymentUrl;
    } catch (error: any) {
      toast.error(error.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button className="w-full" disabled={loading} onClick={handlePayment}>
      {loading ? "Redirecting..." : "Pay Now"}
    </Button>
  );
}
