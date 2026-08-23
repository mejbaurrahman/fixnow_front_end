import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Star, Verified } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/technicians/booking-form";

export default async function TechnicianProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/technicians"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to technicians
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        <div>
          {/* Profile */}
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                  alt="Abdul Karim"
                  width={140}
                  height={140}
                  className="size-28 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold md:text-3xl">
                      Abdul Karim
                    </h1>

                    <Verified className="size-5 fill-primary text-primary" />
                  </div>

                  <p className="mt-1 text-muted-foreground">Master Plumber</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      4.9
                    </span>

                    <span className="text-muted-foreground">128 reviews</span>

                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="size-4" />
                      Dhaka
                    </span>
                  </div>

                  <div className="mt-5">
                    <Badge>Available for booking</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold">About the technician</h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Abdul is an experienced plumbing professional with more than 8
              years of experience. He specializes in residential plumbing,
              installations, repairs and maintenance.
            </p>
          </section>

          {/* Skills */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold">Skills & expertise</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Plumbing",
                "Pipe Repair",
                "Water Heater",
                "Leak Repair",
                "Installation",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold">Customer reviews</h2>

            <div className="mt-5 space-y-4">
              {[
                {
                  name: "Rahim Ahmed",
                  text: "Very professional and arrived on time.",
                },
                {
                  name: "Karim Hasan",
                  text: "Excellent work. Highly recommended.",
                },
              ].map((review) => (
                <Card key={review.name}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="size-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <span className="font-medium">{review.name}</span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Booking */}
        <aside>
          <div className="lg:sticky lg:top-24">
            <BookingForm technicianId={id} />
          </div>
        </aside>
      </div>
    </div>
  );
}
