"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface UpdateTechnicianProfile {
  bio: string;

  experience: number;

  hourlyRate: number;

  location: string;
}

export const updateTechnicianProfile = async (
  data: UpdateTechnicianProfile,
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/technician/profile`, {
    method: "PUT",

    headers: {
      Authorization: `Bearer ${token}`,

      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Profile update failed");
  }
  revalidateTag("my-profile", "max");
  return result;
};
