import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Wrench,
  DollarSign,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BookingStatus } from "@/components/dashboard/booking-status";

import { getBookingsByAdmin } from "@/app/(dashboardGroup)/_actions/getBookings";
import { IRBookingByADMIN } from "@/app/(dashboardGroup)/_types/admin-dasboard-types.";

export default async function AdminBookingDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const result = await getBookingsByAdmin();

  const bookings = result?.data;

  const booking = bookings.find((b: IRBookingByADMIN) => b.id === id);

  if (!booking) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Booking not found</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/dashboard/admin/bookings"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to bookings
        </Link>

        <BookingStatus status={booking.status} />
      </div>

      <div>
        <h1 className="break-all text-2xl font-bold md:text-3xl">
          Booking ID:
        </h1>

        <p className="mt-2 break-all text-sm text-muted-foreground">
          {booking.id}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Booking Information</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-5 sm:grid-cols-2">
            <InfoItem
              icon={<CalendarDays />}
              title="Booking Date"
              value={new Date(booking.bookingDate).toLocaleDateString()}
            />

            <InfoItem icon={<Clock />} title="Time Slot" value={booking.slot} />

            <InfoItem
              icon={<DollarSign />}
              title="Total Amount"
              value={`৳${booking.totalAmount}`}
            />

            <InfoItem
              icon={<Clock />}
              title="Created At"
              value={new Date(booking.createdAt).toLocaleDateString()}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <InfoItem
              icon={<Wrench />}
              title="Service Name"
              value={booking.service.title}
            />

            <InfoItem
              icon={<DollarSign />}
              title="Service Price"
              value={`৳${booking.service.price}`}
            />

            <InfoItem
              icon={<Clock />}
              title="Duration"
              value={`${booking.service.duration} minutes`}
            />

            <div>
              <p className="text-sm font-medium">Description</p>

              <p className="mt-2 text-sm text-muted-foreground">
                {booking.service.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <InfoItem
              icon={<User />}
              title="Name"
              value={booking.customer.name}
            />

            <InfoItem
              icon={<Mail />}
              title="Email"
              value={booking.customer.email}
            />

            <InfoItem
              icon={<Phone />}
              title="Phone"
              value={booking.customer.phone}
            />

            <InfoItem
              icon={<MapPin />}
              title="City"
              value={booking.customer.city || "Not Available"}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technician Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <InfoItem
              icon={<User />}
              title="Name"
              value={booking.technician.name}
            />

            <InfoItem
              icon={<Mail />}
              title="Email"
              value={booking.technician.email}
            />

            <InfoItem
              icon={<Phone />}
              title="Phone"
              value={booking.technician.phone}
            />

            <InfoItem
              icon={<MapPin />}
              title="City"
              value={booking.technician.city || "Not Available"}
            />
          </CardContent>
        </Card>
      </div>

      {booking.note && (
        <Card>
          <CardHeader>
            <CardTitle>Customer Note</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">{booking.note}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;

  title: string;

  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-muted-foreground">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{title}</p>

        <p className="warap-break-words font-medium">{value}</p>
      </div>
    </div>
  );
}
