"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

interface IAvailabilityPayload {
  date: string;
  slots: string[];
}

export const updateAvailability = async (payload: IAvailabilityPayload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/technician/availability`,

    {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${token}`,

        "content-type": "application/json",
      },

      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Availability update failed");
  }

  revalidateTag("technician-availability", "max");

  return result;
};
