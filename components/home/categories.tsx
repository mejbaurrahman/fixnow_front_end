import Link from "next/link";
import {
  Brush,
  Droplets,
  Hammer,
  Lightbulb,
  Paintbrush,
  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Plumbing",
    description: "Pipes, leaks & repairs",
    icon: Droplets,
  },
  {
    title: "Electrical",
    description: "Wiring & installation",
    icon: Lightbulb,
  },
  {
    title: "Cleaning",
    description: "Home & deep cleaning",
    icon: Brush,
  },
  {
    title: "Painting",
    description: "Interior & exterior",
    icon: Paintbrush,
  },
  {
    title: "Carpentry",
    description: "Furniture & woodwork",
    icon: Hammer,
  },
  {
    title: "Repairs",
    description: "General home repairs",
    icon: Wrench,
  },
];

export function Categories() {
  return (
    <section className="border-y bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Popular Categories"
          title="What do you need help with?"
          description="Choose from our most popular home services."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href="/services"
                className="group rounded-2xl border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-4 font-semibold">{category.title}</h3>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold text-primary">{badge}</span>

      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  );
}
