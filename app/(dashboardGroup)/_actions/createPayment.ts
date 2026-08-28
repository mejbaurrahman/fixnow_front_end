"use server";

import { cookies } from "next/headers";

export const createPayment = async (bookingId: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/payments/create`, {
    method: "POST",

    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify({
      bookingId,
    }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Payment creation failed");
  }

  return result;
};
