import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { CategoriesResponse } from "../_types/types";
import { getCategories } from "../_actions/getCategories";
import { MdCategory } from "react-icons/md";

export default async function CategoriesPage() {
  const result: CategoriesResponse = await getCategories();
  const categories = result?.data;
  console.log(result);
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Categories
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Find the right professional service for your home. Browse our
              categories and choose the service you need.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/services?category=${category.name}`}
              className="group"
            >
              <article className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors duration-300 group-hover:bg-primary/10">
                  <MdCategory />
                </div>

                {/* Content */}
                <h2 className="text-xl font-semibold text-slate-900">
                  {category.name}
                </h2>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-medium text-primary">
                    Explore services
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
