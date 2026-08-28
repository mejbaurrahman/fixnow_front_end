"use server";

import { cookies } from "next/headers";

export const createReview = async (payload: {
  bookingId: string;
  rating: number;
  comment: string;
}) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/reviews`, {
    method: "POST",

    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create review");
  }

  return result;
};
