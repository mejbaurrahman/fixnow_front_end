"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const categories = [
  "Plumbing",
  "Electrical",
  "Cleaning",
  "Painting",
  "Carpentry",
];

const ratings = [5, 4, 3];

export function ServiceFilters() {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-4" />

          <h2 className="font-semibold">Filters</h2>
        </div>

        <Button variant="ghost" size="sm" className="text-xs">
          Reset
        </Button>
      </div>

      <Separator className="my-5" />

      <div>
        <h3 className="text-sm font-semibold">Category</h3>

        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-3">
              <Checkbox id={category} />

              <Label
                htmlFor={category}
                className="cursor-pointer text-sm font-normal"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-5" />

      <div>
        <h3 className="text-sm font-semibold">Rating</h3>

        <div className="mt-4 space-y-3">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <Checkbox id={`rating-${rating}`} />

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

      <div>
        <h3 className="text-sm font-semibold">Location</h3>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Enter location"
            className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
}
