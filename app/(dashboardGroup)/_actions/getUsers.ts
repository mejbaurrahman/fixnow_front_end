"use server";
import { cookies } from "next/headers";

export const getUsers = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/users`, {
    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const result = await res.json();

  return result;
};

export const updateUserStatus = async (id: string, status: "BAN" | "UNBAN") => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      status,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update user status");
  }

  const result = await res.json();

  return result;
};
