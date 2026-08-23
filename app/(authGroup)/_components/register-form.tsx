"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { registerAction } from "../_actions/registerAction";
import { RegisterState } from "@/lib/types";
import { status } from "http-status";
import { toast } from "sonner";

export function RegisterForm() {
  const [role, setRole] = useState<"CUSTOMER" | "TECHNICIAN">("CUSTOMER");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const initialState: RegisterState = {
    success: false,
    statusCode: status.NOT_IMPLEMENTED,
    message: "",
    data: {},
  };
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const [state, action, pending] = useActionState(
    registerAction.bind(null, redirectTo),
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <Card className="w-full border-border/70 bg-card/95 shadow-xl shadow-foreground/5 backdrop-blur-sm">
      <CardHeader className="gap-3 p-6 pb-5 sm:p-8 sm:pb-6">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
          <Sparkles className="size-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1.5">
          <CardTitle className="font-serif text-3xl tracking-tight">
            Create your account
          </CardTitle>
          <CardDescription className="text-sm leading-6">
            Join a trusted community built around better service.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
        <form action={action} className="flex flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" placeholder="Alex Morgan" required />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="alex@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  minLength={6}
                  required
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-0 top-0 flex h-full items-center px-3 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="role">I&apos;m joining as</Label>
              <input type="hidden" name="role" value={role} />
              <Select
                value={role}
                onValueChange={(value) => {
                  if (value) {
                    setRole(value);
                  }
                }}
              >
                <SelectTrigger id="role" className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CUSTOMER">
                    <span className="flex items-center gap-2">
                      <UserRound className="size-4" aria-hidden="true" />{" "}
                      Customer
                    </span>
                  </SelectItem>
                  <SelectItem value="TECHNICIAN">
                    <span className="flex items-center gap-2">
                      <BriefcaseBusiness
                        className="size-4"
                        aria-hidden="true"
                      />{" "}
                      Technician
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {role === "TECHNICIAN" && (
            <div className="flex flex-col gap-5 rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
              <div className="flex flex-col gap-1">
                <p className="font-medium">Technician profile</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Help customers understand what makes your service special.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="experience">Years of experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    placeholder="5"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="hourlyRate">Hourly rate</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="hourlyRate"
                      name="hourlyRate"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="75.00"
                      className="pl-7"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="location">Service location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Brooklyn, NY"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <Button type="submit" size="lg" className="h-12 w-full gap-2">
              Create account{" "}
              <ArrowRight
                className="size-4"
                data-icon="inline-end"
                aria-hidden="true"
              />
            </Button>
            <p className="text-center text-sm leading-6 text-muted-foreground">
              Already registered?{" "}
              <Link
                href="/login"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
            <p className="text-center text-xs leading-5 text-muted-foreground">
              By creating an account, you agree to our terms and privacy policy.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export function RegisterAside() {
  return (
    <div className="hidden max-w-sm flex-col justify-between py-8 lg:flex">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>{" "}
          HANDY
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            A better way to get it done
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight xl:text-6xl">
            Good work starts with a good connection.
          </h1>
          <p className="max-w-xs text-base leading-7 text-muted-foreground">
            Find trusted professionals, grow your craft, and make every project
            feel easy.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <ShieldCheck className="size-5 text-primary" aria-hidden="true" /> Your
        information is protected.
      </div>
    </div>
  );
}

export function RegisterPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl gap-16 px-6 py-8 sm:px-10 lg:px-12">
        <RegisterAside />
        <div className="flex w-full items-center justify-center lg:max-w-xl lg:py-8">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
