import Link from "next/link";

import { ArrowLeft, CalendarDays, Clock, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { BookingStatus } from "@/components/dashboard/booking-status";
import { getBookingsById } from "@/app/(dashboardGroup)/_actions/getBookings";
import PayNowButton from "@/components/dashboard/pay-now-button";
import ReviewButton from "@/components/dashboard/review-button";

export default async function BookingDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const result = await getBookingsById(id);

  const booking = result?.data;

  if (!booking) {
    return (
      <div className="p-8">
        <h1 className="text-xl font-semibold">Booking not found</h1>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {/* Back */}

      <Link
        href="/dashboard/bookings"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to bookings
      </Link>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* LEFT SIDE */}

        <div className="space-y-6 lg:col-span-2">
          {/* Service Details */}

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">
                    {booking.service.title}
                  </h1>

                  <p className="mt-2 text-muted-foreground">
                    {booking.service.description}
                  </p>
                </div>

                <BookingStatus status={booking.status} />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex gap-3">
                  <CalendarDays className="size-5 text-muted-foreground" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Booking Date
                    </p>

                    <p className="font-medium">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="size-5 text-muted-foreground" />

                  <div>
                    <p className="text-sm text-muted-foreground">Time Slot</p>

                    <p className="font-medium">{booking.slot}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technician */}

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">Technician Information</h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <User className="size-5 text-muted-foreground" />

                  <span>{booking.technician.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-muted-foreground" />

                  <span>{booking.technician.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Note */}

          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold">Customer Note</h2>

              <p className="mt-3 text-sm text-muted-foreground">
                {booking.note ?? "No note provided"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE */}

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">Booking Summary</h2>

              <div className="mt-5 space-y-4">
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

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>

                  <BookingStatus status={booking.status} />
                </div>
              </div>

              {/* ACTION AREA */}

              <div className="mt-6">
                {/* REQUESTED */}

                {booking.status === "REQUESTED" && (
                  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                    <p className="font-medium">
                      Waiting for technician approval
                    </p>

                    <p className="mt-1">
                      Your booking request has been sent. You can pay after the
                      technician accepts your booking.
                    </p>
                  </div>
                )}

                {/* ACCEPTED */}

                {booking.status === "ACCEPTED" && (
                  <div className="space-y-4">
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
                      <p className="font-medium">
                        Technician accepted your booking
                      </p>

                      <p className="mt-1">You can proceed with payment now.</p>
                    </div>

                    <PayNowButton bookingId={booking.id} />
                  </div>
                )}

                {/* DECLINED */}

                {booking.status === "DECLINED" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <p className="font-medium">Booking declined</p>

                    <p className="mt-1">
                      The technician declined this booking request.
                    </p>
                  </div>
                )}

                {/* PAID */}

                {booking.status === "PAID" && (
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 text-sm text-purple-700">
                    <p className="font-medium">Payment completed</p>

                    <p className="mt-1">
                      Your payment is confirmed. Technician will start the job
                      soon.
                    </p>
                  </div>
                )}

                {/* IN_PROGRESS */}

                {booking.status === "IN_PROGRESS" && (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    <p className="font-medium">Service in progress</p>

                    <p className="mt-1">
                      Technician is currently working on your service.
                    </p>
                  </div>
                )}

                {/* COMPLETED */}

                {booking.status === "COMPLETED" && (
                  <div className="w-full">
                    <ReviewButton bookingId={booking.id} />
                  </div>
                )}

                {/* CANCELLED */}

                {booking.status === "CANCELLED" && (
                  <div className="rounded-lg border border-red-300 bg-red-100 p-4 text-sm text-red-900">
                    <p className="font-medium">Booking cancelled</p>

                    <p className="mt-1">This booking has been cancelled.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
