import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, MapPin, Star, Verified } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Technician,
  TechnicianProfile,
} from "@/app/(publicGroup)/_types/types";

interface TechnicianCardProps {
  technican: Technician;
}

export function TechnicianCard({ technican }: TechnicianCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <Image
              src={
                technican?.image
                  ? technican?.image
                  : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
              }
              alt={technican?.role ?? "Technician"}
              width={64}
              height={64}
              className="aspect-square object-cover"
            />

            <AvatarFallback>
              {technican?.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h2 className="truncate font-semibold">{technican?.name}</h2>

              <Verified className="size-4 shrink-0 fill-primary text-primary" />
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              {technican?.role}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            {technican?.technicianProfile?.location}
          </div>

          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="size-4" />
            {technican?.technicianProfile?.experience} years experience
          </div>

          <div className="flex items-center gap-2">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">
              {technican?.technicianProfile?.rating}
            </span>
            {technican?.reviewReceived?.map((review) => (
              <div key={review?.id}>
                <p>{review?.rating}</p>
                <p>{review?.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Badge variant="secondary">Verified Professional</Badge>
        </div>

        <Link
          href={`/technicians/${technican?.id}`}
          className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View Profile
        </Link>
      </CardContent>
    </Card>
  );
}
