"use client";

import { SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { getCategories } from "@/app/(publicGroup)/_actions/getCategories";
import { CategoriesResponse } from "@/app/(publicGroup)/_types/types";

// const categories = [
//   "Plumbing",
//   "Electrical",
//   "Cleaning",
//   "Painting",
//   "Carpentry",
// ];

const ratings = [5, 4, 3, 2, 1];

type CateroiesProps = {
  categories: CategoriesResponse;
};
export function ServiceFilters(props: CateroiesProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = props.categories.data;
  const selectedCategory = searchParams.get("category");
  const selectedRating = searchParams.get("rating");

  const [location, setLocation] = useState(searchParams.get("location") ?? "");

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams();

    const search = searchParams.get("search");

    if (search) {
      params.set("search", search);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (location) {
        params.set("location", location);
      } else {
        params.delete("location");
      }

      router.push(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-4" />

          <h2 className="font-semibold">Filters</h2>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={resetFilters}
        >
          Reset
        </Button>
      </div>

      <Separator className="my-5" />
      {/* Location */}
      <div>
        <h3 className="text-sm font-semibold">Location</h3>

        <div className="mt-3">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter location"
            className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <Separator className="my-5" />
      </div>
      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold">Category</h3>

        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <div key={category?.id} className="flex items-center gap-3">
              <Checkbox
                id={category.id}
                checked={selectedCategory === category.name}
                onCheckedChange={(checked) => {
                  updateFilter("category", checked ? category.name : null);
                }}
              />

              <Label
                htmlFor={category.name}
                className="cursor-pointer text-sm font-normal"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-5" />

      {/* Rating */}
      <div>
        <h3 className="text-sm font-semibold">Rating</h3>

        <div className="mt-4 space-y-3">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRating === String(rating)}
                onCheckedChange={(checked) => {
                  updateFilter("rating", checked ? String(rating) : null);
                }}
              />

              {/* <Checkbox
                id={`rating-${rating}`}
                checked={selectedRating === String(rating)}
                onCheckedChange={(checked) => {
                  const value = checked ? String(rating) : "";

                  // Immediately show checked
                  setSelectedRating(value);

                  // Then update URL
                  const params = new URLSearchParams(searchParams.toString());

                  if (value) {
                    params.set("rating", value);
                  } else {
                    params.delete("rating");
                  }

                  router.push(`${pathname}?${params.toString()}`);
                }}
              /> */}
              <Label
                htmlFor={`rating-${rating}`}
                className="cursor-pointer text-sm font-normal"
              >
                {rating}+ stars
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-5" />
    </div>
  );
}
