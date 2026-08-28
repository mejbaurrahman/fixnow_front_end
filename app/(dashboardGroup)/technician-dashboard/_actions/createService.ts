"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createService = async (data: {
  title: string;
  description: string;
  price: number;
  duration: number;
  categoryId: string;
}) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/services`, {
    method: "POST",

    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Service creation failed");
  }
  revalidateTag("services", "max");
  return result;
};
