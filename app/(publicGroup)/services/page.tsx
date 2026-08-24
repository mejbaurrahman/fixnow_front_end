import { ServiceFilters } from "@/components/services/service-filters";
import { ServiceGrid } from "@/components/services/service-grid";
import { ServiceSearch } from "@/components/services/service-search";
import { getServices } from "../_actions/getServices";
import { CategoriesResponse, IServiceResponse } from "../_types/types";
import { getCategories } from "../_actions/getCategories";

interface ServicesPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    rating?: string;
    location?: string;
  }>;
}

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const params = await searchParams;
  const categories: CategoriesResponse = await getCategories();

  const result: IServiceResponse = await getServices(params);

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

      <ServiceSearch />

      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside>
          <ServiceFilters categories={categories} />
        </aside>

        <ServiceGrid result={result} />
      </div>
    </div>
  );
}
