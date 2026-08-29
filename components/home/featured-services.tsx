import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IService } from "@/app/(publicGroup)/_types/types";

const services = [
  {
    id: "1",
    title: "Professional Home Cleaning",
    description: "Deep cleaning service for your entire home.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop",
    price: 35,
    rating: 4.9,
    duration: 120,
  },
  {
    id: "2",
    title: "Expert Plumbing Repair",
    description: "Fast and reliable plumbing repair service.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1000&auto=format&fit=crop",
    price: 40,
    rating: 4.8,
    duration: 90,
  },
  {
    id: "3",
    title: "Residential Electrical Service",
    description: "Professional electrical installation and repair.",
    image: "",
    price: 45,
    rating: 4.9,
    duration: 90,
  },
];

type ServicesResponseProps = {
  services: IService[];
};

export function FeaturedServices({ services }: ServicesResponseProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold text-primary">
              Featured Services
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Popular services near you
            </h2>

            <p className="mt-3 text-muted-foreground">
              Quality services from trusted professionals.
            </p>
          </div>

          <Link href="/services">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service: IService) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceProps = {
  service: IService;
};
function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="group overflow-hidden border-border/70 py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={
            service?.img
              ? service.img
              : "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
          }
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute left-4 top-4">Popular</Badge>
      </div>

      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">
              {service?.technician?.technicianProfile?.rating}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {service.duration} min
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>

            <p className="text-xl font-bold">${service.price}</p>
          </div>

          <Link href={`/services/${service.id}`}>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
