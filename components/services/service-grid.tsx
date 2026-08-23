import { ServiceCard } from "@/components/services/service-card";

const services = [
  {
    id: "1",
    title: "Professional Home Cleaning",
    description: "Complete home cleaning by experienced professionals.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop",
    price: 35,
    rating: 4.9,
    duration: 120,
  },
  {
    id: "2",
    title: "Plumbing Repair",
    description: "Fast and reliable plumbing repair for your home.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1000&auto=format&fit=crop",
    price: 40,
    rating: 4.8,
    duration: 90,
  },
  {
    id: "3",
    title: "Electrical Installation",
    description: "Professional electrical installation and repair.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop",
    price: 45,
    rating: 4.9,
    duration: 90,
  },
  {
    id: "4",
    title: "Interior Painting",
    description: "Give your home a fresh new look.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1000&auto=format&fit=crop",
    price: 80,
    rating: 4.7,
    duration: 240,
  },
  {
    id: "5",
    title: "Carpentry Service",
    description: "Professional furniture and woodwork services.",
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1000&auto=format&fit=crop",
    price: 50,
    rating: 4.8,
    duration: 120,
  },
  {
    id: "6",
    title: "AC Maintenance",
    description: "Keep your AC running efficiently.",
    image:
      "https://images.unsplash.com/photo-1631545806609-3f2c9f3f9d7e?q=80&w=1000&auto=format&fit=crop",
    price: 30,
    rating: 4.8,
    duration: 60,
  },
];

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
