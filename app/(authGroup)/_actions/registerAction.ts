"use server";

import { RegisterState } from "@/lib/types";
import { redirect } from "next/navigation";

export const registerAction = async (
  redirectTo: string,
  previousState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const experience = formData.get("experience");
  const hourlyRate = formData.get("hourlyRate");
  const location = formData.get("location");

  let payload;
  if (role === "TECHNICIAN") {
    payload = {
      name,
      email,
      password,
      role,
      experience,
      hourlyRate,
      location,
    };
  } else {
    payload = {
      name,
      email,
      password,
      role,
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    } else {
      redirect("/");
    }
  }

  return result;
};
