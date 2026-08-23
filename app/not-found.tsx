import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <SearchX className="size-10" />
        </div>

        <p className="mt-8 text-sm font-semibold text-primary">ERROR 404</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className={buttonVariants()}>
            <Home />
            Go Home
          </Link>

          <Link
            href="/services"
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft />
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
