import { cookies } from "next/headers";

export const getBookings = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/bookings`, {
    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const result = await res.json();

  return result;
};

export const getBookingsById = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/bookings/${id}`, {
    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch booking");
  }

  const result = await res.json();

  return result;
};

export const getBookingsByAdmin = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/bookings`, {
    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const result = await res.json();

  return result;
};
