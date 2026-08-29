import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Verified } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTechnicians } from "@/app/(publicGroup)/_actions/getTechnicians";
import { Technician } from "@/app/(publicGroup)/_types/types";

// const technicians = [
//   {
//     name: "Abdul Karim",
//     profession: "Master Plumber",
//     location: "Dhaka, Bangladesh",
//     rating: 4.9,
//     reviews: 128,
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     name: "Rahim Ahmed",
//     profession: "Electrical Expert",
//     location: "Dhaka, Bangladesh",
//     rating: 4.8,
//     reviews: 96,
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
//   },
//   {
//     name: "Hasan Mahmud",
//     profession: "Home Cleaning Expert",
//     location: "Dhaka, Bangladesh",
//     rating: 4.9,
//     reviews: 157,
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
//   },
// ];

export async function TopTechnicians() {
  const result = await getTechnicians();
  const technicians = result?.data;
  return (
    <section className="border-y bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold text-primary">
              Top Professionals
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Meet our top technicians
            </h2>

            <p className="mt-3 text-muted-foreground">
              Highly rated professionals you can trust.
            </p>
          </div>

          <Link
            href="/technicians"
            className={buttonVariants({ variant: "outline" })}
          >
            View All
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicians.slice(0, 3).map((technician: Technician) => (
            <Card
              key={technician.name}
              className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="size-16">
                    <Image
                      src={
                        technician.image
                          ? technician.image
                          : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                      }
                      alt={technician?.name}
                      width={64}
                      height={64}
                      className="aspect-square object-cover"
                    />

                    <AvatarFallback>
                      {technician.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold">{technician.name}</h3>

                      <Verified className="size-4 fill-primary text-primary" />
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {technician.role}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {technician?.technicianProfile?.location}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t pt-5">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold">
                      {technician.technicianProfile.rating}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      ({technician.reviewReceived.length} reviews)
                    </span>
                  </div>

                  <Badge variant="secondary">Verified</Badge>
                </div>

                <Link
                  href={`/technicians/${technician.id}`}
                  className={buttonVariants({
                    variant: "outline",
                    className: "mt-5 w-full",
                  })}
                >
                  View Profile
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
