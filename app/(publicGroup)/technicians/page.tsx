import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { TechnicianCard } from "@/components/technicians/technician-card";

const technicians = [
  {
    id: "1",
    name: "Abdul Karim",
    profession: "Master Plumber",
    location: "Dhaka",
    rating: 4.9,
    reviews: 128,
    experience: 8,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Rahim Ahmed",
    profession: "Electrical Expert",
    location: "Dhaka",
    rating: 4.8,
    reviews: 96,
    experience: 6,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Hasan Mahmud",
    profession: "Cleaning Expert",
    location: "Dhaka",
    rating: 4.9,
    reviews: 157,
    experience: 7,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
];

export default function TechniciansPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-primary">
          PROFESSIONALS
        </span>

        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Find trusted technicians
        </h1>

        <p className="mt-3 text-muted-foreground">
          Compare experienced professionals based on ratings, reviews and
          expertise.
        </p>
      </div>

      <div className="relative mt-8 max-w-xl">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

        <Input placeholder="Search technicians..." className="h-12 pl-10" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technicians.map((technician) => (
          <TechnicianCard key={technician.id} {...technician} />
        ))}
      </div>
    </div>
  );
}
