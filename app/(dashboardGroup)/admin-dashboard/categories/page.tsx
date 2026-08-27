import { Layers } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { getCategories } from "@/app/(publicGroup)/_actions/getCategories";

import { Category } from "@/app/(publicGroup)/_types/types";

import { CreateCategoryDialog } from "@/components/admin/create-category-dialog";

import { DeleteCategoryButton } from "@/components/admin/delete-category-button";

export default async function CategoriesPage() {
  const result = await getCategories();

  const categories: Category[] = result?.data || [];

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Categories</h1>

          <p className="mt-2 text-muted-foreground">
            Manage service categories
          </p>
        </div>

        <CreateCategoryDialog />
      </div>

      <Card>
        <CardContent className="p-5 md:p-6">
          {categories.length === 0 ? (
            <div className="flex h-40 items-center justify-center text-muted-foreground">
              No categories found
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="
                        rounded-2xl
                        border
                        bg-background
                        p-5
                        transition
                        hover:shadow-md
                      "
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                            flex
                            size-10
                            items-center
                            justify-center
                            rounded-lg
                            bg-primary/10
                            text-primary
                          "
                    >
                      <Layers className="size-5" />
                    </div>
                    <DeleteCategoryButton
                      categoryId={category.id}
                      categoryName={category.name}
                    />
                  </div>

                  <div className="mt-5">
                    <h2 className="text-lg font-semibold">{category.name}</h2>

                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
