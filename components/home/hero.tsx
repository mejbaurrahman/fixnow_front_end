import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-125 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
            <ShieldCheck className="size-4 text-primary" />
            Trusted home service professionals
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Home.
            <br />
            <span className="text-primary">Our Expertise.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Find trusted professionals for plumbing, electrical, cleaning,
            painting and more. Book qualified technicians for your home in just
            a few clicks.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl border bg-background p-2 shadow-xl sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

              <Input
                placeholder="What service do you need?"
                className="h-12 border-0 pl-12 shadow-none focus-visible:ring-0"
              />
            </div>

            <Link href="/services">
              <Button size="lg" className="h-12 px-6">
                Search Services
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <TrustPoint text="Verified professionals" />
            <TrustPoint text="Transparent pricing" />
            <TrustPoint text="Secure payments" />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          <HeroStat value="5K+" label="Happy Customers" />

          <HeroStat value="500+" label="Professionals" />

          <HeroStat value="15K+" label="Jobs Completed" />

          <HeroStat value="4.9" label="Average Rating" />
        </div>
      </div>
    </section>
  );
}

function TrustPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <CheckCircle2 className="size-4 text-primary" />
      {text}
    </div>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-card p-4 text-center shadow-sm">
      <div className="text-2xl font-bold text-primary">{value}</div>

      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
