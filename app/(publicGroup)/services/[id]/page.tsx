import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getServices } from "../../_actions/getServices";
import { IService } from "../../_types/types";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getServices();

  const findService = result?.data?.find(
    (service: IService) => service.id === id,
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to services
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={
                findService?.img
                  ? findService.img
                  : "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop"
              }
              alt={findService?.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-8">
            <Badge>{findService?.category?.name}</Badge>

            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
              {findService?.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                {findService?.technician?.technicianProfile?.rating} rating
              </span>

              <span className="flex items-center gap-1">
                <Clock className="size-4" />
                {findService?.duration} minutes
              </span>

              <span className="flex items-center gap-1">
                <MapPin className="size-4" />
                {findService?.technician?.technicianProfile?.location}
              </span>
            </div>

            <p className="mt-6 leading-7 text-muted-foreground">
              {findService?.description}
            </p>

            {/* <div className="mt-8">
              <h2 className="text-xl font-semibold">What's included</h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Living room cleaning",
                  "Bedroom cleaning",
                  "Kitchen cleaning",
                  "Bathroom cleaning",
                  "Dusting & vacuuming",
                  "Floor cleaning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <Card className="h-fit lg:sticky lg:top-24">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Starting from</p>

            <p className="mt-1 text-4xl font-bold">BDT {findService?.price}</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Final price may vary based on your requirements.
            </p>

            <Link
              href={`/technicians/${findService?.technician?.id}`}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Choose This Technician
            </Link>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              No payment required until booking is accepted.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
