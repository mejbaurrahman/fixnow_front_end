"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createCategory(payload: {
  name: string;
  description: string;
}) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }
  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/categories`, {
    method: "POST",

    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create category");
  }

  // update cache

  revalidateTag("categories", "max");

  return result;
}

export async function deleteCategory(categoryId: string) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/admin/categories/${categoryId}`,

    {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to delete category");
  }

  // refresh category cache

  revalidateTag("categories", "max");

  return result;
}
