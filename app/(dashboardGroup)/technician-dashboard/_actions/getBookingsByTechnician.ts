"use server";

import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";

export const getBookingsByTechnician = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/technician/bookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,

        "content-type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
};

export const updateBookingStatus = async (
  bookingId: string,

  status: string,
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/technician/bookings/${bookingId}`,

    {
      method: "PATCH",

      headers: {
        Authorization: `Bearer ${token}`,

        "content-type": "application/json",
      },

      body: JSON.stringify({
        status,
      }),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Status update failed");
  }

  return result;
};
