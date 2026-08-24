"use server";

interface ServiceQuery {
  search?: string;
  category?: string;
  location?: string;
  rating?: string;
}

export const getServices = async (query?: ServiceQuery) => {
  const params = new URLSearchParams();

  if (query?.search) {
    params.set("search", query.search);
  }

  if (query?.category) {
    params.set("category", query.category);
  }

  if (query?.location) {
    params.set("location", query.location);
  }

  if (query?.rating) {
    params.set("rating", query.rating);
  }

  const queryString = params.toString();

  const url = `${process.env.BACKEND_API_URL}/services${
    queryString ? `?${queryString}` : ""
  }`;

  const res = await fetch(url, {
    headers: {
      "content-type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["services"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
};
