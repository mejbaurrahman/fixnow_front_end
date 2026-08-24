import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ServiceFilters } from "@/components/services/service-filters";
import { ServiceGrid } from "@/components/services/service-grid";
import { getServices } from "../_actions/getServices";

export default function ServicesPage() {
  const result = getServices();
  console.log(result);
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-2xl">
        <span className="text-sm font-semibold text-primary">OUR SERVICES</span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Find the right service for your home
        </h1>

        <p className="mt-3 text-muted-foreground">
          Browse trusted professionals and find the perfect service for your
          needs.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8 max-w-xl">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

        <Input placeholder="Search for a service..." className="h-12 pl-10" />
      </div>

      {/* Content */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside>
          <ServiceFilters />
        </aside>

        <ServiceGrid />
      </div>
    </div>
  );
}
