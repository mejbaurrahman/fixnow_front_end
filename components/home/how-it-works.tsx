import { CalendarCheck, Search, UserCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find a Service",
    description:
      "Browse services and find the right professional for your needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose a Technician",
    description:
      "Compare ratings, reviews, experience and pricing before booking.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Book & Relax",
    description:
      "Choose your preferred time slot and let our professional handle the rest.",
    icon: CalendarCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">
            How It Works
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Getting help is easier than ever
          </h2>

          <p className="mt-4 text-muted-foreground">
            From finding a professional to completing your service, FixItNow
            keeps everything simple.
          </p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-border md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="relative mx-auto flex size-24 items-center justify-center rounded-full border bg-background shadow-sm">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-7" />
                  </div>

                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
