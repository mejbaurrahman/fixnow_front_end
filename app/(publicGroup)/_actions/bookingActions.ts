"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  Booking,
  CreateBookingPayload,
  GetAvailabilityResponse,
  UpdateAvailabilityPayload,
} from "../_types/types";

const API_URL = process.env.BACKEND_API_URL;

if (!API_URL) {
  throw new Error("BACKEND_API_URL is not defined");
}

const getHeaders = async () => {
  const cookieStore = await cookies();

  return {
    "Content-Type": "application/json",

    Cookie: cookieStore.toString(),
  };
};

export const getAvailability = async (
  technicianId: string,
  date: string,
): Promise<GetAvailabilityResponse> => {
  const headers = await getHeaders();

  const res = await fetch(
    `${API_URL}/technicians/${technicianId}/availability?date=${encodeURIComponent(
      date,
    )}`,
    {
      method: "GET",
      headers,

      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(
      result.message || "Failed to fetch technician availability",
    );
  }

  return result;
};

// export const updateAvailability = async (
//   technicianId: string,
//   payload: UpdateAvailabilityPayload,
// ) => {
//   const headers = await getHeaders();

//   const res = await fetch(
//     `${API_URL}/technicians/${technicianId}/availability`,
//     {
//       method: "PATCH",
//       headers,

//       body: JSON.stringify(payload),

//       cache: "no-store",
//     },
//   );

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(
//       result.message || "Failed to update technician availability",
//     );
//   }

//   revalidatePath(`/technicians/${technicianId}`);

//   return result;
// };

export const createBooking = async (payload: CreateBookingPayload) => {
  const headers = await getHeaders();

  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",

    headers,

    body: JSON.stringify(payload),

    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create booking");
  }

  revalidatePath(`/technicians/${payload.technicianId}`);
  revalidatePath("/bookings");

  return result;
};

/*
|--------------------------------------------------------------------------
| GET BOOKING
|--------------------------------------------------------------------------
|
| No bookingId:
| GET /bookings
|
| With bookingId:
| GET /bookings/:bookingId
|
*/

export const getBooking = async (
  bookingId?: string,
): Promise<{
  success: boolean;
  message?: string;
  data: Booking | Booking[];
}> => {
  const headers = await getHeaders();

  const url = bookingId
    ? `${API_URL}/bookings/${bookingId}`
    : `${API_URL}/bookings`;

  const res = await fetch(url, {
    method: "GET",
    headers,

    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to fetch booking");
  }

  return result;
};
