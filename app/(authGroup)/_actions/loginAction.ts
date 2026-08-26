"use server";

import { LoginState } from "@/lib/types";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const loginAction = async (
  redirectTo: string,
  previousState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }
    if (decodedToken.role === "CUSTOMER") {
      redirect("/dashboard");
    } else if (decodedToken.role === "ADMIN") {
      redirect("/admin-dashboard");
    } else if (decodedToken.role === "TECHNICHIAN") {
      redirect("/technician-dashboard");
    }
  }
  return result;
};
