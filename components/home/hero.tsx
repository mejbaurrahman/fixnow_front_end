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

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <TrustPoint text="Verified professionals" />
            <TrustPoint text="Transparent pricing" />
            <TrustPoint text="Secure payments" />
          </div>
        </div>

        {/* Stats */}
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
