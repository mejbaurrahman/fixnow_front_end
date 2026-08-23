import Image from "next/image";
import Link from "next/link";
import { Clock, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  duration: number;
}

export function ServiceCard({
  id,
  title,
  description,
  image,
  price,
  rating,
  duration,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <Card className="group h-full overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <Badge className="absolute left-3 top-3">Popular</Badge>
        </div>

        <CardContent className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />

              <span className="font-medium">{rating}</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {duration} min
            </div>
          </div>

          <h3 className="mt-3 font-semibold">{title}</h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <div className="mt-auto pt-5">
            <p className="text-xs text-muted-foreground">Starting from</p>

            <p className="text-xl font-bold">${price}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
